class Renderer
{
    constructor()
    {
        this.data = {};
    }

    renderData(data)
    {
        new RenderUsersData(data.users);
        new RenderQuotesData(data.quotes);
        new RenderBaconsData(data.bacons);
        new RenderPokemonsData(data.pokemons);
    }
}

class RenderUsersData extends Renderer
{
    constructor(data)
    {
        super();
        this.renderData(data);
    }

    renderData(data)
    {
        $(".user-container").empty();
        const template = Handlebars.compile($('#usersData-template').html());
        $(".user-container").append(template(data[0]));

        $(".friends-container").empty();
        const template2 = Handlebars.compile($('#friendsData-template').html());
        $(".friends-container").append(template2(data.filter(friends => friends !== data[0])));
    }
}

class RenderQuotesData extends Renderer
{
    constructor(data)
    {
        super();
        this.renderData(data);
    }

    renderData(data)
    {
        $(".quote-container").empty();
        const template = Handlebars.compile($('#quotesData-template').html());
        $(".quote-container").append(template(data));
    }
}

class RenderBaconsData extends Renderer
{
    constructor(data)
    {
        super();
        this.renderData(data);
    }

    renderData(data)
    {
        $(".meat-container").empty();
        const template = Handlebars.compile($('#baconsData-template').html());
        $(".meat-container").append(template(data));
    }
}

class RenderPokemonsData extends Renderer
{
    constructor(data)
    {
        super();
        this.renderData(data);
    }

    renderData(data)
    {
        $(".pokemon-container").empty();
        const template = Handlebars.compile($('#pokemonsData-template').html());
        $(".pokemon-container").append(template(data));
    }
}

Handlebars.registerHelper("capitalize", function(string)
{
    string = string || '';
    return string.slice(0,1).toUpperCase() + string.slice(1);
});