$(document).ready(function () {
    $('article').load('pages/welcome.html');
    $('#book-list').load('pages/books-a.html');

    $('#alphabet-navigation a').click(function () {
        $('#alphabet-navigation a').removeClass('selected');
        $(this).addClass('selected');
        var listToLoad = $(this).attr('href');
        $('#book-list').load('pages/books-' + listToLoad + '.html');
        return false;
    });
});