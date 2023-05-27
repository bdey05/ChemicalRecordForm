let nameCount = 2;

window.onload = () => {
    document.getElementById("initialname").addEventListener("click", (e) => {
      e.target.parentNode.remove();
      nameCount--;
      if (nameCount == 2) {
        document.getElementById("names").children[0].children[1].disabled = true;
      }
    });
}

let createNameField = () => {
  if (nameCount == 2) {
    document.getElementById("names").children[0].children[1].disabled = false;
  }

  let nameField = document.createElement("INPUT");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("Placeholder", "Chemical Name");
  nameField.setAttribute("Name", "Name " + nameCount);
  nameField.required = true;

  let addbtn = document.createElement("button");
  addbtn.setAttribute("type", "button");
  addbtn.setAttribute("value", "Add");
  addbtn.addEventListener("click", createNameField);
  let addtext = document.createTextNode("Add");
  addbtn.append(addtext);

  let deletebtn = document.createElement("button");
  deletebtn.setAttribute("type", "button");
  deletebtn.setAttribute("value", "Delete");
  deletebtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    nameCount--;
    if (nameCount == 2) {
      document.getElementById("names").children[0].children[1].disabled = true;
    }
  });

  let btntext = document.createTextNode("Delete");
  deletebtn.append(btntext);

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");
  nameDiv.append(nameField);

  nameDiv.append(deletebtn);

  document.getElementById("names").appendChild(nameDiv);
  nameCount++;
};

let generateChemicalJSON = () => {
  document.getElementById("error").innerHTML = "";
  document.getElementById("chemicalRecordOutput").children[0].innerHTML = "";
  document.getElementById("chemicalRecordOutput").children[1].innerHTML = "";
  const chemicalNames = []
  for (let i = 0; i < document.getElementById("names").children.length; i++)
  {
    chemicalNames.push(document.getElementById("names").children[i].children[0].value);
  }
  const CAS = document.getElementById("CASinput").value;
  if (!CASValidator(CAS))
  {
    return displayError("Invalid CAS Number");
  }

  let chemicalJSON = {
    "names": chemicalNames,
    "CAS": CAS
  };
  document.getElementById("chemicalRecordOutput").style.display = "flex";
  document.getElementById("copy").style.display = "block";
  document.getElementById("chemicalRecordOutput").children[0].innerHTML = "Generated Chemical Record: ";
  document.getElementById("chemicalRecordOutput").children[1].innerHTML = JSON.stringify(chemicalJSON, null, 4);
}

let CASValidator = (CAS) => {
  if (!CAS || !CAS.match(/[0-9]{2,7}-[0-9]{2}-[0-9]/)) {
    return false;
  }

  let sum = 0;
  let digits = CAS.replace(/-/g, '');

  for (let i = digits.length - 2; i >= 0; i--) {
    sum += parseInt(digits[i]) * (digits.length - i - 1);
  }
  
  return sum % 10 === parseInt(CAS.slice(-1));
}

let displayError = (error) => {
  document.getElementById("chemicalRecordOutput").style.display = "flex";
  document.getElementById("copy").style.display = "none";

  
  document.getElementById("error").innerHTML = error;
}

let copyJSON = () => {
  let copiedJSON = document.getElementById("JSONChemicalRecord");
  navigator.clipboard.writeText(copiedJSON.innerHTML);
  document.getElementById("snackbar").className = "show";
  setTimeout(() => { document.getElementById("snackbar").className = document.getElementById("snackbar").className.replace("show", ""); }, 3000);

}