//This is the class that will manage all your APIs

class APIManager
{
    constructor()
    {
        this.data = {};
    }

    loadData()
    {
        this.data.users = new UsersAPI().loadData();
        this.data.quotes = new QuotesAPI().loadData();
        this.data.bacons = new BaconsAPI().loadData();
        this.data.pokemons = new PokemonsAPI().loadData();
        return this.data;
    }

    // set data(data)
    // {
    //     this._data = data;
    // }

    // get data()
    // {
    //     return this._data;
    // }
}

class UsersAPI extends APIManager
{
    constructor()
    {
        super();
    }

    loadData()
    {
        const _data = [];
        $.ajax(
        {
            url: "https://randomuser.me/api?results=7",
            dataType: 'json',
            beforeSend: function()
            {
            },
            complete: function()
            {
            },
            success: function(data)
            {
                data.results.forEach(d => _data.push({first:d.name.first, last:d.name.last, pic:d.picture.large, city:d.location.city, state:d.location.state}));
            },
            error: function(data)
            {
                //console.log(data);
            }
        });

        return _data;
    }
}

class QuotesAPI extends APIManager
{
    constructor()
    {
        super();
    }

    loadData()
    {
        const _data = [];
        $.ajax(
        {
            url: "https://api.kanye.rest",
            dataType: 'json',
            beforeSend: function()
            {
            },
            complete: function()
            {
            },
            success: function(data)
            {
                _data.push({quote:data.quote});
            },
            error: function(data)
            {
                //console.log(data);
            }
        });

        return _data;
    }
}

class BaconsAPI extends APIManager
{
    constructor()
    {
        super();
    }

    loadData()
    {
        const _data = [];
        $.ajax(
        {
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            dataType: 'json',
            beforeSend: function()
            {
            },
            complete: function()
            {
            },
            success: function(data)
            {
                _data.push({bacon:data[0]});
            },
            error: function(data)
            {
                //console.log(data);
            }
        });

        return _data;
    }
}

class PokemonsAPI extends APIManager
{
    constructor()
    {
        super();
    }

    loadData()
    {
        const _data = [];
        const _randNum = Math.floor(Math.random() * 893 + 1);
        $.ajax(
        {
            url: "https://pokeapi.co/api/v2/pokemon/" + _randNum,
            dataType: 'json',
            beforeSend: function()
            {
            },
            complete: function()
            {
            },
            success: function(data)
            {
                _data.push({image:data.sprites.front_default, text:data.name});
            },
            error: function(data)
            {
                //console.log(data);
            }
        });

        return _data;
    }
}