let input = document
  .querySelector("#add-todo")
  .addEventListener("click", function () {
    let userInput = document.querySelector("#user-input").value;
    let p=document.createElement('p');
    p.textContent=userInput;
    document.querySelector("#sub-main").appendChild(p);
    document.querySelector("#user-input").value = "";
  });