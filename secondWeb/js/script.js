var typed = new Typed(".typing", {
    strings: ["   ", "DotNet", "DotNet Developer"],
    typeSpeed: 100,
    startDelay: 300,
    BackSpeed: 60,
    backDelay: 300,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totlaSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totlaSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(j) {
    allSection[j].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totlaSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totlaSection; i++) {
        allSection[i].classList.toggle("open");
    }
}



filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeProjects(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addProjects(x[i], "show");
  }
}

function addProjects(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeProjects(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
const btnContainer = document.querySelector(".portfolio-Btn-Container");
let btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function onClickProject(element){
  modal.style.display = "block";
  modalImg.src = `images/portfolio/${element.id}.png`;
  captionText.innerHTML = element.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}