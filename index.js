// Code your solution in this file
function findMatching(drivers, name){
   return drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase()});

}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function(driver) {return driver.toLowerCase().slice(0, letters.length) === letters.toLowerCase()});
 }

 function matchName(drivers, name){
    return drivers.filter(function(driver) {return driver.name.toLowerCase() === name.toLowerCase()});
 }
 