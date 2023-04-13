$( document ).ready(function() {
    // load nav
    $("#nav-placeholder").load("/templates/nav.html", function(){
        $(document).click(function (event) {
            $('.navbar-collapse').collapse('hide');
        });

        // $('#toTopBtn').fadeOut();
        $('#toTopBtn').css("display", "none");
        
        // load scrollup button function
        $(window).scroll(function() {
          if ($(this).scrollTop() > 50) {
            $('#toTopBtn').fadeIn();
          } else {
            $('#toTopBtn').fadeOut();
          }
        });
      
        $('#toTopBtn').click(function() {
          $("html, body").animate({
            scrollTop: 0
          }, 500);
          return false;
        });
    });

    // load footer
    $("#footer-placeholder").load("/templates/footer.html");

});