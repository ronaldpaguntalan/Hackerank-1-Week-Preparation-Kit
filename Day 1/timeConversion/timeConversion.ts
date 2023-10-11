function timeConversion(s : string) : string{
    let time = s.substring(0, s.length - 2);
    let part = s.substring(s.length - 2);
    let timeArray = time.split(":").map(Number);

    if(part === "PM" && timeArray[0] === 12){
        timeArray[0] = 12;
    }
    else if (part === "PM"){
        timeArray[0] = (timeArray[0] + 12) % 24;
    }
    else if(part === "AM"){
        timeArray[0] = 0;
    }


    const formattedTime = timeArray.map(String).map(s => s.padStart(2, "0")).join(":");
    return formattedTime;
}

console.log(timeConversion("07:05:45PM"));