function findMatching(arr, name) {
    return arr.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
     });
}

function fuzzyMatch(arr, namePartial) {
    let nameLength = namePartial.length;
    return arr.filter(function (driverName) {
        return driverName.slice(0, nameLength) === namePartial.slice()
    });
}

function matchName(arr, name) {
    return arr.filter( function (driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}