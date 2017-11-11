function homeScroll () {
    var $ = jQuery;
    $('a[href="#sezione1"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
}

function sostituisciContenutoHeader () {
    var $ = jQuery;
    $( ".riquadro" ).each(function() {
        var elemento = $(this).find(".content-block img");
        $(this).find(".percorsoNodo a").append(elemento);
        $(this).find(".content-block").remove();
    });
}

// Slick carousel by Massimo Moro
function slick_regular() {
    var $ = jQuery;
    $(".regular").slick({
        dots: true,
        infinite: true,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        slidesPerRow: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                slidesPerRow: 1,
                dots: true
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1
                }
            }]
    });

}

function slick_event_list() {
    var $ = jQuery;
    $(".event_list").slick({
        dots: true,
        infinite: true,
        rows: 1,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

}

jQuery(document).ready(function() {

    sostituisciContenutoHeader ();
    homeScroll();
    slick_event_list();
    slick_regular();

});
