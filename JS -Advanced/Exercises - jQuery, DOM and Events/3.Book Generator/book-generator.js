function createBook(selector, bookTitle, author, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, bookTitle, author, isbn) {
            let container = $(selector);
            let bookContainer = $('<div>');
            bookContainer
                .attr('id', `book${id}`)
                .css('border', 'none');
            $(`<p class="title">${bookTitle}</p>`)
                .appendTo(bookContainer);
            $(`<p class="author">${author}</p>`)
                .appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`)
                .appendTo(bookContainer);

            let selectBtn = $('<button>Select</button>')
                .appendTo(bookContainer);
            let deselectBtn = $('<button>Deselect</button>')
                .appendTo(bookContainer);

            bookContainer.appendTo(container);
            selectBtn.on('click', () => bookContainer.css('border', '2px solid blue'));
            deselectBtn.on('click', () => bookContainer.css('border', 'none'));
            id++;
        }
    }());
    bookGenerator(selector, bookTitle, author, isbn);
}
