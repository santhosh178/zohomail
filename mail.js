// header stricky navigation bar

let stickyHeader = document.getElementById("stricy-navbar");
window.addEventListener("scroll",()=>{
    let curScroll = window.scrollY;
    if (curScroll >= 150) {
      stickyHeader.style.display="block";
    }
    else {
      stickyHeader.style.display="none";
    }
});

// show more button

function showmore() {
  let show = document.querySelectorAll("#show-all");
  show.forEach(element => {
    element.classList.remove("show-all");
    document.getElementById("question-show").style.display = "none";
    document.getElementById("email-opcity").style.opacity= "1"
  });
}

//image change src 

let darkBtn = document.querySelector("#dark");
darkBtn.addEventListener("click", function () {
  var img = document.getElementById('imgs').src;
  if (img.indexOf('mail-mobile-black.webp') != -1) {
    document.getElementById('imgs').src = 'mail-mobile-white.webp';
    darkBtn.classList.add("darks");
    document.getElementById("white").style.backgroundColor = "white";
    document.getElementById("white").style.border = "1px solid black";
  }
  else {
    document.getElementById('imgs').src = 'mail-mobile-black.webp';
    darkBtn.classList.remove("darks");
    document.getElementById("white").style.backgroundColor = "rgb(36, 33, 33)";

  }
});

// showall button

let showll = document.getElementById("showall");
showll.addEventListener("click", function () {
  let list = document.querySelectorAll(".ans");
  list.forEach(element => {
    element.classList.toggle("mystyle");
    element.classList.remove("question-list");
  });
});

// form data change

let personal = document.querySelector("#personal");
let business = document.querySelector("#business");
personal.addEventListener("click",function(){
  document.querySelector(".personal-email").style.display = "block";
  document.querySelector(".business-email").style.display = "none";
});
business.addEventListener("click",function(){
  document.querySelector(".personal-email").style.display = "none";
  document.querySelector(".business-email").style.display = "block";
});


//question show

let accBtns=document.querySelectorAll('.acc-btn');
accBtns.forEach((btn,i) => btn.addEventListener('click', () => { doShow(i) }))

let accCont=document.querySelectorAll(`.question-list`);
let showContent=1;
function doShow(i){

   doHide();

   let el=document.querySelector(`.acc-cont-${i + 1}`)
  el.classList.add('show');
  showContent= i + 1;
  console.log(showContent);
}
function doHide(){
  // accCont.forEach(cont => cont.classList.remove('show'));
  console.log(showContent);
  let el=document.querySelector(`.acc-cont-${showContent}`)
  el.classList.toggle('show');
}
