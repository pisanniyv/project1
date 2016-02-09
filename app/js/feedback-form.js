(function() {
  'use strict';
  var my = {};
  publicInterface();
  init();
  addListener();

  function addListener() {
    $('#feedback-contact').on('submit', submitForm);
  }

 function submitForm(event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    var form = $(this),
      url = '',
      defObject = ajaxForm(form, url);
  }

  function ajaxForm(form, url) {

    if (!validation.validateForm(form)) return false; 
    var data = form.serialize();

  }

  function init() {
    my.publicMethod();
  }

  function publicInterface() {
    my = {
      publicMethod: function() {
      }
    };
  }
  window.qtp = my;
})();
