function cappyJuice(input) {
    let bottles={};
    let quantities={};

    for(let line of input){
        let juice=line.split(' => ');
        let fruit=juice[0];
        let quantity=Number(juice[1]);

        if (!quantities.hasOwnProperty(fruit)){
            quantities[fruit]=0;
        }
        quantities[fruit]+=quantity;
        if(quantities[fruit]>=1000){
            bottles[fruit]=parseInt(quantities[fruit]/1000);
        }
    }

    for(let bottle of Object.keys(bottles)){
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}