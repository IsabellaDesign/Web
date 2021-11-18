const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const endpoint =
  "http://arimmdna.eu/kea/2/digitalcontent/wp21S/wp-json/wp/v2/bag/" + id;

fetch(url, options)
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
    } else handleSingleCake(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(bags) {
  bags.forEach(handleBag);
}

function handleBag(bag) {
  const template = document.querySelector("template").content;
  const parentElement = document.querySelector("main").content;
  bags.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img");
    copy.querySelector("h3").textContent = `${bag.title.content}`;
    copy.querySelector("p.Price").textContent = `${bag.price.content}`;
    copy.querySelector(
      "p.prod-info"
    ).textContent = `${bag.description.content}`;
    copy.querySelector("p.color").textContent = `${bag.color.content}`;
    copy.querySelector("h4 ").textContent = `${bag.material.content}`;

    parentElement.appendChild(copy);
  });
}
