let tablink = document.querySelectorAll("#tabs1 .d-tabs-list > li");
let tabItem = document.querySelectorAll("#tabs1 .b-tab__item");

let tablink2 = document.querySelectorAll("#tabs2 .d-tabs-list > li");
let tabItem2 = document.querySelectorAll("#tabs2 .b-tab__item");



tablink.forEach(tabsActive);
tablink2.forEach(tabsActive2);

function tabsActive(item) {
    item.addEventListener("click", function () {


        let tabId = item.getAttribute("data-tabs");


        if (!item.classList.contains("active")) {

            tablink.forEach(function (item) {
                item.classList.remove("active");
            });

            tabItem.forEach(function (item) {
                item.classList.remove("active");
            });


            item.classList.add("active");
            document.querySelector(tabId).classList.add("active");
        }

    })
}


function tabsActive2(item) {
    item.addEventListener("click", function () {


        let tabId = item.getAttribute("data-tabs");


        if (!item.classList.contains("active")) {

            tablink2.forEach(function (item) {
                item.classList.remove("active");
            });

            tabItem2.forEach(function (item) {
                item.classList.remove("active");
            });


            item.classList.add("active");
            document.querySelector(tabId).classList.add("active");
        }

    })
}

document.querySelector("#tabs1 .d-tabs-list > li").click();
document.querySelector("#tabs2 .d-tabs-list > li").click();




function slider() {



    let bSlide = document.querySelectorAll(".b-slide");
    let screenWidth = screen.width;
    document.querySelector(".b-slider").style.width = screenWidth * bSlide.length + "px";
    let offset = 0;
    let ofset2 = 0;
    let dottIndex = 0;





    for (let i = 0; i < bSlide.length; i++) {
        bSlide[i].style.width = screenWidth + "px";
        let x = i + 1;
        var li = document.createElement('li');
        li.innerHTML = "0" + x;
        document.querySelector(".b-slide__dott").append(li);


    }


    let dottList = document.querySelectorAll(".b-slide__dott > li");

    for (let i = 0; i < dottList.length; i++) {

        dottList[0].classList.add('active');

        dottList[i].addEventListener("click", function () {
            offset = [i] * screenWidth;

            for (let x = 0; x < dottList.length; x++) {
                dottList[x].classList.remove('active');
            }



            document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";

            dottList[i].classList.add('active');
            document.querySelector(".b-slider").style.left = -offset + "px";
            dottIndex = i;
        });

    }

    document.querySelector(".b-slide__top").classList.add("distable");

    function sliderArrowDistable(){ 



        if (dottIndex == 0) {
            
            document.querySelector(".b-slide__top").classList.add("distable");
    
        }
        else {
            document.querySelector(".b-slide__top").classList.remove("distable");

        }


        
        if (dottIndex == dottList.length - 1) {
            
            document.querySelector(".b-slide__bottom").classList.add("distable");
    
        }
        else {
            document.querySelector(".b-slide__bottom").classList.remove("distable");

        }

    };


 

    function slideTop() {

        
    


        if (dottIndex > 0) {
            dottIndex--;
           
        }



        if (offset == 0) {
            
            offset;
            document.querySelector(".b-slide__top").classList.add("distable");

        }
        else {
            offset -= screenWidth;
            document.querySelector(".b-slide__top").classList.remove("distable");
        }


        if (offset < 0) {
            offset = (bSlide.length - 1) * screenWidth;
            
        }

        document.querySelector(".b-slider").style.left = -offset + "px";






        if (ofset2 <= 0) {

            ofset2;


        }

        else {
            ofset2 = (71 * dottIndex) - 71;


        }
        

        document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";





        for (let i = 0; i < dottList.length; i++) {
            if (dottIndex < dottList.length) {
                dottList[i].classList.remove('active');
            }

            if (dottIndex == i) {
             
                dottList[i].classList.add('active');
            }


        }

        sliderArrowDistable();


    };





    function slideBottom() {

    

        if (dottIndex < bSlide.length - 1) {
            dottIndex++;
        }




        if (offset == (bSlide.length - 1) * screenWidth) {
            offset;

        } else {

            offset += screenWidth;

        }


        document.querySelector(".b-slider").style.left = -offset + "px";



        if (ofset2 > 71 * (dottList.length - 4)) {
            ofset2;
        }
        else {
            ofset2 = (71 * dottIndex) - 71;
            document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";
        }



        for (let i = 0; i < dottList.length; i++) {
            if (dottIndex < dottList.length) {
                dottList[i].classList.remove('active');
            }

            if (dottIndex == i) {
                dottList[i].classList.add('active');
            }


        }

        sliderArrowDistable();
        

    };






    document.querySelector(".b-slide__top").addEventListener("click", slideTop);
    document.querySelector(".b-slide__bottom").addEventListener("click", slideBottom);





}

slider();