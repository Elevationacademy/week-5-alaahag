
let btn = $('#btn');
//let txt = $('#txt');
let results = $('#results');

const printResults = function (obj) {
    results.append(`<br>${obj}<br>`);
};

btn.on('click', function(){
    //ex1
    // // https://www.googleapis.com/books/v1/volumes?q=intitle:WORD_HERE
    // $.get('/randomWord')
    //     .then(function(word){
    //         $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    //             .then(function(book){
    //                 book.items.forEach(b => printResults(b.volumeInfo.title));
    //             });
    //     });

    //ex2
    const api_key ="MPK9EoesEJs256rLqg0mtmY1fpyC8Ym7";
    $.get('/randomWord')
        .then(function(word){
            let bookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`);
            let gifPromise = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${api_key}&limit=1`);
            Promise.all([bookPromise, gifPromise])
            .then(function (results) {
                printResults(word);
                printResults(results[0].items[0].volumeInfo.title);
                printResults(`<iframe src="${results[1].data[0].embed_url}">`);
            });
        });

});