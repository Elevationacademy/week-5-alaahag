//solved all exercises including extensions and challenges

const express = require('express');
const router = express.Router();

const wordCounter = {a: 1, have: 12, b:2, hi: 55, c:3, d: 1};

router.get('/sanity', function(req, res)
{
    res.send('Server up and running');
});

router.get('/word/:word', function(req, res)
{
    const param = req.params.word;
    const wordValue = wordCounter[param] || 0;
    res.send({count: wordValue});
});

router.post('/word', function(req, res)
{
    const param = req.body.word;
    const word = param.toLowerCase();
    let count = wordCounter[word] || 0;
    count++;
    wordCounter[word] = count;
    res.send(JSON.stringify({text: `Added ${word}`, currentCount: count }));
});

router.post('/words', function(req, res)
{
    const params = req.body.sentence;
    const array_words = params.toLowerCase().split(" ");

    let numNewWords = 0;
    let numOldWords = 0;
    for (let word of array_words)
    {
        if (wordCounter[word])
        {
            numOldWords++;
            wordCounter[word]++;
        }
        else
        {
            numNewWords++;
            wordCounter[word] = 1;
        }
    }
    res.send(JSON.stringify({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1}));
});

router.get('/total', function(req, res)
{
    res.send({text: "Total count", count: Object.keys(wordCounter).length });
});

router.get('/popular', function(req, res)
{
    let count = 0;
    let word = "";
    for (var w in wordCounter)
    {
        if (wordCounter[w] > count)
        {
            count = wordCounter[w];
            word = w;
        }
    }

    res.send({text: word, count: count });
});

router.get('/ranking', function(req, res)
{
    let sortableWordsCounter = [];
    for (var word in wordCounter)
        sortableWordsCounter.push([word, wordCounter[word]]);

    sortableWordsCounter.sort(function(a, b){ return b[1] - a[1]; });

    res.send({ranking: sortableWordsCounter});
});

module.exports = router;