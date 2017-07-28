// $.fn.verticalSlider = function (navBar, options) {
//     var params = $.extend({
//             color: "#556b2f",
//             backgroundColor: "white",
//             interval: 2000
//         }, options );

//     var intervalTimer = window.setInterval(autoslide, params.interval),
//         timeoutTimer  = null;
// }
var vertical_slider_nav = $('.vertical-slider-nav'),
    vsliderboxes = $('#vsliderboxes'), scroll_top = 0,
    boxHeight = $('#vsliderboxs-inner > div').height(),
    background_img_list = ['nature3', 'nature5', 'nature4', 'nature2', 'nature3', 'nature1'];
    debugger;
    $('#vsliderboxs-inner > div').each(function() {
        var i = $(this).index();
            if(i != 0) {
                scroll_top += $(this).height(); 
            }
        $(this).css('top', scroll_top + 'px');
        $(this).css('background', 'url(images/'+ background_img_list[i] + '.jpg)');
    });

    $(window).scroll(function() {
        var curr_top_scroll = $(document).scrollTop().valueOf();
            $('#vsliderboxs-inner > div').each(function() {
                var curr_top = Number($(this).css('top').split('px')[0]),
                    nav_id = $(this).attr('id');

                if(curr_top_scroll >= curr_top) {
                    vertical_slider_nav.find('a').removeClass('active');           
                    $('a.'+nav_id).addClass('active');
                } else if(curr_top == 0 && curr_top_scroll > boxHeight) {
                    vertical_slider_nav.find('a').removeClass('active');
                    $('a.'+nav_id).addClass('active');
                }  
            });
    });
    vertical_slider_nav.find('a').click(function() {
        var target_slide = $(this).attr('class'),
            index = $('a').index(this);        

        $('html body').animate({
            scrollTop: boxHeight * index
        },700);
    });

// $.fn.setCursorPosition = function (pos) {
//     this.each(function (index, elem) {
//       if (elem.setSelectionRange) {
//         elem.setSelectionRange(pos, pos);
//       } else if (elem.createTextRange) {
//         var range = elem.createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//       }
//     });
//     return this;
// };
// $.fn.showLinkLocation = function() {
 
//         this.filter( "a" ).each(function() {
//             var link = $( this );
//             link.append( " (" + link.attr( "href" ) + ")" );
//         });
 
//         return this;
 
//     };
//     $('a').showLinkLocation();

// $.fn.greenify = function( options ) {
//         // This is the easiest way to have default options.
//         var settings = $.extend({
//             // These are the defaults.
//             color: "#556b2f",
//             backgroundColor: "white"
//         }, options );
 
//         // Greenify the collection based on the settings variable.
//         return this.css({
//             color: settings.color,
//             backgroundColor: settings.backgroundColor
//         });
 
//     };
// $( "div" ).greenify({
// 	color: '#ffddee'
// });
