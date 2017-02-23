(function() {
    function Email ($firebaseArray) {
        
        var Email = {};
        
        var ref = firebase.database().ref();
        
        var email = $firebaseArray(ref);
        
        Email.addEmail = function(emailAddress) {
            
            email.$add({
                email: emailAddress
            });
        };
        
        return Email;
    }
    
    angular
        .module('capstone')
        .factory('Email', ['$firebaseArray', Email]);
})();