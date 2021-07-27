$(document).ready(function(){

	//design section/
  $("#design-img").click(function(){
    $("#design-img").slideDown('1000').hide('500');
    $("#design").show('1000');
  });
  	$("#design").click(function(){
    $("#design").slideUp('1000');
    $("#design-img").slideDown('1000');
  });	

    //development section/
  $("#development-img").click(function(){
    $("#development-img").slideDown('1000').hide('500');
    $("#development").show('1000');
  });
  $("#development").click(function(){
    $("#development").slideUp('1000');
    $("#development-img").slideDown('1000');
  });

  //product section/
  $("#product-img").click(function(){
    $("#product-img").slideDown('1000').hide('500');
    $("#product").show('1000');
  });
  $("#product").click(function(){
    $("#product").slideUp('1000');
    $("#product-img").slideDown('1000');
  });
//portfolio


});
