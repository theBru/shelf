$(document).ready(function () {
    $('article').load('pages/welcome.html');
    $('#book-list').load('pages/books-a.html');

    $('aside #book-list ol li a').click(function () {
        var pageToLoad = $(this).attr('href');
        $('article').load('pages/' + pageToLoad + '.html');
        return false;
    });

    $('#alphabet-navigation a').click(function () {
        $('#alphabet-navigation a').removeClass('selected');
        $(this).addClass('selected');
        var listToLoad = $(this).attr('href');
        $('#book-list').load('pages/books-' + listToLoad + '.html');
        return false;
    });
});