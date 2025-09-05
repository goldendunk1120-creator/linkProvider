import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2 steps2-text10">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              <span className="steps2-text12">1. Account Bans</span>
              <br></br>
              <br></br>
              <span>
                LinkedIn has advanced algorithms to detect suspicious activity.
                If you access multiple profiles from the same device or IP
                address without proper precautions, your accounts could be
                flagged or banned.
              </span>
              <br></br>
              <br></br>
              <span className="steps2-text18">2. Duplicate Identities</span>
              <br></br>
              <br></br>
              <span>
                Creating multiple profiles with overlapping details can result
                in account suspensions. LinkedIn prioritizes transparency and
                authenticity, so duplicate profiles are considered a violation
                of their terms.
              </span>
              <br></br>
              <br></br>
              <span className="steps2-text24">3. Security Concerns</span>
              <br></br>
              <br></br>
              <span>
                Unauthorized access, phishing attempts, and lack of account
                recovery options are common risks when managing multiple
                profiles without a secure system.
              </span>
              <br></br>
              <br></br>
              <span>
                Essential Tools for Safe and Efficient Profile Management
              </span>
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text45">Choose Your Plan</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text32 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text47">
                      Select the plan that best fits your needs for LinkedIn
                      outreach and lead generation.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text33 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text50">Complete Verification</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text35 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text49">
                      Provide necessary information for ID verification to
                      ensure account security.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text36 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text46">Fast Delivery</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text38 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text44">
                      Receive your ID-verified LinkedIn account promptly after
                      verification.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text39 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text43">Start Connecting</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text41 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text48">
                      Begin using your LinkedIn account for outreach and
                      generating leads with confidence.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text42 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step3Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
  step4Description: undefined,
  step2Description: undefined,
  step2Title: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
}

export default Steps2
