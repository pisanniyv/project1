var myAddModules = (function () {

	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		$('#show-popup').on('click', showPopup); //open modal window
		$('#add-project-form').on('submit', addNewProject); //add new project
	};

	var showPopup = function (e) {
		console.log('open modal window');
		e.preventDefault();
		$('#add-project').bPopup({
			speed: 600,
			transition: 'slideDown',
			positionStyle: 'fixed'
		});
	};


	var addNewProject = function (e) {
		console.log('add project');
		e.preventDefault();
	};

	return {
		init: init
	};

})();

myAddModules.init();