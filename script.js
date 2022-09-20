// Display todays date 
var today = moment().format("MMM Do YY");
$("#currentDay").html(today);

$(document).ready(function(){
    //save button event listener in text and time
    $(".saveBtn").on("click", function (event) {

    //define time and description variables
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(text, time);

    
})
function timeTrack(){
    var hourNow = moment().hours();
    $("time-block").each(function(){
        var timeHour = parseInt($(this).attr("id").split("hour")[1]);

        //compare hourNow to timeHour and addClass or removeClass to change the colour of the time blocks 
    })
}


})