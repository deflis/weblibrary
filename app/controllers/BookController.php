<?php

class BookController extends BaseController {

	public function showList()
	{
        return Book::all();
	}


	public function showItem($book)
	{
        return $book;
	}

    public function putNewItem()
    {
        $book = App::make('Book');
        $book->title = Input::get('title');
        $book->save();
        return $book;
    }

	public function putItem($book)
	{
        return $book;
	}

	public function deleteItem($book)
	{
        return $book;
	}
}

