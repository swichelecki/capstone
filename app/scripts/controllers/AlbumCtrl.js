(function() {
    function AlbumCtrl(Fixtures, $stateParams, $state, $location) {
        
        /*
        *@desc uses index from param to access data from fixtures.js
        */
        
        var albumIndex = $stateParams.data;
        
        this.widgets = Fixtures.sentIndex(albumIndex); 
        
        /*
        *@desc scope object getting fixture data - IN USE
        */
        
      //  this.widgets = Fixtures.returnDataArray(1);
        
     //   this.widgets = Fixtures.albumTest;    
        
      //  console.log("$stateParams id: ", $stateParams.id);
        
        console.log("this.widgets: ", this.widgets);
        
       $(document).scrollTop(0);
        
       // var vm = null;
        
       /* $http({
          //  url: '/album/:0',
            method: 'get',
            params: {id: $stateParams.id}
            
        }); */
        
     //   $location.path($state.href('album', {data: $stateParams.data}, {relative: true}));
        
       // console.log($stateParams.id);
        
        
       // $state.href('album', {id: $stateParams.id}, {absolute: true});
        
       // console.log('^^^^^^', $stateParams.id);
        
       /* this.reloadData = function() {
            $state.reload();
        }; */
        
      //  $state.go('album', {id: $stateParams.id}); 
       
          // console.log('^^^^^^', $stateParams.id);
        // $state.go('album'); 
        
 
    
    }
    
    angular
        .module('capstone')
        .controller('AlbumCtrl', ['Fixtures', '$stateParams', '$state', '$location', AlbumCtrl]);
})();