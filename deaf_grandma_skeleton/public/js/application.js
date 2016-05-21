$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $("form").submit(function(event){

    event.preventDefault();
    var info = $(this).serialize();
    var url = $(this).attr('action');
    // console.log(url)
    $.post(url, info, function(data){
      // console.log("conexion");
      // console.log(data);
      $( "#response" ).empty();
      $("#response").append(data);
    });

  });

 
});



// 1. event.preventDefault()

// $('a').click(function (e) {
//     // custom handling here
//     e.preventDefault();
// });
// 2. return false

// $('a').click(function () {
//     // custom handling here
//     return false;
// });


 // $.post( "/", function( data ) {
    // $( ".result" ).html( data );
    // });

 // $.post(url, info, function(resp){
    //   console.log(resp);

    // });