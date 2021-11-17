// const urlParams = new URLSearchParams(window.location.search);
const url = "http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/";

// THE API key
const options = {
  headers: {
    "x-apikey": "",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(bags) {
  bags.forEach((bag) => {
    console.log(bag);
    // make a template
    // grab it
    const myTemplate = document.querySelector("template").content;
    // clone it
    const myClone = myTemplate.cloneNode(true);
    // populate with data
    myClone.querySelector("h3").textContent = bag.title;
    myClone.querySelector("img").src = bag.pictures;
    myClone.querySelector("p.color").textContent = "Color: " + bag.color;
    myClone.querySelector("p.Price").textContent = "Price: " + bag.price;
    myClone.querySelector("p.prod-info").textContent = bag.description;
    myClone.querySelector("p.dimensions").textContent = bag.dimensions;
    myClone.querySelector("p.material-name").textContent = bag.material;

    // append to DOM
    document.querySelector("main").appendChild(myClone);
  });
}
