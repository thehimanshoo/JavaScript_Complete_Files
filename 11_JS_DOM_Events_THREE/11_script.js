let employees = getAllEmployees();

// click on all employees button
let allEmpButton = document.querySelector('#all-emp-btn');
allEmpButton.addEventListener('click',function() {
    displayEmployees(employees);
});

// click on male Employees button
let maleEmpButton = document.querySelector('#male-emp-btn');
maleEmpButton.addEventListener('click',function () {
    let maleEmployees = employees.filter((employee) => {
        return employee.gender === 'Male';
    });
    displayEmployees(maleEmployees);
});

// click on Female Employees button
let femaleEmpButton = document.querySelector('#female-emp-btn');
femaleEmpButton.addEventListener('click',function () {
    let femaleEmployees = employees.filter((employee) => {
        return employee.gender === 'Female';
    });
    displayEmployees(femaleEmployees);
});

// Employee Search Logic
let searchBox = document.querySelector('#emp-search');
searchBox.addEventListener('keyup',function() {
   let searchQuery = searchBox.value;
   if(searchQuery !== ''){
       let filteredEmployees = employees.filter((employee) => {
           return employee.first_name.toLowerCase().trim().startsWith(searchQuery.trim().toLowerCase());
       });
       displayEmployees(filteredEmployees);
   }
   else{
       displayEmployees([]);
   }
});


// display Employees
let displayEmployees = (employees) => {
    // display employees count
    document.querySelector('#count').innerText = employees.length;

    let tableBody = document.querySelector('#table-body');
    let tableRows = '';
    for(let employee of employees){
        tableRows += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.country}</td>
                     </tr> \n`;
    }
    tableBody.innerHTML = tableRows;
};