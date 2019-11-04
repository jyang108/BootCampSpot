var m = moment();
var currentTime = m.format('h:mm A');
var currentDate = m.format("MMM Do YYYY");
var currentHour = moment().hours();

$("#currentDay").text("Today's Date - " + currentDate);
$("#currentTime").text(currentTime)


console.log(currentHour);


//set variables for time and hour
var time = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
//hour used for comparing currentHour to div for styling
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]


//creation of individual divs using for loop for each time slot
for(var i = 0; i < time.length; i++) {
    var divRow = $("<div class='row time-block'>")
    var divTime = $("<div class='hour col-md-1'>")
    var divText = $("<textarea class='col-md-10'>")
    var divBtn = $("<button class='saveBtn col-md-1'>")
    var saveIcon = $("<i class='fas fa-save'></i>");

    
    divTime.text(time[i]);
    divRow.attr("id", time[i]);
    divText.attr("id", hour[i]);
    
    $("#timeblocks").append(divRow);
    divRow.append(divTime);
    divRow.append(divText);
    divRow.append(divBtn);
    divBtn.append(saveIcon);

    //comparing data attr with currentHour to determine past, present, or future styling
    var divTextId = parseInt($(divText).attr("id"));
    if (divTextId < currentHour) {
        $("textarea").attr("class", "past col-md-10");    
    } else if (divTextId > currentHour){
        divText.attr("class", "future col-md-10")   
    } else {
        divText.attr("class", "present col-md-10")
         
    };

};


//function to show text in saved textarea timeslots
function render (){
    $("#9").text(localStorage.getItem("9 AM"));
    $("#10").text(localStorage.getItem("10 AM"));
    $("#11").text(localStorage.getItem("11 AM"));
    $("#12").text(localStorage.getItem("12 PM"));
    $("#13").text(localStorage.getItem("1 PM"));
    $("#14").text(localStorage.getItem("2 PM"));
    $("#15").text(localStorage.getItem("3 PM"));
    $("#16").text(localStorage.getItem("4 PM"));
    $("#17").text(localStorage.getItem("5 PM"));
};

//onclick event that saves textarea values as parent Id keys
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var dayPlans =  $(this).siblings("textarea").val();
    var timeOfDay = $(this).parent().attr("id");
     
    localStorage.setItem(timeOfDay, dayPlans);
    //running rendering function to ensure saved data shows no matter what
    render();

 });

 //creating clear button to reset textarea values and clear localstorage so previous values won't show when page is refreshed
var clearBtn = $("<hr><button class='btn btn-secondary' id='clearBtn'>Clear</button>");
$("#timeblocks").append(clearBtn);

$("#clearBtn").on("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    $("textarea").val(" ");

});

//when page loads the render function takes place and pulls all values from localstorage
 render();
