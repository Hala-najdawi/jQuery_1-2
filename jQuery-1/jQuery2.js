//EXERCISE 1: Change Background Change the background color of '#target' by script.


// $(document).ready(function(){
//     $("body").on({
//         mouseenter: function(){
//             $("#target").css("background-color", "gray");
//         },  
//     });    
// });



//EXERCISE 2: Change Parent Change the text in the span, a child of "#target"

// $(document).ready(function(){
//     $("#target").children("span").text("new text");
               
//      });




//EXERCISE 3: Create Clone Create a clone of the span in "#target" and position it under the origin.



// $('document').ready(function() {
//     $( 'span' ).clone()
//       .insertAfter('span')
//       .css({
//         position: 'absolute',
//         left: 12,

//         margin: 25
//       });
//   });



//EXERCISE 4: Use Filter Change background color of the second ".target"

// $('document').ready(function () {

// $("div").filter(':odd').css( "background-color", "#bbbbff")

// })




//EXERCISE 5: Disable Buttons Disable the button
// $(document).ready(function () {
// $(".target").children("button").prop("disabled", true)});


//EXERCISE 6: Uncheck CheckBoxes Uncheck all checkboxes using jQuery

// $(document).ready(function () {
//     

     
//        $("input").removeAttr("checked");
//     });



//EXERCISE 7: Change Parent Move "#child" from "#parent1" to "#parent2"
// $("document").ready(function(){
    
    
//     $("#child").appendTo($("#parent2")); 
// })



//EXERCISE 8: Select A Option in A Select Box Select the second option in the selectbox by script

//  $('document').ready(function () {

//  $("option").filter(':odd').attr('selected',true)

// })


//EXERCISE 9: Change Size Make "#target" double size

// $( document ).ready(function() {
//     var width=$("#target").width(); 
//     var height=$("#target").height();

//     $('#target').width(width*2);
//     $('#target').height(height*2);
//   });






//EXERCISE 10: Empty Elements Remove all children and text of "#target"
// $(document).ready(function(){
//       $("#target").empty();
//     });




//Advanced part ######Advanced part ######Advanced part ####EXERCISE 11: Delay Show Alert with 1 second delay (Use "setTimeout")

//EXERCISE 12: Count Show the number of children in an alert
// $( document ).ready(function() {
// var count = $("#target > .child").length
// alert(count);

// });


//EXERCISE 13: Animate Make "#target" double size with animation
// $( "document" ).ready(function() {
//     var width=$("#target").width(); 
//     var height=$("#target").height();
//     $( "#target" ).animate({
//       opacity: 0.25,
//       left: "+=50",
//       height:$('#target').height(height*2),
//       width:$('#target').width(widtht*2)
//     }, 5000, function() {
//       // Animation complete.
//     });
//   })



//EXERCISE 14: Alternate Color Make the list-box alternating. (Make odd options a different color)

$('document').ready(function () {
$("option").filter().nth_child("odd")
     

     
    });



//EXERCISE 15: All But One Remove all children of "#target" but h2

//EXERCISE 16: Without Children Remove all 'div' whitch has no child elements.