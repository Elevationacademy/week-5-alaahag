const consts = require('./consts.js');

const handleComplaint = function(complaint)
{
    if (complaint.type === consts.FINANCE)
        complaint.text = "Money doesn't grow on trees, you know.";
    else if (complaint.type === consts.WEATHER)
        complaint.text = "It is the way of nature. Not much to be done.";
    else
        complaint.text = "It'll pass, as all things do, with time.";

    console.log(complaint);
};

module.exports = { handleComplaint };