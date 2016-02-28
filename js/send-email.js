/* jshint browser: true */
/* global microAjax */

(function() {
  "use strict";
  var qInputBot    = document.querySelector("#form-email #bot"),
      qInputSubmit = document.querySelector("#form-email .btn.submit"),
      qFormSuccess = document.querySelector("#form-email .success.submit"),
      qFormInputs  = {
        name: document.querySelector("#form-email input[name='name']"),
        email: document.querySelector("#form-email input[name='email']"),
        message: document.querySelector("#form-email textarea")
      },
      qFormErrors  = {
        name: document.querySelector("#form-email .error.name"),
        email: document.querySelector("#form-email .error.email"),
        message: document.querySelector("#form-email .error.message")
      };

  function makeRequest(data, callbacks) {
    microAjax("php/send-email.php", {
      method: "POST",
      data: JSON.stringify(data),
      ajaxMethod: "xhr",
      success: callbacks.success,
      error: callbacks.error
    });
  }

  function validate(field, val) {
    val = val === undefined ? null: val;

    makeRequest({
      action: "validate",
      field: field,
      value: val
    }, {
      success: function(r) {
        r = JSON.parse(r);
        qFormErrors[field].classList.toggle("visible", !r.valid);
      },
      error: function(r) {
        console.error(r);
      }
    });
  }

  // Sticky label placement
  for (var key in qFormInputs) {
    if (qFormInputs.hasOwnProperty(key)) {
      qFormInputs[key].addEventListener("blur", function(e) {
        validate(e.target.name, e.target.value);
      });
    }
  }

  function processForm(e) {
    var fields = {};
    // Prevent the form from being submitted
    e.preventDefault();

    // Bot check ;)
    if (qInputBot.checked) {
      window.location.replace("404.html");
    }

    // Get the form data
    fields.bot = qInputBot.checked;
    for (var key in qFormInputs) {
      if (qFormInputs.hasOwnProperty(key)) {
        fields[key] = qFormInputs[key].value;
      }
    }

    makeRequest({
      action: "submit",
      value: fields
    }, {
      success: function(r) {
        r = JSON.parse(r);

        if (r.valid) {
          qFormSuccess.classList.add("visible");
        }
      },
      error: function(r) {
        console.error(r);
      }
    });
  }

  qInputSubmit.addEventListener("click", processForm);
  qInputSubmit.addEventListener("blur", function() {
    if (qFormSuccess.classList.contains("visible")) {
      qFormSuccess.classList.remove("visible");
    }
  });
}());
