// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // employees has empty square bracket because it's an empty array and will add names and salary from the employee object.
  const employees = [];
  // employee has empty curly brackets to have an empty object and it will be used to store first and last name and the salary.
  let employee = {};

  // Make prompt for first name.
  employee.firstName = prompt("Enter first name:");
  // if I press cancel without writing anything it will cancel the function and return null stopping the code.
  if (employee.firstName === null) return null;
  // Make prompt for last name.
  employee.lastName = prompt("Enter last name:");
  if (employee.lastName === null) return null;
  // Make prompt for salary.
  // parseFloat allows only the first number to be accepted and will return nan if it's another character.
  // basically means 10000 will work but not 10,000 and also because salaryCell formats into usd so 10000 turns into $10,000 and 10,000 turns into $10.00
  employee.salary = parseFloat(prompt("Enter salary:"));
  // this works with the parseFloat because when returned nan it will stp the function.
  if (isNaN(employee.salary)) return null;

  // adds to the array
  employees.push(employee);

  // Make a confirm to ask if you want to add more employees or not.
  let addMore = confirm("Do you want to add another employee?");
  // When "yes" open another prompt to add more employees.
  // while loops allows me to add more people.
  while (addMore) {
    employee = {};

    employee.firstName = prompt("Enter first name:");
    if (employee.firstName === null) return null;

    employee.lastName = prompt("Enter last name:");
    if (employee.lastName === null) return null;

    employee.salary = parseFloat(prompt("Enter salary:"));
    if (isNaN(employee.salary)) return null;

    employees.push(employee);

    addMore = confirm("Do you want to add another employee?");
  }

  // when "no" open employee data and have names sorted by last name and have the data in the console.
  // this sends to a function that tells it to displayEmployees.
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // if there is nothing in the array then the function will return without doing anything.
  if (employeesArray === null) return;

  // this will be a part of the equation to find the average salary.
  let totalSalary = 0;

  //this adds everybody in the arrays salary together so we can later divide it to find the aerage.
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  // this takes the total salary of everyone then divides it by the length of the array to get the average.
  const averageSalary = totalSalary / employeesArray.length;

  // this will show us in the console what the average salary is in a usd format.
  console.log(`The average salary is: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // make an array with added employees and use math to get a random employee.
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
