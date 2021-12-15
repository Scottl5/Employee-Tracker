const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: "",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

const activateQuestion = [
  {
    name: "activate",
    type: "list",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add A Department",
      "Add a Role",
      "Add An Employee",
      "Update Employee Role",
      "Quit",
    ],
  },
];

const addDepartmentQuestions = [
  {
    name: "departmentName",
    message: "What department would you like to add?",
    type: "input",
  },
];

const addRoleQuestions = [
  {
    name: "roleName",
    message: "What role would you like to add?",
    type: "input",
  },
  {
    name: "roleSalary",
    message: "What is the salary for this role?",
    type: "input",
  },
  {
    name: "roleDept",
    message: "What department is the role in?",
    type: "list",
    choices: [],
  },
  {
    name: "roleManager",
    message: "Who is their manager?",
    type: "list",
    choices: [],
  },
];

const addEmployeeQuestions = [
  {
    name: "employeeFirst",
    message: "What is their first name?",
    type: "input",
  },
  {
    name: "employeeLast",
    message: "What is their last name?",
    type: "input",
  },
  {
    name: "employeeRole",
    message: "What is their role?",
    type: "list",
    choices: [],
  },
  {
    name: "employeeManager",
    message: "Who is their manager?",
    type: "list",
    choices: [],
  },
];

function init() {
  inquirer.prompt(activateQuestion).then((answer) => {
    console.log(answer.activate);
    if (answer.activate === "Quit") {
      return;
      // viewDepartment();
    } else {
      activateOther(answer.activate);
    }
  });
}

function activateOther(answer) {
  switch (answer) {
    case "View All Departments":
      response = viewDepartment();
      break;
    case "View All Employees":
      response = viewEmployees();
      break;
    case "View All Roles":
      response = viewRoles();
      break;
    case "Add A Department":
      response = addDepartment();
      break;
    case "Add a Role":
      response = addRole();
      break;
  }
}

function viewDepartment() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    return init();
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    return init();
  });
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    return init();
  });
}

function addDepartment() {
  inquirer.prompt(addDepartmentQuestions).then((answer) => {
    db.query(
      `INSERT INTO department (name) VALUES ("${answer.departmentName}")`,
      function (err, results) {
        return init();
      }
    );
    console.log(answer.departmentName);
  });
}

function addRole() {
  inquirer.prompt(addRoleQuestions).then((answer) => {
    db.query(
      `INSERT INTO role (title, salary) VALUES ("${answer.roleName}", "${answer.roleSalary}")`,
      function (err, results) {
        return init();
      }
    );
  });
}
init();
