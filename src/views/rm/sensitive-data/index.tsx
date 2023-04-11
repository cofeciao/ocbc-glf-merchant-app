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
import { CONTINUE_LATER, STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { ISensitive } from "./Sensitive";

//import components
import SectionWrapper from "../SectionWrapper";
import SensitiveData from "./SensitiveData";
import UploadImage from "../UploadImage";
import { saveDataSensitive } from "@/store/form";

const Sensitive: React.FC<ISensitive.IProps> = forwardRef(({  }, ref) => {
  // hooks
  const history = useHistory()
  const dispatch = useDispatch();

  // classnames
  const cx = classNames.bind(styles);

  // constants
  const {
    LIST_STEP: {
      LIST_RADIO_YES_NO,
      sensitiveData: {
        title,
        section: {
          labelUploadPCIDSSCerificate,
        }
      }
    },
  } = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [sensitiveData, setSensitiveData] = useState<any>({
    storeCreditCard: "",
    dataProtectedByHierachical: "",
    compliantWithThePaymentCardIndustry: "",
    encryptionMethod: "",
    certificate: null,
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
    getDataSensitiveStep(sensitiveData)
  }

   /**
   * Retrieves data of other service from Store
   */
   const dataSensitiveStore = useSelector(
    (state: any) =>
      state.form.sensitiveStep
  );

  /**
   * Set data from Transaction and card acceptance type section
   * @param data
   */
  const getDataSensitiveStep = (datas: any) => {
    dispatch(saveDataSensitive(datas));
  };

  /**
 * render UI Button
 * @returns {HTML}
 */
  const renderButton = () => {
    return (
      <Button 
        backgroundClass="bgGunmetalBluegrey" 
        onClick={handleNext}
      >
        Next
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  useEffect(() => {
    if(dataSensitiveStore && 
      dataSensitiveStore.storeCreditCard ||
      dataSensitiveStore.dataProtectedByHierachical ||
      dataSensitiveStore.compliantWithThePaymentCardIndustry 
    ) {
      setSensitiveData(dataSensitiveStore)
    }
  }, [dataSensitiveStore])
  
  return (
    <React.Fragment>
      {loading && 
        <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }

      <Box className={cx('sensitive')}>
        <div className="sensitive-category" >
          <Category class="title">{title}</Category>
        </div>

        <SectionWrapper cx={cx} title={title}>
          <SensitiveData 
            listRadio={LIST_RADIO_YES_NO} 
            sensitiveData={sensitiveData} 
            setSensitiveData={setSensitiveData} 
          />
        </SectionWrapper>
        
        {sensitiveData.compliantWithThePaymentCardIndustry === "yes" && (
          <SectionWrapper cx={cx} title={labelUploadPCIDSSCerificate}>
            <UploadImage 
              value={sensitiveData.certificate}
              defaultImage={sensitiveData.certificate}
              onChange={(file: any) => (
                setSensitiveData({
                  ...sensitiveData,
                  certificate: file
                })
              )}
              onRemove={() => {
                setSensitiveData({
                  ...sensitiveData,
                  certificate: null
                })
              }}
            />
          </SectionWrapper>
        )}
  
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

export default Sensitive;