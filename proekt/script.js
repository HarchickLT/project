// let text = document.getElementById('text');
// text.title = "New text";
// console.log(text.title);

// text.style.color = "red";
// text.style.backgroundColor = "blue";

// text.innerHTML = "New<br>string";

//document.getElementById('text').style.color = "white"; - По Айди

//let spans = document.getElementsByTagName('span'); - По Тегу

//let spans = document.getElementsByClassName('simple-text'); По классу

// for(let i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event) {
event.preventDefault();
let el = document.getElementById('main-form');


let name = el.name.value;
let pass = el.pass.value;
let repass = el.repass.value;
let state = el.state.value;

let fail = "";

if(name == "" || pass == "" || state == "")
    fail = "Запоните все поля";
else if(name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
else if(pass != repass)
    fail = "Пароли должны совпадать";
else if(pass.split("&").length > 1)
    fail = "Некорректный пароль";

if(fail != ""){
    document.getElementById('error').innerHTML = fail;

} else {
    alert("Все данные корректно заполнены");
    window.location = 'https://itproger.com/';
     
    }
}