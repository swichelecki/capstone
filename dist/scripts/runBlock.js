(function() {
    function runNav() {
        
        /*
        * @desc this run bloc enables the collapsable nav
        */
        
        var minNav = document.getElementsByClassName('collapsed-nav');  

        var revealMinNav = function() {
            minNav[0].style.zIndex = 1;
        };

        var hideMinNav = function() {
            minNav[0].style.zIndex = 0;
        };

        window.onload = function() {
            var nav = document.getElementsByClassName('nav')[0];   
            var scrollDistance = nav.getBoundingClientRect().bottom - 10;

        window.addEventListener('scroll', function(event) {
            if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                revealMinNav();
            } else {
                hideMinNav();
            }
                
        }); 
        }         
  }
    
    angular
        .module('capstone')
        .run([runNav]);
})();