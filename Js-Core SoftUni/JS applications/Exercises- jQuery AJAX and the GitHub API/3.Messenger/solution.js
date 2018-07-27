function attachEvents() {
    let author = $('#author');
    let content = $('#content');
    let send = $('#submit');
    let refreshBtn = $('#refresh');
    refreshBtn.click(refresh);
    let url = `https://ajaxdemos-bfee6.firebaseio.com/messenger.json`;

    send.on('click', function () {


        let message = {
            author: author.val(),
            content: content.val(),
            timestamp: Date.now()
        };

        $.post(url, JSON.stringify(message)).then(refresh);
        author.val('');
        content.val('');
    });

    function refresh() {
        $.get(url)
            .then((result) => {
                $('#messages').val();
                let keys = Object.keys(result).sort((m1, m2) => result[m1].timestamp - result[m2].timestamp);
                for (let msg in result) {
                    $('#messages').append(`${result[msg].author}: ${result[msg].content}\n`)
                    author.val('');
                    content.val('');
                }
            });
    }
}