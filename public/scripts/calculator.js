console.log('calculator.js sourced');
$('document').ready(function(){
  console.log('document ready sourced');
  $('body').on('click', '.operatorIn', function(){

    // assign values
    var xValueIn = $('#xValueIn').val();
    var yValueIn = $('#yValueIn').val();
    var operation = $(this).attr('id');
    console.log('x: ',xValueIn,' y: ',yValueIn, 'type: ', operation);

    //clear input fields and result
    $("#clear").click(function() {
      $('#xValueIn').val("");
      $('#yValueIn').val("");
      $('#operation').val("");
      $('#result').html("");
    });//end clear


    // assemble object to send to server
    var sendValues = {
      xValue: xValueIn,
      yValue: yValueIn,
      type: operation
    };//end sendValues object
    console.log(sendValues);
    $.ajax({
      type: 'POST',
      url: '/calc',
      data: sendValues,
      success: function(data) {
        console.log('Data from server: ', data.total);
        $( '#result' ).html('<p>Result: '+ data.total+'</p>');
      } //end success
    }); //end ajax
  }); //end body on click
});//end document ready
