// Code your solution in this file
function findMatching(drivers, name) {
    let matchingDrivers = [];
    for (const driverName of drivers) {
        if (driverName === name || driverName.toLowerCase() === name.toLowerCase()) {
            matchingDrivers.push(driverName);
        }
    }
    return matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
    // let matchingDrivers = [];
	// let lettersLength = letters.length
    // for(const name in drivers) {
    //     let comparisionLetters = drivers[name].slice(0, lettersLength)

    //     if (comparisionLetters === letters) {
    //         matchingDrivers.push(drivers[name]);
    //     }
    // }

    // return matchingDrivers;  

    let lettersLength = letters.length
    return drivers.filter(function (driverName) { 
        return driverName.slice(0, lettersLength) === letters;
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (drivers) {
        return drivers.name.toLowerCase() === name.toLowerCase();
    })
}



