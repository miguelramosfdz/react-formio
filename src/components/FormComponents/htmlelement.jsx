import React from 'react';

module.exports = React.createClass({
  displayName: 'HtmlElement',
  render: function (value, index) {
    const { component } = this.props;
    const attrs = component.attrs.reduce((prev, item) => {
      if (item.attr) {
        prev[item.attr] = item.value;
      }
      return prev;
    }, {});
    return (
      <div className="formio-field-type-htmlelement">
        <component.tag className={component.customClass} {...attrs}>
          {component.content}
        </component.tag>
      </div>
    );
  }
});
