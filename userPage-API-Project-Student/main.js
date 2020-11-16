let data;

const btnLoadDataClick = function()
{
    data = new APIManager().loadData();
};

const btnDisplayDataClick = function()
{
    new Renderer().renderData(data);
};

const btnSaveStorageClick = function()
{
    localStorage.user = JSON.stringify(data);
};

const btnLoadStorageClick = function()
{
    data = JSON.parse(localStorage.getItem('user'));
    btnDisplayDataClick();
};

$(function()
{
    $("#btn_loadData").click(btnLoadDataClick);
    $("#btn_displayData").click(btnDisplayDataClick);
    $("#btn_saveStorage").click(btnSaveStorageClick);
    $("#btn_loadStorage").click(btnLoadStorageClick);
});