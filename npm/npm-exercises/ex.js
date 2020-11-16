//ex1

const validator = require('validator');

//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'));

//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone('786-329-9958'));

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text,blacklist));


//ex2
let faker = require('faker');

const makeHuman = function(count)
{
    for (let i=0; i<count; i++)
    {
        let randomName = faker.name.findName();
        let randomCompany = faker.company.companyName();
        let imageURL = faker.image.imageUrl();
        console.log(randomName + ", " +imageURL + ", " + randomCompany);
    }
}

makeHuman(2); //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe