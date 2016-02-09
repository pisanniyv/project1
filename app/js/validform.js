var validation = (function() {

  var init = function() {
      _setUpListners();
    },
    validateForm = function(form) { // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы

      var self = this,
          elements = form.find('input, textarea').not('input[type="hidden"], input[name="file"]'),
          valid = true;
          

      $.each(elements, function(index, element) {
        var
          $element = $(element),
          value = $element.val();
        if (!value.length) {
          _addError($element);
          valid = false;
        }
      });

      return valid;
    },

    _setUpListners = function() { 
      $('form').on('keydown', '.has-error', _removeError); 
      $('form').on('click', '.has-error', _removeError); 
      $('form').on('reset', _clearForm); 
    },

    _removeError = function() { 

      $(this).removeClass('has-error');
    },

    _addError = function(element) {
      element.addClass('has-error');
      _createQtip(element, element.attr('qtip-position'));
    },

    _clearForm = function(e) { // Очищает форму
      var form = $(this);
      form.find('.inputfield').trigger('hideTooltip'); 
      form.find('.has-error').removeClass('has-error');
    },
    _createQtip = function(element, position) {
      // позиция тултипа
      if (position === 'right') {
        position = {
          my: 'left center',
          at: 'right center'
        };
      } else {
        position = {
          my: 'right center',
          at: 'left center',
          adjust: {
            method: 'shift none'
          }
        };
      };

      // инициализация тултипа
      element.qtip({
        content: {
          text: function() {
            return $(this).attr('qtip-content');
          }
        },
        show: {
          event: 'show'
        },
        hide: {
          event: 'keydown click hideTooltip'
        },
        position: position,
        style: {
          classes: 'qtip-mystyle qtip-rounded',
          tip: {
            height: 10,
            width: 10
          }
        }
      }).trigger('show');
    };

  return {
    init: init,
    validateForm: validateForm
  };

})();

validation.init();
