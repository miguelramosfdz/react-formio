import React from 'react';
import ReduxView from 'redux-view';
import { Formio } from '../../components';

export default function (builder) {
  return class extends ReduxView {
    container = ({ src, form, submission, params }) => {
      if (false && params['submissionId'] !== submission.submission._id) {
        return (
          <div className="form-view">
            Loading...
          </div>
        );
      }
      else {
        return (
          <div className="form-view">
            <Formio
              src={src}
              form={form.form}
              submission={submission.submission}
              readOnly={true}
            />
          </div>
        );
      }
    }

    mapStateToProps = ({ formio }, { params }) => {
      return {
        src: formio[builder.key].submission.src + '/form/' + params[builder.key + 'Id'] + '/submission/' + params['submissionId'],
        form: formio[builder.key].form,
        submission: formio[builder.key].submission
      };
    }
  };
}
