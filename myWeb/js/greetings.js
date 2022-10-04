const loginForm =document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const : 변하지 않는값
//let : 변하는 값
//console.dir("");
//document -> getElementById();
//document -> getElementByClassName();
//document -> getElementsByTagName()();
// 검색 : html element mdn

const HIDDEN_CLASSNAME = "hidden";//css로 display on/off
const USERNAME_KEY = "username";

// index 페이지의 로그인 폼 submit 이벤트 -> 아래의 이벤트 리스너로 submit시 작동
function onLoginSubmit(event)
{
    event.preventDefault();//
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = longinInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //localStorage -> 웹페이지 새로고침 해도 저장, Key-Value 쌍으로 저장 (Value에 객체나 배열도 저장)
    paintGreetings(username);
}

function paintGreetings(username)
{
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else
{
    paintGreetings(savedUsername);
}

