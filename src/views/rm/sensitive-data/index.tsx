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
import styles from "./Sensitive.scss";

// import constants
import { URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { ISensitive } from "./Sensitive";

//import components
import SectionWrapper from "../SectionWrapper";
import SensitiveData from "./SensitiveData";
import UploadImage from "../UploadImage";

const Sensitive: React.FC<ISensitive.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  const listRadio = [
    {
      text: "Yes",
      checked: false,
    },
    {
      text: "No",
      checked: false,
    },
  ];

  // States
  const [loading, setLoading] = useState(false);
  const [valueRadio, setValueRadio] = useState<any>({
    storeCreditCard: "",
    dataProtectedByHierachical: "",
    compliantWithThePaymentCardIndustry: ""
  }); 


  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.productsServices)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.beneficialOwnership);
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

      <Box className={cx('sensitive')}>
        <div className="sensitive-category" >
          <Category class="title">Products and services</Category>
        </div>

        <SectionWrapper cx={cx} title="Sensitive data">
          <SensitiveData 
            listRadio={listRadio} 
            valueRadio={valueRadio} 
            setValueRadio={setValueRadio} 
          />
        </SectionWrapper>
        
        {valueRadio.compliantWithThePaymentCardIndustry === "Yes" && (
          <SectionWrapper cx={cx} title="Upload PCI DSS certificate">
            <UploadImage onChange={(file: any) => console.log(file)} />
          </SectionWrapper>
        )}
  
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

export default Sensitive;