/*
functions.js version 0.8b

ensures proper display of navigation on window resize/tablet rotation
*/
$(document).ready(function() {

    var $mainNav = $('#topnav');
    var $subNav = $('#topnav ul.sub-menu');
    var $navToggle = $('.menu_title');
    var $menuTrigger = $('ul > li.has-submenu > a:first-child');
    var $menuItem = $('#topnav > ul li');
    var indicatorClassName = 'active';

    // rules for window resize behavior to ensure reliability
    $(window).on('resize', function () {
        var $windowSize = $(window).width();
        if($menuTrigger.click){ // if subnav is active
            $menuItem.unbind('click'); //don't toggle subnav
            $menuTrigger.unbind('click');// restore link action to main nav link
        }
        if($windowSize > 756){
            $mainNav.css('display','block');
            $subNav.css('display', 'none');
            $menuTrigger.removeClass(indicatorClassName);// reset indicator
        }else if($windowSize <= 756){
            $mainNav.css('display', 'none');//remove nav bar on smaller screens
        }
    });

    $navToggle.click(function(){
        $mainNav.toggle();	
        $menuItem.click(function(){
            $(this).children('ul').toggle();
        });
        
        $menuTrigger.click(function(e) {
            e.preventDefault();
            $(this).toggleClass(indicatorClassName);
        });	
    });
});
