// let startHour = document.getElementById("startHour");
// let startminutes = document.getElementById("startminutes");

// let endhour = document.getElementById("endhour");
// let endminutes = document.getElementById("endminutes");

// let breakhours = document.getElementById("breakhours");
// let breakminutes = document.getElementById("breakminutes");

// let startampm = document.getElementById("startampm");
// let endampm = document.getElementById("endampm");
// // let strthr = startHour[0].value;
// console.log("strthr");

let calbtn = document.getElementById("calbtn");
calbtn.addEventListener('click',calculate);
// function fn()
// {
//     let strthr = startHour.value;
//     let strtmnt = startminutes.value; 
//     let endhr = endhour.value;
//     let endmnt = endminutes.value;
//     let brkhr =  breakhours.value
//     let brkmnt = breakminutes.value;
//     let strtamppm = startampm.value;
//     let edampm = endampm.value;
//     console.log(strthr);
//     console.log(strtmnt);
//     console.log(endhr);
//     console.log(endmnt);
//     console.log(brkhr);
//     console.log(brkmnt);
//     console.log(strtamppm);
//     console.log(edampm);

//     if(strtamppm=='am')
//     {
//         starttimehour = strthr
//     }
//     else{
//         starttimehour = strthr+12;
//     }
//     if(edampm=='am')
//     {
//         endtimehour = 
//     }
// }

function calculate() {
    var ans = 0;
    for(let i=1;i<=6;i++){
        var start_hour = parseInt(document.getElementById(`start-hour-${i}`).value);
        var start_minutes = parseInt(document.getElementById(`start-minute-${i}`).value);
        var end_hour = parseInt(document.getElementById(`end-hour-${i}`).value);
        var end_minutes = parseInt(document.getElementById(`end-minute-${i}`).value);
        var time_start = document.getElementById(`start-break-${i}`);
        var time_end = document.getElementById(`end-break-${i}`);
        var minus_hour = parseInt(document.getElementById(`minus-hour-${i}`).value);
        var minus_minutes = parseInt(document.getElementById(`minus-minute-${i}`).value);

        if(time_start.value == "1") start_hour = start_hour+12;
        if(time_end.value == "1") end_hour = end_hour+12;
        
        var ans_in_minutes = (Math.abs(((end_hour*60)+end_minutes)-((start_hour*60)+start_minutes)) - ((minus_hour*60)+minus_minutes));
        // var ans_hrs = (ans_in_minutes/60);
        // var ans_min = (ans_in_minutes%60);
        var ans = ans + ans_in_minutes;
        let hour = Math.floor(ans_in_minutes/60);
        let minutes = ans_in_minutes%60;
        let total = "";
        if(minutes<10 && minutes>=0) total = hour+" : 0"+minutes;
        else total = hour+" : "+minutes;
        document.getElementById(`total-${i}`).innerHTML = total;
    }
    let hour = Math.floor(ans/60);
    let minutes = ans%60;
    let total = "";
    if(minutes<10 && minutes>=0) total = hour+" : 0"+minutes;
    else total = hour+" : "+minutes;
    // document.getElementById('total-1').innerHTML= total;
    // console.log(total);
    document.getElementById('answer').innerHTML= total;

}

let clr = document.getElementById("clr");
clr.addEventListener('click',clearAll);

function clearAll() {
    for(let i=1;i<=6;i++){
        document.getElementById(`start-hour-${i}`).value = "";
        document.getElementById(`end-hour-${i}`).value = "";
        document.getElementById(`minus-hour-${i}`).value = "";
        document.getElementById(`start-minute-${i}`).value = "";
        document.getElementById(`end-minute-${i}`).value = "";
        document.getElementById(`minus-minute-${i}`).value = "";
        document.getElementById(`total-${i}`).innerHTML = "";
        
    }
    document.getElementById('answer').innerHTML = "";
}