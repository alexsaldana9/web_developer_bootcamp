 var faker = require('faker');

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties\


    console.log("random name == " + randomName);
    console.log("random email == " + randomEmail);

    //console.log("randomCard ==" + randomCard);



    console.log("=========================");
    console.log("Welcome to my shop!");
    console.log("=========================");

    var productName = "";
    var price = 0.00;

    for (var i = 0; i < 10; + i++){
      productName = faker.commerce.productName();
      price = faker.commerce.price();
      console.log(productName + "- $" + price);
    }

    