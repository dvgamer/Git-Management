import './main.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

let language = require('/imports/language/en-EN.js');

Meteor.startup(() => {
	$(window).resize(function(){ $('.login-image').height($(window).height() - 118); });
});