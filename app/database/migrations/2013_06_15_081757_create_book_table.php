<?php

use Illuminate\Database\Migrations\Migration;

class CreateBookTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::dropIfExists('books');
        Schema::create('books', function($table)
        {
            $table->increments('id');
            $table->string('title');
            $table->string('isbn', 13);
            $table->string('comment');
            $table->string('user');
            $table->datetime('created_at');
            $table->datetime('updated_at');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::dropIfExists('books');
	}

}
