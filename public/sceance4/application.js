$(document).ready(function() {
    
    $("#btn_Exe1").click(function() {
        var ex1Element = $("#Ex1"); 
        if (ex1Element.is(":visible")) {
            ex1Element.hide();
            alert("Élément caché");
        } else {
            ex1Element.show();
            alert("Élément visible");
        }
    });
    $("#Exe2 button").click(function() {
        alert($("#txt").val()) ; 
        alert()
    });
    $("#btn_Exe3").click(function() {
       $('#image').attr('src','monstera.jpg') ; 
    });
    $("#btn_Exe4").click(function() {
        var $texteAnim = $('#Exe4');
        
        
        $texteAnim.css({
            'transform': 'rotate(45deg)'
        });
        
        
        $texteAnim.css({
            'text-shadow': '2px 2px 4px #000'
        });
    });
    $('#btn_Exe5').click(function() {
        $('#image5').css("opacity", 0.5); // Réduit l'opacité (50%)
    });
    $("#btn_Exe6").click(function() {
        var radioHtml = `
        <input type="radio" id="rd_ex61" name="niveau" value="1er">
        <label for="rd_ex61">1er</label>
        <input type="radio" id="rd_ex62" name="niveau" value="2ieme">
        <label for="rd_ex62">2ieme</label>
        <input type="radio" id="rd_ex63" name="niveau" value="3ieme">
        <label for="rd_ex63">3ieme</label>
    `;

    $("#Exe6").html(radioHtml);
    });
    $("#btn_Exe7").click(function() {
        var selectedValue = $("input[name='niveau']:checked").val();
    if (selectedValue) {
        alert("Niveau d'étude sélectionné : " + selectedValue);
    } else {
        alert("Aucun niveau d'étude sélectionné.");
    }
    });
    $("#btn_Exe8").click(function() {
        var checkboxHtml = `
        <input type="checkbox" id="chk_ex" name="accord">
        <label for="chk_ex">J'accepte les règles et droits du site</label>
    `;

    $("#Exe8").html(checkboxHtml);
    });
    $("#btn_Exe9").click(function() {
        var isChecked = $("#chk_ex").is(":checked");
    if (isChecked) {
        alert("La case à cocher est cochée.");
    } else {
        alert("La case à cocher n'est pas cochée.");
        var audio = new Audio('Bip.wav');
audio.play();
    }
    });
   
    $("#btn_Exe10").click(function() {
        $("td[id^='Exe']").hide();
    });
    
});