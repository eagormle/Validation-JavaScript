var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var textt = document.body.querySelector(".text");
var buttonn = document.body.querySelector(".submit");
var number = document.body.querySelector(".number");
var list = [];
var pages = [
  {
    title: "Home",
    content: "Home"
  },
  {
    title: "About",
    content: "About",
  },
  {
    title: "View",
    content: "View Notes"
  }
];

function login() {
  var valEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  if (username === "coolStudent123") {
    valEle.innerHTML = "Submitted";
  } else if (username !== "coolStudent123") {
    valEle.innerHTML = "You didn't type anything vaild!";
  }
}
 
document.body.querySelector(".login").addEventListener("click", function () {
  login();
});

function renderList() {
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML = "";
  
  for (var i = 0; i < list.length; i++) {
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}

function submit() {
  var first = document.body.querySelector(".text").value;
  var second = " "
  var third = document.body.querySelector(".number").value;
  var text = third + second + first
  if (first.length > 0) {
    list.push(text);
    document.body.querySelector(".itmMess").innerHTML=""
  }else{
    document.body.querySelector(".itmMess").innerHTML = "not enough letters";
  }
  renderList();
}


for (var i = 0; i < pages.length; i++) {
  pageMaker(pages[i]);
}

function pageMaker(pg) {
  this.button = document.createElement("button");
  this.button.addEventListener("click", function () {
    writeStuff(pg.content, pg.title);
  });
  this.button.innerHTML = pg.title;
  nav.appendChild(button);
}

function home() {
  display.innerHTML="";
  var home_heading = document.createElement("h1");
  home_heading.innerHTML="Home";
  display.appendChild(home_heading);
  buttonn.style.display = "none";
  textt.style.display = "none";
  number.style.display = "none";
}

function about() {
  buttonn.style.display = "none";
  textt.style.display = "none";
  number.style.display = "none";
  display.innerHTML = "";
  var about_header = document.createElement("h1");
  about_header.innerHTML="About";
  display.appendChild(about_header);
  var about_name = document.createElement("h3");
  about_name.innerHTML="Ethan";
  display.appendChild(about_name);
}

function view() {
  display.innerHTML = "";
  var view_header = document.createElement("h1");
  view_header.innerHTML = "View Notes";
  display.appendChild(view_header);
  buttonn.style.display = "block";
  textt.style.display = "inline";
  number.style.display = "inline";
  buttonn.addEventListener("click", submit);
}

function writeStuff(stuff, pg) {
  if (pg == "Home") {
    home();
  } else if (pg == "About") {
    about();
  } else if (pg == "View"){
    view();
  }
}
renderList();
writeStuff(pages[0].content, "Home");