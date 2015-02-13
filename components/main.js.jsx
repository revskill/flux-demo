var React = require('react');
var flux = require('./stores/todostore');
var Application = require('./views/app.js.jsx');

React.render(<Application flux={flux} />, document.getElementById("app"));