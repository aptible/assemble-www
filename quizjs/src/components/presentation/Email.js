import React from 'react';

const Email = ({ email, invalidEmail, setStateFromEvent, onSubmit }) => (
  <div className="quiz__step">
    <h3>
      Where should we send your results?
    </h3>

    <div className="quiz__email-container">
      <label htmlFor="quiz-email">Your work email</label>
      <input
        type="email"
        id="quiz-email"
        placeholder="you@workdomain.com"
        value={email}
        onChange={(e) => setStateFromEvent('email', e)}
      />
      {invalidEmail &&
        <span className="quiz__validation-error">Please enter a valid email address</span>
      }

      <div className="quiz__radio-group">
        <div>
          <input
            type="radio"
            onChange={(e) => setStateFromEvent('marketing_consent', e)}
            name="marketing_consent"
            value="yes"
            id="marketing_consent_yes"
          />
          <label htmlFor="marketing_consent_yes">Yes <span>I consent to receiving Aptible marketing emails</span></label>
        </div>

        <div>
          <input
            type="radio"
            onChange={(e) => setStateFromEvent('marketing_consent', e)}
            name="marketing_consent"
            value="no"
            id="marketing_consent_no"
          />
          <label htmlFor="marketing_consent_no">No <span>I don't want to receive marketing emails</span></label>
        </div>
      </div>
    </div>

    <div className="quiz__button--next">
      <button onClick={onSubmit}>View Results <i className="far fa-long-arrow-right"></i></button>
    </div>
  </div>
);

export default Email;
