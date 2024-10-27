


/*  
===============================================
===============================================
*/

/* start testim 1 */

let t1slides = document.querySelectorAll(".testim-1 .slide-container");
let t1index = 0;
let t1next = document.querySelector(".testim-1 #next");
let t1prev = document.querySelector(".testim-1 #prev");


t1next.addEventListener("click", () => {
    t1slides[t1index].classList.remove("active");
    t1index = (t1index + 1) % t1slides.length;
    t1slides[t1index].classList.add("active");
});

t1prev.addEventListener("click", () => {
    t1slides[t1index].classList.remove("active");
    t1index = (t1index - 1 + t1slides.length) % t1slides.length;
    t1slides[t1index].classList.add("active");
});





/* end testim 1 */

/*  
===============================================
===============================================
*/

/* start testim 2 */

let t2wrapper = document.querySelector(".testim-2 .wrapper");
let t2indicators = [...document.querySelectorAll(".testim-2 .indicators button")]
let t2currentTestimonial = 0;

t2indicators.forEach((item, i) => {
    item.addEventListener("click", () => {
        t2indicators[t2currentTestimonial].classList.remove("active");
        t2wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add("active");
        t2currentTestimonial = i;
    });
});




/* end testim 2 */

/*  
===============================================
===============================================
*/

/* start testim 3 */

let t3btn = [...document.querySelectorAll(".testim-3 .btn")];
let t3slide = document.querySelector(".testim-3 #slide");

t3btn[0].onclick = function() {
    t3slide.style.transform = "translateX(0px)";
    for(i = 0; i < 4; i++) {
        t3btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

t3btn[1].onclick = function() {
    t3slide.style.transform = "translateX(-800px)";
    for(i = 0; i < 4; i++) {
        t3btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

t3btn[2].onclick = function() {
    t3slide.style.transform = "translateX(-1600px)";
    for(i = 0; i < 4; i++) {
        t3btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

t3btn[3].onclick = function() {
    t3slide.style.transform = "translateX(-2400px)";
    for(i = 0; i < 4; i++) {
        t3btn[i].classList.remove("active");
    }
    this.classList.add("active");
}




/* end testim 3 */

/*  
===============================================
===============================================
*/

/* start testim 4 */



/* end testim 4 */

/*  
===============================================
===============================================
*/

/* start testim 5 */



/* end testim 5 */

/*  
===============================================
===============================================
*/

/* start testim 6 */



/* end testim 6 */

/*  
===============================================
===============================================
*/

/* start testim 7 */



/* end testim 7 */

/*  
===============================================
===============================================
*/

/* start testim 8 */



/* end testim 8 */

/*  
===============================================
===============================================
*/

/* start testim 9 */



/* end testim 9 */

/*  
===============================================
===============================================
*/

/* start testim 10 */



/* end testim 10 */

/*  
===============================================
===============================================
*/

/* start testim 11 */



/* end testim 11 */

/*  
===============================================
===============================================
*/

/* start testim 12 */



/* end testim 12 */

/*  
===============================================
===============================================
*/

/* start testim 13 */



/* end testim 13 */

/*  
===============================================
===============================================
*/

/* start testim 14 */



/* end testim 14 */

/*  
===============================================
===============================================
*/

/* start testim 15 */



/* end testim 15 */

/*  
===============================================
===============================================
*/

