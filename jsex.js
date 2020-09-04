//exercice1
$('#alerte').click(function () {
    alert('message');
     

  });
 //exercice2 
var $img = $('img');  

$img.dblclick(function resize(e) { 
  $img.css({  
     height: '500px',
     width: '500px',
    });
  });

  //exercice 3
  $('#show').click(function () {
    $('#texte').show();
})

$('#hide').click(function () {
    $('#texte').hide();
});
 //exercice 4
$('#btn').click(function(){
  $('#color').css('color', 'red');

})
//test double clic
$('#btn').dblclick(function(){
 $('#color').css('color', 'purple');

})
//exercice 5
$("#border").focusin(function () {
  $('#border').css('border', '1px solid green')
})
  $("#border1").focusout(function () {
      $('#border').css('border', '1px solid red')

 
})

//exercice 6
$('#btn-color').mouseenter(function () {
  var bc = $('#btn-color option:selected').val();
  $('#colore').css('color', 'purple')
})

$('#btn-color').mouseout(function () {
  var bc = $('#btn-color option:selected').val();
  $('#colore').css('color', 'black')
})

//autres tests 
$('#btn-color').click(function () {
  var bc = $('#btn-color option:selected').val();
  $('#colore').css('color', 'green')
})

$('#btn-color').dblclick(function () {
  var bc = $('#btn-color option:selected').val();
  $('#colore').css('color', 'orange')
})
