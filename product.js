const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =
  "http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/bag/" + id;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (!id) {
      handleData(data);
    } else handleBag(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(bags) {
  bags.forEach(handleBag);
}

function handleBag(bag) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);
  copy.querySelector("img").src = bag.pictures[0].guid;
  copy.querySelector("img").src = bag.pictures[1].guid;
  copy.querySelector("img").src = bag.pictures[2].guid;
  copy.querySelector("img").src = bag.pictures[3].guid;
  copy.querySelector("h2").textContent = `${bag.title.rendered} `;
  copy.querySelector("p.Price").textContent = `${bag.price}` + " DKK";
  copy.querySelector("p.prod-info").textContent = `${bag.description}`;
  copy.querySelector("p.color").textContent = "Color: " + `${bag.color}`;
  copy.querySelector("h4 ").textContent = "Material: " + `${bag.material}`;

  document.querySelector("main").appendChild(copy);
}
