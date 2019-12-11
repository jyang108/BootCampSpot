INSERT INTO department (name) 
VALUES ("Sales"), ("Engineering"),("Legal"), ("Finance"),("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 60000 ,1),  
("Software Engineer", 80000,2),
("Engineering Manager", 100000,2),
("Lawyer", 100000, 3),
("Accountant",75000,4),
("Salesperson", 30000 ,1),
("Lead Engineer", 95000,2),
("Legal Team Lead", 90000, 3);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jameela", "James", 1, null),
("Aline", "Nunes", 2, 3),
("Louise", "Akemi",3, null),
("Chimeny","Louise",4, null),
("John","Doe",2, null);