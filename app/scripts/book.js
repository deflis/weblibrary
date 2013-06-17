var BooksRepisitory = (function () {
    function BooksRepisitory() { }
    BooksRepisitory.getAll = function getAll(callback) {
        $.getJSON("/books", callback);
    };
    BooksRepisitory.put = function put(data, callback) {
        $.ajax({
            url: '/book',
            type: 'PUT',
            data: data,
            success: callback
        });
    };
    BooksRepisitory.delete = function delete(id, callback) {
        $.ajax({
            url: '/book/' + id,
            type: 'DELETE',
            success: callback
        });
    };
    return BooksRepisitory;
})();
var showBooksViewModel = (function () {
    function showBooksViewModel() {
        var _this = this;
        this.books = ko.observableArray();
        this.enable = ko.observable(false);
        BooksRepisitory.getAll(function (data) {
            _this.books(data);
            _this.enable(true);
        });
    }
    return showBooksViewModel;
})();
var createBookViewModel = (function () {
    function createBookViewModel() {
        var _this = this;
        this.title = ko.observable();
        this.message = ko.observable();
        this.enable = ko.observable(false);
        this.submit_enable = ko.computed(function () {
            return _this.message() != '';
        });
    }
    createBookViewModel.prototype.append = function () {
        var _this = this;
        if(this.submit_enable()) {
            BooksRepisitory.put({
                title: this.title()
            }, function () {
                _this.message('success');
            });
            this.title('');
        }
    };
    return createBookViewModel;
})();
var headerViewModel = (function () {
    function headerViewModel(vm) {
        this.viewModel = vm;
    }
    headerViewModel.prototype.list_click = function () {
        this.viewModel.show.enable(true);
        this.viewModel.create.enable(false);
    };
    headerViewModel.prototype.add_click = function () {
        this.viewModel.show.enable(false);
        this.viewModel.create.enable(true);
    };
    return headerViewModel;
})();
var bookViewModel = (function () {
    function bookViewModel() {
        this.show = new showBooksViewModel();
        this.create = new createBookViewModel();
        this.header = new headerViewModel(this);
    }
    return bookViewModel;
})();
$(function () {
    ko.applyBindings(new bookViewModel());
});
