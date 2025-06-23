// 1. Case-insensitive full match
function findMatching(drivers, query) {
  return drivers.filter(driver => 
    driver.toLowerCase() === query.toLowerCase()
  );
}

// 2. Case-sensitive "starts with" match
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.startsWith(query)
  );
}

// 3. Match by object property "name"
function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name === query
  );
}
