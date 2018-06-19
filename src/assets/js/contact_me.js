$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      //Errores adicionales
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); //Prevent default submit
      //Coge los valores del formulario
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name;
      //Comprueba que no haya espacios en blanco
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true);
      $.ajax({
        url: "../mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          //Mensaje correcto
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Tu mensaje ha sido enviado. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //Limpia los inputs
          $('#contactForm').trigger("reset");
        },
        error: function() {
          //Mensaje incorrecto
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Lo siento " + firstName + ", parace que el servidor no está respondiendo correctamente, por favor inténtalo de nuevo más tarde."));
          $('#success > .alert-danger').append('</div>');
          //Limpia los inputs
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false);
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$('#name').focus(function() {
  $('#success').html('');
});
