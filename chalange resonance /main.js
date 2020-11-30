$(function(){
	$(this).mouseover(function(e){

		console.log('salut');
    $(".over").css("display-block;");

    	$('.over').toggleClass('hidden');
		$('.over').toggleClass('visible');
		
});

	$('.bounce').click(function(){
    $('main').moveSectionDown();
})
});
