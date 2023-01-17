if(window.innerWidth<918){
    document.querySelector(".abt_us").addEventListener("click", function () {
        // document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.toggle("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")

    })
    document.querySelector(".cars").addEventListener("click", function () {
        document.querySelector(".cars_within").classList.toggle("real_show")
        document.querySelector(".cars_within").classList.remove("show")
    })
}
else{
    document.querySelector(".abt_us").addEventListener("mouseover", function () {
        // document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")
        
    })
    
    document.querySelector(".abt_us").addEventListener("mouseout", function () {
        // document.querySelector(".abt_us_within").classList.remove("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")
        document.querySelector(".abt_us_within").classList.remove("real_show")

    
    })
    document.querySelector(".cars").addEventListener("mouseover", function () {
        document.querySelector(".cars_within").classList.add("real_show")
        document.querySelector(".cars_within").classList.remove("show")

    })
    
    document.querySelector(".cars").addEventListener("mouseout", function () {
        document.querySelector(".cars_within").classList.remove("show")
        document.querySelector(".cars_within").classList.remove("real_show")
    })

}
console.log(window.innerWidth)



document.querySelector(".navbar-brand").addEventListener("mouseover", function () {
    document.querySelector("#navbar-brandImg").setAttribute("src", "img/logo_non_inverted.png")
    document.querySelector(".navbar-brand").style.background = "white"
    document.querySelector("#navbar-brandHeading").style.color = "#232323"



})

document.querySelector(".navbar-brand").addEventListener("mouseout", function () {
    document.querySelector("#navbar-brandImg").setAttribute("src", "img/logo.png")
    document.querySelector(".navbar-brand").style.background = "none"
    document.querySelector("#navbar-brandHeading").style.color = "white"


})

// document.querySelector(".navbar ").addEventListener("scroll", function () {
//     document.querySelector(".navbar").style.opacity = "0.8"
//     document.querySelector(".navbar").classList.toggle("sticky-top", window.scrollY>0)
// })

function reached() {
    document.querySelector(".navbar").style.opacity = "0.9"
    // document.querySelector(".navbar").classList.add("sticky-top")
}
function reachedBack() {
    document.querySelector(".navbar").style.opacity = "1"
    // document.querySelector(".navbar").classList.remove("sticky-top")
}

const observer = new IntersectionObserver(
    (entries) =>{
        const ent = entries[0]
        console.log(ent)
        ent.isIntersecting === false
        ?reached()
        :reachedBack()
    },
    {
        root: null,
        rootMargin:"-180px",
        threshold:  0,
    }
);
observer.observe(document.querySelector(".h1tag"))