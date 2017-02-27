var ancho = window.innerWidth;
var altura = window.innerHeight;
	$(window).load(function() {
	resizeBg()
		$('.popup').click(function(event) {
	              var width  = 650,
	                  height = 450,
	                  left   = ($(window).width()  - width)  / 2,
	                  top    = ($(window).height() - height) / 2,
	                  url    = this.href,
	                  opts   = 'status=1' +
	                           ',width='  + width  +
	                           ',height=' + height +
	                           ',top='    + top    +
	                           ',left='   + left;
	                  window.open(url, 'twitter', opts);
	                  return false;                  
	            
		})

				// function onPlayerReady(event) { // función cuando el video está listo
				//    $(".play-icon").click(function(){ // botón de play que realiza la funcionalidad 1
				//       $(".video-popup").fadeIn(); // muestra la capa que contiene al video
				//       $(this).fadeOut(); // oculta el botón
				//       player.playVideo(); // inicia la reproducción del video
				//    });
				// }

				// function onPlayerStateChange(event) { // función cuando el video cambia, para realizar la funcionalidad 3
				//    if(event.data === 0) { // condición que revisa si los datos del video están en 0, es decir, detenido
				//       $(".video-popup").fadeOut(); // oculta la capa que contiene al video
				//       $(".play-icon").fadeIn(); // muestra nuevamente el botón play
				//    }
				// }

				// $(".close").click(function(){ // botón que detiene el video y oculta la capa
				//     $(".video-popup").FadeOut();
				//     $(".play-icon").fadeIn();
				//     stopVideo($("#player")); // llamado a la función que detiene el video
				// });
		    
				// var stopVideo = function(player) { // función para detener el video (genérica)
				//     var vidSrc = player.prop("src"); // creamos una variable con la url del video
				//        vidSrc = vidSrc.replace("?autoplay=1", ""); // quitamos el autoplay de la url del video
				//     player.prop("src", ""); // indicamos que la url del video será vacío (se borra del DOM)
				//     player.prop("src", vidSrc); // recuperamos la url del video de la variable ya guardada
				// };
	     });

$(window).resize(resizeBg)

  	function resizeBg() {
  			var ancho = window.innerWidth;
			var altura = window.innerHeight;
			var h1_height = document.querySelector("h1").offsetHeight;
	    	var timeline= document.getElementsByClassName('content')[0];
	    		timeline.style.position = "absolute";
	  		    timeline.style.top = parseInt(h1_height + 42) + 'px';
	 }

