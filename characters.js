
const handleClick = async () => {
    console.log("hallo");}
//     const ulItem = document.getElementById("info-list");
//     ulItem.innerHTML = "";
  
//     let select = document.getElementById("dropdown");
//     let value = select.options[select.selectedIndex].value;
  
//     let JSONdata = await fetch(
//       `https://the-one-api.dev/v2/${value}`,
//       {
//       headers: {
//         Authorization: "Bearer " + "F3Y4z5i4JLiNiRv2zfYI",
//       },
//       mode: 'cors'
//       }
//     );
//     let data = await JSONdata.json();
//     data.docs.forEach((book) => {
//       const newListItem = document.createElement("li");
//       newListItem.innerHTML = book.name;
//       ulItem.appendChild(newListItem);
//     });
//   };
  
  const characterButton = document.getElementById("character-button");
  characterButton.addEventListener("click", handleClick);
  