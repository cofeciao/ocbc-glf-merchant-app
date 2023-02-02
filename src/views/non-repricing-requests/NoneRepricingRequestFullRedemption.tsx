/***
 * NON-REPRICING FULL REDEMPTION OF ALL LOANS
 *    >> child
 *      >> header and intro
 *      >> full redemption of all loans form
 *        >> reason and low firm appointment || flow firm you want to appoint
 *        >> Mode of settlement
 */

// import modules
import { getLoanCreate, saveFormData, setDataForm } from "@/store/form";
import { scrollToError } from "@/utils/utils";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import classnames from "classnames/bind";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import component lib
import { Button, SectionWrapper } from '@sectionsg/orc';

// import constants
import { DATA_DOCUMENT_RESPONSE, DAT_FULL_REDEMPTION_OF_ALL_LOANS, ERROR, LIST_PROPERTY, LIST_PROPERTY_COUNTRY, LIST_RADIO_PREPAYMENT_INSTRUCTIONS, LIST_SELECT_FULL_REDEMPTION, LIST_SELECT_LAW_FIRM_APPOINTMENT, NEXT, SINGPASS, URL_MANUAL_FLOW, URL_SINGPASS_FLOW, YES } from "../../utils/constants";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";
// import styles
import styles from "./NoneRepricingRequest.scss";

// import child component
import NoneRepricingRequestFullRedemptionForm from "./NoneRepricingRequestFullRedemptionForm";
import NoneRepricingRequestFullRedemptionIntro from "./NoneRepricingRequestFullRedemptionIntro";
import { useHistory } from "react-router";
import { createLoanAppMgmt, loanAttachmentMgmt } from "@/data-manager/info";
import _ from "lodash";

