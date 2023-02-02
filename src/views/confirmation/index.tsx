import { DATA_CARD_CHECKBOX, DATA_STATE_LENGTH_SHORT, DATA_STATE_REPRICING_LENGTHENING, LINK_EXTERNAL_PAGE, LIST_BORROWER_NUMBER, TITLE_PAGE } from "@/utils/constants";
import classnames from "classnames/bind";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from '@sectionsg/orc';

// import image
import IconConfirmation from '../../assets/images/confirmation.png';

// import style
import styles from "./Confirmation.scss";
import { useHistory } from "react-router";
import { Container } from "@material-ui/core";
import _ from "lodash";

// define function confirmation
const Confirmation: React.FC = ( { }) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  // get data from redux store
  const formRedux = useSelector((state: any) => state.form);

  const formReduxData = formRedux && formRedux.form && formRedux.form.formLanding && formRedux.form.formLanding.listChecked;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.action === 'POP') {
      window.location.href = '/';
    }
  }, [])

  const hasRepricing = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[0].label);
  const hasLengthening = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[1].label);
  const hasBothRepricingLengthening =  formReduxData && formRedux.form.formLanding.listChecked && hasRepricing && hasLengthening;
  const hasShorteningOfTenure = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[2].label);
  const hasPartialPrepayment = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[3].label);
  const hasFullRedemption = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[4].label);
  const hasBothShorteningOfTenurePartialPrepayment =  formReduxData && formRedux.form.formLanding.listChecked && hasShorteningOfTenure && hasPartialPrepayment;
  const hasDDA = formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[5].label);

  return (
    <>
    <div className={cx('confirmation-page')}>
        <Header
            namePage={TITLE_PAGE}
            backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
          />
        <Container className={cx('container')}>
          <div className={cx('confirmation-page', 'container', 'mt-dt-80', 'mt-mb-30')}>
            <div className={"title-wrapper"}>
              <img src={IconConfirmation} alt="icon" className={cx("left-image")} />
              <div className={cx("title-text")}><span>Great, we’ve got your application!</span></div>
            </div>
            <div className='description'>
              {
                (hasBothRepricingLengthening || hasRepricing || hasLengthening) && !formRedux.isBorrower && (
                  <>
                    <p className={'mb-dt-30'}>We have received your {hasBothRepricingLengthening ? 'repricing and lengthening of loan tenure' : hasRepricing ? 'repricing'  : hasLengthening ? 'lengthening of loan tenure' : ''} request and will be in touch with you in 2 working days.</p>
                    <p className={'mb-dt-30'}>If we need more information, we will call you.</p>
                  </>
                )
              }
              {
                (hasBothShorteningOfTenurePartialPrepayment || hasShorteningOfTenure || hasPartialPrepayment) && !formRedux.isBorrower && (
                  <p className={'mb-dt-30'}>
                    For your {hasBothShorteningOfTenurePartialPrepayment ? 'shortening of loan tenure and partial prepayment' : hasShorteningOfTenure ? 'shortening of loan tenure' : 'partial prepayment'} request, you will receive a system-generated advice once it is processed. If we have issues processing your request, you will receive an email from us with more details.
                  </p>
                )
              }
              {
                hasDDA && !formRedux.isBorrower && (
                  <p className={'mb-dt-30'}>
                    For your change of debiting account request, your monthly instalment as well as any fees relating to your home loan will be deducted from the new direct debiting account once the request is processsed.
                  </p>
                )
              }
              {
                hasFullRedemption && !formRedux.isBorrower && (
                  <p className={'mb-dt-30'}>
                    For your full redemption of loan request, the Bank’s appointed law firm or your appointed law firm will contact you. If we have issues processing your request, you will receive an email from us with more details.
                  </p>
                )
              }
              {/* {
                (formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[0].label) || formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[1].label)) && !formRedux.isBorrower && formRedux.form.accountInformation && formRedux.form.accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[0].value  && (
                  <>
                    <p className={'mb-dt-30'}>We have received your  request and will be in touch with you in 2 working days.</p>
                    <p>If we need more information, we will call you.</p>
                  </>
                )
              } */}
              {/* {
                (formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[0].label) || formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[1].label)) && !formRedux.isBorrower && formRedux.form.accountInformation && formRedux.form.accountInformation.borrowerNumber !== LIST_BORROWER_NUMBER[0].value &&  (
                  <>
                    <p className={'mb-dt-30'}>Your joint co-borrowers will receive an email asking them to verify the application request. Once we have received your co-joint borrowers’ <br /> acknowledgement, we will be in touch with you in 2 working days.</p>
                    <p>If we need more information, we will call you.</p>
                  </>
                )
              } */}
              {/* {
                formRedux.isBorrower && (
                  <>
                    <p className={'mb-dt-30'}>Thank you for acknowledging the request. We will be in touch within 2 working days.</p>
                    <p>If we need more information, we will call you.</p>
                  </>
                )
              } */}
              {/* {
                (formReduxData && formRedux.form.formLanding.listChecked.length === 1 && formRedux.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[2].label  && !formRedux.isBorrower) && (
                  <p>For your shortening of tenure request, you will receive a system-generated advice once it is processed. If we have issues processing your request, you will receive an email from us with more details.</p>
                )
              } */}
              {/* {
                (formReduxData && formRedux.form.formLanding.listChecked.length === 1 && formRedux.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[3].label  && !formRedux.isBorrower) && (
                  <p>For your partial prepayment request, you will receive a system-generated advice once it is processed. If we have issues processing your request, you will receive an email from us with more details.</p>
                )
              }
              {
                (formReduxData && formRedux.form.formLanding.listChecked.length === 1 && formRedux.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[5].label  && !formRedux.isBorrower) && (
                  <p>For your change of debiting account request, your monthly instalment as well as any fees relating to your home loan will be deducted from the new direct debiting account once the request is processed.</p>
                )
              }
              {
                (formReduxData && formRedux.form.formLanding.listChecked.length === 1 && formRedux.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[4].label  && !formRedux.isBorrower) && (
                  <p>For your full redemption request, the Bank’s appointed law firm or your appointed law firm will contact you. If we have issues processing your request, you will receive an email from us with more details.</p>
                )
              }
              {
                (formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[4].label) || formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[5].label) || formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[2].label) || formReduxData && formRedux.form.formLanding.listChecked.includes(DATA_CARD_CHECKBOX[3].label)) && !formRedux.isBorrower && formRedux.form.formLanding.listChecked.length > 1 && (
                  <p>Give us two working days to review. We will contact you on the outcome of the application.</p>
                )
              } */}
            </div>
          </div>
        </Container>
      </div>
    
    <Footer />
  </>
  )
}

export default Confirmation;