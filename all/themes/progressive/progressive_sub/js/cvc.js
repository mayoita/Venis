function homeScroll () {
    var $ = jQuery;
    $('a[href="#sezione1"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
}

jQuery(document).ready(function() {

       homeScroll();
 });
