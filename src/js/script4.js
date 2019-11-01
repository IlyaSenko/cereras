
(function ($) {
    $(function () {
        // Detect touch screen
        function isTouchDevice() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }

        $("#page-navigation").mmenu({
            offCanvas: {
                position: "right",
                zposition: "behind",
            }
        }, {
            // configuration
            clone: true,
            offCanvas: {
                pageNodetype: ".page-wrapper",
            }
        });

        var MENUAPI = $("#mm-page-navigation").data( "mmenu" );
        $('#toggle-page-navigation').click(function(e){
            $("body").scrollTop(0);
            if ( $(this).hasClass('open') ) {
                MENUAPI.close();
            } else {
                MENUAPI.open();
            }
            $(this).toggleClass('open');
        });

        $('#mm-page-navigation').data('mmenu').bind('closed', function () {
            // make sure to remove class open from menu toggle
            $('#toggle-page-navigation').removeClass('open');
        });


        function fixMenuHeight(el) {
            //fix navigation panel heights for level 3 and 4
            var wrapper = el.parents('.navigation-level-2-inner-wrapper');

            var wrapper_height = wrapper.height();
            var lvl3 = wrapper.find('.nav-level-3');
            var lvl4 = wrapper.find('.nav-level-4');

            lvl3.css({'height': 'auto'});
            lvl4.css({'height': 'auto'});

            lvl3.css({'height': wrapper_height + "px"});
            lvl4.css({'height': wrapper_height + "px"});
            console.log(wrapper_height);
        }

        function initDesktopMenu() {

            // opening sub-menue on second click - Hiding accordingly
            $(".navigation-level-1 > .menue-item > a.sub").click(function(e){
                var parent = $(this).parent('li');
                if(isTouchDevice() && !parent.hasClass('hover')){
                    e.preventDefault();
                    $(".navigation-level-1 > .menue-item.hover").removeClass('hover');
                    parent.addClass('hover');
                    return false;
                }
            });

            // $('body').click(function(e) {
            //     if ($(e.target).closest('#page-navigation').length === 0) {
            //         $(".navigation-level-1 > .menue-item.hover").removeClass('hover');
            //     }
            // });

            $(".navigation-level-1 > .menue-item > a").mouseenter(function() {
                $('#page-navigation .nav-level-3 .nav-level-3-menu').html('');
                $('#page-navigation .nav-level-4').html('');
                $('#page-navigation .nav-level-3 .description-wrapper').removeAttr('style');
                $('#page-navigation .nav-level-3').removeAttr('style');
                $('#page-navigation .nav-level-4').removeAttr('style');
                $('#page-navigation .navigation-level-2-wrapper').each(function() {
                  $(this).removeClass('has-4th-level');
                })
            });

            $('.navigation-level-2 > li.sub .menu-more, .navigation-level-2 > li.sub > a').click(function(e) {
                e.preventDefault();
                var nextLevelElement = $(this).siblings('ul');

                $('#page-navigation .nav-level-3 .nav-level-3-menu').html(nextLevelElement.clone());
                $('#page-navigation .nav-level-3 .description-wrapper').css({'display': 'none'});
                $('#page-navigation .nav-level-4').html('');
                $('#page-navigation .navigation-level-2-wrapper').each(function() {
                    $(this).removeClass('has-4th-level');
                })

                $('.navigation-level-3 li.sub .menu-more, .navigation-level-3 li.sub > a').click(function(e) {
                    e.preventDefault();
                    var nextLevelElement = $(this).siblings('ul');
                    var wrapper = $(this).parents(".navigation-level-2-wrapper");

                    wrapper.addClass('has-4th-level');
                    $('#page-navigation .nav-level-4').html(nextLevelElement.clone());
                    $('#page-navigation .nav-level-4').css({"height": "auto"});
                    fixMenuHeight($(this));
                    return false;
                });

                fixMenuHeight($(this));
                return false;
            });
        }

        if ($(window).width() > 991) {
            initDesktopMenu();
        }

        $('.lightbox').featherlight({
                openSpeed: 700,
                closeSpeed: 700,
                beforeOpen: function(event){
                    $('body').addClass('no-scroll featherlight-open');
                },
                afterClose: function(event){
                    $('body').removeClass('no-scroll featherlight-open');
                },
            }
        );

        $('.scroll-down').click(function() {
            $('html, body').animate({
                scrollTop: $("#page-content").offset().top
            }, 600);
        });

        $('.selectize').selectize();

        $('.submit-on-change').each(function(){
            $(this).parents('form').find('button, input[type="submit"]').hide();
            $(this).change(function(){
                $(this).parents('form').submit();
            });
        });

        $('.search-sticky-mobile').click(function() {
            $('.search-overlay').addClass('open');
        });


        $('#search-overlay-close').click(function() {
            $('.search-overlay').removeClass('open');
        });


        $('.disruptor-header').click(function(e) {
            e.preventDefault();
            $('.disruptor-slideout').addClass('open');
        });

        $('.disruptor-header-close').click(function(e) {
            e.preventDefault();
            $('.disruptor-slideout').removeClass('open');
        });

        $('#disruptor-slideout-consultant-ajax-search').submit(function(e){
            e.preventDefault();

            var $this = $(this);
            var url = $this.attr('action');
            var data = '?';
            if(url.indexOf('?') > 0){
                data = '&';
            }
            data = encodeURI('tx_t23zipsearch_addresses[q]') +'='+ $this.find('#consultant-ajax-search-term').val();

            var search = $.ajax({
                url: url,
                data: data+'&type=1486395465',
                method: "GET",
                dataType: "html",
                async: true,
            }).done(function(jqXHR, textStatus){
                var result = $(jqXHR).find('#consultant-search-result');
                if(result.length == 1){
                    $this.parent().html(result);
                }else{
                    var op = '?';
                    if(url.indexOf('?') > 0){
                        op = '&';
                    }
                    window.location.href = url+op+data;
                }
            });
            return false;
        });

        // handler for teaserbox-overlay {
        if (isTouchDevice()) {
            $('.ce-teaserbox.layout-1').each(function () {
                $(this).bind('touchstart', function (e) {
                    //e.preventDefault();
                    $(this).toggleClass('hover');
                });
            });
        }
    }); // end of document ready
})(jQuery); // end of jQuery name space

onPopupClose = function () {
    alert("test");
}