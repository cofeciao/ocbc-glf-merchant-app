import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import GlobalContext from "./common/GlobalContext";
import Home from "./views/landing";
import PropertyInformation from './views/property-information';
import PersonalInformationSingPass from './views/sing-pass/personal-information';
import PersonalInformationManual from './views/manual/personal-information';
import AccountInformationSingPass from './views/sing-pass/account-information';
import AccountInformationManual from './views/manual/account-information';
import Confirmation from './views/confirmation';
import SomethingWentWrong from './views/something-went-wrong';
import RepricingRequest from './views/repricing-request';
import NonRepricingRequest from './views/non-repricing-requests';
import ReviewSubmit from './views/sing-pass/review-submit';
import SingpassReview from './views/manual/review-submit';
import NonRepricingRequestFullRedemption from './views/non-repricing-requests/NoneRepricingRequestFullRedemption';
import ContainerSingPass from './views/sing-pass';
import ContainerManual from './views/manual';

export default [
  <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/repricing-request" component={RepricingRequest} key="/" />,
  <Route exact path="/property-information" component={PropertyInformation} key="/" />,
  <Route exact path="/sing-pass/personal-information" component={PersonalInformationSingPass} key="/" />,
  <Route exact path="/sing-pass/non-repricing-requests" component={NonRepricingRequest} key="/" />,
  <Route exact path="/sing-pass/non-repricing-full-redemption" component={NonRepricingRequestFullRedemption} key="/" />,
  <Route exact path="/manual/personal-information" component={PersonalInformationManual} key="/" />,
  <Route exact path="/sing-pass/account-information" component={AccountInformationSingPass} key="/" />,
  <Route exact path="/manual/account-information" component={AccountInformationManual} key="/" />,
  <Route exact path="/confirmation" component={Confirmation} key="/" />,
  <Route exact path="/some-thing-went-wrong" component={SomethingWentWrong} key="/" />,
  <Route exact path="/sing-pass/review-submit" component={ReviewSubmit} key="/" />,
  <Route exact path="/manual/review" component={SingpassReview} key="/" />,

  <Route exact path="/sing-pass-form/:slug" component={ContainerSingPass} key="/sing-pass-form/:slug"  render={({ match, history }) => {
    if (history.action === 'POP') {
      window.location.href = '/';
    }
  }}/>,
  <Route exact path="/sing-pass-form/borrower/:slug" component={ContainerSingPass} key="/sing-pass-form/borrower/:slug" />,
  <Route exact path="/manual-form/borrower/:slug" component={ContainerManual} key="/manual-form/borrower/:slug" />,
  <Route exact path="/manual-form/:slug" component={ContainerManual} key="/manual-form/:slug" />,
]