
let btn = $('#btn');
let txt = $('#txt');
let results = $('#results');
let btn_buy = $('#btn_buy');
let txt_buy = $('#txt_buy');
let results_buy = $('#results_buy');
let lbl_money = $("#lbl_money");

let money = 1000;
lbl_money.text(`Current money: ${money} shekels`);

btn.click(function()
{
    $.get(`/priceCheck/${txt.val()}`, function (data)
    {
        results.empty().append(`<div>Price: ${data.price}</div>`);
    });
});

btn_buy.click(function()
{
    $.get(`/buy/${txt_buy.val()}?money=${money}`, function (data)
    {
        if (typeof data === 'object')
        {
            results_buy.empty().append(`<div>Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`);
            money-=data.price;
            lbl_money.text(`Current money: ${money} shekels`);
        }
        else
            results_buy.empty().append(`<div>${data}</div>`);
    });
});