(function() {
    function sidebarToggle() {
	
        return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {

			scope.element = iElement[0];
			scope.body = document.body;

			scope.element.addEventListener("click", function() {
				var _element = document.getElementById(iAttrs.sidebarToggle);
				_element.classList.toggle("sidebar--is-open");

				var _bgSidebar = document.getElementById(iAttrs.sidebarToggle + "-bg");
				_bgSidebar.classList.toggle("sidebar-bg--is-visible");

				//control body
				if (scope.body.style.overflowY == "auto") {
					scope.body.style.overflowY = "hidden";
				} else {
					scope.body.style.overflowY = "auto";
				}
			});
            
      

		}
	};
} 

    angular
        .module('capstone')
        .directive('sidebarToggle', [sidebarToggle]);

})();    
