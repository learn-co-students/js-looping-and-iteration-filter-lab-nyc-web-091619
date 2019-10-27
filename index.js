// Code your solution in this file
function findMatching(coll, name) {
  return coll.filter(function(collName) {
    return collName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(coll, partial) {
  return coll.filter(function(collName) {
    return collName.slice(0, partial.length) === partial;
  });
}

function matchName(coll, name) {
  return coll.filter(function(collObj) {
    return collObj.name === name;
  });
}
