(function() {
    function LandingCtrl(Fixtures, $anchorScroll, $location, Email) {
        
        /*
        * @desc home page Bootstrap billboard
        */
        
        this.myInterval = 5000;
        this.active = 0;
        
        var slides = this.slides = [];
        var currIndex = 0;
        
        this.addSlide = function() {
            slides.push({
                image: '/assets/images/carousel/billboard_1.jpg',
                id: currIndex++,
                url: 'pageTwo'
            },{
                image: '/assets/images/carousel/billboard_2.jpg',
                id: currIndex++,
                url: 'pageThree'
            });
        }
        
        for (var i = 0; i < 1; i++) {
            this.addSlide();
        }
        
        /*
        * desc scope object getting fixture data
        */
        
        this.objData = Fixtures.returnObject();
        
        /*
        * desc forces document to scroll to top on state change
        */
        
        $(document).scrollTop(0);
        
        /*
        * desc uses $anchorScroll provider to make footer work
        */
        
        this.gotoTop = function() {
            $location.hash("top");
            
            $anchorScroll();
            
            $location.hash(null);
        };    
        
        this.newEmail = Email;
    }
        
    angular
        .module('capstone')
        .controller('LandingCtrl', ['Fixtures', '$anchorScroll', '$location', 'Email', LandingCtrl]);
})();


/*$(window).scroll(function() {

var minNav = $('nav').getBoundingClientRect().bottom;;
    
    console.log(minNav);

alert(minNav);
    
    });*/

/*var minNav = document.getElementsByClassName('collapsed-nav');  

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
         console.log("Current offset from the top is " + nav.getBoundingClientRect().bottom + " pixels to bottom on nav");
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            revealMinNav();
         } else {
            hideMinNav();
         }
         
     }); 
} */
