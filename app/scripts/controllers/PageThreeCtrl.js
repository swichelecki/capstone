(function() {
    function PageThreeCtrl(Fixtures, $anchorScroll, $location) {
        
        /*
         *@desc scope object getting fixture data - NOT IN USE
         */
        
        this.objData = Fixtures.returnObject();
        
        /*
        *@desc scope object getting fixture data
        */
        
       // this.widgets = Fixtures.returnWidgets(6);
        
        /*
        *@desc scope object getting fixture data - IN USE
        */
        
        this.widgets = Fixtures.returnDataArray(1);
        
        /*
        *@desc forces document to scroll to top on state change
        */
        
        $(document).scrollTop(0);
        
        /*
        *@desc uses $anchorScroll provider to make footer work
        */
        
        this.gotoTop = function() {
            $location.hash("top");
            
            $anchorScroll();
            
            $location.hash(null);
        }; 
        
        /*
        * @desc makes background grey on iPads by making footer tall
        */
        
        var tallFooter = document.getElementsByClassName('footer');

        if (window.innerHeight > 950) {
            
            tallFooter[0].style.minHeight = '64.5rem';
        } 
        
    }
    
    angular
        .module('capstone')
        .controller('PageThreeCtrl', ['Fixtures', '$anchorScroll', '$location', PageThreeCtrl]);
})();