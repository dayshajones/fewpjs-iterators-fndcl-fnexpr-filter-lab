// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
		return driver.toLowerCase() === string.toLowerCase();
	});
}

function fuzzyMatch(drivers, string) {
	return drivers.filter(function(driver) {
		return driver.toLowerCase().indexOf(string.toLowerCase()) === 0;
	});
}

function matchName(drivers, string) {
	return drivers.filter(function(driver) {
		return driver.name === string;
	});
}