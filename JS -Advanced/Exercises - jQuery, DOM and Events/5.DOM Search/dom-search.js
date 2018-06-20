function domSearch(selector, isCaseSensitive) {
    let addContainer = $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .text("Enter text: ")
            .append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .text('Add')
            .on('click', addItem));

    let searchContainer = $('<div>')
        .addClass('search-controls')
        .append($('<label>')
            .text("Search:")
            .append($('<input>')
                .on('input', search)));

    let resultContainer =
        $('<div>')
            .addClass('result-controls')
            .append($('<ul>')
                .addClass('items-list'));

    $(selector)
        .append(addContainer)
        .append(searchContainer)
        .append(resultContainer);

    function addItem() {
        let text = $('.add-controls label input').val();
        $('.items-list').append($('<li>').addClass('list-item').append($('<a>').addClass('button').text('X').on('click', deleteItem)).append($('<strong>').text(text)));
        $('.add-controls label input').val("");
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function search() {
        let text = $(this).val();

        $('.list-item').each((index, li) => matches(li, text))
    }

    function matches(li, text) {
        $(li).css('display', 'inline-block');
        if (isCaseSensitive) {
            if ($(li).find('strong').text().indexOf(text) == -1) {
                $(li).css('display', 'none');
            }
        } else {
            if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) == -1) {
                $(li).css('display', 'none');
            }
        }
    }
}
