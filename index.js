const handleClick = async () => {
  const ulItem = document.getElementById("info-list");
  ulItem.innerHTML = ""; //reset for new fetch;
  let select = document.getElementById("dropdown");
  let value = select.options[select.selectedIndex].value;
  
  let JSONdata = await fetch(
    `https://the-one-api.dev/v2/${value}`, {
    headers: {
      Authorization: "Bearer " + "F3Y4z5i4JLiNiRv2zfYI",
    },
    mode: 'cors'
  });
  let data = await JSONdata.json();

  if (value === 'book' || value === 'character' || value === 'movie') {
    data.docs.forEach((entry) => {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = entry.name;
      ulItem.appendChild(newListItem);
    });
  } else if (value === 'quote') {
    data.docs.forEach((entry) => {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = entry.name;
      ulItem.appendChild(newListItem);
    });
  }
};

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", handleClick);
