
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e){
 e.preventDefault();

 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 // Login sederhana untuk latihan
 if(username === 'admin' && password === '12345'){
    message.style.color='green';
    message.textContent='Login Berhasil';
 }else{
    message.style.color='red';
    message.textContent='Username atau Password salah';
 }

});
