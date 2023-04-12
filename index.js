// close_icon  h-[50px]

// hamburger inline-block p-4 cursor-pointer lg:hidden

// mobile_screen_navbar
const mobile_navbar=document.querySelector(".mobile_screen_navbar")
const hamburger_icon=document.querySelector(".hamburger")
const close_icon=document.querySelector(".close_icon")

function show_navbar(){
    mobile_navbar.style.display="block"

}
function close_navbar(){
    mobile_navbar.style.display="none"
    
}

