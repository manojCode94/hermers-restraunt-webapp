 // bottom to top btn
 const upperBtn = document.querySelector(".upper-Btn");
 window.addEventListener("scroll", function() {
    if(window.pageYOffset < 100) {
        upperBtn.style.display = 'none';
    } else {
        upperBtn.style.display = 'flex';
        upperBtn.style.visibility = 'visible';
    }
})


 // style switcher
 document.querySelector(".color-switcher-btn").onclick= () => {
    document.querySelector(".color-switcher").classList.toggle("active");
}

const thembtn = document.querySelectorAll(".theme-buttons");
thembtn.forEach(color => {
    color.addEventListener("click", () => {
        const dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color", dataColor);
    });
});
   
