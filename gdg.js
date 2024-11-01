document.addEventListener("DOMContentLoaded", () => {
    function helloWorld(name) {
        alert(`Hello, ${name}!`);
    }

    function hello(age) {
        alert(`You are ${age}!`);
    }

    
    helloWorld("GDG on Campus Sogang");

    const helloBtn = document.getElementById("helloBtn");
    const userName = document.getElementById("helloName");
    const helloBtn2 = document.getElementById("helloBtn2");
    const userAge = document.getElementById("helloAge");

    helloBtn.addEventListener("click", () => {
        helloWorld(userName.value);
    });

    helloBtn2.addEventListener("click", () => {
        hello(userAge.value);
    });
});
