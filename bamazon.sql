create database Bamazon;

use Bamazon;

CREATE TABLE products (item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255), department_name VARCHAR(255), price DOUBLE, stock_quantity INT(11));

desc products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wondrously Wonky Widget", "Widgets", 4.50, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flipping Donkey", "Aminals", 189.95, 3);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iBone", "Body Parts", 1345.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Killa Priest", "Aminals", 45.98, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("a new dog", "Aminals", 238.67, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grab Bag of Sick Shit", "Misc", 14.95, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Groceries", 21.38, 69);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Bad Guy", "Criminals", 189.95, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nothingness", "", 0.00, 10000000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Permenantly Deflated Basketball", "Sports", 1.95, 2800);

select * from products;

drop table products;
