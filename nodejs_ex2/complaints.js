const consts = require('./consts.js');
const ch = require('./complaintsHandler.js');

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE//use the FINANCE type from the consts module
};

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE//use the FINANCE type from the consts module
};

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS//use the EMOTIONS type from the consts module
};

ch.handleComplaint(complaint1); //should print "Money doesn't grow on trees, you know."
ch.handleComplaint(complaint2); //should print "Money doesn't grow on trees, you know."
ch.handleComplaint(complaint3); //should print "It'll pass, as all things do, with time."