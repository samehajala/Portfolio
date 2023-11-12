$(function() {
  
   var phrases=$('.phrases li') ; 
   var i=0 ; 
   var image=$(".Image");
   var audio=new Audio("songs/HBD.mp3");

   phrases.eq(0).show() ; 
   phrases.click(function () {
    
    if (i < phrases.length - 1) {
        i++;
        phrases.eq(i).show();
    } else {
        $('.interface').hide();
        image.show();
        audio.play(); // Utilisez .get(0) pour obtenir l'élément audio HTML
    }
    
})
  });
