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
        
        //NOTE: in future I can probably do this with one object and one //
        // parameter -- no need for nested objects and two parameters
        
        var dataArray = [
            {
            index: 0,    
            dataShort: "This is array index 0",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 0,
                    copy: "This is album 0"
                }
            },
            {
            index: 1,
            dataShort: "This is array index 1",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 1,
                    copy: "This is album 1"
                }
            },
            {
            index: 2,
            dataShort: "This is array index 2",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 2,
                    copy: "This is album 2"
                }
            },
            {
            index: 3,
            dataShort: "This is array index 3",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 3,
                    copy: "This is album 3"
                }
            },
            {
            index: 4,
            dataShort: "This is array index 4",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 4,
                    copy: "This is album 4"
                }
            },
            {
            index: 5,
            dataShort: "This is array index 5",
            image: "/assets/images/900x600.jpg",
                albumTitle: {
                    id: 5,
                    copy: "This is album 5"
                }
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
        
        /*
         * @desc 
         */
        
     /*   var albumArray = [
            {
            id: 0,    
            data: 'Album index 0'    
            },
            {
            id: 1,    
            data: 'Album index 1'     
            },
            {
            id: 2,
            data: 'Album index 2'      
            },
            {
            id: 3,
            data: 'Album index 3'      
            },
            {
            id: 4,
            data: 'Album index 4'  
            },
            {
            id: 5,
            data: 'Album index 5'      
            }
        ];
        
        /*
         * @desc puts object into albumObject based on index number 
         */
        
        Fixtures.sentIndex = function(albumIndex) {
            
       //     console.log(">>>>", dataArray[index]);
            
            var albumObject = null;  
            
          //  albumObject = albumArray[index]; 
            
            albumObject = dataArray[albumIndex]; 
            
        //   console.log(">>>>", dataArray[index]);

            return albumObject;
            
        };
        
        /*
         * @desc sends albumObject to AlbumCtrl
         */
        
      /*  Fixtures.returnAlbumObject = function() {
            
            console.log("returnAlbumObject", albumObject);
            
            return albumObject;
        }; */

        
        
        return Fixtures;
    }
    
    angular
        .module('capstone')
        .factory('Fixtures', [Fixtures]);
})();