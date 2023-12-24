function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    const matchedDrivers = [];
  
    drivers.forEach(driver => {
      if (driver.startsWith(letters)) {
        matchedDrivers.push(driver);
      }
    });
  
    return matchedDrivers;
  }
  function matchName(drivers, name) {
    const matchedDrivers = [];
  
    drivers.forEach(driver => {
      if (driver.name === name) {
        matchedDrivers.push(driver);
      }
    });
  
    return matchedDrivers;
  }