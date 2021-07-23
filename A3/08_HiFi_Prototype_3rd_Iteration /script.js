    function geratan(){
        window.onclick = e => {
             console.log(e.target.id);  
             var clicked = e.target.id;
             var elem = e.target;
             if (clicked == "macBook-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("mb");
                    document.getElementById('mb-img').style.display = "block";
                    document.getElementById('ech-img').style.display = "none";
                    document.getElementById('ipo-img').style.display = "none";
                    document.getElementById('sliderTitle').innerHTML = 'Philipps MacBook';
                    document.getElementById('gerats').innerHTML = 'MACBOOK';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                } else if (clicked == "echo-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("mb");
                    document.getElementById('mb-img').style.display = "none";
                    document.getElementById('ipo-img').style.display = "none";
                    document.getElementById('ech-img').style.display = "block";
                    document.getElementById('sliderTitle').innerHTML = 'Amazon Echo Dot';
                    document.getElementById('gerats').innerHTML = 'ECHO';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }  else if (clicked == "laptop-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("lt");
                    document.getElementById('lt-img').style.display = "block";
                    document.getElementById('sliderTitle').innerHTML = 'HP Laptop';
                    document.getElementById('gerats').innerHTML = 'LAPTOP';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }   else if (clicked == "iPhone-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ipo");
                    document.getElementById('ipo-img').style.display = "block";
                    document.getElementById('sliderTitle').innerHTML = 'Philipps iPhone 8';
                    document.getElementById('gerats').innerHTML = 'IPHONE';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }   else if (clicked == "samsung-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ss");
                    document.getElementById('ss-img').style.display = "block";
                    document.getElementById('fri-img').style.display = "none";
                    document.getElementById('sliderTitle').innerHTML = 'Samsung A10';
                    document.getElementById('gerats').innerHTML = 'SAMSUNG';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }   else if (clicked == "fridge-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("fri");
                    document.getElementById('ss-img').style.display = "none";
                    document.getElementById('ipa-img').style.display = "none";
                    document.getElementById('fri-img').style.display = "block";
                    document.getElementById('sliderTitle').innerHTML = 'Bosch Smart Fridge';
                    document.getElementById('gerats').innerHTML = 'FRIDGE';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }   else if (clicked == "iPad-2") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ipa");
                    document.getElementById('ipa-img').style.display = "block";
                    document.getElementById('sliderTitle').innerHTML = 'iPad Pro';
                    document.getElementById('gerats').innerHTML = 'IPAD';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                }   else if (clicked == "arrow") {
                    document.getElementsByClassName('slider')[0].classList.remove("show");
                    document.getElementsByClassName('svgElem')[0].classList.remove("mb");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipo");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipa");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipa");
                    document.getElementsByClassName('svgElem')[0].classList.remove("fri");
                    document.getElementsByClassName('svgElem')[0].classList.remove("lt");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ss");
                    document.getElementsByClassName('svgElem')[0].classList.remove("mb2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipo2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipa2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipa2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("fri2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("lt2");
                    document.getElementsByClassName('svgElem')[0].classList.remove("ss2");
                    document.getElementById('gerats').innerHTML = 'GERÄTE';
                    document.getElementById('mb-img').style.display = "none";
                    document.getElementById('ipo-img').style.display = "none";
                    document.getElementById('ipa-img').style.display = "none";
                    document.getElementById('ech-img').style.display = "none";
                    document.getElementById('ss-img').style.display = "none";
                    document.getElementById('lt-img').style.display = "none";
                    document.getElementById('fri-img').style.display = "none";
                }   else if (clicked == "arrowright") {
                    document.getElementsByClassName('sliderright')[0].classList.remove("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.remove("show");
                    document.getElementById('gerats').innerHTML = 'GERÄTE';
                    document.getElementById('connect').style.display = "none";
                }   
                
                
                
                    else if (clicked == "download" || clicked == "upload-2" || clicked == "bandbreite1" || clicked == "nutzer1") {
                    document.getElementsByClassName('sliderright')[0].classList.add("show");
                    document.getElementsByClassName('seitenleiste')[0].classList.add("show");
                    document.getElementsByClassName('slider')[0].classList.remove("show");
                    document.getElementById('sliderName').innerHTML = 'Kaiser';
                    document.getElementById('kaiser-dat').style.display = "block";
                    document.getElementById('elisa-dat').style.display = "none";
                    document.getElementById('philipp-dat').style.display = "none";
                    document.getElementById('kaiser-line').style.display = "block";
                    document.getElementById('elisa-line').style.display = "none";
                    document.getElementById('philipp-line').style.display = "none";
                    document.getElementById('kaiser-dev').style.display = "block";
                    document.getElementById('elisa-dev').style.display = "none";
                    document.getElementById('philipp-dev').style.display = "none";
                    document.getElementById('connect').style.display = "none";
                }   else if (clicked == "download2" || clicked == "upload2" || clicked == "bandbreite2" || clicked == "nutzer2") {
                    document.getElementsByClassName('seitenleiste')[0].classList.add("show");
                    document.getElementsByClassName('sliderright')[0].classList.add("show");
                    document.getElementsByClassName('slider')[0].classList.remove("show");
                    document.getElementById('sliderName').innerHTML = 'Philipp';
                    document.getElementById('kaiser-dat').style.display = "none";
                    document.getElementById('elisa-dat').style.display = "none";
                    document.getElementById('philipp-dat').style.display = "block";
                    document.getElementById('kaiser-line').style.display = "none";
                    document.getElementById('elisa-line').style.display = "none";
                    document.getElementById('philipp-line').style.display = "block";
                    document.getElementById('philipp-dev').style.display = "block";
                    document.getElementById('kaiser-dev').style.display = "none";
                    document.getElementById('elisa-dev').style.display = "none";
                    document.getElementById('connect').style.display = "block";
                    
                }   else if (clicked == "Path_2" || clicked == "Path_3" || clicked == "Path_4"|| clicked == "Path_4" || clicked == "nutzer3") {
                    document.getElementsByClassName('seitenleiste')[0].classList.add("show");
                    document.getElementsByClassName('sliderright')[0].classList.add("show");
                    document.getElementsByClassName('slider')[0].classList.remove("show");
                    document.getElementById('sliderName').innerHTML = 'Elisa';
                    document.getElementById('kaiser-dat').style.display = "none";
                    document.getElementById('elisa-dat').style.display = "block";
                    document.getElementById('philipp-dat').style.display = "none";
                    document.getElementById('kaiser-line').style.display = "none";
                    document.getElementById('elisa-line').style.display = "block";
                    document.getElementById('philipp-line').style.display = "none";
                    document.getElementById('kaiser-dev').style.display = "none";
                    document.getElementById('elisa-dev').style.display = "block";
                    document.getElementById('philipp-dev').style.display = "none";
                    document.getElementById('connect').style.display = "none";
                } 


                   else if (clicked == "macBook1") {
                    document.getElementById('sliderTitle').innerHTML = 'Philipps MacBook';
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipa2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("mb2");
                    document.getElementById('mb-img').style.display = "block";
                    document.getElementById('ipa-img').style.display = "none";
                    document.getElementById('gerats').innerHTML = 'MACBOOK';
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'echo1');
                }  else if (clicked == "echo1") {
                    document.getElementById('sliderTitle').innerHTML = 'Amazon Echo Dot';
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementById('gerats').innerHTML = 'ECHO';
                    document.getElementById('mb-img').style.display = "none";
                    document.getElementById('ech-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'laptop1');
                }  else if (clicked == "laptop1") {
                    document.getElementById('sliderTitle').innerHTML = 'HP Laptop';
                    document.getElementsByClassName('svgElem')[0].classList.remove("mb2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("lt2");
                    document.getElementById('gerats').innerHTML = 'LAPTOP';
                    document.getElementById('ech-img').style.display = "none";
                    document.getElementById('lt-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'iPhone1');
                }   else if (clicked == "iPhone1") {
                    document.getElementById('sliderTitle').innerHTML = 'Philipps iPhone 8';
                    document.getElementsByClassName('svgElem')[0].classList.remove("lt2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ipo2");
                    document.getElementById('gerats').innerHTML = 'IPHONE';
                    document.getElementById('lt-img').style.display = "none";
                    document.getElementById('ipo-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'samsung1');
                }   else if (clicked == "samsung1") {
                    document.getElementById('sliderTitle').innerHTML = 'Samsung A10';
                    document.getElementsByClassName('svgElem')[0].classList.remove("ipo2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ss2");
                    document.getElementById('gerats').innerHTML = 'SAMSUNG';
                    document.getElementById('ipo-img').style.display = "none";
                    document.getElementById('ss-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'fridge1');
                }   else if (clicked == "fridge1") {
                    document.getElementById('sliderTitle').innerHTML = 'Bosch Smart Fridge';
                    document.getElementsByClassName('svgElem')[0].classList.remove("ss2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("fri2");
                    document.getElementById('gerats').innerHTML = 'FRIDGE';
                    document.getElementById('ss-img').style.display = "none";
                    document.getElementById('fri-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'iPad1');
                }   else if (clicked == "iPad1") {
                    document.getElementById('sliderTitle').innerHTML = 'iPad Pro';
                    document.getElementsByClassName('svgElem')[0].classList.remove("fri2");
                    document.getElementsByClassName('slider')[0].classList.add("show");
                    document.getElementsByClassName('svgElem')[0].classList.add("ipa2");
                    document.getElementById('gerats').innerHTML = 'IPAD';
                    document.getElementById('fri-img').style.display = "none";
                    document.getElementById('ipa-img').style.display = "block";
                    elem.removeAttribute('id');
                    elem.setAttribute('id', 'macBook1');
                }  
        } 
    }


    function nutzan(){
        document.getElementsByClassName('svgElem')[0].style.display = 'none';
        document.getElementsByClassName('ddElem')[0].style.display = 'block';
        document.getElementsByClassName('ndauer')[0].style.display = 'none';
        document.getElementsByClassName('signal')[0].style.display = 'block';
    }

    function nutzaus(){
        document.getElementsByClassName('svgElem')[0].style.display = 'block';
        document.getElementsByClassName('ddElem')[0].style.display = 'none';
        document.getElementsByClassName('ndauer')[0].style.display = 'block';
        document.getElementsByClassName('signal')[0].style.display = 'none';
    }
   
