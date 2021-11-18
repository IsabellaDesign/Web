// getTheBags();
getTheImages();

function getTheImages() {
  fetch("http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/media")
    .then((res) => res.json())
    .then(setupImages);
}

function setupImages(imgArray) {
  const template = document.querySelector("template#template").content;
  const parentElement = document.querySelector("section.collectionSection");

  imgArray.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = bag.guid.rendered;
    copy.querySelector("img").alt = bag.slug.rendered;
    parentElement.append(copy);
  });
}

function getCategories() {
  fetch(endpoint + "categories?parent=6")
    .then((res) => res.json())
    .then(setupCategories);
}
function setupCategories(catArray) {
  const template = document.querySelector("template#categorytemplate").content;
  const parentElement = document.querySelector("main");
  catArray.forEach((cat) => {
    const copy = template.clodenote(true);
    copy.querySelector("img").setAttribute("href", "product.html?id=" + bag.id);
    parentElement.appendChild(copy);
  });
}

// function getTheBags() {
//   fetch(
//     "http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/bag?per-page=100&_embed"
//   )
//     .then((res) => res.json())
//     .then(setupBags);
// }

// function setupBags(bagArray) {
//   console.log(bagArray);
//   const template = document.querySelector("template#template").content;
//   const parentElement = document.querySelector(".collectionSection");

//   bagArray.forEach((bag) => {
//     const copy = template.cloneNode(true);
//     copy.querySelector("h1.bagName").textContent = bag.title.rendered;
//     document.querySelector("main").appendChild(copy);
//   });
// }
