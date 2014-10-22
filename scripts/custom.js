$(window).load(function (){
	
	$('#tweets').tweetable({username: 'TotFreeMagazine', time: true, limit: 5, replies: true, position: 'append'});

	displayRadiotitle();
	$('#home').click(function(){
		    $('.home').show();
        	$('.news').hide();
         	$('.about').hide();
            
        
     });
		
	$('#news').click(function(){
		$('.home').hide();
		$('.news').show();
                $('.about').hide();
                displayNews();        
        
	});
	
     $('#about').click(function(){
		$('.home').hide();
		$('.news').hide();
        $('.about').show();
        
	});

     
function displayNews() {

$.getJSON("http://ingalb.info/tfm/test.php", function(data) {
   //console.log(data);
    $.each(data, function(i,item){
     $("#lajme").append("<div class=\"blog-post\"><h4 class=\"blog-title shadow\">"+ item.title +"</h4><p class=\"blog-text shadow\">"+ item.description +"</p><div class=\"clear\"></div><ul class=\"blog-post-details\"><li class=\"blog-more\"><a href=\"" + item.link + "\">Leggi</a></li></ul></div><div class=\"clear\"></div><div class=\"blog-decoration\"></div>");
     $('#lajme-hide').hide();
     if ( i == 9 ) return false;
   });
   });

}

function displayRadiotitle() {
      
      $.getJSON("http://api.spreaker.com/user/4787387/episode/latest", function(data) {
      $("#titulliradio").append(data.response.episode.show.title);
      x=data.response.episode.show.image.medium_url;
      x=x.replace(/\\/gi, "");
      $(".cover").attr("src",x);
      });
}	
	
});