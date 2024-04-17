document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const dashboard = document.getElementById('dashboard');

   
        registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobileNo = document.getElementById('mobileNo').value;
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;

       
        let entries = JSON.parse(sessionStorage.getItem('entries')) || [];

       
        entries.push({ fullName, email, mobileNo, username, password });
        sessionStorage.setItem('entries', JSON.stringify(entries));

        alert('Registration successful! Please login.');
        showLoginForm();
    });

 
        loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

       
        const entries = JSON.parse(sessionStorage.getItem('entries')) || [];
        const user = entries.find(entry => entry.username === username && entry.password === password);

        if (user) {
           
            sessionStorage.setItem('loggedIn', true);
            showDashboard();
          
            displayAllEntries(entries);
        } else {
            alert('Invalid username or password');
        }
    });

   
        document.getElementById('logoutBtn').addEventListener('click', function () {
        sessionStorage.removeItem('loggedIn');
        showLoginForm();
    });

    
    showRegistrationForm();

    
        function showRegistrationForm() {
        registrationForm.style.display = 'block';
        loginForm.style.display = 'none';
        dashboard.style.display = 'none';
        }

   
        function showLoginForm() {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
        dashboard.style.display = 'none';
        }

    
        function showDashboard() {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
        }

   
        function displayAllEntries(entries) {
        const userInfoTable = document.getElementById('userInfo');
        userInfoTable.innerHTML = ''; 
        entries.forEach(entry => {
            const row = userInfoTable.insertRow();
            row.insertCell().textContent = entry.fullName;
            row.insertCell().textContent = entry.email;
            row.insertCell().textContent = entry.mobileNo;
            row.insertCell().textContent = entry.username;
            });
        }

        document.getElementById('registerLink').addEventListener('click', function (event) {
        event.preventDefault();
        showRegistrationForm();
        });

        document.getElementById('loginLink').addEventListener('click', function (event) {
        event.preventDefault();
        showLoginForm();
        });

        if (sessionStorage.getItem('loggedIn')) {
        showDashboard();
        const entries = JSON.parse(sessionStorage.getItem('entries')) || [];
        displayAllEntries(entries);
        }
        });

        
const usersData = JSON.parse(localStorage.getItem('users')) || [];


const userDataBody = document.getElementById('userDataBody');

// Loop through user data and create table rows
usersData.forEach(function(user) {
    const row = document.createElement('tr');
    
    const fullNameCell = document.createElement('td');
    fullNameCell.textContent = user.fullName;
    
    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    
    const mobileCell = document.createElement('td');
    mobileCell.textContent = user.mobile;
    
    const usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;
    
    row.appendChild(fullNameCell);
    row.appendChild(emailCell);
    row.appendChild(mobileCell);
    row.appendChild(usernameCell);
    
    userDataBody.appendChild(row);
});


// document.addEventListener('DOMContentLoaded', function() {
//   // Retrieve data from local storage
//   var userData = JSON.parse(localStorage.getItem('userData'));
  
//   // Display data in table
//   var table = document.getElementById('userData');
//   var row = table.insertRow();
//   var fullNameCell = row.insertCell(0);
//   var emailCell = row.insertCell(1);
//   var mobileNoCell = row.insertCell(2);
//   var usernameCell = row.insertCell(3);
  
//   fullNameCell.innerHTML = userData.fullName;
//   emailCell.innerHTML = userData.email;
//   mobileNoCell.innerHTML = userData.mobileNo;
//   usernameCell.innerHTML = userData.username;
// });




// document.addEventListener('DOMContentLoaded', function() {
//   // Retrieve data from local storage
//   var usersData = JSON.parse(localStorage.getItem('usersData')) || []; // Initialize as empty array if no data exists
  
//   // Display data in table
//   var table = document.getElementById('userData');

//   // Loop through each user data object
//   usersData.forEach(function(userData) {
//     var row = table.insertRow();
//     var fullNameCell = row.insertCell(0);
//     var emailCell = row.insertCell(1);
//     var mobileNoCell = row.insertCell(2);
//     var usernameCell = row.insertCell(3);
    
//     fullNameCell.innerHTML = userData.fullName;
//     emailCell.innerHTML = userData.email;
//     mobileNoCell.innerHTML = userData.mobileNo;
//     usernameCell.innerHTML = userData.username;
//   });
// });








// // Retrieve all keys from local storage
// var keys = Object.keys(localStorage);
// var table = document.getElementById("userTable");

// // Loop through each key and add user data to the table
// keys.forEach(function(key) {
//   var user = JSON.parse(localStorage.getItem(key));
//   var row = table.insertRow(-1);
//   var fullNameCell = row.insertCell(0);
//   var emailCell = row.insertCell(1);
//   var mobileCell = row.insertCell(2);
//   var usernameCell = row.insertCell(3);
//   fullNameCell.innerHTML = user.fullName;
//   emailCell.innerHTML = user.email;
//   mobileCell.innerHTML = user.mobile;
//   usernameCell.innerHTML = user.username;
// });

