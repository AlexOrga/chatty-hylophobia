const loadMessages = require('./messages');
const data = require('./data');
const buildDomString = require('./dom');
const radioButton = require('./radioButtonEvent');

const whenMessagesLoads = function () {
  const messagesData = JSON.parse(this.responseText).messages;
  data.setMessages(messagesData);
  buildDomString(messagesData);
};

const errorFunction = function () {
  console.error('no good señor');
};

const initializer = () => {
  loadMessages(whenMessagesLoads, errorFunction);
  radioButton();
};

module.exports = {
  initializer,
};
