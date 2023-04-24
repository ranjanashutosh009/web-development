const input = document.querySelector("#catname");
const list = document.querySelector("#cats");
form.addEventListener("submit", funtion(e){
    e.preventDefault();
    const catname = input.value;
    const newli = document.createElement("li");
    newli.innerText = catname;
    list.append(newli);
})