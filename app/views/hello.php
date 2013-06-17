<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WebLibrary</title>
    <script type='text/javascript' src='http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js'></script>
    <script type='text/javascript' src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.2.js'></script>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.0/pure-min.css">
    <script type='text/javascript' src='/scripts/book.js'>
    </script>
</head>
<body>
<div class="content pure-g-r">
    <header class="header pure-u-1" data-bind="with: header">
        <div class="pure-menu pure-menu-open pure-menu-horizontal">
            <h1 class="pure-menu-heading">WebLibrary</h1>
            <ul>
                <li><a href="#" data-bind="click: list_click">List</a></li>
                <li><a href="#" data-bind="click: add_click">Add</a></li>
            </ul>
        </div>
    </header>
<!-- ko with: create -->
    <div class="splash pure-u-1" data-bind="if: enable">
        <p data-bind="text: message"></p>
        <form class="pure-form" data-bind="submit: append">
            <fieldset>
                <legend>Append Book</legend>
                <input type="title" placeholder="title" data-bind="value: title">
                <button type="submit" class="pure-button" data-bind="enable: submit_enable">add</button>
            </fieldset>
        </form>
    </div>
<!-- /ko -->
    <div class='' data-bind="with: show">
        <table class="pure-table pure-u-1" data-bind="if: enable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>isbn</th>
                    <th>created_at</th>
                </tr>
            </thead>
            <tbody data-bind="foreach: books">
                <tr>
                    <td data-bind="text: id"></td>
                    <td data-bind="text: title"></td>
                    <td data-bind="text: isbn"></td>
                    <td data-bind="text: created_at"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <footer class="footer pure-u">
        <p>develop by @deflis</p>
    </footer>
</div>
</body>
</html>
