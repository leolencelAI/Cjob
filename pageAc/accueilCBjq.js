// Partie jquery over input
$(document).ready(function(){
    $("#header-search-mobile").mouseover(function(){
        $(this).css("background-color", "#04BBFF");
        $("#header-search-mobile2").css("background-color", "#04BBFF");
        $("#form-search_bar").css("background-color", "#04BBFF");
    });
});

$(document).ready(function(){
    $("#header-search-mobile").mouseout(function(){
        $(this).css("background-color", "#666670");
        $("#header-search-mobile2").css("background-color", "#666670");
        $("#form-search_bar").css("background-color", "#666670");
    });
});

$(document).ready(function(){
    $("#header-search-mobile2").mouseover(function(){
        $(this).css("background-color", "#04BBFF");
        $("#header-search-mobile").css("background-color", "#04BBFF");
        $("#form-search_bar").css("background-color", "#04BBFF");
    });
});

$(document).ready(function(){
    $("#header-search-mobile2").mouseout(function(){
        $(this).css("background-color", "#666670");
        $("#header-search-mobile").css("background-color", "#666670");
        $("#form-search_bar").css("background-color", "#666670");
    });
});


//icon lien
$(document).ready(function () {
$("#github").click(function(){
  window.location.href = "http://stackoverflow.com";  //change
});
});

$(document).ready(function () {
$("#facebook").click(function(){
  window.location.href = "http://stackoverflow.com";  //change
});
});

$(document).ready(function () {
$("#twitter").click(function(){
  window.location.href = "http://stackoverflow.com"; //change
});
});

$(document).ready(function () {
$("#telegram").click(function(){
  window.location.href = "http://stackoverflow.com"; //change
});
});

$(document).ready(function () {
$("#instagram").click(function(){
  window.location.href = "http://stackoverflow.com"; //change
});
});

$(document).ready(function () {
$("#medium").click(function(){
  window.location.href = "http://stackoverflow.com"; //change
});
});

//over fontawesome icon sens 1
$(document).ready(function(){
    $(".footer__lien0").mouseover(function(){
        $(".fa-github").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien0").mouseout(function(){
        $(".fa-github").css("color", "#8A0D1E");
    });
});

$(document).ready(function(){
    $(".footer__lien1").mouseover(function(){
        $(".fa-facebook").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien1").mouseout(function(){
        $(".fa-facebook").css("color", "#8A0D1E");
    });
});

$(document).ready(function(){
    $(".footer__lien2").mouseover(function(){
        $(".fa-twitter-square").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien2").mouseout(function(){
        $(".fa-twitter-square").css("color", "#8A0D1E");
    });
});

$(document).ready(function(){
    $(".footer__lien3").mouseover(function(){
        $(".fa-telegram").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien3").mouseout(function(){
        $(".fa-telegram").css("color", "#8A0D1E");
    });
});

$(document).ready(function(){
    $(".footer__lien4").mouseover(function(){
        $(".fa-instagram-square").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien4").mouseout(function(){
        $(".fa-instagram-square").css("color", "#8A0D1E");
    });
});

$(document).ready(function(){
    $(".footer__lien5").mouseover(function(){
        $(".fa-medium").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".footer__lien5").mouseout(function(){
        $(".fa-medium").css("color", "#8A0D1E");
    });
});

//over fontawesome icon sens 2

$(document).ready(function(){
    $(".fa-github").mouseover(function(){
        $(".footer__lien0").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-github").mouseout(function(){
        $(".footer__lien0").css("color", "black");
    });
});

$(document).ready(function(){
    $(".fa-facebook").mouseover(function(){
        $(".footer__lien1").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-facebook").mouseout(function(){
        $(".footer__lien1").css("color", "black");
    });
});

$(document).ready(function(){
    $(".fa-twitter-square").mouseover(function(){
        $(".footer__lien2").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-twitter-square").mouseout(function(){
        $(".footer__lien2").css("color", "black");
    });
});

$(document).ready(function(){
    $(".fa-telegram").mouseover(function(){
        $(".footer__lien3").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-telegram").mouseout(function(){
        $(".footer__lien3").css("color", "black");
    });
});

$(document).ready(function(){
    $(".fa-instagram-square").mouseover(function(){
        $(".footer__lien4").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-instagram-square").mouseout(function(){
        $(".footer__lien4").css("color", "black");
    });
});

$(document).ready(function(){
    $(".fa-medium").mouseover(function(){
        $(".footer__lien5").css("color", "#04BBFF");
    });
});

$(document).ready(function(){
    $(".fa-medium").mouseout(function(){
        $(".footer__lien5").css("color", "black");
    });
});

//footer redirection vmmap
$(document).ready(function () {
$("#visa").click(function(){
  window.open('https://www.visa.fr/', '_blank');
});
});

$(document).ready(function () {
$("#mastercard").click(function(){
  window.open('https://www.mastercard.fr/fr-fr.html', '_blank');
});
});

$(document).ready(function () {
$("#maestro").click(function(){
  window.open('https://www.credit-agricole.fr/particulier/compte/carte-bancaire/l-autre-carte.html', '_blank');
});
});

$(document).ready(function () {
$("#AM").click(function(){
  window.open('https://www.americanexpress.com/fr-fr/', '_blank');
});
});

$(document).ready(function () {
$("#paypal").click(function(){
  $(this).attr('target', '_blank');
  window.open('https://www.paypal.com/fr/webapps/mpp/home', '_blank');
});
});

//footer accueil redirection logo
$(document).ready(function () {
$("#logo_footer_c").click(function(){
  window.location.href = "http://localhost/CBjob/accueilCB.html";  
});
});

