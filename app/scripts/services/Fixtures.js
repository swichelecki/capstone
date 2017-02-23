(function() {
    function Fixtures() {
        
       var Fixtures = {};
        
       var data = {
            dataLong: "Lorem ipsum dolor sit amet, et nulla tincidunt molestie arcu id, cras justo. Vitae arcu justo fringilla, id pulvinar cras ultrices metus ut.",
            dataShort: "Lorem ipsum dolor sit amet, et nulla tincidunt molestie arcu id, cras justo.",
            image: "/assets/images/900x600.jpg"
        };
        
        Fixtures.returnObject = function() {
            return data;
        };
        
        Fixtures.returnWidgets = function(numWidgets) {
            
            var widgets = [];
            
            for (i = 0; i < numWidgets; i++) {
                    widgets.push(data);
            }
            
            return widgets;
        };
        
        /*
         * @desc array of objects containing widget data - IN USE
         */
        
        var dataArray = [
            {
            dataShort: "This is array index 0",
            image: "/assets/images/900x600.jpg"
            },
            {
            dataShort: "This is array index 1",
            image: "/assets/images/900x600.jpg"  
            },
            {
            dataShort: "This is array index 2",
            image: "/assets/images/900x600.jpg"  
            },
            {
            dataShort: "This is array index 3",
            image: "/assets/images/900x600.jpg"  
            },
            {
            dataShort: "This is array index 4",
            image: "/assets/images/900x600.jpg"  
            },
            {
            dataShort: "This is array index 5",
            image: "/assets/images/900x600.jpg"  
            }
        ];
        
        /*
         * @desc puts data array in object and returns to controller - IN USE 
         */
        
        Fixtures.returnDataArray = function(numWidgets) {
            
            var uniqueWidgets = null;
            
            for (i = 0; i < numWidgets; i++) {
                uniqueWidgets = dataArray;
            }
            
            return uniqueWidgets;
        };
        
        return Fixtures;
    }
    
    angular
        .module('capstone')
        .factory('Fixtures', [Fixtures]);
})();