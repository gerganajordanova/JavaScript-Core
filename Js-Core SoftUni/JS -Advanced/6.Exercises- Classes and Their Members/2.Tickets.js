function tickets(strArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let el of strArr) {
        let [destination, price, status] = el.split('|');
        let ticket=new Ticket(destination,price,status);
        tickets.push(ticket);
    }

    return tickets.sort((a, b)=> a[sortingCriteria] > b[sortingCriteria]) ;
}