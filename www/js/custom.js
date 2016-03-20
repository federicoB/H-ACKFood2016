/**
 * Created by MatteoPellegrino on 20/03/16.
 */
$(document).ready(function() {
    $("figure").on('touchstart', function(){
        $(this).get(0).hover();
    });
    
    $('#partecipa').on('click', function () {
        $("#img-cena").attr("src", "images/CENA2.png");
       // window.scrollTo(0, 0);
    })
});