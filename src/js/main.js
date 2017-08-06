$(function() {

   function navApply() {
      if( window.pageYOffset >= 5 ) {
         $('#main-nav').css({background: 'white', boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)', transition: '300ms all'});
         $('li .navbar-item').css({color: '#74797B', transition: '300ms all'});
         $('.navbar-brand').css({color: '#60C152', transition: '300ms all'});
         $('li .navbar-item#nav-download-btn').css({color: 'white', background: '#7E83B7', border: '1px solid transparent', transition: '300ms all'});
         $('li .navbar-item#nav-download-btn').hover(function() {
            $(this).css({background: '#9499ca'});
         }, function() {
            $(this).css({background: '#7E83B7'});
         });
      } else if ( window.pageYOffset < 5 ) {
         $('#main-nav').css({background: 'transparent', boxShadow: 'none', transition: '300ms all'});
         $('li .navbar-item').css({color: 'white', transition: '300ms all'});
         $('.navbar-brand').css({color: 'white', transition: '300ms all'});
         $('li .navbar-item#nav-download-btn').css({color: 'white', background: 'transparent', border: '1px solid white', transition: '300ms all'});
         $('li .navbar-item#nav-download-btn').hover(function() {
            $(this).css({background: 'none'});
         });
      }
   }

   navApply();
   window.onscroll = navApply;

})
