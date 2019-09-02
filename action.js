// EX DI OGGI
// NOME REPO= js-jq-carousel
// DESCRIZIONE=
// Ricreare il carousel (o slideshow se preferite) visto a lezione.
// Quindi frecce  nex prev + pallini.
// NOTE=
// quindi una cartella del repo con il progetto,
// se poi volete far altro, es. controlli, animazioni etc.
// fate sempre cartella aggiuntiva con versione alternativa
// Se avete tempo vi consiglio di partire da zero quindi tutto html + css +js.
// Se non avete molto tempo potete partire da qui:
// https://bitbucket.org/booleancareers/lc-ex-slider-layout/src/master/

$(document).ready(function(){

$(".next").click(nextslide);
$(".prev").click(prevslide);

function nextslide(){

  var activeitems = $(".images img.active, .nav .fas.active");


if ($(".last").hasClass("active")) {
  $(".last").removeClass("active");
  $(".first").addClass("active");
} else {
  activeitems.removeClass("active").next().addClass("active");
}
};

function prevslide(){
  var activeitems = $(".images img.active, .nav .fas.active");

  if ($(".first").hasClass("active")) {
    $(".first").removeClass("active");
    $(".last").addClass("active");
  } else {
    activeitems.removeClass("active").prev().addClass("active");
  }
}


});
