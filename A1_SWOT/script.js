  window.addEventListener ('scroll', () => {
      const scroll = window.scrollY;
     console.log(scroll);
        if (scroll > 550 && scroll < 940){
            document.getElementById("bild1").classList.remove("bild1");
            document.getElementById("bild1").classList.add("bild11");

            document.getElementById("bild2").classList.remove("bild22");
            document.getElementById("bild2").classList.remove("bild2");
            document.getElementById("bild2").classList.add("bild21");
            

            document.getElementById("bild3").classList.remove("bild32");
            document.getElementById("bild3").classList.remove("bild3");
            document.getElementById("bild3").classList.add("bild31");

            document.getElementById("bild4").classList.remove("bild4");
            document.getElementById("bild4").classList.add("bild41");

            document.getElementById("bild5").classList.remove("bild5");
            document.getElementById("bild5").classList.add("bild51");

            document.getElementById("bild6").classList.remove("bild6");
            document.getElementById("bild6").classList.add("bild61");

            document.getElementById("bild7").classList.remove("bild7");
            document.getElementById("bild7").classList.add("bild71");

            document.getElementById("video1").style.display = "none";

            document.getElementById("video4").style.display = "none";

            document.getElementById("video5").style.display = "none";

            document.getElementById("video6").style.display = "none";
            
            document.getElementById("video7").style.display = "none";

        } else if ( scroll < 550 ){
            document.getElementById("bild1").classList.remove("bild11");
            document.getElementById("bild1").classList.add("bild1");

            document.getElementById("bild2").classList.remove("bild21");
            document.getElementById("bild2").classList.add("bild2");

            document.getElementById("bild3").classList.remove("bild31");
            document.getElementById("bild3").classList.add("bild3");

            document.getElementById("bild4").classList.remove("bild41");
            document.getElementById("bild4").classList.add("bild4");

            document.getElementById("bild5").classList.remove("bild51");
            document.getElementById("bild5").classList.add("bild5");

            document.getElementById("bild6").classList.remove("bild61");
            document.getElementById("bild6").classList.add("bild6");

            document.getElementById("bild7").classList.remove("bild71");
            document.getElementById("bild7").classList.add("bild7");
        } else if (scroll > 940 && scroll < 1640){
            document.getElementById("bild1").classList.remove("bild13");
            document.getElementById("video1").style.display = "block";

            document.getElementById("bild2").classList.remove("bild21");
            document.getElementById("bild2").classList.remove("bild23");
            document.getElementById("bild2").classList.add("bild22");
            
            document.getElementById("bild3").classList.remove("bild31");
            document.getElementById("bild3").classList.remove("bild33");
            document.getElementById("bild3").classList.add("bild32");

            document.getElementById("bild4").classList.remove("bild43");
            document.getElementById("video4").style.display = "block";
            
            document.getElementById("bild5").classList.remove("bild53");
            document.getElementById("video5").style.display = "block";

            document.getElementById("bild6").classList.remove("bild63");
            document.getElementById("video6").style.display = "block";

            document.getElementById("bild7").classList.remove("bild73");
            document.getElementById("video7").style.display = "block";
        } else if (scroll > 1640 && scroll < 2570){
        
            document.getElementById("bild1").classList.remove("bild14");
            document.getElementById("bild1").classList.remove("bild11");
            document.getElementById("bild1").classList.add("bild13");
          
            document.getElementById("bild2").classList.remove("bild24");
            document.getElementById("bild2").classList.remove("bild22");
            document.getElementById("bild2").classList.add("bild23");

            document.getElementById("bild3").classList.remove("bild34");
            document.getElementById("bild3").classList.remove("bild32");
            document.getElementById("bild3").classList.add("bild33");

            document.getElementById("bild4").classList.remove("bild44");
            document.getElementById("bild4").classList.remove("bild41");
            document.getElementById("bild4").classList.add("bild43");
            
            document.getElementById("bild5").classList.remove("bild54");
            document.getElementById("bild5").classList.remove("bild51");
            document.getElementById("bild5").classList.add("bild53");

            document.getElementById("bild6").classList.remove("bild64");
            document.getElementById("bild6").classList.remove("bild61");
            document.getElementById("bild6").classList.add("bild63");

            document.getElementById("bild7").classList.remove("bild74");
            document.getElementById("bild7").classList.remove("bild71");
            document.getElementById("bild7").classList.add("bild73");

            document.getElementById("video1").style.display = "none";

            document.getElementById("video4").style.display = "none";

            document.getElementById("video5").style.display = "none";

            document.getElementById("video6").style.display = "none";
            
            document.getElementById("video7").style.display = "none";
        } else if (scroll > 2570 && scroll <3110){

            document.getElementById("bild1").classList.remove("bild15");
            document.getElementById("bild1").classList.remove("bild13");
            document.getElementById("bild1").classList.add("bild14");

            document.getElementById("bild2").classList.remove("bild25");
            document.getElementById("bild2").classList.remove("bild23");
            document.getElementById("bild2").classList.add("bild24");

            document.getElementById("bild3").classList.remove("bild35");
            document.getElementById("bild3").classList.remove("bild33");
            document.getElementById("bild3").classList.add("bild34");
    
            document.getElementById("bild4").classList.remove("bild45");
            document.getElementById("bild4").classList.remove("bild43");
            document.getElementById("bild4").classList.add("bild44");
     
            document.getElementById("bild5").classList.remove("bild55");
            document.getElementById("bild5").classList.remove("bild53");
            document.getElementById("bild5").classList.add("bild54");
    
            document.getElementById("bild6").classList.remove("bild65");
            document.getElementById("bild6").classList.remove("bild63");
            document.getElementById("bild6").classList.add("bild64");
     
            document.getElementById("bild7").classList.remove("bild75");
            document.getElementById("bild7").classList.remove("bild73");
            document.getElementById("bild7").classList.add("bild74");
        
        } else if (scroll > 3110 && scroll < 4250){
            document.getElementById("bild1").classList.remove("bild16");
            document.getElementById("bild1").classList.remove("bild14");
            document.getElementById("bild1").classList.add("bild15");

           
            document.getElementById("bild2").classList.remove("bild26");
            document.getElementById("bild2").classList.remove("bild24");
            document.getElementById("bild2").classList.add("bild25");

     
            document.getElementById("bild3").classList.remove("bild36");
            document.getElementById("bild3").classList.remove("bild34");
            document.getElementById("bild3").classList.add("bild35");
    
            document.getElementById("bild4").classList.remove("bild46");
            document.getElementById("bild4").classList.remove("bild44");
            document.getElementById("bild4").classList.add("bild45");
     
            document.getElementById("bild5").classList.remove("bild56");
            document.getElementById("bild5").classList.remove("bild54");
            document.getElementById("bild5").classList.add("bild55");
    
            document.getElementById("bild6").classList.remove("bild66");
            document.getElementById("bild6").classList.remove("bild64");
            document.getElementById("bild6").classList.add("bild65");
     
            document.getElementById("bild7").classList.remove("bild76");
            document.getElementById("bild7").classList.remove("bild74");
            document.getElementById("bild7").classList.add("bild75");
        } else if (scroll > 4250 ){

            document.getElementById("bild1").classList.remove("bild15");
            document.getElementById("bild1").classList.add("bild16");

           
            
            document.getElementById("bild2").classList.remove("bild25");
            document.getElementById("bild2").classList.add("bild26");

     
           
            document.getElementById("bild3").classList.remove("bild35");
            document.getElementById("bild3").classList.add("bild36");
    
         
            document.getElementById("bild4").classList.remove("bild45");
            document.getElementById("bild4").classList.add("bild46");
     
            document.getElementById("bild5").classList.remove("bild55");
            document.getElementById("bild5").classList.add("bild56");
    
   
            document.getElementById("bild6").classList.remove("bild65");
            document.getElementById("bild6").classList.add("bild66");
     
            document.getElementById("bild7").classList.remove("bild75");
            document.getElementById("bild7").classList.add("bild76");
        }
  });



