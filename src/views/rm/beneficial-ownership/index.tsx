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
import styles from "./BeneficialOwnership.scss";

// import constants
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IBeneficialOwnership } from "./BeneficialOwnership";

//import components
import SectionWrapper from "../SectionWrapper";
import UploadImage from "../UploadImage";
import BeneficialOwnerCompany from "./BeneficialOwnerCompany";

const BeneficialOwnership: React.FC<IBeneficialOwnership.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  const {
    LIST_STEP: {
      beneficialOwner: {
      title,
       section: {
        beneficialOwnerOfTheCompany: {
          titleBeneficialOwnerOfTheCompany,
          labelUploadCertificateOfIncumbency,
          listRadio
        }
       }
      },
    },
  } = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [fileImage, setFileImage] = useState<any>({
    beneficialOwnerImage: {},
    certificateIncumbencyImage: {},
  });

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.sensitiveData)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.feeRates);
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

      <Box className={cx('benefitcial-ownership')}>
        <div className="benefitcial-ownership-category" >
          <Category class="title">{title}</Category>
        </div>

        <SectionWrapper cx={cx} title={titleBeneficialOwnerOfTheCompany}>
          <BeneficialOwnerCompany 
            listRadio={listRadio} 
            fileImage={fileImage} 
            setFileImage={setFileImage}
          />
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

export default BeneficialOwnership;