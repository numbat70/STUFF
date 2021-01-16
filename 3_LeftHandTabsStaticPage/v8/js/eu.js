
$( document ).ready(function() {
 //alert("moo2");
            $("#sWhy").show();
            $("#sMarket").hide();
            $("#sChannels").hide();
            $("#sSkills").hide();
            $("#sVisiting").hide();
            $("#sPractical").hide();
            /*Set the Overview tab as Active     */  
            $("#step0nav").addClass('navboxselected').siblings().removeClass('navboxselected');

});





jQuery(function($){

$( "a.toggle-button" ).click(function() {
  $( this ).toggleClass( "active-icon" );
  return false
});


$( "a.toggle-location" ).click(function() {
  $( "a.toggle-location" ).removeClass( "active-location" );
  $( this ).addClass( "active-location" );
  return false
});


$( ".btn-group button" ).click(function() {
  $( this ).addClass( "btn-primary" );
  return false
});



$('#otherForm').hide();

  $('#other').click(function(){
    $('#otherForm').show();
  });
  
  $('.industry').click(function(){
    $('#otherForm').hide();
});


$( ".navbox" ).click(function() {
  $( this ).addClass('navboxselected').siblings().removeClass('navboxselected');
  return false
});

$( ".navboxlinks" ).click(function() {
 // $( this ).addClass('navboxselected').siblings().removeClass('navboxselected');
  return false
});



$( ".step0nav" ).click(function() {
  $('#sWhy' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step1nav" ).click(function() {
  $('#sMarket' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step2nav" ).click(function() {
  $('#sSkills' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step3nav" ).click(function() {
  $('#sChannels' ).show().siblings(".roundedWhite").hide();
  //$('#sFooter').show();
  return false
});

$( ".step4nav" ).click(function() {
  $('#sVisiting' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step5nav" ).click(function() {
  $('#sPractical' ).show().siblings(".roundedWhite").hide();
  return false
});




$( ".step1navlink" ).click(function() {
   $('#step1nav' ).addClass('navboxselected').siblings().removeClass('navboxselected');
     $('#sMarket' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step2navlink" ).click(function() {
   $('#step2nav' ).addClass('navboxselected').siblings().removeClass('navboxselected');
     $('#sSkills' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step3navlink" ).click(function() {
   $('#step3nav' ).addClass('navboxselected').siblings().removeClass('navboxselected');
     $('#sChannels' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step4navlink" ).click(function() {
   $('#step4nav' ).addClass('navboxselected').siblings().removeClass('navboxselected');
     $('#sVisiting' ).show().siblings(".roundedWhite").hide();
  return false
});

$( ".step5navlink" ).click(function() {
   $('#step5nav' ).addClass('navboxselected').siblings().removeClass('navboxselected');
     $('#sPractical' ).show().siblings(".roundedWhite").hide();
  return false
});



});
