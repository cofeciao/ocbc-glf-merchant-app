/***
 *  REPRICING REQUEST
 *    >> child
 *      >> section wrapper
 *      >> input file
 *      >> button
 *      >> dialog
 */
// import lib
import classnames from "classnames/bind";
import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import _ from 'lodash';

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import myInfo from '../../assets/images/icon-logo-3.png';
import myInfoBlue from '../../assets/images/icon-info-blue.svg';

// import types
import { IRepricingRequest } from "./RepricingRequest";

// import styles
import styles from "./RepricingRequest.scss";

// import image
import IconRepricingRequest from '../../assets/images/repricing-request.png'

// import component lib
import {
  SectionWrapper,
  InputFile,
  Button,
  Dialog,
  Loading,
} from '@sectionsg/orc';

// import popup
import IRAS from "../popup/IRAS";

// import function
import { scrollToError } from '../../utils/utils';

// import function get data from API
import { getLoanCreate, getTnc, saveFormData } from '../../store/form';
import { MAX_FILENAME, MAX_FILES, WIDTH_DIALOG_DEFAULT, UPLOAD_FILE_NRIC, PLEASE_UPLOAD_A_DOCUMENT, YOU_CAN_UPLOAD_UP_TO_TWO_DOCUMENTS, LIST_DATA_LABEL_UPLOAD, LIST_DATA_UPLOAD, LIST_REQUEST_REPRICING, LIST_SELECT_PURPOSE, URL_SINGPASS_FLOW, URL_REVIEW_BORROWER_MANUAL, SINGPASS, URL_MANUAL_FLOW, URL_PERSONAL_BORROWER_MANUAL, URL_REPRICING_BORROWER_MANUAL, REVIEW, NEXT, DATA_CARD_CHECKBOX, LIST_COUNTRIES, LIST_DATA_TNC, PASSPORT, LIST_DATA_RENAMING_FILES, DATA_DOCUMENT_RESPONSE } from "@/utils/constants";
// import demo
import RepricingRequestDemo from "../demo/repricing-request";
import NOA from "../popup/NOA";
import CPFContribution from "../popup/CPFContribution";
import CPFProp from "../popup/CPFProp";
import HDB from "../popup/HDB";
import Error from "../popup/Error";
import { loanAttachmentMgmt, createLoanAppMgmt, getTncmgmt } from "@/data-manager/info";


const cx = classnames.bind(styles);

