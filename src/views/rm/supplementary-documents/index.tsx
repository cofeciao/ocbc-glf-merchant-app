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
import styles from "./SupplementaryDocuments.scss";

// import constants
import { URL_MANUAL_FLOW, STEP_RM } from "@/utils/constants-rm";

//import types
import { ISupplementaryDocuments } from "./SupplementaryDocuments";

//import components
import SectionWrapper from "../SectionWrapper";
import MultipleUploadImages from "../MultipleUploadImages";
import { saveDataSupplementaryDocument } from "@/store/form";

const SupplementaryDocuments: React.FC<ISupplementaryDocuments.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();
  

  const { LIST_STEP: {
    supplementaryDocuments: {
      titleSupplementaryDocuments,
      authorisedSignatory,
      tenacyDocumentOrSiteVisitPhotos,
      copyOfBankStatement,
      anyOtherSupportingDocuments
  }}} = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [fileImage, setFileImage] = useState<any>({
    authorisedSignatoryNRIC: [],
    tenacyDocumentOrSiteVisitPhotos: [],
    copyOfBankStatement: [],
    anyOtherSupportingDocuments: []
  });

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.feeAuthorisation)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.reviewSubmit);
    dispatch(saveDataSupplementaryDocument({...fileImage}))
  }

  /**
   * Handle remove element in array files
   */
  const handleRemove = (listFile: any, indexCurrent: number) => {
    return listFile.filter((el: any, index: number) => index !== indexCurrent);
  }

  /**
   * Handle disable button next
   */
  const isDisabled = fileImage.authorisedSignatoryNRIC.length === 0 
  || fileImage.tenacyDocumentOrSiteVisitPhotos.length === 0 
  || fileImage.copyOfBankStatement.length === 0 
  || fileImage.anyOtherSupportingDocuments.length === 0

  /**
   * render UI Button
   * @returns {HTML}
   */
    const renderButton = () => {
      return (
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={handleNext}
          disabled={isDisabled}
        >
          Next
          <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
        </Button>
      )
    }

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const supplementaryDocumentData = useSelector(
    (state: any) => state.form.supplementaryDocumentStep
  );

  useEffect(() => {
    if (Array.isArray(supplementaryDocumentData.authorisedSignatoryNRIC) ||
    Array.isArray(supplementaryDocumentData.tenacyDocumentOrSiteVisitPhotos) ||
    Array.isArray(supplementaryDocumentData.copyOfBankStatement) ||
    Array.isArray(supplementaryDocumentData.anyOtherSupportingDocuments)) {
      setFileImage({
        ...fileImage,
        authorisedSignatoryNRIC: supplementaryDocumentData.authorisedSignatoryNRIC,
        tenacyDocumentOrSiteVisitPhotos: supplementaryDocumentData.tenacyDocumentOrSiteVisitPhotos,
        copyOfBankStatement: supplementaryDocumentData.copyOfBankStatement,
        anyOtherSupportingDocuments: supplementaryDocumentData.anyOtherSupportingDocuments
      })
    }
  }, [supplementaryDocumentData])
  

  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }

      <Box className={cx('supplementary-documents')}>
        <div className="supplementary-documents-category" >
          <Category class="title">{titleSupplementaryDocuments}</Category>
        </div>

        <SectionWrapper cx={cx} title={authorisedSignatory.titleAuthorisedSignatory}>
          <MultipleUploadImages 
            name={authorisedSignatory.name}
            values={fileImage.authorisedSignatoryNRIC} 
            onChange={(file: any) => {
              setFileImage({
                ...fileImage,
                authorisedSignatoryNRIC: [...fileImage.authorisedSignatoryNRIC, file]
              })
            }} 
            onRemove={(index: number) => {
              setFileImage({
                ...fileImage,
                authorisedSignatoryNRIC: handleRemove(fileImage.authorisedSignatoryNRIC, index)
              })
            }}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={tenacyDocumentOrSiteVisitPhotos.titleTenancyDocument}>
          <MultipleUploadImages 
            name={tenacyDocumentOrSiteVisitPhotos.name}
            values={fileImage.tenacyDocumentOrSiteVisitPhotos} 
            onChange={(file: any) => setFileImage({
              ...fileImage,
              tenacyDocumentOrSiteVisitPhotos: [...fileImage.tenacyDocumentOrSiteVisitPhotos, file]
            })} 
            onRemove={(index: number) => {
              setFileImage({
                ...fileImage,
                tenacyDocumentOrSiteVisitPhotos: handleRemove(fileImage.tenacyDocumentOrSiteVisitPhotos, index)
              })
            }}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={copyOfBankStatement.titleCopyOfBankStatement}>
          <MultipleUploadImages 
            name={copyOfBankStatement.name}
            values={fileImage.copyOfBankStatement} 
            onChange={(file: any) => setFileImage({
              ...fileImage,
              copyOfBankStatement: [...fileImage.copyOfBankStatement, file]
            })} 
            onRemove={(index: number) => {
              setFileImage({
                ...fileImage,
                copyOfBankStatement: handleRemove(fileImage.copyOfBankStatement, index)
              })
            }}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title={anyOtherSupportingDocuments.titleAnyOtherSupportingDocuments}>
          <MultipleUploadImages 
            name={anyOtherSupportingDocuments.name}
            values={fileImage.anyOtherSupportingDocuments} 
            onChange={(file: any) => setFileImage({
              ...fileImage,
              anyOtherSupportingDocuments: [...fileImage.anyOtherSupportingDocuments, file]
            })} 
            onRemove={(index: number) => {
              setFileImage({
                ...fileImage,
                anyOtherSupportingDocuments: handleRemove(fileImage.anyOtherSupportingDocuments, index)
              })
            }}
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

export default SupplementaryDocuments;