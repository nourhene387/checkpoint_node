var generator = require("generate-password");

var passwords = generator.generateMultiple(3, {
	length: 10,
	uppercase: true,
    lowercase:true ,
    numbers:true,
});

console.log(passwords);