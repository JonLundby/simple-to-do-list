"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  console.log("app initialized...");
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  /*
  const listItem = document.createElement("li");
  const spanElement = document.createElement("span");
  const deleteBtn = document.createElement("button");
  
  spanElement.textContent = newToDo.value;
  deleteBtn.textContent = "delete";

  // console.log(spanElement);
  // console.log(listItem);
  // console.log(deleteBtn);

  listItem.appendChild(spanElement);
  listItem.appendChild(deleteBtn);

  document.querySelector("#to-do-list").appendChild(listItem);
  */

  const listHTML = /*html*/ `<li>
  <span>${newToDo.value}</span>
  <button>Delete</button>
  </li>`;

  //console.log(newToDo.value.length);
  if (newToDo.value.length > 0) {
    list.insertAdjacentHTML("beforeend", listHTML);
    //eventlistener på delete knappen som kalder removeToDo
    list.querySelector("li:last-child button").addEventListener("click", removeToDo);
  } else {
    initApp();
  }

  newToDo.value = "";
}

function removeToDo() {
  //parentNode referere  til det elemen som delete kanppen ligger i
  this.parentNode.remove();
}
