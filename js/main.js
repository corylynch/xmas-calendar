if(window.innerWidth <= 480){
  if(window.innerHeight > window.innerWidth){
    $("#main-container").hide();
    $(".cta").hide();
    $(".con-border").hide();
    $(".disclaimer").hide();
    $("#mobile-portrait-view").find("img").show();
    $("body").css({
      "background-color" : "#353535"
    });
  }
} else{
  $("#main-container").show();
  $(".cta").show();
  $(".con-border").show();
  $(".disclaimer").show();
  $("body").addClass("darkBg");
  $("#mobile-portrait-view").find("img").hide();
  $("body").css({
    "background" : "none"
  });
}
$( window ).resize(function() {
  if(window.innerWidth <= 480){
    if(window.innerHeight > window.innerWidth){
      $("#main-container").hide();
      $(".cta").hide();
      $(".con-border").hide();
      $(".disclaimer").hide();
      $("#mobile-portrait-view").find("img").show();
      $("body").css({
        "background-color" : "#353535"
      });

    }
  } else{
    $("#main-container").show();
    $(".cta").show();
    $(".con-border").show();
    $(".disclaimer").show();
    $("body").addClass("darkBg");
    $("#mobile-portrait-view").find("img").hide();
    $("body").css({
      "background" : "none"
    });
  }
});

  var date = new Date(); // Get current date
  // var currentDay = date.getDate(); // Get current day of month, date.getDate();
  var currentDay = 11;

  var calendarDate = $(".date").find(".num"); // Find the number for each day on calendar

  calendarDate.each(function(){ // Loop through each date number within calendar

    var calDate = $(this).html(); // Collect html of each number of calendar date

    if(parseInt(calDate) < currentDay){ // if calendar date is less than current date, make disabled
      $(this).closest(".day").removeClass("active");
      $(this).closest(".day").addClass("na");
      $(this).closest(".main-flip").addClass("disabled");
      $(this).closest(".main-flip").find(".day").removeClass("front");
      $(this).closest(".main-flip").find(".back").css({
        display: "none"
      });
    } else if(parseInt(calDate) > currentDay){ // if calendar date is greater than current date, make disabled
      $(this).closest(".day").removeClass("active");
      $(this).closest(".day").addClass("na");
      $(this).closest(".day").addClass("fa");
      $(this).closest(".main-flip").addClass("disabled");
      $(this).closest(".main-flip").find(".day").removeClass("front");
      $(this).closest(".main-flip").find(".back").css({
        display: "none"
      });
    } else if(parseInt(calDate) == currentDay){ // if calendar date and section is the current date, make active
      //Undo all disabled properties, re-enable date to be flipped and active
      $(this).closest(".main-flip").removeClass("disabled");
      $(this).closest(".main-flip").find(".day").addClass("active");
      $(this).closest(".main-flip").find(".day").addClass("current");
      $(this).closest(".main-flip").find(".day").removeClass("fa");
      $(this).closest(".main-flip").find(".day").removeClass("na");
      $(this).closest(".main-flip").find(".back").css({
        display: "block"
      });
      $(this).closest(".main-flip").find(".day").removeClass("f");
      $(this).closest(".main-flip").find(".circle").css({
        "background-color": "#ffffff"
      });
      $(this).closest(".main-flip").find(".day").css({
        "background-color": "#1e88e5"
      });
      $(this).closest(".main-flip").find(".num").css({
        "color" : "#ffffff"
      });
      $(this).closest(".main-flip").find(".circle").css({
        "background-color" : "#ffffff"
      });
      $(this).closest(".section").find(".f-overlay").addClass("current-name");
      $(this).closest(".section").find(".f-overlay").removeClass("f-overlay");
    }
  });




  // Make current day always active for BOTH days within section
  $(".main-flip").find(".day.current").closest(".main-flip").removeClass("disabled");
  $(".main-flip").find(".day.current").removeClass("na").removeClass("fa").addClass("active");
  $(".main-flip").find(".day.current").closest(".main-flip").find(".back").css({
    display: "block"
  });
  // $(".main-flip").find(".day.current").closest(".main-flip").find(".f-overlay").find("p").css({
  //   "opacity":"1"
  // });
  //
  // $(".main-flip").find(".day.current").closest(".main-flip").find(".f-overlay").css({
  //   "background":"none",
  //   "cursor":"pointer",
  //   "z-index":"5"
  // });

// Disable flips for classes with .disabled. Enable .date flips
  $(".na").parent().parent().removeClass("front");
  $(".disabled").find(".back").css({
    display: "none"
  });
  $(".disbaled").find(".back").removeClass("back");

  $(".date").flip();

//================================================================== End date checker ==========================================================================>



//================================================================== Flip Mouse Events ==========================================================================>

//Special case for 17 and 18
$(".date.break").flip({
  trigger: 'manual'
});
$(".date.break.eighteen").find(".day").click(function(){
  // The card that is clicked will flip by default
  $(".date.break.seventeen").flip(true);
  $(".date.break.eighteen").one('mouseleave', function(){ // Only fire funciton ONCE PER CLICK after mouse leaves hover. Function needs click to be able to fire again
    var section = $(".date.break.seventeen") // Target card container to toggle flip
    var flipBack = setTimeout(function(){
      section.flip('toggle');
    }, 5000);
  });
});
$(".date.break.seventeen").find(".day").click(function(){ // Target only .day within section
    // The card that is clicked will flip by default
    $(".date.break.eighteen").flip(true);
    $(".date.break.seventeen").one('mouseleave', function(){ // Only fire funciton ONCE PER CLICK after mouse leaves hover. Function needs click to be able to fire again
      // The card that is hovered off will flip back by default (below function)
      var section = $(".date.break.eighteen") // Target card container to toggle flip
      var flipBack = setTimeout(function(){
        section.flip('toggle');
      }, 5000);
    });
});
// end special case


$(".day").click(function(){ // Target just the front of the card on click
    $(this).parent().one('mouseleave', function(){ // Only fire function ONCE PER CLICK after mouse leaves hover. Function needs another click to be able to fire again
      var day = $(this); // Target parent to call toggle flip
      var flipBack = setTimeout(function(){ // Flip back after hover leave, after 5 seconds
        day.flip('toggle');
      }, 5000);
    });
});
//Repeat for sections
$(".section").flip();
$(".section").find(".current-name").click(function(){ // Target only .day within section
    $(this).closest(".main-flip").one('mouseleave', function(){ // Only fire funciton ONCE PER CLICK after mouse leaves hover. Function needs click to be able to fire again
      var section = $(this).closest(".section"); // Target card container to toggle flip
      var flipBack = setTimeout(function(){
        section.flip('toggle');
      }, 5000);
    });
});
$(".section").find(".day").click(function(){ // Target only .day within section
    $(this).parent().parent().parent().one('mouseleave', function(){ // Only fire funciton ONCE PER CLICK after mouse leaves hover. Function needs click to be able to fire again
      var section = $(this); // Target card container to toggle flip
      var flipBack = setTimeout(function(){
        section.flip('toggle');
      }, 5000);
    });
});
