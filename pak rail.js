var home =document.getElementsByClassName("link");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(homes of home){
        homes.classList.remove("active-link");
    }
   for(tabcontent of tabcontents)
   tabcontent.classList.remove("active-content");

   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-content")
    
}