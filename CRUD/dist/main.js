
let btn = $('#btn');
let txt = $('#txt');
let results = $('#results');

btn.click(function()
{
    // const word = {word: "F"};
    // $.post("/word", word, function(data)
    // {
    //     results.empty().append(data);
    // });

    const sentence = {sentence: "Hi My Name is hi ala"};
    $.post("/words", sentence, function(data)
    {
        results.empty().append(data);
    });
});
