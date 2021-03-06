import React from 'react';
import valueMixin from './mixins/valueMixin';
import multiMixin from './mixins/multiMixin';

module.exports = React.createClass({
  displayName: 'Radio',
  mixins: [valueMixin, multiMixin],
  onChangeRadio: function(event) {
    const value = event.target.id;
    this.setValue(value);
  },
  getSingleElement: function(value, index) {
    index = index || 0;
    const radioClass = (this.props.component.inline ? 'radio-inline' : 'radio');
    return (
      <div className="radio-wrapper">
        {this.props.component.values.map(function(v, id) {
          const controlLabel = 'control-label' + (v.value === this.state.value ? ' checked' : ' not-checked');
          return (
            <div key={id} className={radioClass}>
              <label className={controlLabel}>
                <input
                  type={this.props.component.inputType}
                  id={v.value}
                  data-index={index}
                  name={this.props.component.key}
                  checked={v.value===this.state.value}
                  disabled={this.props.readOnly}
                  onChange={this.onChangeRadio}
                  ></input>
                {v.label}
              </label>
            </div>
          );
        }.bind(this))
        }
      </div>
    );
  },
  getValueDisplay: function(component, data) {
    for (var i in component.values) {
      if (component.values[i].value === data) {
        return component.values[i].label;
      }
    }
    return data;
  }
});
