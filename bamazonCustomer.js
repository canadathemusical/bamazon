var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log("O)) O))         O)       O))       O))      O)       O))))))) O))    O))))     O)))     O))".blue);
console.log("O)    O))      O) ))     O) O))   O)))     O) ))            O))    O))    O))  O) O))   O))".blue);
console.log("O)     O))    O)  O))    O)) O)) O O))    O)  O))          O))   O))        O))O)) O))  O))".blue);
console.log("O))) O)      O))   O))   O))  O))  O))   O))   O))       O))     O))        O))O))  O)) O))".blue);
console.log("O)     O))  O)))))) O))  O))   O)  O))  O)))))) O))     O))      O))        O))O))   O) O))".blue);
console.log("O)      O) O))       O)) O))       O)) O))       O))  O))          O))     O)) O))    O) ))".blue);
console.log("O)))) O)) O))         O))O))       O))O))         O))O)))))))))))    O))))     O))      O))".blue);
console.log("\n");                                                                                                  


var amount;
var userId;
var price;
var sql = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";

connection.connect(function(err) {
	if (err) throw err;
});


connection.query('SELECT * FROM products', function(error, results, fields) {
    if (error) throw error;
    console.log("\nitem_id | product_name | department_name | price | stock_quantity".green);
    for (var i = 0; i < results.length; i++) {
        console.log((
            results[i].item_id + " | " +
            results[i].product_name + " | " +
            results[i].department_name + " | " +
            results[i].price + " | " +
            results[i].stock_quantity + " | "
        ).green)
    };
});
var runSearch = function(answer) {
    inquirer.prompt({
        name: "productId",
        message: "Enter the ID of the product you would like to purchase.".blue
    }).then(function(answer) {
        var userId = answer.productId;
        connection.query("select * from products where item_id = '" + answer.productId + "'", function(err, res) {
            if (err) throw err;
            amount = res[0].stock_quantity;
            price = res[0].price;
            productSearch();
        })
        var productSearch = function() {
            inquirer.prompt({
                name: "amountOfProduct",
                message: "How many would you like to buy?".blue
            }).then(function(answer) {
                var customerPurchase = answer.amountOfProduct;
                var amountToUpdate = amount - customerPurchase;
                var total = (customerPurchase * price).toFixed(2);
                if (customerPurchase > amount) {
                    console.log("There aren't enough left to buy that many!!!1!1!\n" + "We're all gonna die!!!!!!1!1!!!!".trap.america);
                }else{
                    console.log("Your goddamn total is: ".red + (total).green + "!".green); 
                    connection.query(sql, [amountToUpdate, userId]);    
                }
                connection.end();
            });
        };
    });
};
runSearch();