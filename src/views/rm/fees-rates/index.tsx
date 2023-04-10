import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Grid, Box, TextField, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./FeesRates.scss";

// import constants
import { CONTINUE_LATER, STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IFeesRates } from "./FeesRates";

//import components
import SectionWrapper from "../SectionWrapper";
import Fees from "./Fees";
import MerchantDiscountRate from "./MerchantDiscountRate";
import { saveDataFeeAndRates } from "@/store/form";

const FeesRates: React.FC<IFeesRates.IProps> = forwardRef(({  }, ref) => {

  // classnames
  const cx = classNames.bind(styles);

  // hooks
  const history = useHistory()
  const dispatch = useDispatch();

  // constant
  const {
    LIST_STEP: {
      feesAndRates: {
        title,
        labelStartAdornment,
        section: {
        merchantDiscountRate: {
          titleMerchantDiscountRate,
          description,
          tableAcceptanceType,
          tableServices
        },
        fees: {
          titleFees
        },
        refundabltFees: {
          titleRefundableFees,
          labelRefundableFees
        }
       }
      },
    },
  } = STEP_RM;

  // states
  const [loading, setLoading] = useState(false);
  const [isSecurityDeposit, setIsSecurityDeposit] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any>({
    tableAcceptanceType: [],
    tableServices: [],
  });

  /**
   * Retrieves data of Fee And Rate step from Store
   */
  const dataFeeAndRateStore = useSelector(
    (state: any) => state.form.feeAndRateStep
  );
  const { 
    annual,
    oneTimeSetupFee,
    perDomesticTransaction,
    perInternationTransaction,
    tokenisation,
    otherFees,
    descriptionFees,
    securityDeposit
  } = dataFeeAndRateStore;

  /**
   * Set data from Fee And Rate section
   * @param data
   */
  const getDataFeeAndRateStep = (datas: any) => {
    dispatch(saveDataFeeAndRates(datas));
  };

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.beneficialOwnership)
  }

  /**
  * Handle button next
  */
  const handleNext = async () => {
    const dataFeeAndRates = {...dataSource, ...getValues()}
    history.push(URL_MANUAL_FLOW.feeAuthorisation);
    getDataFeeAndRateStep(dataFeeAndRates);
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

  // React-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid },
    getValues,
    setValue,
    setError,
    control,
    watch
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      annual: annual ? annual : null,
      oneTimeSetupFee: oneTimeSetupFee ? oneTimeSetupFee : null,
      perDomesticTransaction: perDomesticTransaction ? perDomesticTransaction : null,
      perInternationTransaction: perInternationTransaction ? perInternationTransaction : null,
      tokenisation: tokenisation ? tokenisation : null,
      otherFees: otherFees ? otherFees : null,
      descriptionFees: descriptionFees ? descriptionFees : "",
      securityDeposit: securityDeposit ? securityDeposit : null
    },
  });

  /**
   * Handle numeric value from inputs
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Change value to thousand seperator, eg: 1000000 => 1,000,000
    const sanitizedText = event.target.value.replace(/[^0-9]/g, "");
    const formattedText = sanitizedText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue("securityDeposit", formattedText);
  };

  // Set data for data source table
  useEffect(() => {
    if (Object.keys(dataFeeAndRateStore).length > 0 && 
    dataFeeAndRateStore.tableAcceptanceType.length > 0 && 
    dataFeeAndRateStore.tableServices.length > 0) { // If there is data in the store, it will setState from
      setDataSource({
        tableAcceptanceType: dataFeeAndRateStore.tableAcceptanceType,
        tableServices: dataFeeAndRateStore.tableServices
      })
    } else {  // If there is no data in the store then setState default from constants
      setDataSource({
        tableAcceptanceType,
        tableServices
      })
    }
  }, [setDataSource, dataFeeAndRateStore])
  
  
  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }

      <Box className={cx('fees-rates')}>
        <div className="fees-rates-category" >
          <Category class="title">{title}</Category>
        </div>

        <SectionWrapper 
          cx={cx} 
          title={titleMerchantDiscountRate} 
          description={description}
          isEdit 
          path="/rm/services-applied" 
        >
          <MerchantDiscountRate 
            cx={cx} 
            dataSource={dataSource}
            setDataSource={setDataSource}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={titleFees}>
          <Fees 
            cx={cx} 
            form={{
              setValue, 
              register, 
              watch
            }}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={titleRefundableFees}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                label={labelRefundableFees}
                InputProps={
                  isSecurityDeposit
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            {labelStartAdornment}
                          </InputAdornment>
                        ),
                      }
                    : {}
                }
                onFocus={() => {setIsSecurityDeposit(true)}}
                {...register(`securityDeposit`, {
                  required: true,
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event),
                  onBlur: (e: any) => {
                    e.target.value === ""
                      ? setIsSecurityDeposit(false)
                      : null;
                  },
                })}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
  
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={handlePrev}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className={cx('d-inline')}>
              <Link to="/">{CONTINUE_LATER}</Link>
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

export default FeesRates;