// MAU NYARI PASSWORDNYA DISINI? NICE TRY DECK!
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const account = accounts.find(
    (acc) => acc.username === username && acc.password === password
  );

  if (account) {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.main-page').style.display = 'block';

    document.getElementById('username-display').textContent = account.username;
    document.getElementById('Auth-display').textContent = `Auth ${account.Auth}`;
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
}
function setUserStatus(online) {
    const userStatus = document.getElementById('user-status');
    userStatus.textContent = online ? 'Online' : 'Offline';
    userStatus.style.color = online ? 'green' : 'red';
}
function setServerStatus(online) {
    const serverStatus = document.getElementById('server-status');
    serverStatus.textContent = `FORGETEST Server: ${online ? 'Online' : 'Offline'}`;
    serverStatus.style.color = online ? 'green' : 'red';
}
document.addEventListener('contextmenu', event => event.preventDefault());
javascript
document.addEventListener('keydown', event => {
 if (event.key === 'F12' || event.key === 'F11' || event.key === 'Control' && event.code === 'KeyI') {
    event.preventDefault();
 }
});