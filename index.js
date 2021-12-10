const inquirer = require("inquirer");
const mysql = require("mysql2");
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
    message: "Who is thier manager?",
    type: "list",
    choices: [],
  },
];

function init() {
  inquirer.prompt(activateQuestion).then((answer) => {
    console.log(answer.activate);
    if (answer.activate === "View All Departments") {
      db.query("SELECT * FROM department"),
        function (err, results) {
          console.table(results);
        };
    }
  });
}

init();
