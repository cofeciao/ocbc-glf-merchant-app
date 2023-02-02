// import modules
import { formatNameField, getCookie, preventSpecialCharacters, trackingData } from '@/utils/utils';
import { Container, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Button, Category, Link, ListDocument, SelectOnLine, InputBase } from '@sectionsg/orc';
import React, { useState } from "react";

// import constants
import {
  APEX_APP_ID_NONE_REPRICING_UAT,
  APEX_APP_ID_REPRICING_LENGTHENING_UAT,
  API_LINK,
  APPLY_WITH_SINGPASS, ATTRIBUTE_LIST_REPRICING_LENGTHENING, ATTRIBUTE_NONE_REPRICING, DATA_CARD_CHECKBOX, DATA_DOCUMENT,
  DATA_LANDING_DOCUMENT, DATA_STATE_LENGTH_SHORT, DATA_STATE_REPRICING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, DATA_STATE_REPRICING_SHORTENING_DDA, DONT_HAVE_SINGPASS, FILL_IN_ONLINE_APPLICATION_FORM, LIST_DOCUMENT_TENURE_1, LIST_NATIONAL, LIST_TERM_LOAN, LOGIN_WITH_OCBC_MYINFO_SIMULATOR, LOGIN_WITH_SINGPASS, MANUAL, NEXT, NO_UPLOAD_DOCUMENT, REDIRECTURL, REDIRECTURL_BAU, SECRET_NONE_REPRICING_UAT, SECRET_PREPAYMENT_UAT, SECRET_REPRICING_LENGTHENING_UAT, SECRET_REPRICING_UAT, SINGPASS, SPEED_UP_APPLICATION, URL_MANUAL_FLOW, URL_SINGPASS_FLOW, WHAT_YOU_NEED
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";
import { useEffect } from 'react';
import { loginSingPass } from '@/data-manager/info';
import { getMyInfo, saveFormData, setMainApplicant, setShowDocument } from '@/store/form';
import _ from 'lodash';

// render UI
const LandingWhatYouNeed: React.FC<ILanding.ILandingWhatYouNeed> = (props) => {
  const {
    handleCheckManualAndLenthenTenureMoreThanOne,
    cx,
    keyValidation,
    setKey,
    contentShow,
    checkMatchOption,
    formReduxData,
    formDataLanding,
    openDialog,
    setValueFormLandingPage,
    handleShowListDocument,
    handleNextPage,
    handleCallApiLoanAppMgmt,
    simulatorLoginSingPass,
    handleValidation,
    history,
    checkMatchOptionBorrowerFlow,
    checkReturnConditionListDocumentDefault,
    checkReturnConditionListDocumentForManual,
    handleVerifyChangeUI,
    handleClickButtonNextForManual,
    query,
    dispatch,
    getListDocument,
    setLoading
  } = props;

  const [authCode, setAuthCode] = useState({
    code: ''
  })

  const APEX_APP_ID = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.clientIdRepricing : process.env.myinfo.clientIdNonRepricing;
  const SECRET = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.secretRepricing : process.env.myinfo.secretNonRepricing;
  const ATTRIBUTE_LIST = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.attributeListRepricing : process.env.myinfo.attributeListNonRepricing;

  const getMyInfoUrl = () => {
    const api = process.env.myinfo.api;
    const clientid = APEX_APP_ID;
    const attributes = ATTRIBUTE_LIST;
    const secret = SECRET;
    let purpose = 'form filling.'
    const redirecturi = process.env.myinfo.redirectUri;
    return api + '?client_id=' + clientid + '&secret=' + secret + '&attributes=' + attributes + '&purpose=' + purpose + '&state=' + uuidv4() + '&redirect_uri=' + redirecturi
  }

  const checkLoginSingPass =  () => {
    // Set value to sessionStorage because store will be empty if redirect page
    // Redirect to login by myinfo
    window.location.href = getMyInfoUrl();
    document.cookie = `purpose=${formDataLanding.purpose}`
    document.cookie = `listChecked=${contentShow}`
    document.cookie = `lockIn=${formDataLanding.lockIn}`
    document.cookie = `yourRate=${formDataLanding.yourRate}`
    document.cookie = `reason=${formDataLanding.reason}`
    document.cookie = `formType=${formReduxData.mainApplicant}`
    document.cookie = `repricing=${_.includes(contentShow, DATA_CARD_CHECKBOX[0].label)}`
    document.cookie = `lengthening_of_loan_tenure=${_.includes(contentShow, DATA_CARD_CHECKBOX[1].label)}`
    document.cookie = `shortening_of_loan_tenure=${_.includes(contentShow, DATA_CARD_CHECKBOX[2].label)}`
    document.cookie = `partial_prepayment=${_.includes(contentShow, DATA_CARD_CHECKBOX[3].label)}`
    document.cookie = `full_redemption_of_loan=${_.includes(contentShow, DATA_CARD_CHECKBOX[4].label)}`
    document.cookie = `change_of_debiting_account=${_.includes(contentShow, DATA_CARD_CHECKBOX[5].label)}`
    document.cookie = `documentRequired=${(getListDocument() && getListDocument().length > 0) ? [...getListDocument()] : []}`
  }

  useEffect(() => {
    const code = query.get('code');
    if (code) {
      setLoading(true);
    }
    setTimeout(() => {
      if (!localStorage.getItem("authorCode") && code) {
        localStorage.setItem('authorCode', code);
        const dataForm = {
          ...formReduxData.form,
          formLanding: {
            ...formDataLanding,
            lockIn: getCookie('lockIn') && getCookie('lockIn').length > 0 ? getCookie('lockIn') : '',
            purpose: getCookie('purpose') && getCookie('purpose').length > 0 ? getCookie('purpose') : '',
            reason: getCookie('reason') && getCookie('reason').length > 0 ? getCookie('reason') : '',
            yourRate: getCookie('yourRate') && getCookie('yourRate').length > 0 ? getCookie('yourRate') : '',
            listChecked: getCookie('listChecked') && getCookie('listChecked').length > 0 ? getCookie('listChecked').split(",") : [],
            documentRequired: getCookie('listChecked') && getCookie('documentRequired').length > 0 ? getCookie('documentRequired').split(",") : []
          }
        };
        dispatch(setMainApplicant(SINGPASS));
        history.push(URL_SINGPASS_FLOW.checkInformation);
        dispatch(saveFormData(dataForm))
      } else {
        localStorage.removeItem("authorCode");
      }
      setLoading(false);
    }, 1500)
  }, [])

  /**
   * handle Detect NonRepricing
   * @returns {Boolean }
   */
  const handleDetectNonRepricing = () => {
    if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[2].label)
    || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[3].label)
    || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[4].label)
    || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[5].label)
    || (contentShow.length === 3 && checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, contentShow))
    || (contentShow.length === 2 && checkMatchOption(DATA_STATE_LENGTH_SHORT, contentShow))
    || (contentShow.length === 2 && checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA, contentShow))
    || (contentShow.length === 2 && checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA, contentShow))
    ) {
      return true;
    } else {
      return false;
    }
  }

   // function get propertyInformation attribute
   const getAuthorCode = (name: string, value: string, error: string) => setAuthCode({
    ...authCode,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });
  
  return (
    <section className={cx('content', 'content-2nd', 'mt-60', 'align-flex-start', formReduxData.isBorrower && 'mt-borrower')}>
      <div className={cx('col-left', formReduxData.isBorrower && 'col-left-borrower')}>
        <Category>
          {WHAT_YOU_NEED}
        </Category>
      </div>
      <div className={cx('col-right', handleVerifyChangeUI() && 'bgGunmetalBluegreyCustom')}>
        <div className={cx('content-right', handleCheckManualAndLenthenTenureMoreThanOne() && 'manual-next')}>

          {/* Checked Repricing && purpose is Owner occupied || Applicant manual && checked Repricing && Lengthening of loan tenure   */}

          {/* Repricing lengthen tenure 1 (Default) */}
          {
            checkReturnConditionListDocumentDefault() && !formReduxData.showDocument && !formReduxData.isBorrower && (
              <div className="wrap-document">
                <h3 className='bold'>
                  {DATA_LANDING_DOCUMENT.title}
                </h3>
                <div className="content-document">
                  <ListDocument
                    dataListDocument={LIST_DOCUMENT_TENURE_1}
                    handleDialog={openDialog}
                  />
                </div>
              </div>
            )
          }

          {/* Repricing lengthen tenure 2 */}
          {
            (checkReturnConditionListDocumentForManual() ||
              formReduxData.isBorrower && formReduxData.showDocument && formReduxData.mainApplicant === MANUAL)
            && (
              <div className="wrap-document">
                <div className={cx('wrap-title-document-multiple')}>
                  <div className={cx('title-document')}>
                    {DATA_DOCUMENT.documentYouNeed}
                    {` `}
                    <SelectOnLine
                      single
                      placeholder='Please select'
                      listValues={LIST_NATIONAL}
                      defaultValue={formDataLanding.national}
                      getValue={(value: any) => {
                        setValueFormLandingPage(
                          'national',
                          value.value,
                        );
                      }}
                    />
                  </div>
                  {/* {
                    (!formReduxData.isBorrower  && !handleDetectNonRepricing()) && (
                      <div className={cx('title-document')}>

                        {DATA_DOCUMENT.and}
                        {` `}
                        <SelectOnLine
                          single
                          placeholder='Please select'
                          listValues={LIST_TERM_LOAN}
                          defaultValue={LIST_TERM_LOAN[0].value}
                          getValue={(value: any) => {
                            setValueFormLandingPage(
                              'termLoan',
                              value.value,
                            );
                          }}
                        />
                        {` `}
                        {DATA_DOCUMENT.forYourMortgaged}
                      </div>
                    )
                  } */}
                </div>
                <div className="content-document">
                  {
                    handleShowListDocument() && handleShowListDocument().length > 0 ? (
                      <ListDocument
                        dataListDocument={handleShowListDocument()}
                        handleDialog={openDialog}
                      />
                    ) : (
                      <div className="mb-dt-30">{NO_UPLOAD_DOCUMENT}</div>
                    )
                  }
                </div>
              </div>
            )
          }

          {/* Button for singpass */}
          {
            formReduxData.mainApplicant && !formReduxData.showDocument && (
              <>
                <div>
                  <Button
                    backgroundClass={'bgLipstickOrangey'}
                    disabled={formReduxData.isShowBannerMaintenance}
                    onClick={() => {
                      if(formReduxData.isBorrower) {
                        handleNextPage(SINGPASS)
                      } else {
                        if (handleValidation()) {
                          checkLoginSingPass()
                        }
                      }
                      
                    }}
                  >
                    {
                      formReduxData.isBorrower ? (
                        <>
                          {LOGIN_WITH_SINGPASS}
                        </>
                      ) : (
                        <>
                          {APPLY_WITH_SINGPASS}
                        </>
                      )
                    }
                  </Button>

                </div>
                <div className={cx('dont-have-singpass')}>
                  <h3 className='bold'>

                    {
                      DONT_HAVE_SINGPASS
                    }

                  </h3>
                  <Link
                    href="/"
                    classHover="linkUnderline"
                    target=""
                    fontSizeMB={14}
                    isOnClick
                    disabled={formReduxData.isShowBannerMaintenance}
                    onClick={() => {document.cookie = `listChecked=${contentShow}`; document.cookie = `formType=${MANUAL}`; handleNextPage(MANUAL)}}
                  >
                    {
                      FILL_IN_ONLINE_APPLICATION_FORM
                    }
                  </Link>
                </div>
              </>
            )
          }
          {/* Button for manual and has list document */}
          {
            formReduxData.showDocument && (
              <>
                <Button
                  backgroundClass={'bgGunmetalBluegrey'}
                  disabled={formReduxData.isShowBannerMaintenance}
                  onClick={() => {handleClickButtonNextForManual();}}
                  className={cx('btn-bg-grey')}
                >
                  {
                    NEXT
                  }
                </Button>

                <div className={cx('dont-have-singpass')}>
                  <h3 className='bold'>

                    {
                      SPEED_UP_APPLICATION
                    }

                  </h3>
                  <Link
                    href="/"
                    classHover="linkUnderline"
                    target=""
                    fontSizeMB={14}
                    isOnClick
                    disabled={formReduxData.isShowBannerMaintenance}
                    onClick={() => { 
                      dispatch(setShowDocument(false))
                      dispatch(setMainApplicant(SINGPASS));}}
                  >
                    {
                      APPLY_WITH_SINGPASS
                    }
                  </Link>
                </div>
              </>
            )
          }
        </div>
        <div>
            {
              !formReduxData.isBorrower && ! formReduxData.showDocument && process.env.env !== 'prod' && (
                <>
                  <div className={cx('mt-dt-30')}><b>OCBC Myinfo Simulator<br/>
                  (ONLY FOR TESTING PURPOSES):</b></div>
                  <Grid container>
                    <Grid
                      item lg={3} md={3} sm={12} xs={12}
                      id="authCode"
                      className={cx('mt-dt-10')}
                    >
                      <InputBase
                        label="Auth Code"
                        placeholder=""
                        type="number"
                        size="large"
                        id={uuidv4()}
                        maxLength={6}
                        inputKey={keyValidation}
                        name="code"
                        kind="auth-code"
                        preventSpecialCharacters={preventSpecialCharacters}
                        value={authCode.code}
                        getValue={(value: any) => {
                          setKey('')
                          getAuthorCode(
                            'code',
                            value.value,
                            value.error,
                          );
                        }}
                      />
                    </Grid>
                    <br />
                  </Grid>
                  <Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} className={cx('mt-dt-30')}>
                      <Button
                        backgroundClass={'bgLipstickOrangey'}
                        disabled={formReduxData.isShowBannerMaintenance}
                        onClick={() => {
                          if (handleValidation()) {
                            document.cookie = `listChecked=${contentShow}`
                            document.cookie = `formType=${formReduxData.mainApplicant}`
                            simulatorLoginSingPass(authCode.code, APEX_APP_ID, SECRET, ATTRIBUTE_LIST);
                          }
                        }}
                      >
                        {LOGIN_WITH_OCBC_MYINFO_SIMULATOR}
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )
            }
          </div>
      </div>
    </section>
  );
};
export default LandingWhatYouNeed;
