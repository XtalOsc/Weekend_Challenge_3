console.log('calculator.js sourced');
$('document').ready(function(){
  console.log('document ready sourced');
$('body').on('click', '.operatorIn', function(){
  $(this).attr('id');
  console.log($(this).attr('id'));
  // get user input
    var xValueIn = $('#xValueIn').val();
    var yValueIn = $('#yValueIn').val();
console.log('x: ',xValueIn,' y: ',yValueIn, 'type: ',$(this).attr('id'));

    // assemble object to send to server
    var objectToSend = {
      xValue: xValueIn,
      yValue: yValueIn,
      type: $(this).attr('id')
    };
console.log(objectToSend);
    $.ajax({
      type: 'POST',
      url: '/calc',
      data: objectToSend,
      success: function(data) {
        console.log('Data from server: ', data.total);
          $( '#result' ).html('<p>Result: '+ data.total+'</p>');
      } //end success
    }); //end ajax
  }); //end sendInfo on click

});//end document ready
