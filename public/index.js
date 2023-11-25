const scrollUp = ()=>{
    const scrollUp= document.getElementById("scroll_up");
   if(this.scrollY >= 500){
    scrollUp.classList.add("show_scroll");
   }
   else{
    scrollUp.classList.remove("show_scroll");
   }
}
const scrollShadow = ()=>{
    const navShadow = document.getElementById("navShadow")
    if(this.scrollY >= 100){
        navShadow.classList.add("show_shadow");
    }
    else{
        navShadow.classList.remove("show_shadow");
    }
}

window.addEventListener('scroll',() => {
    scrollUp();
    scrollShadow();   
});

const goTop=()=>{
    window.scrollTo(0,0);
}

