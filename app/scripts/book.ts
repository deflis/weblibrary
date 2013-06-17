/// <reference path="d.ts/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="d.ts/DefinitelyTyped/knockout/knockout.d.ts" />

class BooksRepisitory
{
    static getAll(callback: (any) => void): void
    {
        $.getJSON("/books", callback);
    }
    static put(data: { title: string; }, callback: (any) => void): void
    {
        $.ajax({
            url: '/book',
            type: 'PUT',
            data: data,
            success: callback
        });
    }
    static delete(id: number, callback: (any) => void): void
    {
        $.ajax({
            url: '/book/' + id,
            type: 'DELETE',
            success: callback
        });
    }
}

class showBooksViewModel
{
    books = ko.observableArray();
    enable = ko.observable(false);

    constructor()
    {
        BooksRepisitory.getAll(data => {
            this.books(data);
            this.enable(true);
        });
    }
}

class createBookViewModel
{

    title = ko.observable();
    message = ko.observable();
    enable = ko.observable(false);
    submit_enable: KnockoutComputed;

    append(): void
    {
        if (this.submit_enable())
        {
            BooksRepisitory.put({ title: this.title() }, () => {
                this.message('success');
            });
            this.title('');
        }
    };

    constructor()
    {
        this.submit_enable = ko.computed(() => {  return this.message() != '' })
    }
}

class headerViewModel
{
    private viewModel: bookViewModel;
    constructor(vm: bookViewModel)
    {
        this.viewModel = vm;
    }

    list_click(): void
    {
        this.viewModel.show.enable(true);
        this.viewModel.create.enable(false);
    }
    add_click(): void
    {
        this.viewModel.show.enable(false);
        this.viewModel.create.enable(true);
    }
}

class bookViewModel
{
    show = new showBooksViewModel();
    create = new createBookViewModel();
    header:headerViewModel;
    constructor()
    {
        this.header = new headerViewModel(this);
    }
}

$(() => {
        ko.applyBindings(new bookViewModel());
});
