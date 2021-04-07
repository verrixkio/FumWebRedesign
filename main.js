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
  });

  // Who We Are Tabbed 
  // Sudo Code:
    // Click the tab
    // Background color should change.
    // Border-Radius of buttons should change.
    // Image should change.
    // Text should change.
    // Update Top section.
    // Link should change.

  $( ".first-tab" ).click(function() {
    
    // CSS
    $(".purpose-section .image-container").css("background-color", "#D1D1D1")
    $(".first-tab").css("border-radius", "0px 0px 0px 0px")
    $(".second-tab").css("border-radius", "0px 0px 0px 10px")
    $(".third-tab").css("border-radius", "0px 0px 0px 0px")
    // Text
    $(".dynamic-img").attr("src", "images/M4kkids.png");
    $('.paragraph-section .bold-text').text("M4K Orphanage - Füm™ Partnership")
    $('.paragraph-section .tab-paragraph').html("Each purchase of a Füm provides 6 orphans with a healthy meal for the day, and we look to increase that.<br><br>Together we have a positive impact.")

  });

  $( ".second-tab" ).click(function() {

    // CSS
    $(".purpose-section .image-container").css("background-color", "#B8C1C1")
    $(".first-tab").css("border-radius", "0px 0px 10px 0px")
    $(".second-tab").css("border-radius", "0px 0px 0px 0px")
    $(".third-tab").css("border-radius", "0px 0px 0px 10px")

    // Text
    $(".dynamic-img").attr("src", "images/core4pic.png");
    $('.paragraph-section .bold-text').text("Two sets of brothers, one idea…")
    $('.paragraph-section .tab-paragraph').html("So in the spring of 2018, at the average age of 22, the 2 sets of brothers, quit their day jobs and decided they wanted to build a company dedicated to natural solutions to the world.<br><br>Soon friends began asking “Wow, what is that? Can I try it?”")
  });

  $( ".third-tab" ).click(function() {

    // CSS
    $(".purpose-section .image-container").css("background-color", "#9FA7A7")
    $(".first-tab").css("border-radius", "0px 0px 0px 0px")
    $(".second-tab").css("border-radius", "0px 0px 10px 0px")
    $(".third-tab").css("border-radius", "0px 0px 0px 0px")

    // Text
    $(".dynamic-img").attr("src", "images/video");
    $(".dynamic-img").attr("alt", "fumvideo");
    $('.paragraph-section .bold-text').text("Create Positive Habits")
    $('.paragraph-section .tab-paragraph').html("We live in a world where it is easy to make destructive habits, but hard to make positive habits.<br><br>We are here to help people create positive habits through natural solutions to lead to better lives, in a better world.”")
  });




});
    
    