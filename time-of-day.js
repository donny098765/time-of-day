// timeOfDay.js

// Function to get time of day
function getTimeOfDay(hours) {
    if (hours >= 4 && hours < 12) {
        return "Morning";
    } else if (hours >= 12 && hours < 17) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

// Function to check if it is morning
function isMorning(hours) {
    return hours >= 4 && hours < 12;
}

// Function to check if it is afternoon
function isAfternoon(hours) {
    return hours >= 12 && hours < 17;
}

// Function to check if it is evening
function isEvening(hours) {
    return hours >= 17 || hours < 4;
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };