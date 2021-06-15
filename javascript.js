// -------- Floating Button --------

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if(scroll >= 10) {
      $(".top").addClass("flotting-btn");
      $(".arrow").removeClass("hide");
    } else {
      $(".top").removeClass("flotting-btn");
    }
});

// -------- Burger Menu --------

document.getElementById("MenuItems").style.maxHeight = "0px";

function menutoggle(){
    if(document.getElementById("MenuItems").style.maxHeight == "0px"){
        document.getElementById("MenuItems").style.maxHeight = "200px";
    }
    else{
        document.getElementById("MenuItems").style.maxHeight = "0px";
    }
}


// -------- product gallery --------

var ProductImg = document.querySelector(".productImg");
const small_img_row = document.querySelector(".small-img-row").children;

function changeImg(event){
    ProductImg.src =  event.children[0].src;

    for(let i=0; i<small_img_row.length;i++){
        small_img_row[i].classList.remove("active");
    }
    event.classList.add("active");
}


// -------- toggle form --------

function signup(){
    document.getElementById("LoginForm").style.transform = "translateX(0px)";
    document.getElementById("SignupForm").style.transform = "translateX(0px)";
    document.getElementById("Indicator").style.transform = "translateX(100px)";
}

function login(){
    document.getElementById("LoginForm").style.transform = "translateX(300px)";
    document.getElementById("SignupForm").style.transform = "translateX(300px)";
    document.getElementById("Indicator").style.transform = "translateX(0px)";
}

