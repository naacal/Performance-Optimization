/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {
    $('#shareme').sharrre({
        share: {
            facebook: true,
            googlePlus: true,
            twitter: true,
            // digg: true,
            // delicious: true,
            // stumbleupon: true,
            // linkedin: true
            // pinterest: true
        },

        buttons: {
            googlePlus: {
                size: 'medium'
            },
            facebook: {
                layout: 'button_count',
                action: 'like',
                send: 'false',
                faces: 'true'
            },
            twitter: {},
            // digg: {type: 'DiggMedium'},
            // delicious: {size: 'tall'},
            // stumbleupon: {layout: '1'},
            // linkedin: { counter: 'right'}
            // pinterest: {media: 'http://sharrre.com/img/example1.png', description: $('#shareme').data('text'), layout: 'vertical'}
        },
        enableHover: false,
        enableCounter: false,
        enableTracking: true
    });

});