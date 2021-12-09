INSERT INTO department(name)
VALUES 
("Grocery"),
("Checkout"),
("Ends"),
("Dairy");

INSERT INTO role(title, salary, department_id)
VALUES
("Grocery Manager", 64000, 1),
("Grocery Stocker", 45000, 1),
("Bagger", 25000, 2),
("Cashier", 30000, 2),
("Ends Stocker", 35000, 3),
("Dairy Manager", 64000, 4),
("Dairy Stocker", 45000, 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES 
("Tyler", "Johnson", 1),
("Kyle", "Martin", 2),
("Joseph", "Dubois", 3),
("Cheryl", "Bunker", 4),
("Kyle", "Richards", 5),
("Michael", "Blood", 6 );
