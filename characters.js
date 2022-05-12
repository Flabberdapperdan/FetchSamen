
const handleClick = async () => {
//    console.log("hallo");}
    const ulItem = document.getElementById("info-list");
    ulItem.innerHTML = "";
  
    let select = document.getElementById("character-input").value;
    
  
    let JSONdata = await fetch(
      `https://the-one-api.dev/v2/character?name=${select}`,
      {
      headers: {
        Authorization: "Bearer " + "F3Y4z5i4JLiNiRv2zfYI",
      },
      mode: 'cors'
      }
    );
    let data = await JSONdata.json();
    data.docs.forEach((character) => {
        console.log(character);
        const newListItemName = document.createElement("li");
        newListItemName.innerHTML = character.name;
        ulItem.appendChild(newListItemName);

        const newListItemRace = document.createElement("li");
        newListItemRace.innerHTML = character.race;
        ulItem.appendChild(newListItemRace);
        const newListItemUrl = document.createElement("li");
        
        newListItemUrl.innerHTML = character.wikiUrl;
        ulItem.appendChild(newListItemUrl);
    }
    
    );
  };
  
  const characterButton = document.getElementById("character-button");
  characterButton.addEventListener("click", handleClick);
  