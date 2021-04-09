// Jquery if you want it!
$(document).ready(function() {

  // Flickity!
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });

  var obj = {"video": {
    "value": '<iframe src="https://www.youtube.com/embed/N9rurWftUmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }}

  $( ".first-tab" ).click(function() {
    // Video update
    $(".dynamic-container").hide()
    $(".dynamic-img").show();
    // CSS
    $(".purpose-section .image-container").css("background-color", "#D1D1D1")
    $(".first-tab").css("border-radius", "10px 0px 0px 0px")
    $(".second-tab").css("border-radius", "0px 0px 0px 10px")
    $(".third-tab").css("border-radius", "0px 10px 0px 0px")
    // Text
    $(".dynamic-img").attr("src", "images/M4kkids.png");
    $('.paragraph-section .bold-text').text("M4K Orphanage - Füm™ Partnership")
    $('.paragraph-section .tab-paragraph').html("Each purchase of a Füm provides 6 orphans with a healthy meal for the day, and we look to increase that.<br><br>Together we have a positive impact.")
  });

  $( ".second-tab" ).click(function() {
    // Video Update
    $(".dynamic-container").hide()
    $(".dynamic-img").show();
    // CSS
    $(".purpose-section .image-container").css("background-color", "#B8C1C1")
    $(".first-tab").css("border-radius", "10px 0px 10px 0px")
    $(".second-tab").css("border-radius", "0px 0px 0px 0px")
    $(".third-tab").css("border-radius", "0px 10px 0px 10px")
    // Text
    $(".dynamic-img").attr("src", "images/core4pic.png");
    $('.paragraph-section .bold-text').text("Two sets of brothers, one idea…")
    $('.paragraph-section .tab-paragraph').html("So in the spring of 2018, at the average age of 22, the 2 sets of brothers, quit their day jobs and decided they wanted to build a company dedicated to natural solutions to the world.<br><br>Soon friends began asking “Wow, what is that? Can I try it?”")
  });

  $( ".third-tab" ).click(function() {
    // On click - hide image
    $(".dynamic-img").hide();
    $(".dynamic-container").show()
    $(".dynamic-container").html(obj.video.value)
    // CSS
    $(".purpose-section .image-container").css("background-color", "#9FA7A7")
    $(".first-tab").css("border-radius", "10px 0px 0px 0px")
    $(".second-tab").css("border-radius", "0px 0px 10px 0px")
    $(".third-tab").css("border-radius", "0px 10px 0px 0px")
    // Text
    $('.paragraph-section .bold-text').text("Create Positive Habits")
    $('.paragraph-section .tab-paragraph').html("We live in a world where it is easy to make destructive habits, but hard to make positive habits.<br><br>We are here to help people create positive habits through natural solutions to lead to better lives, in a better world.”")
  });

  // SVG styling
  var base_color = "rgb(230,230,230)";
  var active_color = "rgb(164,181,181)";

  var child = 1;
  var length = $("section").length - 1;
  $("#prev").addClass("disabled");
  $("#submit").addClass("disabled");

  $("section").not("section:nth-of-type(1)").hide();
  $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');

  var svgWidth = length * 200 + 24;
  $("#svg_wrap").html(
    '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
      svgWidth +
      ' 24" xml:space="preserve"></svg>'
  );

  function makeSVG(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  for (i = 0; i < length; i++) {
    var positionX = 12 + i * 200;
    var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
    document.getElementById("svg_form_time").appendChild(rect);
    // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
    var circle = makeSVG("circle", {
      cx: positionX,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
  }

  var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6
  });
  document.getElementById("svg_form_time").appendChild(circle);

  $('#svg_form_time rect').css('fill',base_color);
  $('#svg_form_time circle').css('fill',base_color);
  $("circle:nth-of-type(1)").css("fill", active_color);

  
  $(".button").click(function () {
    console.log(typeof(form.elements[0].value))
    if (form.elements[0].value == false){
      // Make this fancy styling
      alert("Please make a selection")
    }
    else {
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      var id = $(this).attr("id");
      if (id == "next") {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      } else if (id == "prev") {
        $("#next").removeClass("disabled");
        $('#submit').addClass("disabled");
        if (child <= 2) {
          $(this).addClass("disabled");
        }
        if (child > 1) {
          child--;
        }
      }
    }
    var circle_child = child + 1;
    $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
      "fill",
      base_color
    );
    $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
      "fill",
      base_color
    );
    var currentSection = $("section:nth-of-type(" + child + ")");
    currentSection.fadeIn();
    currentSection.css('transform','translateX(0)');
  currentSection.prevAll('section').css('transform','translateX(-100px)');
    currentSection.nextAll('section').css('transform','translateX(100px)');
    $('section').not(currentSection).hide();
  });

  // Start of Multi-Step Form
  let form = document.getElementById('signup');
  let name = form.elements[0];

  $(".multi-button").click(function() {
    $(".multi-button").css("filter", "opacity(1)")
    form.elements[0].value = $(this).parent().attr("id")
    
    $(this).css("filter", "opacity(0.5)");
  })
  
  $("#next").click(function () {

    if (child == 2) {
      // Check to see if an option has beend selected
      console.log(form.elements[0].value, "current selected value")
      console.log(child, "current step of form")
      console.log(form.elements[0].value + " is the carried over value")

      $(".dynamic-title-p").text(form.elements[0].value)
    }
  })

// Function that maps each selection to it's appropriate values
// let filterOptions = {
//   Addiction: {
//     name: "Addiction",
//     color: 
//   }

// }

  //Setup Multi Step Form
  //Make each img a clickable button.

});
    
    