// Jquery if you want it!
$(document).ready(function () {
  // Flickity!
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });

  // Need a function that maps numbers to words to support multi-step form.
  numToWords = (num) => {
    if (num == 0) {
      return "zero";
    } else if (num == 1) {
      return "one";
    } else if (num == 2) {
      return "two";
    } else if (num == 3) {
      return "three";
    } else if (num == 4) {
      return "four";
    } else if (num == 5) {
      return "five";
    } else if (num == 6) {
      return "six";
    } else {
      return "numToWords does not support that number";
    }
  };

  // Easy place for Fum to come and change information in the multi step form.
  let filterOptions = {
    Addiction: {
      name: "Addiction",
      img: "images/broken-cig.png",
      color: "#b0bdc6",
      options: [
        "Cigarettes",
        "Vaping",
        "Food Cravings",
        "Other",
        "checking",
        "Support Up to 6 Blocks",
      ],
    },
    Focus: {
      name: "Focus",
      img: "images/brain.png",
      color: "#B5B5B5",
      options: ["TBD", "TBD", "TBD"],
    },
    Relaxation: {
      name: "Relaxation",
      img: "images/pot.png",
      color: "#8E9A9A",
      optionOne: "TBD",
      optionTwo: "TBD",
      optionThree: "TBD",
      optionFour: "TBD",
    },
    Mood: {
      name: "Mood",
      img: "images/happyguy.png",
      color: "#8E959A",
      optionOne: "TBD",
      optionTwo: "TBD",
      optionThree: "TBD",
      optionFour: "TBD",
    },
    Physical: {
      name: "Physical",
      color: "#BFCECE",
      img: "images/arm.png",
      optionOne: "TBD",
      optionTwo: "TBD",
      optionThree: "TBD",
      optionFour: "TBD",
    },
    Respiratory: {
      name: "Respiratory",
      color: "#9FADAD",
      img: "images/wind.png",
      optionOne: "TBD",
      optionTwo: "TBD",
      optionThree: "TBD",
      optionFour: "TBD",
    },
  };

  var obj = {
    video: {
      value:
        '<iframe src="https://www.youtube.com/embed/N9rurWftUmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  };

  $(".first-tab").click(function () {
    // Video update
    $(".dynamic-container").hide();
    $(".dynamic-img.Core4").hide();
    $(".dynamic-img.M4kkids").show();
    // CSS
    $(".purpose-section .image-container").css("background-color", "#D1D1D1");
    $(".first-tab").css("border-radius", "10px 0px 0px 0px");
    $(".second-tab").css("border-radius", "0px 0px 0px 10px");
    $(".third-tab").css("border-radius", "0px 10px 0px 0px");
    // Text
    $(".paragraph-section .bold-text").text("M4K Orphanage - Füm™ Partnership");
    $(".paragraph-section .tab-paragraph").html(
      "Each purchase of a Füm provides 6 orphans with a healthy meal for the day, and we look to increase that.<br><br>Together we have a positive impact."
    );
  });

  $(".second-tab").click(function () {
    // Video Update
    $(".dynamic-container").hide();
    $(".dynamic-img.M4kkids").hide();
    $(".dynamic-img.Core4").removeClass(".hidden");
    $(".dynamic-img.Core4").show();

    // CSS
    $(".purpose-section .image-container").css("background-color", "#B8C1C1");
    $(".first-tab").css("border-radius", "10px 0px 10px 0px");
    $(".second-tab").css("border-radius", "0px 0px 0px 0px");
    $(".third-tab").css("border-radius", "0px 10px 0px 10px");
    // Text

    $(".paragraph-section .bold-text").text("Two sets of brothers, one idea…");
    $(".paragraph-section .tab-paragraph").html(
      "So in the spring of 2018, at the average age of 22, the 2 sets of brothers, quit their day jobs and decided they wanted to build a company dedicated to natural solutions to the world.<br><br>Soon friends began asking “Wow, what is that? Can I try it?”"
    );
  });

  $(".third-tab").click(function () {
    // On click - hide image
    $(".dynamic-container").hide();
    $(".dynamic-container").show();
    $(".dynamic-container").html(obj.video.value);
    $(".dynamic-img").css("display", "none");
    // CSS
    $(".purpose-section .image-container").css("background-color", "#9FA7A7");
    $(".first-tab").css("border-radius", "10px 0px 0px 0px");
    $(".second-tab").css("border-radius", "0px 0px 10px 0px");
    $(".third-tab").css("border-radius", "0px 10px 0px 0px");
    // Text
    $(".paragraph-section .bold-text").text("Create Positive Habits");
    $(".paragraph-section .tab-paragraph").html(
      "We live in a world where it is easy to make destructive habits, but hard to make positive habits.<br><br>We are here to help people create positive habits through natural solutions to lead to better lives, in a better world.”"
    );
  });

  // SVG styling
  var base_color = "rgb(230,230,230)";
  var active_color = "rgb(164,181,181)";

  var child = 1;
  var length = $("section").length - 1;
  $("#prev").addClass("disabled");
  $("#submit").addClass("disabled");

  $("section").not("section:nth-of-type(1)").hide();
  $("section")
    .not("section:nth-of-type(1)")
    .css("transform", "translateX(100px)");

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
      height: 6,
    });
    document.getElementById("svg_form_time").appendChild(circle);
  }

  var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6,
  });
  document.getElementById("svg_form_time").appendChild(circle);

  $("#svg_form_time rect").css("fill", base_color);
  $("#svg_form_time circle").css("fill", base_color);
  $("circle:nth-of-type(1)").css("fill", active_color);

  $(".button").click(function () {
    if (form.elements[0].value == false) {
      // Make this fancy styling
      $(".multi-step.text-container p").css("color", "red");
    } else {
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      var id = $(this).attr("id");
      if (id == "next") {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $("#submit").removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      } else if (id == "prev") {
        $("#next").removeClass("disabled");
        $("#submit").addClass("disabled");
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
    currentSection.css("transform", "translateX(0)");
    currentSection.prevAll("section").css("transform", "translateX(-100px)");
    currentSection.nextAll("section").css("transform", "translateX(100px)");
    $("section").not(currentSection).hide();
  });

  // Start of Multi-Step Form
  let form = document.getElementById("signup");
  let name = form.elements[0];
  let colors = [
    "#b0bdc6",
    "#b5b5b5",
    "#8e9a9a",
    "#8e959a",
    "#bfcece",
    "#9fadad",
  ];

  $(".multi-button").click(function () {
    let id = $(this).attr("id");
    console.log(id);
    numberColor = id;
    $(".multi-step.text-container p").css("color", "black");
    $(`#Ellipse_${id}`).removeClass("circle-stylings");
    $(`#Union_${id}`).removeClass("SVG-image");

    $(`#Ellipse_${id}`).addClass("circle-stylings");
    $(`#Union_${id}`).addClass("SVG-image");
    $(".circle-stylings").attr("stroke", colors[numberColor]);
    $(".SVG-image").attr("fill", colors[numberColor]);

    // $(".circle-stylings").attr("stroke", "black");
    // $(".SVG-image").attr("fill", "black");

    form.elements[0].value = $(this).parent().attr("id");
    // $(".multi-button").css("filter", "opacity(1)");
    // $(this).css("filter", "opacity(0.5)");
  });

  $("#prev").click(function () {
    if (child == 1) {
      $("div").remove(".cell-flex");
    }
  });

  $("#next").click(function () {
    let multiStepCount = 0;
    let selectedOption = form.elements[0].value;
    if (child == 2) {
      // Check to see if an option has beend selected

      $(".multi-step.text-container").html(
        `<p>Choose which area of ${selectedOption.toLowerCase()} you’d like support with.</p>`
      );
      for (const option in filterOptions) {
        if (selectedOption === option) {
          let selectedObject = filterOptions[selectedOption];
          $(".dynamic-title-p").text(selectedObject.name);
          $(".dynamic-img-render").attr("src", selectedObject.img);
          $(".dynamic-title-block .option-block").css(
            "background-color",
            selectedObject.color
          );
          break;
        }
      }

      for (const option in filterOptions) {
        if (selectedOption === option) {
          let selectedObject = filterOptions[selectedOption];

          // Dynamically Set up the containers for the Divs
          for (const menuOption in selectedObject.options) {
            // Dynamically build the div.
            //Build Cell Flex
            if (menuOption % 2 == 0) {
              multiStepCount++;
              $(".menuOption-holder").append(
                `<div class='cell-flex ${numToWords(multiStepCount)}'></div>`
              );

              $(`.cell-flex.${numToWords(multiStepCount)}`).append(
                `<div class='dynamic-options ${numToWords(
                  multiStepCount
                )}'></div>`
              );
            }
          }
          for (const menuOption in selectedObject.options) {
            // For every 2 options Append it to each dynamic Options.
            if (menuOption == 0 || menuOption == 1) {
              $(`.dynamic-options.one`).append(
                `<div class='option ${numToWords(menuOption)}'></div>`
              );

              $(`.option.${numToWords(menuOption)}`).append(
                `<p>${selectedObject.options[menuOption]}</p>`
              );
            }
            if (menuOption == 2 || menuOption == 3) {
              $(`.dynamic-options.two`).append(
                `<div class='option ${numToWords(menuOption)}'></div>`
              );

              $(`.option.${numToWords(menuOption)}`).append(
                `<p>${selectedObject.options[menuOption]}</p>`
              );
            }
            if (menuOption == 4 || menuOption == 5) {
              $(`.dynamic-options.three`).append(
                `<div class='option ${numToWords(menuOption)}'></div>`
              );

              $(`.option.${numToWords(menuOption)}`).append(
                `<p>${selectedObject.options[menuOption]}</p>`
              );
            }
          }
          break;
        }
      }
    }
    if (child == 4) {
      $(".info-block").html(
        form.elements[0].value +
          "<br>" +
          form.elements[1].value +
          "<br>" +
          form.elements[2].value +
          "<br>" +
          form.elements[3].value
      );
    }

    $(".dynamic-options .option").click(function () {
      $(".dynamic-options .option").css("filter", "opacity(1)");
      form.elements[1].value = $(this).children().text();
      $(this).css("filter", "opacity(0.5)");
    });
  });
});
