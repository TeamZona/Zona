const aboutusbtn = document.getElementById("aboutus_btn");
const aboutuspara = document.getElementById("aboutus_description");

const aboutusimg1 = document.getElementById("aboutus_img1");
const aboutusimg2 = document.getElementById("aboutus_img2");
const aboutusimg3 = document.getElementById("aboutus_img3");
const aboutusimg4 = document.getElementById("aboutus_img4");

aboutusbtn.addEventListener('click',() =>{
    aboutuspara.classList.remove('inactive');
    aboutusbtn.classList.add('inactive');

    aboutusimg1.classList.remove('inactive');
    aboutusimg2.classList.remove('inactive');
    aboutusimg3.classList.remove('inactive');
    aboutusimg4.classList.remove('inactive');
} )


// ----------------------------------------Events--------------------------------------------

let swiper = new Swiper('.swiper-container',{

    cssMode:true,

    loop:true,
    
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },

    mousewheel:true,
    keyboard:true,
    
});

const eventsbtn = document.getElementById("event_btn"),
eventsslider = document.getElementById("events_slides");

eventsbtn.addEventListener("click",()=>{
    eventsbtn.classList.add("inactive");
    eventsslider.classList.remove("inactive");
})

