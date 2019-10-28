// Code your solution in this file
function findMatching(driver_array, search_string) {
    return driver_array.filter(function(driver) {
        return driver.toLowerCase().indexOf(search_string.toLowerCase()) !== -1;
    })
}

function fuzzyMatch(driver_array, partial_string) {
    let str_length = partial_string.length;
    return driver_array.filter(function(driver) {
        return driver.slice(0, str_length) === partial_string;
    })
}

function matchName (driver_array, driver_name_element) {
    return driver_array.filter(function (driver) {
      return driver.name.toLowerCase() === driver_name_element.toLowerCase();
    });
  }