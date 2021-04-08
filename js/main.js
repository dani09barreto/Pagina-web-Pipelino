/*-------------------nav code--------------------------*/
document.querySelector('.icon').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('rebase');
})

/* ------------------slider code ----------------------*/
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

    prev.addEventListener("click", function(){
        prevSlide();
        circleindicator ();
        reseTime();
    })
    next.addEventListener("click", function(){
        nextSlide();
        circleindicator ();
        reseTime();
    })

    function circleIndicator(){
        for (let i = 0; i < slides.length; i ++){
            const div = document.createElement ("div");
            div.innerHTML = i + 1;
            div.setAttribute("onclick","indicateSlide(this)")
            div.id = i;
            if (i == 0){
                div.className = "active";
            }
            indicator.appendChild(div);
        }
    }
    circleIndicator ();

    function indicateSlide(element) {
        index = element.id;
        changeSlide ();
        circleindicator ();
        reseTime();
    }
    function circleindicator (){
        for (let i = 0; i < indicator.children.length; i ++){
            indicator.children[i].classList.remove("active");
        }
        indicator.children[index].classList.add("active");
    }
    function nextSlide (){
       if (index == slides.length -1){
           index = 0;
       }
       else{
            index ++;
       }
       changeSlide();
    }

    function prevSlide(){
        if (index == 0){
            index = slides.length - 1;
        }
        else{
            index --;
        }
        changeSlide();
    }
    function changeSlide (){
        for (let i = 0; i < slides.length; i ++){
            slides[i].classList.remove("active")
        }
       slides[index].classList.add("active");
    }

    function reseTime() {
        clearInterval(timer);
        timer = setInterval(autoPlay,9000);
    }
    function autoPlay() {
        nextSlide ();
        circleindicator ();
    }
    let timer = setInterval(autoPlay,9000);