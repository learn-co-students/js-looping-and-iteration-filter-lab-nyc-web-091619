// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}



function fuzzyMatch (drivers, partial) {
  let partialLength = partial.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, partialLength) === partial;
  });
}


function matchName (drivers, name) {
    return drivers.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


