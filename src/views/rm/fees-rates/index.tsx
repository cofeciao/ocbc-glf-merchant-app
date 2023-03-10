import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./FeesRates.scss";

// import constants
import { 
  URL_MANUAL_FLOW, 
  STEP_RM
} from "@/utils/constants-rm";

//import types
import { IFeesRates } from "./FeesRates";

//import components
import SectionWrapper from "../SectionWrapper";

const FeesRates: React.FC<IFeesRates.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  // States
  const [loading, setLoading] = useState(false);
  const [paramsBusinessService, setParamsBusinessService] = useState<any>({
    bussiness_offering: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque aliquet dolor, sit amet euismod purus scelerisque id. Donec quam metus, pulvinar nec nibh at, interdum fermentum nisl.",
    quickly_bussiness: "immediate_fulfillment",
    average_amount: "",
    annual_credit: "",
    refund_policy: "",
    indicate_duration: "",
    percentage: "",
    upload_policy: "",
    image: ""
  });

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.businessOperation)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.servicesApplied);
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

      <Box className={cx('business-services')}>
        <div className="business-services-category" >
          <Category class="title">Fees and rates</Category>
        </div>

        <SectionWrapper cx={cx} title="Merchant Discount Rate (MDR) ">
          {/* <BusinessInformation 
            cx={cx}
            paramsBusinessService={paramsBusinessService} 
            setParamsBusinessService={setParamsBusinessService}
          /> */}
        </SectionWrapper>

        <SectionWrapper cx={cx} title="Fees">
          {/* <RefundPolicy 
            cx={cx} 
            paramsBusinessService={paramsBusinessService}
            setParamsBusinessService={setParamsBusinessService}
          /> */}
        </SectionWrapper>

        <SectionWrapper cx={cx} title="Refundable fees (if applicable)">
          {/* <RefundPolicy 
            cx={cx} 
            paramsBusinessService={paramsBusinessService}
            setParamsBusinessService={setParamsBusinessService}
          /> */}
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