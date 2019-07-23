/*
Q1:
Check if jQuery is loaded
*/
$(document).ready(function(){
if (jQuery){
    alert("jQuery work")
}
});
/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$("#scroll").click(function() {
    $('html, body').animate({ scrollTop:0}, 2000);
});
 
/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$('#btn1').click(function(){
    $('#btn1').animate({height:'180px'}, 500);
    $('#btn1').animate({width: '+=36'}, 500);
    $("#box").animate({height:30,width:160})
   
});

$('#btn2').click(function(){
    $("#btn1").animate({height:30,width:160})
    $("#box").animate({height:150,width:150})
});


/*
Q4:
Learn how to fadein your boxes
*/
$("#btn3").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });


/*
Q5:
User must first accept then he or she can signup
*/
$("#accept").click(function(){
if ($('#accept').attr('checked'))
{  
}
$("#submitbtn").prop("disabled", false);
});

/*
Q6:
Let them print
*/
$(".printPage").click(function() {
    window.print();
});

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

$("#textarea").keypress(function(){
$("#textarea").attr("maxlength","20")
});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$("#words").ready(function() {
    $("#words").css("font-weight", "bold");
   
});

/*
Q9:
Add new div to your website
*/
$("#newDiv").click(function on_click(){
    $("div").append(" Go To Sleep.");
  });

/*
Q10:
Select values from a JSON object using jQuery
*/
colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };

$.each(colors, function(key, value) {
    $('#divSelect').append($("<option></option>", {
        value: key,
        text: value
    }));
});

/*
Q11:
Add element within ul list
*/
$("#newItem").ready(function(){
$("ul").append("<li> life.</li>");
});
/*
Q12:
Know what user puts into textbox
*/

$("#usertext").on("change", function() { 
   var newValue=$("#usertext").val()
    console.log(newValue)
}); 

/*
Q13:
Change input value
*/
$("#button").click(function(){
$("#button").val("hala")
});

// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
// jQuery
