let tablink = document.querySelectorAll("#tabs1 .d-tabs-list > li");
let tabItem = document.querySelectorAll("#tabs1 .b-tab__item");

let tablink2 = document.querySelectorAll("#tabs2 .d-tabs-list > li");
let tabItem2 = document.querySelectorAll("#tabs2 .b-tab__item");



tablink.forEach(tabsActive);
tablink2.forEach(tabsActive2);

function tabsActive(item) {
    item.addEventListener("click", function() {
   

        let tabId =  item.getAttribute("data-tabs");
        

        if (!item.classList.contains("active")) {

        tablink.forEach(function(item) {
            item.classList.remove("active");
        });
        
        tabItem.forEach(function(item) {
            item.classList.remove("active");
        });
        

        item.classList.add("active");
        document.querySelector(tabId).classList.add("active");
    }

    })
}


function tabsActive2(item) {
    item.addEventListener("click", function() {
   

        let tabId =  item.getAttribute("data-tabs");
        

        if (!item.classList.contains("active")) {

        tablink2.forEach(function(item) {
            item.classList.remove("active");
        });
        
        tabItem2.forEach(function(item) {
            item.classList.remove("active");
        });
        

        item.classList.add("active");
        document.querySelector(tabId).classList.add("active");
    }

    })
}

document.querySelector("#tabs1 .d-tabs-list > li").click();
document.querySelector("#tabs2 .d-tabs-list > li").click();


