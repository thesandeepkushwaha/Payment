
////////// Flip Card START //////////
    function flipadd() {
      $('.vartualCard').addClass('flipped');
  }
  function flipremove() {
      $('.vartualCard').removeClass('flipped');
  }
////////// Flip Card END //////////

////////// Card Content //////////
$(document).ready(function(){
  $("#cardNumber").on("input", function(){
    $("#numberOnCard").text($(this).val());
});
  $("#cvvNumber").on("input", function(){
        $("#ccvOnCard").text($(this).val());
    });
    $("#cardName").on("input", function(){
      $("#nameOnCard").text($(this).val());
  });
  $("#cardMonth").on("input", function(){
    $("#monthOnCard").text($(this).val());
});
$("#cardYear").on("input", function(){
  $("#yearOnCard").text($(this).val());
});
});

$(function() {

  var cardNumber = $('#cardNumber');
  var mastercard = $("#mastercard");
  var visa = $("#visa");
  var amex = $("#amex");

  cardNumber.keyup(function() {

      if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
          mastercard.addClass('transparent');
          amex.addClass('transparent');
          visa.removeClass('transparent');
      } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
          mastercard.addClass('transparent');
          visa.addClass('transparent');
          amex.removeClass('transparent');
      } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
          amex.addClass('transparent');
          visa.addClass('transparent');
          mastercard.removeClass('transparent');
      }
  });

});



$('#cardNumber').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
$('#cvvNumber').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

$(function() {
    $("form[name='payment']").validate({
      rules: {
        cardNumber: {
          required: true,
          number: true,
        },
        cardName: {
          required: true,
        },
        cardMonth: {
          required: true,
        },
        cardYear: {
          required: true,
        },
        cvvNumber: {
          required: true,
        },
      },
       messages: {
         cardName: "Please enter Card Name",
         cardNumber: "Please enter your 16 digit card number",
         cardMonth: "Please enter Expiration Month",
         cardYear: "Please enter Expiration Year",
         cvvNumber: "Please enter CVV Number",
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
