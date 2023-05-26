let nameCount = 2;

let createNameField = () => {
 
  let nameField = document.createElement("INPUT");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("Placeholder", "Name " + nameCount);
  nameField.setAttribute("Name", "Name " + nameCount);

  let addbtn = document.createElement("button");
  addbtn.setAttribute("type", "button");
  addbtn.setAttribute("value", "Add");
  addbtn.addEventListener("click", createNameField);
  let addtext = document.createTextNode("Add");
  addbtn.append(addtext);

  let deletebtn = document.createElement("button");
  deletebtn.setAttribute("type", "button");
  deletebtn.setAttribute("value", "Delete");
  //deletebtn.addEventListener("click", deleteNameField);
  deletebtn.addEventListener("click", (e) => {
    //console.log(e.target.parentNode)
    e.target.parentNode.remove();
    nameCount--;
  });

  let btntext = document.createTextNode("Delete");
  deletebtn.append(btntext);

  
  /*console.log(document.getElementById("names").children[0])
  if (document.getElementById("names").children[0].children.length == 2)
  {
    console.log(document.getElementById("names").children[0]);
    document.getElementById("names").children[0].append(deletebtn);
  }*/

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");
  nameDiv.append(nameField);

  nameDiv.append(addbtn);
  nameDiv.append(deletebtn);

  document.getElementById("names").appendChild(nameDiv);
  nameCount++;
};

let deleteNameField = () => {

  console.log(nameCount);

  let names = document.getElementById("names");
  names.removeChild(names.lastChild);
  nameCount--;
}