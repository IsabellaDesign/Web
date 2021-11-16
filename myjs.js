getTheBags();
getTheImages();

function getTheImages() {
  fetch("http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/media")
    .then((res) => res.json())
    .then(setupImages);
}

function setupImages(imgArray) {
  const template = document.querySelector("template#template").content;
  const parentElement = document.querySelector(".collectionSection");

  imgArray.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = bag.guid.rendered;
    document.querySelector("main").appendChild(copy);
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

//     // copy.querySelector("img.bagPic").src =
//     //   bag._embedded["wp:featuremedia"][0].media_details.sizes.full.source_url;

//     document.querySelector("main").appendChild(copy);
//   });
// }
