// A $( document ).ready() block.
$( document ).ready(function() {
     $("#showAll").hide();
});
//Toggle class between chosen or ignore when a colItem is clicked
$(".colItem").click(function(){    $(this).toggleClass('chosen ignore')   });

$("#removeUnwanted").click(function(){
	$(".ignore").hide();
	$("#removeUnwanted").hide();
	$("#removeUnwanted2").hide();
	$("#showAll").show();
 });


$("#showAll").click(function(){
	$(".ignore").show();
	$("#removeUnwanted").show();
	$("#removeUnwanted2").show();
	$("#showAll").hide();
 });


    //$('#'+id).show();
//$("ul#list").not(".active")
