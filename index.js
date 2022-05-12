const handleClick = () => {
  const ulItem = document.getElementById("info-list");
  ulItem.innerHTML = "";

  let select = document.getElementById("dropdown");
  let value = select.options[select.selectedIndex].value;

  fetch(`https://the-one-api.dev/v2/${value}`, {
    headers: {
      Authorization: "Bearer " + "F3Y4z5i4JLiNiRv2zfYI",
    },
    mode: 'cors'
  }).then((JSONdata) => {
    JSONdata.json().then((data) => {
      console.log(data.docs);

      data.docs.forEach((book) => {
        const newListItem = document.createElement("li");
        newListItem.innerHTML = book.name;
        ulItem.appendChild(newListItem);
      });
    });
  });
};

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", handleClick);
