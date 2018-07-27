function carFactory(car) {
    if (car.power <= 90) {
        let wheels = [];
        if (car.wheelsize % 2 === 0) {
            car.wheelsize--;
        }
        for (let i = 0; i < 4; i++) {
            wheels.push(car.wheelsize)
        }
        return {
            model: car.model,
            engine: {
                power: 90,
                volume: 1800
            },
            carriage: {
                type: car.carriage,
                color: car.color
            },
            wheels: wheels
        }
    }

    else if (car.power <= 120) {
        let wheels = [];
        if (car.wheelsize % 2 === 0) {
            car.wheelsize--;
        }
        for (let i = 0; i < 4; i++) {
            wheels.push(car.wheelsize)
        }
        return {
            model: car.model,
            engine: {
                power: 120,
                volume: 2400
            },
            carriage: {
                type: car.carriage,
                color: car.color
            },
            wheels: wheels
        }
    }

    else {
        let wheels = [];
        if (car.wheelsize % 2 === 0) {
            car.wheelsize--;
        }
        for (let i = 0; i < 4; i++) {
            wheels.push(car.wheelsize)
        }

        return {
            model: car.model,
            engine: {
                power: 200,
                volume: 3500
            },
            carriage: {
                type: car.carriage,
                color: car.color
            },
            wheels: wheels
        }
    }
}