
// function circleAnimation() {

// let item = document.querySelector(".b-digitalCompany__item");
// let circle = document.querySelectorAll(".b-digitalCompany__circle > i");


// window.addEventListener('scroll', function () {
// var c = item.getBoundingClientRect();
// let scrolltop = document.body.scrollTop + c.top;

// let procent = window.innerHeight / 100;
// let procent2 = scrolltop / procent;
// console.log(scrolltop);

//    if (window.innerHeight > scrolltop && scrolltop > 0) {



//         for (let i = 0;i<circle.length;i++){
//             circle[i].style.height = procent2 + "%";
//         }


//     }


// });

// }

function tabs(tabsId) {


    let tablink = tabsId.querySelectorAll(".d-tabs-list > li");
    let tabItem = tabsId.querySelectorAll(".b-tab__item");


    for (let i = 0; i < tablink.length; i++) {
        tablink[i].addEventListener("click", function () {

            for (let c = 0; c < tablink.length; c++) {
                tablink[c].classList.remove("active");
            }

            this.classList.add("active");

            for (let x = 0; x < tabItem.length; x++) {
                tabItem[x].classList.remove("active");
            }

            tabItem[i].classList.add("active");
        });
    }
    tablink[0].click();
}


function slider() {
    let bSlide = document.querySelectorAll(".b-slide");
    let screenWidth = window.innerWidth;
    document.querySelector(".b-slider").style.width = screenWidth * bSlide.length + "px";
    let offset = 0;
    let ofset2 = 0;
    let dottIndex = 0;
    let dottHeight = 71;

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

            if (i == 0) {
                ofset2 = [i] * dottHeight;
            }
            else if (i == dottList.length - 1) {
                ofset2 = ([i] * dottHeight) - (dottHeight * 2);
            }
            else {
                ofset2 = ([i] * dottHeight) - dottHeight;
            }
            document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";

            dottList[i].classList.add('active');
            document.querySelector(".b-slider").style.left = -offset + "px";
            dottIndex = i;
        });

    }

    document.querySelector(".b-slide__top").classList.add("distable");

    function sliderArrowDistable() {
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
            ofset2 = (dottHeight * dottIndex) - dottHeight;
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
        if (ofset2 > dottHeight * (dottList.length - 4)) {
            ofset2;
        }
        else {
            ofset2 = (dottHeight * dottIndex) - dottHeight;
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



function sliderProject() {

    let sliderImg = document.querySelectorAll(".b-project__slide__item");
    let sliderBody = document.querySelector(".b-project__slide__list");
    let offset = 0;

    let windowScreen = document.querySelector(".container").clientWidth;
    let widthItem;

    let sliderImgWidht = ((sliderImg.length / 2) * (windowScreen / 3));
    if (windowScreen < 768) {
        sliderImgWidht = ((sliderImg.length / 2) * windowScreen);
        if (windowScreen < 576) {
            sliderImgWidht = ((sliderImg.length) * windowScreen);
        }

        for (let i = 0; i < sliderImg.length; i++) {
            sliderImg[i].style.width = windowScreen + "px";
        }
        widthItem = windowScreen;
    }
    if (windowScreen > 768) {
        for (let i = 0; i < sliderImg.length; i++) {
            sliderImg[i].style.width = windowScreen / 3 + "px";
        }
        widthItem = windowScreen / 3;
    }


    sliderBody.style.width = sliderImgWidht + "px";
    if (sliderImg.length > 6) {
        let linkPrev = document.createElement('a');
        linkPrev.className = "b-project__slide__prev";
        document.querySelector(".b-project__slider").append(linkPrev);

        let linkNext = document.createElement('a');
        linkNext.className = "b-project__slide__next";
        document.querySelector(".b-project__slider").append(linkNext);


        function prev() {

            let leftPosition = sliderBody.style.left;
            leftPosition = leftPosition.replace(/[^0-9]/gim, "");
            if (leftPosition == 0) {
                offset = 0;

            }
            else {
                offset += +widthItem;

            }
            sliderBody.style.left = offset + "px";
        }

        function next() {
            let leftPosition = sliderBody.style.left;
            leftPosition = leftPosition.replace(/[^0-9]/gim, "");
            console.log(leftPosition + "=" + sliderImgWidht);
            if (leftPosition >= sliderImgWidht / 2) {

                offset = 0;

            }
            else {
                offset += -widthItem;

            }
            sliderBody.style.left = offset + "px";
        }
        linkPrev.addEventListener("click", prev);
        linkNext.addEventListener("click", next);

    }




}

function fixHeader() {
    let header = document.querySelector(".b-head");


    window.addEventListener('scroll', function () {

        if (pageYOffset > 80 || burgerClick) {
            header.classList.add("fixed");
        }

        else {
            header.classList.remove("fixed");
        }

    });
}

function modal() {
    let modalPopup = document.querySelector(".modal-popup");
    let bTabLinkOrder = document.querySelectorAll(".b-tab-linkOrder");


    for (let i = 0; i < bTabLinkOrder.length; i++) {
        bTabLinkOrder[i].addEventListener("click", function () {
            modalPopup.style.display = "flex";
        });
    }

    modalPopup.addEventListener("click", function (event) {
        if (event.target == this) {
            this.style.display = "none";
        }
    })

}

function lightbox() {
    let imgList = document.querySelectorAll(".b-project__slide__item");

    for (let i = 0; i < imgList.length; i++) {

        imgList[i].addEventListener("click", function (event) {
            event.preventDefault();
            let lightboxParentDiv = document.createElement('div');
            let lightboxChildDiv = document.createElement('div');
            let img = document.createElement('img');
            let close = document.createElement('span');
            let span = document.createElement('span');
            let dec = imgList[i].querySelector(".b-project__slide__item__txt").innerHTML;
            img.setAttribute("src", imgList[i].href);
            close.classList.add("lightbox__close");
            span.classList.add("lightbox__span");
            span.innerHTML = dec;
            lightboxParentDiv.classList.add("lightbox");
            lightboxChildDiv.classList.add("lightbox__fl");
            document.body.appendChild(lightboxParentDiv);
            lightboxParentDiv.appendChild(lightboxChildDiv);
            lightboxChildDiv.appendChild(img);
            lightboxChildDiv.appendChild(close);
            lightboxChildDiv.appendChild(span);
            lightboxParentDiv.addEventListener("click", function (event) {
                if (event.target == this) {
                    lightboxParentDiv.remove();
                }
            });
            close.addEventListener("click", function () {
                lightboxParentDiv.remove();
            })
        });
    }

}

let burgerClick = false;
function mobMenu() {
    let mobileMenu = document.querySelector(".b-header__mobile-menu");


    document.querySelector(".b-header__burger").addEventListener("click", function () {
        if (burgerClick == true) {
            burgerClick = false;
            mobileMenu.style.display = "none";
            return this.classList.remove("open");
        }
        burgerClick = true;
        this.classList.add("open");

        mobileMenu.style.display = "flex";
    });
}


function sameHeight() {
let bPartitionIntroArray = [];
let bPartitionIntro = document.querySelectorAll(".b-partition__intro");


bPartitionIntro.forEach(function(el) {
    bPartitionIntroArray.push(el.offsetHeight);
});

if (window.innerWidth > 768) {
bPartitionIntro.forEach(function(el) {
    el.style.height = Math.max(...bPartitionIntroArray) + "px";
});
}
}

sameHeight();
mobMenu();
fixHeader();
lightbox();
modal();
slider();
sliderProject();
tabs(tabs1);
tabs(tabs2);
tabs(tabs3);


