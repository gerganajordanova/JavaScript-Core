function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');
    loop:
        for (let string of input) {
            let [command, item] = string.split(' ');
            switch (command) {
                case 'Buy':
                    if (!inventory.includes(item)) {
                        inventory.push(item)
                    }
                    break;
                case'Trash':
                    let index1 = inventory.indexOf(item);
                    if (index1 > -1) {
                        inventory.splice(index1, 1)
                    }
                    break;
                case 'Repair':
                    let index2 = inventory.indexOf(item);
                    if (index2 > -1) {
                        let element = inventory.splice(index2, 1);
                        inventory.push(element[0])
                    }
                    break;
                case 'Upgrade':
                    let [realItem, upgrade] = item.split('-');
                    let index = inventory.indexOf(realItem);
                    if (index > -1) {
                        inventory.splice(index + 1, 0, realItem + ':' + upgrade)
                    }
                    break;
                case 'Fight!':
                    console.log(inventory.join(' '));
                    break loop;
            }
        }
}
