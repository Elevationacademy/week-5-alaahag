const express = require('express');
const path = require('path');
const urllib = require('urllib');

const ip = '0.0.0.0';
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
];


//ex1 + ex2 + ex3
app.get('/priceCheck/:name', function(req, res)
{
    const name = req.params.name;
    for (let i of store)
    {
        if (i.name === name)
        {
            res.send({price: i.price});
            return;
        }
    }
    res.send({price: null});
});

//ex4 + ex5 + extension 1
app.get('/buy/:name', function(req, res)
{
    const name = req.params.name;
    const money = parseInt(req.query.money);
    if (money)
        for (let i of store)
        {
            if (i.name === name)
            {
                if (money >= i.price)
                {
                    i.inventory--;
                    if (i.inventory < 0)
                        res.send(`Sorry, we are out of ${i.name} in stock!`);
                    else
                        res.send(i);
                }
                else
                    res.send('No enough money, you should get a job!');

                return;
            }
        }
    res.send('We do not have that item in our store!');
});

//ex6
app.get('/sale/', function(req, res)
{
    const admin = req.query.admin;
    if (admin === "true")
        for (let i of store)
        {
            if (i.inventory > 10)
            {
                i.price = Math.floor(i.price/2);
            }
        }
    res.send(store);
});

// app.get('/books/:title', function(req, res)
// {
//     urllib.request(`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.params.title}`, function(err, data)
//     {
//         const books = JSON.parse(data.toString());
//         res.send(books.items[0]);
//     });
// });

app.listen(port, ip, function()
{
    console.log(`server is running on IP: '${ip}' port: '${port}'`);
});