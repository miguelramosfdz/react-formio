var React = require('react');
var FormioComponents = require('./FormioComponents');

module.exports = React.createClass({
  displayName: 'FormioWizard',
  getInitialState: function() {
    var pages = [];
    var numPages = 0;
    this.props.components.forEach(function(component, index) {
      if (component.type === 'panel') {
        pages.push(component);
        numPages++;
      }
    });
    return {
      currentPage: 0,
      pages: pages,
      numPages: numPages
    };
  },
  nextPage: function(event) {
    event.preventDefault();
    this.setState((previousState) => {
      if (previousState.currentPage < (previousState.numPages - 1)) {
        previousState.currentPage++;
      }
      return previousState;
    });
  },
  previousPage: function() {
    this.setState((previousState) => {
      if (previousState.currentPage > 0) {
        previousState.currentPage--;
      }
      return previousState;
      console.log(this.previousState);
    });
  },
  render: function () {
    var pages = this.state.pages;
    var pageArray = [];

    for(var i = 0; i < pages.length;i++){
      var curPageClassName = 'col-sm-2 bs-wizard-step';
      var innerDot = 'bs-wizard-dot-inner';
      var isActive;

      if (i === this.state.currentPage) {
        isActive = ' active';
        innerDot += ' bg-success';
      }
      else if (i > this.state.currentPage) isActive = ' disabled';
      else if (i < this.state.currentPage) {
        isActive = ' complete';
        innerDot += ' bg-success';
      }


      pageArray.push(
        <div className={curPageClassName + isActive}>
          <div className='text-center bs-wizard-stepnum'>
            {pages[i].title}
          </div>
          <div className='progress'>
            <div className='progress-bar progress-bar-primary'></div>
          </div>
          <a className='bs-wizard-dot bg-primary'>
            <div className={innerDot}></div>
          </a>
        </div>
      )
    }

    return (
      <div className="formio-wizard">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Preview</h3>
            </div>
            <div className="panel-body">
              <div className="formio-wizard-wrapper">
                <div className="row bs-wizard hasTitles">
                  {pageArray}
                </div>
                <FormioComponents
                  {...this.props}
                  components = {this.state.pages[this.state.currentPage].components}
                >
                </FormioComponents>
                <button type="button">Cancel</button>
                <button type="button" onClick={function(){this.previousPage.apply(this,arguments);}.bind(this)}>
                  Previous
                </button>
                <button type="button" onClick={function(){this.nextPage.apply(this,arguments);}.bind(this)}>
                  Next
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  }
});
