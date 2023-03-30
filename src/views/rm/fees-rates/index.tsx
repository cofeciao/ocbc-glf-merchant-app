import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Grid, Box, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./FeesRates.scss";

// import constants
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IFeesRates } from "./FeesRates";

//import components
import SectionWrapper from "../SectionWrapper";
import Fees from "./Fees";
import MerchantDiscountRate from "./MerchantDiscountRate";

const FeesRates: React.FC<IFeesRates.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  const {
    LIST_STEP: {
      feesAndRates: {
      title,
       section: {
        merchantDiscountRate: {
          titleMerchantDiscountRate,
          description
        },
        fees: {
          titleFees
        },
        refundabltFees: {
          titleRefundableFees
        }
       }
      },
    },
  } = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [paramsFeeRates, setParamsFeeRates] = useState<any>({
    refundable_fees: ""
  });

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
    history.push(URL_MANUAL_FLOW.feeAuthorisation);
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
          path="/rm/contact-information" 
        >
          <MerchantDiscountRate cx={cx} />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={titleFees}>
          <Fees cx={cx} />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={titleRefundableFees}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="refundable_fees"
                defaultValue={paramsFeeRates.refundable_fees}
                label="Security deposit (one-time)"
                id={uuidv4()}
                // label={name.label}
                variant="filled"
                onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
                // {...register("authorised_person_details.name", {
                //   required: true,
                // })}
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

export default FeesRates;