const RepricingRequest: React.FC<IRepricingRequest.IProps> = forwardRef(({ checkMatchOptionNonRepricingAndPricing, children }, ref) => {
  const [key, setKey] = useState<number>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [itemClick, setItemClick] = useState<string>('')
  const [loading, setLoading] = useState(false);
  const [dialogPopup, setDialogPopup] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [listDocument, setListDocument] = useState<string[]>()
  const [dataError, setDataError] = useState({});
  // init data upload file
  const [signatureFiles, setSignatureFiles] = useState([]);

  // get data from redux store
  const formReduxData = useSelector((state: any) => state.form);
  const dataListChecked = formReduxData && formReduxData.form &&  formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked ? formReduxData.form.formLanding.listChecked : [];

  /**
   * Handle open dialog
   */
  const openDialog = () => {
    setDialogPopup(true);
  };

  /**
   * Handle close dialog
   */
  const closeDialog = () => {
    setDialogPopup(false);
    setDataError('')
  };

  /**
   * Handle get data upload
   * @param values 
   * @param index 
   * @return {array}
   */
  const getSignatureFiles = (values: any, index: number) => {
    const arrayTemp = JSON.parse(JSON.stringify(signatureFiles));
    arrayTemp[index] = values;
    setSignatureFiles(arrayTemp);
  };

  /**
 * Async data from Store - Retrieves listChecked && documentRequired
 */
  useEffect(() => {
    if (formReduxData.form && formReduxData.form.formLanding.documentRequired && formReduxData.form.formLanding.documentRequired.length > 0) {
      setListDocument(formReduxData.form.formLanding.documentRequired)
    }
  }, [formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired])


  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
         {formReduxData.form && formReduxData.form.isEditing ? <>
            {REVIEW}
            </> : <>
              {NEXT}
            </>
        }
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }


  /**
   * Function set data when back to review
   */
  useEffect(() => {
    const data = formReduxData.form;
    if (!data) return;
    if (data && data.rePricingRequest) {
      setSignatureFiles(data.rePricingRequest);
    }
  }, [formReduxData.form && formReduxData.form.rePricingRequest]);

  /**
   *  Function validate form
   * @returns {boolean}
   */
   const validateForm = () => {
    for (const index in signatureFiles) {
      if (_.isEmpty(signatureFiles[index])) { return false; }
      if ((_.sumBy(signatureFiles[index], item => Number(item.Size))) > 5) {
        return false
      }
    }
    return true
  };

  /**
   * Handle Save data
   */
  const saveData = () => {
    const dataForm = {
      ...formReduxData.form,
      rePricingRequest: signatureFiles
    };
    dispatch(saveFormData(dataForm));
  }

  /**
   * 
   * @returns dataTnc
   */
  const renderDataTnc = () => {
    const isRepricingAndLengthening = _.includes(dataListChecked, LIST_REQUEST_REPRICING.repricing[0]) && _.includes(dataListChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]);
    const dataTnc = isRepricingAndLengthening ? [LIST_DATA_TNC.fullRedemptionOfAllLoans, LIST_DATA_TNC.repricingandlengtheningOfLoanTenure] : [LIST_DATA_TNC.fullRedemptionOfAllLoans];
    dataListChecked && dataListChecked.map((item: any, index: number) => {
      if (item === LIST_REQUEST_REPRICING.repricing[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.repricing)
      }
      if (item === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.lengtheningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0]) {
        dataTnc.push(LIST_DATA_TNC.shorteningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.partialPrepayment[0]) {
        dataTnc.push(LIST_DATA_TNC.partialPrepayment)
      }
      if (item === LIST_REQUEST_REPRICING.ddaAccount[0]) {
        dataTnc.push(LIST_DATA_TNC.ddaAccount)
      }
    })
    return dataTnc;
  }

  /**
   * Handle button next
   */
  const handleNext = async() => {
    if(formReduxData && _.isEmpty(formReduxData.dataTnc)) {
      const dataTnc = await getTncmgmt(renderDataTnc());
      if (dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.RespBody && dataTnc.TNCMgmtResp.RespBody.Result) {
        dispatch(getTnc(dataTnc.TNCMgmtResp.RespBody.Result));
      } else {
        setDataError(dataTnc.TNCMgmtResp.ErrorDetail)
      }
    }
    const formLanding = formReduxData.form;
    if (validateForm()) {
      setLoading(true);
      if (formReduxData.isBorrower && formReduxData.mainApplicant === 'Manual') {
        const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
        const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
        const dataMyInfo = formReduxData && formReduxData.myInfo;
        const response = DATA_DOCUMENT_RESPONSE
        if (response.LoanAttachmentMgmtResp.RespBody) {
          setLoading(false);
          saveData();
          if (formLanding.isEditing) {
            if (formReduxData.isBorrower) {
              history.push(URL_REVIEW_BORROWER_MANUAL);
            } else {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
              history.push(URL_MANUAL_FLOW.review);
              }
            }
          } else {
            if (formReduxData.isBorrower) {
              if (formReduxData.form && formReduxData.form.formLanding
                && formReduxData.form.formLanding.listChecked
                && formReduxData.form.formLanding.listChecked.length === 1
                && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
              ) {
                history.push(URL_PERSONAL_BORROWER_MANUAL)
              } else {
                history.push(URL_REVIEW_BORROWER_MANUAL);
              }
            } else {
              if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.purpose !== LIST_SELECT_PURPOSE[1].value) && formLanding.formLanding.listChecked.length === 1) {
                if (formReduxData.mainApplicant === SINGPASS) {
                  history.push(URL_SINGPASS_FLOW.review);
                } else {
                history.push(URL_MANUAL_FLOW.review);
                }
              } else {
                if (formReduxData.mainApplicant === SINGPASS) {
                  history.push(URL_SINGPASS_FLOW.nonRepricingRequest);
                } else {
                  if (checkMatchOptionNonRepricingAndPricing()) {
                    history.push(URL_MANUAL_FLOW.nonRepricingRequest);
                  } else {
                    history.push(URL_MANUAL_FLOW.review);
                  }
                }
              }
            }
          }
        } else {
          setTimeout(() => {
            setLoading(false)
            }, 1500)
        }
      } else {
      const response = DATA_DOCUMENT_RESPONSE
      if (response.LoanAttachmentMgmtResp.RespBody) {
        setLoading(false);
        saveData();
        if (formLanding.isEditing) {
          if (formReduxData.isBorrower) {
            history.push(URL_REVIEW_BORROWER_MANUAL);
          } else {
            if (formReduxData.mainApplicant === SINGPASS) {
              history.push(URL_SINGPASS_FLOW.review);
            } else {
            history.push(URL_MANUAL_FLOW.review);
            }
          }
        } else {
          if (formReduxData.isBorrower) {
            if (formReduxData.form && formReduxData.form.formLanding
              && formReduxData.form.formLanding.listChecked
              && formReduxData.form.formLanding.listChecked.length === 1
              && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
            ) {
              history.push(URL_PERSONAL_BORROWER_MANUAL)
            } else {
              history.push(URL_REVIEW_BORROWER_MANUAL);
            }
          } else {
            if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.purpose !== LIST_SELECT_PURPOSE[1].value) && formLanding.formLanding.listChecked.length === 1) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
              history.push(URL_MANUAL_FLOW.review);
              }
            } else {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.nonRepricingRequest);
              } else {
                if (checkMatchOptionNonRepricingAndPricing()) {
                  history.push(URL_MANUAL_FLOW.nonRepricingRequest);
                } else {
                  history.push(URL_MANUAL_FLOW.review);
                }
              }
            }
          }
        }
      } else {
        setTimeout(() => {
          setLoading(false)
          }, 1500)
        }
      }
    } else {
      setLoading(false);
      setKey(Date.now());
      scrollToError();
    }
  }

  useEffect(() => {
    if (!_.isEmpty(dataError)) {
      openDialog();
    }
  }, [dataError])

  /**
   * Function call back when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.rePricingRequest)) {
          return true;
        }
        return validateForm();
      } return true;
    },
    handleNextPage() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.rePricingRequest)) {
          return true;
        }
        if (validateForm()) {
          saveData();
        } else {
          setKey(Date.now());
          scrollToError();
        }
      } return true;
    },
  }));

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    if (formReduxData.isBorrower) {
      history.push(URL_PERSONAL_BORROWER_MANUAL)
    } else {
      if (formReduxData.mainApplicant === SINGPASS) {
        history.push(URL_SINGPASS_FLOW.accountInformation)
      } else {
        history.push(URL_MANUAL_FLOW.accountInformation)
      }
    }
  }

  /**
   * 
   * @param data 
   * @returns {boolean}
   */
  const handleRenderIcon = (data: string) => {
    let showIcon = true;
    if (data === LIST_DATA_UPLOAD[1] || data === LIST_DATA_UPLOAD[2] || data === LIST_DATA_UPLOAD[8] || data === LIST_DATA_UPLOAD[9] || data === LIST_DATA_UPLOAD[5]) {
      showIcon = false
    } else {
      showIcon = true;
    }
    return showIcon;

  }

  /**
   * 
   * @param nameDialog 
   * @returns {html}
   */
  const contentDialog = (nameDialog: string) => {
    if (nameDialog === LIST_DATA_UPLOAD[0]) {
      return <IRAS />
    } else if (nameDialog === LIST_DATA_UPLOAD[3]) {
      return <CPFContribution />
    } else if (nameDialog === LIST_DATA_UPLOAD[4]) {
      return <NOA />
    } else if (nameDialog === LIST_DATA_UPLOAD[5]) {
      return <CPFProp />
    } else if (!_.isEmpty(dataError)) {
      return <Error dataError={dataError} />
    } else {
      return <HDB />
    }
  }

  /**
   * 
   * @param label 
   * @returns {string}
   */
  const labelInput = (label: string) => {
    const indexLabel = _.findIndex(LIST_DATA_UPLOAD, item => item === label);
    return LIST_DATA_LABEL_UPLOAD[indexLabel]
  }

  const documentName = (label: string) => {
    const indexDocs = _.findIndex(LIST_DATA_UPLOAD, item => item === label);
    return LIST_DATA_RENAMING_FILES[indexDocs]
  }

  /**
   * 
   * @param data 
   * @returns {string}
   */
  const textCheckBox = (data: Array<string>) => {
    if (data.length > 0) {
      if (data.length === 1) {
        return _.lowerCase(data[0])
      } else {
        return _.lowerCase(_.join(data, ' and '))
      }
    } else {
      return ''
    }
  }

  const formatRenaming = `${formReduxData.loanCreate.SystemRefNo}_${formReduxData.form && formReduxData.form.personalInformation && formReduxData.form.personalInformation.nameNric || formReduxData.form && formReduxData.form.personalInformation && formReduxData.form.personalInformation.namePassport}`

  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      <section className={cx('repricing-request')}>
        <div className={"title-wrapper"}>
          <img src={IconRepricingRequest} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text")}><span>Repricing request</span></div>
        </div>
        <div className={'description mb-dt-30'}>
              <>
                All loan accounts for the mortgaged property will be repriced.
                <br />
                <br />
                {
                  !formReduxData.isBorrower ? (
                    <>
                      We will require supporting documents to process your {textCheckBox(dataListChecked)} request.
                    </>
                  ) : (
                    <>
                      We will require some documents to facilitate your repricing request.
                    </>
                  )
                }
                
              </>
         </div>

        <div className="body-reg mb-dt-40">Acceptable file types: PDF (max 2MB), JPG, PNG</div>
        {/* Section upload input file */}
        {listDocument && listDocument.map((item: string, index: number) => (
          <section key={index} className={cx('background-gray', 'mt-dt-10')}>
            <SectionWrapper margin=" 0 0 5px 0">
              <InputFile
                id={uuidv4()}
                inputKey={key === null ? undefined : key}
                title={labelInput(item)}
                messageError={key !== null ? PLEASE_UPLOAD_A_DOCUMENT : ''}
                multiple={true}
                required
                hiddenInput={item !== UPLOAD_FILE_NRIC && item !== PASSPORT}
                labelBefore={''}
                labelAfter={''}
                labelFooter={item !== UPLOAD_FILE_NRIC && item !== PASSPORT ? '' : YOU_CAN_UPLOAD_UP_TO_TWO_DOCUMENTS}
                contentBody={''}
                maxFileName={MAX_FILENAME}
                maxFiles={item !== UPLOAD_FILE_NRIC && item !== PASSPORT ? 10000 : MAX_FILES}
                defaultValue={signatureFiles ? signatureFiles[`${index}`] : []}
                errorConnection={formReduxData.errorConnection}
                hasLoading
                marginErrorMessage="5px 0 0"
                getValue={(value: any) => {
                  getSignatureFiles(value, index);
                }}
                renaming={`${formatRenaming}_${documentName(item)}`}
              >
                {
                  handleRenderIcon(item) && (
                    <span className="info-icon-wrapper" onClick={() => { openDialog(); setItemClick(item) }} aria-hidden="true">
                      <img src={myInfo} alt="myInfo-logo" className={cx('icons', 'icon-black')} />
                      <img src={myInfoBlue} alt="myInfo-logo" className={cx('icons', 'icon-blue')} />
                    </span>
                  )
                }
              </InputFile>
              {/* {
                totalSizeUpload > 5 && (
                  <div className="error-message">Acceptable file size max 5MB</div>
                )
              } */}
            </SectionWrapper>
          </section>
        ))}
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={() => handlePrev()}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className="d-inline">
              {children}
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
      </section>
      {/* Popup Demo */}
      <Dialog
        isOpen={dialogPopup}
        hasCloseBtn
        onRequestClose={closeDialog}
        width={WIDTH_DIALOG_DEFAULT}
      >
        {contentDialog(itemClick)}
      </Dialog>
      {/* <RepricingRequestDemo /> */}
    </>
  );
});
export default RepricingRequest;
