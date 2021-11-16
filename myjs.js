getTheBags();

function getTheBags() {
  fetch(
    "http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/bag?per-page=100&_embed"
  )
    .then((res) => res.json())
    .then(setupBags);
}

function setupBags(bagArray) {
  console.log(bagArray);
  const template = document.querySelector("template#template").content;
  const parentElement = document.querySelector("main");

  bagArray.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector("h1.bagName").textContent = bag.title.rendered;

    // copy.querySelector("img.bagPic").src =
    //   bag._embedded["wp:featuremedia"][0].media_details.sizes.full.source_url;

    document.querySelector("main").appendChild(copy);
  });
}
var menu = document.getElementById("menu");
var nav = document.getElementById("navigation");
var exit = document.getElementById("exit");

menu.addEventListener("click", function (e) {
  nav.classList.add("nav-transition");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
  e.preventDefault();
});

nav.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
});

function openNav() {
  document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}