// render UI
const NoneRepricingRequestFullRedemption: React.FC<INoneRepricingRequest.INoneRepricingFullRedemption> = forwardRef(({ handleValidationInputFile, listDocument, listFileUpload, dataSubmit, setLoading, setDataError, openDialog }, ref) => {

  const cx = classnames.bind(styles);
  const [key, setKey] = useState<number>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [change, setChange] = useState(false);

  /**
   * Retrieves data from Store
   */
  const formReduxData = useSelector((state: any) => state.form);  // format list checkbox

  /**
  * Form data for redemption of all loans
  */
  const [dataFormFullRedemption, setDataFormFullRedemption] = useState<INoneRepricingRequest.INoneRepricingFormFullRedemption>({
    reasonForFullRedemption: formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.reason ?  formReduxData.form.formLanding.reason :  '',
    lawFirmAppointment: '',
    businessName: '',
    prepaymentInstructions: ''
  })

  /**
   * List reason for full redemption
   */
  const [listReason, setListReason] = useState<INoneRepricingRequest.ISelect[]>(LIST_SELECT_FULL_REDEMPTION)
  const [listRadio, setListRadio] = useState<INoneRepricingRequest.IRadio[]>(LIST_RADIO_PREPAYMENT_INSTRUCTIONS)

  /**
   * list law firm appointment
   */
  const [listLawFirmAppointment, setListLawFirmAppointment] = useState<INoneRepricingRequest.ISelect[]>(LIST_SELECT_LAW_FIRM_APPOINTMENT)

  /**
   * Handle button next
   * @param {boolean} clickStepper - Variable detect is exist stepper 
   * @returns 
   */
  const dataFormat = {
    ...dataSubmit,
    "FullRedemption": {
      "FullRedemptionModel": [
        {
          "OutstandingLoanAmount": 0,
          "LoanCurrency": "",
          "InterestRate": 0,
          "LockInEndDate": "",
          "SysGenRepaymentEffectiveDate": "",
          "ReasonFullRedemptionCode": "",
          "ReasonFullRedemptionDesc": dataFormFullRedemption && dataFormFullRedemption.reasonForFullRedemption ? dataFormFullRedemption.reasonForFullRedemption : '',
          "LawFirm": dataFormFullRedemption && dataFormFullRedemption.businessName ?  dataFormFullRedemption.businessName : "",
          "PrepaymentFees": 0,
          "LawfirmToAppoint": dataFormFullRedemption && dataFormFullRedemption.lawFirmAppointment ? dataFormFullRedemption.lawFirmAppointment : '',
          "PaymentInstructions": dataFormFullRedemption && dataFormFullRedemption.prepaymentInstructions ? dataFormFullRedemption.prepaymentInstructions : '',
        }
      ]
    }
  }
  const handleNext = async (clickStepper: boolean) => {
    dispatch(setDataForm(dataFormat));
    // const responseLoansData = await createLoanAppMgmt(dataFormat, 'NEW');
    if (dataFormFullRedemption.lawFirmAppointment === LIST_SELECT_LAW_FIRM_APPOINTMENT[1].value && dataFormFullRedemption.businessName && dataFormFullRedemption.prepaymentInstructions) {
      if (listDocument && listDocument.length > 0) {
        if (handleValidationInputFile()) {
          setLoading(true);
          const response = DATA_DOCUMENT_RESPONSE
          if (response.LoanAttachmentMgmtResp.RespBody) {
            setLoading(false);
            const dataForm = {
              ...formReduxData.form,
              noneRepricingRequests: {
                ...dataFormFullRedemption,
                listDocument: listFileUpload
              }
            }
            dispatch(saveFormData(dataForm));
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          } else {
            setTimeout(() => {
              setLoading(false)
            }, 1500)
          }
        }
      } else {
        setLoading(true);
        const dataForm = {
          ...formReduxData.form,
          noneRepricingRequests: {
            ...dataFormFullRedemption,
          }
        }
        if(formReduxData && formReduxData.loanCreate && !_.isEmpty(formReduxData.loanCreate)) {
          setTimeout(() => {
            setLoading(false);
            dispatch(saveFormData(dataForm));
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }, 1500);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 15000)
        }
      }
      if (clickStepper) {
        return false;
      }
    } else if (dataFormFullRedemption.lawFirmAppointment === LIST_SELECT_LAW_FIRM_APPOINTMENT[0].value && dataFormFullRedemption.prepaymentInstructions) {
      if (listDocument && listDocument.length > 0) {
        if (handleValidationInputFile()) {
          setLoading(true);
          const response = DATA_DOCUMENT_RESPONSE
          if (response.LoanAttachmentMgmtResp.RespBody) {
            setLoading(false);
            const dataForm = {
              ...formReduxData.form,
              noneRepricingRequests: {
                ...dataFormFullRedemption,
                listDocument: listFileUpload
              }
            }
            dispatch(saveFormData(dataForm));
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          } else {
            setTimeout(() => {
              setLoading(false)
              openDialog(ERROR)
            }, 1500)
            }
        }
      } else {
        setLoading(true);
        const dataForm = {
          ...formReduxData.form,
          noneRepricingRequests: {
            ...dataFormFullRedemption,
          }
        }
        if(formReduxData && formReduxData.loanCreate && !_.isEmpty(formReduxData.loanCreate)) {
          setTimeout(() => {
            setLoading(false);
            dispatch(saveFormData(dataForm));
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }, 1500);
        } 
      }
      if (clickStepper) {
        return false;
      }
    } else {
      setKey(Date.now());
      scrollToError();
      if (clickStepper) {
        return false;
      }
    }
  }

  /**
   * Pass function to ref
   */
  useImperativeHandle(ref, () => ({
    handleNext(clickStepper: boolean) {
      handleNext(clickStepper);
    },
  }));

  /**
   * Render UI button
   * @returns 
   */
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
        {NEXT}
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  /**
   * Handle save value into form redemption
   * @param {string} name - Name of field 
   * @param {string} value  - Value of filed
   * @returns 
   */
  const setValueFormRedemption = (name: string, value: any) => setDataFormFullRedemption({
    ...dataFormFullRedemption,
    [name]: value,
  });

  /**
  * handle reset data when Onchange Law firm appointment
  * @param {string} name - Name of field 
  * @param {string} value  - Value of filed
  * @returns 
  */
  const setValueAndResetFirLawFirm = (name: string, value: any) => setDataFormFullRedemption({
    ...dataFormFullRedemption,
    businessName: '',
    [name]: value,
  });

  /**
   * Handle detect header and intro
   * @returns {string}
   */
  const handleDetectHeaderAndIntroText = () => {
    const dataForm = formReduxData.form
    const property = dataForm.propertyInformation.country
    if (dataForm && dataForm.formLanding) {
      if (LIST_PROPERTY_COUNTRY[0] === property) {
        return DAT_FULL_REDEMPTION_OF_ALL_LOANS.subTitleTwoMonths
      } else {
        return DAT_FULL_REDEMPTION_OF_ALL_LOANS.subTitleThreeMonths
      }
    }
    return DAT_FULL_REDEMPTION_OF_ALL_LOANS.subTitleTwoMonths
  }

  /**
   * Retrieves data from Store and async
   */
  useEffect(() => {
    const data = formReduxData.form;
    if (!data) return;
    if (data.noneRepricingRequests) {
      setDataFormFullRedemption(data.noneRepricingRequests);

      /**
       * Handle fetch radio checkbox
       */
      let listCheckbox: INoneRepricingRequest.IRadio[] = [];
      listCheckbox = [...LIST_RADIO_PREPAYMENT_INSTRUCTIONS];
      listCheckbox.map((item: INoneRepricingRequest.IRadio, idx: number) => {
        if (item.text === data.noneRepricingRequests.prepaymentInstructions) {
          listCheckbox[idx] = {
            text: listCheckbox[idx].text,
            checked: true,
            disable: idx === 0 && (dataFormFullRedemption.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[0].value || dataFormFullRedemption.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[1].value)
          }
        }
      })
      setListRadio(listCheckbox);
    }
  }, []);

  useEffect(() => {
    const data = formReduxData.form;
    let listCheckbox: INoneRepricingRequest.IRadio[] = [];
      listCheckbox = [...LIST_RADIO_PREPAYMENT_INSTRUCTIONS];
      listCheckbox.map((item: INoneRepricingRequest.IRadio, idx: number) => {
        listCheckbox[idx] = {
          text: listCheckbox[idx].text,
          checked: change ? false : item.text === (data && data.noneRepricingRequests && data.noneRepricingRequests.prepaymentInstructions),
          disable: idx === 0 && (dataFormFullRedemption.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[0].value || dataFormFullRedemption.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[1].value)
        }
      })
      if (change) {
        setDataFormFullRedemption({
          ...dataFormFullRedemption,
          prepaymentInstructions: ''
        })
      }
      setListRadio(listCheckbox);
  }, [dataFormFullRedemption.reasonForFullRedemption])

  return (
    <div className={cx('mod-redemption ')}>
      <section className={cx('partial-repayment', 'mt-dt-40')}>
        <SectionWrapper>

          {/* header and intro */}
          <NoneRepricingRequestFullRedemptionIntro
            handleDetectHeaderAndIntroText={handleDetectHeaderAndIntroText}
          />

          {/* Full redemption of all loans form */}
          <NoneRepricingRequestFullRedemptionForm
            dataFormFullRedemption={dataFormFullRedemption}
            selectKey={key}
            setValueFormRedemption={setValueFormRedemption}
            listReason={listReason}
            listLawFirmAppointment={listLawFirmAppointment}
            listRadio={listRadio}
            setValueAndResetFirLawFirm={setValueAndResetFirLawFirm}
            setChange={setChange}
          />

        </SectionWrapper>
      </section>
    </div>
  );
});
export default NoneRepricingRequestFullRedemption;
