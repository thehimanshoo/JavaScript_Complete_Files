let employee = {
    id : 1000,
    name : 'John',
    age : 45,
    designation : 'Senior Manager'
};

// using string concatenation
let snippet = "<tr>" +
                "<td>" + employee.id + "</td>" +
                "<td>" + employee.name + "</td>" +
                "<td>" + employee.age + "</td>" +
                "<td>" + employee.designation + "</td>" +
              "</tr>";
//document.querySelector('#table-body').innerHTML = snippet;

// ES6 Template String (backtick operator)
let htmlSnippet = `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                   </tr>`;
document.querySelector('#table-body').innerHTML = htmlSnippet;
