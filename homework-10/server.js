const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");


var PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "mycompany_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



function determineAction() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all employees",
                    value: "viewAll"
                },
                {
                    name: "View all departments",
                    value: "viewAllDpt"
                },
                {
                    name: "View all roles",
                    value: "viewAllRoles"
                },
                {
                    name: "Add employee",
                    value: "addEmployee"
                },
                {
                    name: "Add department",
                    value: "addDept"
                },
                {
                    name: "Add role",
                    value: "addRole"
                },
                {
                    name: "Update role",
                    value: "updateRole"
                },
                {
                    name: "Quit",
                    value: "quit"
                }
            ];
            
            ]).then(answers => {
                switch (answers) {
                    // case "addEmployee":
                    //     addEmployee();
                    //     break;
                    case "viewAll":
                        viewAll();
                        break;
                    // case "updateRole":
                    //     updateRole();
                    //     break;
                    // case "viewAllRoles":
                    //     viewAllRoles();
                    //     break;
                    // case "addRole":
                    //     addRole();
                    //     break;
                    // case "viewAllDpt":
                    //     viewAllDpt();
                    //     break;
                    // case "addDept":
                    //     addDpt();
                    //     break;
                    case "quit":
                        connection.end();
                        break;
                }
            });

};



function viewAll() {
    let sql = "SELECT first_name AS FirstName , last_name as LastName , role.title as Role, role.salary AS Salary, department.name AS Department FROM employee INNER JOIN department ON department.id = employee.role_id left JOIN role ON role.id = employee.role_id";
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.table(res);

    });
    determineAction()
}

determineAction();