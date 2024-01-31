var form_button = document.getElementById("submit");
form_button.addEventListener("click", () => {
  var name_input = document.forms["form"]["name"].value;
  if (name_input == ""){
    alert("Name must be filled out!");
  }
})

var list_button = document.getElementById("list-button");
list_button.addEventListener("click", () => {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var children = ul.children.length + 1;
  li.setAttribute("id", "element"+children);
  li.appendChild(document.createTextNode("Mussum Ipsum, cacilds vidis litro abertis.  Nulla id gravida magna, ut semper sapien. Pra lá, depois divoltis porris, paradis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Bota 1 metro de cachacis aí pra viagem!"+children));
  ul.appendChild(li);
  li.addEventListener("click", () => {
    ul.removeChild(li);
  })
})