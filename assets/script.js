var displayDayEl = $('#currentDay');
var timeBlockEl = $('.time-block');
showTime();
checkTime();

// set the current day 
function showTime() {
    var thisDay = moment().format('dddd, MMM Do YYYY');
    displayDayEl.text(thisDay);
}

//set the color based on current time 

function checkTime() {
    var currentTime = moment().hours();

    timeBlockEl.each(function () {
        var blockTime = parseInt($(this).attr(id).split("time")[1]);

        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        }

    else if (blockTime === currentTime) {

        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).raddClass("present");

    } else {

        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }

})

function getData () {
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));

}

}