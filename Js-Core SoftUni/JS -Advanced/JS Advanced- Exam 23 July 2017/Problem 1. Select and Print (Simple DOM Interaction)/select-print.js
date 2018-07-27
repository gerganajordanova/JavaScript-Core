function move(command) {
    let selectedTown;
    if (command === 'right') {
        selectedTown = $('#available-towns').find('option:selected');
        selectedTown.prop('selected', false);
        $('#selected-towns').append(selectedTown);
    }
    else if (command === 'left') {
        selectedTown = $('#selected-towns').find('option:selected');
        selectedTown.prop('selected', false);
        $('#available-towns').append(selectedTown);
    }
    else if (command === 'print') {
        let print = $('#selected-towns').find('option').toArray().map(el => el.textContent);
        $('#output').text(print.join('; '));
    }

}