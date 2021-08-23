import services from "./services/services.js";

let selectedRow = null;

const submitButton = document.getElementById("submit");
const personsTable = document.getElementById("employeeList");
const paginationsTable = document.getElementById("tbl-paginations");

//event listener for submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (validate()) {
    if (selectedRow == null) createPersons(1);
    resetForm();
  }
});

//clearing the tables
const clearTables = () => {
  let rowCount = personsTable.rows.length - 1;
  for (let i = 0; i < rowCount; i++) {
    personsTable.deleteRow(1);
  }
  paginationsTable.deleteRow(0);
};

//event listener for click events
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "paginator") {
    clearTables();
    getPersons(e.target.text);
  }
  if (e.target.className === "update") {
    let id = e.target.getAttribute("data-person-id");
    console.log(id);

    const updateItem = async () => {
      let listUpdate = await services.update(id);
      console.log("updated", listUpdate);
    };
    updateItem();
  }
  if (e.target.className === "delete") {
    let id = e.target.getAttribute("data-person-id");
    console.log(id);
    const deleteItem = async () => {
      let listDelete = await services.remove(id);
      console.log("removed", listDelete);
    };
    deleteItem();
  }
});

//reading the values sent
function readFormData() {
  var formData = {};

  formData["email"] = document.getElementById("email").value;
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["aavatar"] = document.getElementById("aavatar").value;
  return formData;
}

//reseting the form after value is sent
function resetForm() {
  document.getElementById("email").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("aavatar").value = "";
  selectedRow = null;
}

//email validation
function validate() {
  let isValid = true;
  if (document.getElementById("email").value == "") {
    isValid = false;
    document.getElementById("emailValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("emailValidationError")
        .classList.contains("hide")
    )
      document.getElementById("emailValidationError").classList.add("hide");
  }
  return isValid;
}

//getting value from the API
const getPersons = async (page) => {
  let persons = await services.list(page);
  //console.log(persons);
  persons.data.map((person) => {
    const row = personsTable.insertRow(-1);
    row.insertCell(0).innerHTML = person.id;
    row.insertCell(1).innerHTML = person.email;
    row.insertCell(2).innerHTML = person.first_name;
    row.insertCell(3).innerHTML = person.last_name;
    row.insertCell(4).innerHTML = person.avatar;
    row.insertCell(
      5
    ).innerHTML = `<a class="update" href="#" data-person-id=${person.id}
     >Update</a> | <a class="delete" href="#" data-person-id=${person.id} >Delete</a>`;
  });
  const row = paginationsTable.insertRow(0);
  for (let i = 1; i <= persons.total_pages; i++) {
    row.insertCell(i - 1).innerHTML = `<a class="paginator" href="#">${i}</a>`;
  }
};

getPersons(1);

//creating new persons
const createPersons = async (model) => {
  let formData = readFormData();
  let persons = await services.create(formData, model);
  console.log("create", persons);

  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(0);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = persons.id;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = formData.email;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = formData.firstName;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = formData.lastName;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = formData.aavatar;
  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a  data-person-id=${persons.id}>Update</a>
                       <a  data-person-id=${persons.id} >Delete</a>`;
};
