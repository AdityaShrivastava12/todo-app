const plus = document.querySelector("#plus");
const ul = document.querySelector("ul");
plus.addEventListener('click', function(event){
  const textValue = document.querySelector("#New-task").value;
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox")
  const text = document.createElement("p");
  text.innerText = textValue;
  newLi.append(checkbox);
  newLi.append(text);
  ul.append(newLi);
  document.querySelector("#New-task").value = "";
})

ul.addEventListener('click', function(event){
  if(event.target.tagName = "checkbox"){
    setTimeout(() => {
      event.target.parentElement.remove();
    },500);
  }
})
