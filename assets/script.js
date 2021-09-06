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
        console.log($(this).children()[1])
        var blockTime = parseInt($(this).attr("id"));
        if (blockTime < currentTime) {
            $(this).children()[1].setAttribute("class", "col md-9 description past");

        }

    else if (blockTime === currentTime) {

        $(this).children()[1].setAttribute("class", "col md-9 description present");


    } else {

        $(this).children()[1].setAttribute("class", "col md-9 description future");


    }

})

$(".save-button").on("click", saveButton);

function saveButton(event) {
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).parent().attr("id");

    localStorage.setItem(time, text);
}

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
getData();

}