const leapYears = function(year) {
    // leap year: divisible by 4, 400, not by 100 
    if (year % 4 == 0) { 
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false; 
            }
        }
        else {
            return true; 
        }
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;

// npm test leapYears.spec.js