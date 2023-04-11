import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { 
  Grid,
  Box, 
  TextField, 
  Typography, 
  FormControl, 
  Select, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  InputLabel, 
  MenuItem 
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import images
import IconRadioBorder from '@/assets/images/icon-radio-border.svg';
import IconRadioCheckedWhite from '@/assets/images/icon-radio-checked-white.svg';

// import style
import styles from "./FeeAuthorisation.scss";

// import constants
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IFeeAuthorisation } from "./FeeAuthorisation";

//import components
import SectionWrapper from "../SectionWrapper";

// store
import { saveDataFeeAuthorisation } from "@/store/form";

const FeeAuthorisation: React.FC<IFeeAuthorisation.IProps> = forwardRef(({  }, ref) => {
  //classnames
  const cx = classNames.bind(styles);

  // hooks
  const history = useHistory()
  const dispatch = useDispatch();

  // constants
  const { LIST_STEP: {
    feeAuthorisation: {
      title,
      description,
      section: {
        feeAuthorisationInformation: {
          annual,
          oneTimeSetupFee,
          perDomesticTransaction,
          perInternationalTransaction,
          tokenisation,
          otherFees,
          decriptionForOtherFees
        },
        paymentForTheFirstYear,
        paymentForSubsequentYears,
        applicationConfirmation,
      }
    }
  }} = STEP_RM;

  // states
  const [loading, setLoading] = useState(false);
  const [paramsFeeAuthorisation, setParamsFeeAuthorisation] = useState<any>({
    paymentForTheFirstYear: {
      valueRadio: "",
      bankName: "",
      accountNumber: "",
    },
    paymentForSubsequentYears: {
      valueRadio: "",
      bankName: "",
      accountNumber: "",
    }
  });

  /**
   * Retrieves data of Fee and Rates step from Store
   */
  const dataFeeAndRateStore = useSelector(
    (state: any) => state.form.feeAndRateStep
  );

  /**
   * Retrieves data of Fee Authorisation step from Store
   */
  const dataFeeAuthorisationStore = useSelector(
    (state: any) => state.form.feeAuthorisationStep
  );

  /**
   * Set data from Fee Authorisation
   * @param data
   */
  const getDataFeeAuthorisationStep = (datas: any) => {
    dispatch(saveDataFeeAuthorisation(datas));
  };

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.feeRates);
  }

  /**
   * Handle button next
   */
   const handleNext = async () => {
    const dataFeeAuthorisation = {
      ...paramsFeeAuthorisation,
      annual: dataFeeAndRateStore.annual || "",
      oneTimeSetupFee: dataFeeAndRateStore.oneTimeSetupFee || "",
      perDomesticTransaction: dataFeeAndRateStore.perDomesticTransaction || "",
      perInternationTransaction: dataFeeAndRateStore.perInternationTransaction || "",
      tokenisation: dataFeeAndRateStore.tokenisation || "",
      otherFees: dataFeeAndRateStore.otherFees || "",
      descriptionFees: dataFeeAndRateStore.descriptionFees || "",
    };
    history.push(URL_MANUAL_FLOW.supplementaryDocument);
    getDataFeeAuthorisationStep(dataFeeAuthorisation)
  }

  /**
  * render UI Button
  * @returns {HTML}
  */
  const renderButton = () => {
      return (
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={handleNext}
          // disabled={!isValid || !isDirty}
        >
          Next
          <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
        </Button>
      )
  }

  /* render UI fee authorization information
  * @returns {HTML}
  */
  const renderItemInformation = (title: string, content: string) => {
    return (
      <div className={cx('group-item')}>
        <span className={cx('label')}>{title}</span>
        <span className={cx('content')}>{content || ""}</span>
      </div>
    )
  }

  /* render Form Indicate the bank name
  * @returns {HTML}
  */
  const renderForm = (typeListRadio: string) => {
    return (
      <Box className={cx("indicate-the-bank-name-form")}>
        <Grid container spacing={3}>
          <Grid item xs={12}>{paymentForSubsequentYears.titleIndicateTheBankName}</Grid>
          <Grid item xs={6}>
            <FormControl
              variant="filled"
              className={cx("duration-select")}
              fullWidth
              size="medium"
            >
              <InputLabel id="select-duration-label">
                Bank name
              </InputLabel>
              <Select
                fullWidth
                name={typeListRadio}
                value={paramsFeeAuthorisation[typeListRadio].bankName}
                onChange={(event: React.ChangeEvent<{value: unknown, name?: string }>) => {
                  const { value, name } = event.target;
                  setParamsFeeAuthorisation({
                    ...paramsFeeAuthorisation,
                    [name]: {
                      ...paramsFeeAuthorisation[name],
                      bankName: value
                    }
                  })
                }}
              >
                {_.map(paymentForSubsequentYears.listBankName, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              name={typeListRadio}
              value={paramsFeeAuthorisation[typeListRadio].accountNumber}
              type="number"
              label="Account number"
              variant="filled"
              onChange={(event: React.ChangeEvent<{value: unknown, name?: string }>) => {
                const { value, name } = event.target;
                setParamsFeeAuthorisation({
                  ...paramsFeeAuthorisation,
                  [name]: {
                    ...paramsFeeAuthorisation[name],
                    accountNumber: value
                  }
                })
              }}
            />
          </Grid>
        </Grid>
      </Box>
    )
  }

  /* render UI group radio
  * @returns {HTML}
  */
  const renderGroupRadio = (datas: any, typeListRadio: string) => {
    return (
      <>
        <Typography className={cx("group-radio-title")}>{datas.label}</Typography>
        <FormControl component="fieldset" className={cx("group-radio")}>
          <RadioGroup 
            aria-label="gender" 
            name={typeListRadio} 
            value={paramsFeeAuthorisation[typeListRadio] && paramsFeeAuthorisation[typeListRadio].valueRadio} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = event.target;
              setParamsFeeAuthorisation({
                ...paramsFeeAuthorisation,
                [name]: {
                  ...paramsFeeAuthorisation[name],
                  valueRadio: value
                }
              })
            }}
          >
            {datas.listRadio && datas.listRadio.length > 0 && 
              datas.listRadio.map((item: any, index: number) => (
                <FormControlLabel 
                  key={index} 
                  value={item.value}
                  className={cx(paramsFeeAuthorisation[typeListRadio] && paramsFeeAuthorisation[typeListRadio].valueRadio ===  item.value ? "active" : "inactive")}
                  control={
                    <Radio 
                      disableFocusRipple 
                      disableRipple 
                      disableTouchRipple 
                      icon={<img src={IconRadioBorder} alt="icon radio border" />}
                      checkedIcon={<img src={IconRadioCheckedWhite} alt="icon radio checked white" />}
                    />
                  } 
                  label={
                    <>
                      <span className={cx("label")}>{item.label}</span>
                      {item.description !== "" && (
                        <p className={cx("sub-title")}>{item.description}</p>
                      )}
                    </>
                  } 
                />
            ))}
          </RadioGroup>
        </FormControl>
        {paramsFeeAuthorisation[typeListRadio] && paramsFeeAuthorisation[typeListRadio].valueRadio === "giroFromAnotherBank" &&
        renderForm(typeListRadio)}
      </>
    )
  }

  // set data from store in setState
  useEffect(() => {
    if (dataFeeAuthorisationStore && 
      dataFeeAuthorisationStore.paymentForTheFirstYear && 
      dataFeeAuthorisationStore.paymentForSubsequentYears) {
    }
    setParamsFeeAuthorisation({
      paymentForTheFirstYear: dataFeeAuthorisationStore.paymentForTheFirstYear,
      paymentForSubsequentYears: dataFeeAuthorisationStore.paymentForSubsequentYears
    })
  }, [setParamsFeeAuthorisation])
  
  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }

      <Box className={cx('fee-authorisation')}>
        <div className="fee-authorisation-category" >
          <Category class="title">{title}</Category>
        </div>

        <SectionWrapper 
          cx={cx} 
          title={title}
          description={description}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {renderItemInformation(annual.title, dataFeeAndRateStore.annual)}
            </Grid>
            <Grid item xs={6}>
              {renderItemInformation(oneTimeSetupFee.title, dataFeeAndRateStore.oneTimeSetupFee)}
            </Grid>
            <Grid item xs={6}>
              {renderItemInformation(perDomesticTransaction.title, dataFeeAndRateStore.perDomesticTransaction)}
            </Grid>
            <Grid item xs={6}>
              {renderItemInformation(perInternationalTransaction.title, dataFeeAndRateStore.perInternationTransaction)}
            </Grid>
            <Grid item xs={6}>
              {renderItemInformation(tokenisation.title, dataFeeAndRateStore.tokenisation)}
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              {renderItemInformation(otherFees.title, dataFeeAndRateStore.otherFees)}
            </Grid>
            <Grid item xs={6}>
              {renderItemInformation(decriptionForOtherFees.title, dataFeeAndRateStore.descriptionFees)}
            </Grid>
            <Grid item xs={12}>
              {renderGroupRadio(paymentForTheFirstYear, "paymentForTheFirstYear")}
            </Grid>
            <Grid item xs={12}>
              {renderGroupRadio(paymentForSubsequentYears, "paymentForSubsequentYears")}
            </Grid>
          </Grid>
        </SectionWrapper>

        {/* Before submitting your application, please ensure that you read and understand the following */}
        <Box className={cx("application-confirmation-container")}>
          <Typography className={cx("title")}>{applicationConfirmation.title}</Typography>
          <span>{applicationConfirmation.decription}</span>
        </Box>

       
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={handlePrev}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className={cx('d-inline')}>
              <Link to="/">Continue later</Link>
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
    </Box>
  </React.Fragment>
  )
});

export default FeeAuthorisation;