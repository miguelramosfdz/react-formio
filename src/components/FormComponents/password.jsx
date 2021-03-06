import React from 'react';
import valueMixin from './mixins/valueMixin';
import multiMixin from './mixins/multiMixin';
import inputMixin from './mixins/inputMixin';

module.exports = React.createClass({
  displayName: 'Password',
  mixins: [valueMixin, multiMixin, inputMixin]
});
