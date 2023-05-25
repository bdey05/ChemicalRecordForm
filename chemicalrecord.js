let nameCount = 2; 

let createNameField = () => {
  let nameField = document.createElement("INPUT");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("Placeholder", "Name " + nameCount);
  nameField.setAttribute("Name", "Name " + nameCount);

  let addbtn = document.createElement("button");
  addbtn.setAttribute("type", "button");
  addbtn.setAttribute("value", "Add")
  let addtext = document.createTextNode("Add");
  addbtn.append(addtext);

  let deletebtn = document.createElement("button");
  deletebtn.setAttribute("type", "button");
  deletebtn.setAttribute("value", "Delete")
  let btntext = document.createTextNode("Delete");
  deletebtn.append(btntext);

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv")
  nameDiv.append(nameField);
  
  
  nameDiv.append(addbtn);
  nameDiv.append(deletebtn);
  
  
  document.getElementById("names").appendChild(nameDiv);
  nameCount++;
}
