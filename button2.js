
const handleClick = () => {
    console.log("Hallo"); 
    // const ulItem = document.getElementById("info-list");
    // ulItem.innerHTML = "";
  
    // let select = document.getElementById("dropdown");
    // let value = select.options[select.selectedIndex].value;
  
    // fetch(`https://the-one-api.dev/v2/${value}`, {
    //   headers: {
    //     Authorization: "Bearer " + "F3Y4z5i4JLiNiRv2zfYI", // <-- moest nog een spatie na Bearer
    //   },
    // }).then((JSONdata) => {
    //   JSONdata.json().then((data) => {
    //     console.log(data.docs);
  
    //     data.docs.forEach((character) => {
    //       const newListItem = document.createElement("li");
    //       // newListItem.innerText(book); waarom werk dit niet?
  
    //       newListItem.innerHTML = character.name;
    //       ulItem.appendChild(newListItem);
    //     });
    //   });
    // });
  };
  

const fetchButton = document.getElementById("character-button");
fetchButton.addEventListener("click", handleClick);