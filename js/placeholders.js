var allow_scroll = true;

$( document ).ready(function() {
    console.log("on load: ", allow_scroll);

    $("#nav-placeholder").load("templates/nav.html", function(){
        console.log('loaded nav');
        // $('.mobile-btn').click(function(e) {
        //     console.log('clicked menu. currently: ', allow_scroll);
        //     if (allow_scroll) {
        //         $('body').css('overflow', 'hidden');
        //         // $('#nav-placeholder').css('touch-action', 'none');
        //     } else {
        //         $('body').css('overflow', 'auto');
        //         // $('#nav-placeholder').css('touch-action', 'auto');
        //     };
        //     allow_scroll = !allow_scroll;
        //     console.log("now: ", allow_scroll);
        // });

        $(document).click(function (event) {
            $('.navbar-collapse').collapse('hide');
        });
    });

    $("#footer-placeholder").load("templates/footer.html");

    // $('#nav-placeholder').empty();

    // $('#navbar-logo').click(function(){
    //     window.location.href = 'index.html'; //It is correct!
    // })
});