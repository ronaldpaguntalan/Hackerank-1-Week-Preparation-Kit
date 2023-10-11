function timeConversion(s) {
    var time = s.substring(0, s.length - 2);
    var part = s.substring(s.length - 2);
    var timeArray = time.split(":").map(Number);
    if (part === "PM" && timeArray[0] === 12) {
        timeArray[0] = 12;
    }
    else if (part === "PM") {
        timeArray[0] = (timeArray[0] + 12) % 24;
    }
    else if (part === "AM") {
        timeArray[0] = 0;
    }
    var formattedTime = timeArray.map(String).map(function (s) { return s.padStart(2, "0"); }).join(":");
    return formattedTime;
}
console.log(timeConversion("07:05:45PM"));
