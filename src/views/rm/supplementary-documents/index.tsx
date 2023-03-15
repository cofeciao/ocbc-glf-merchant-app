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
import { URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { ISupplementaryDocuments } from "./SupplementaryDocuments";

//import components
import SectionWrapper from "../SectionWrapper";
import MultipleUploadImages from "../MultipleUploadImages";

const SupplementaryDocuments: React.FC<ISupplementaryDocuments.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  // States
  const [loading, setLoading] = useState(false);
  const [fileImage, setFileImage] = useState<any>({
    authorisedSignatoryNRIC: [],
    tenacyDocumentOrSiteVisitPhotos: [],
    license: [],
    copyOfBankStatement: [],
    anyOtherSupportingDocuments: []
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
    history.push(URL_MANUAL_FLOW.reviewSubmit);
  }

  /**
   * Handle remove element in array files
   */
  const handleRemove = (listFile: any, indexCurrent: number) => {
    return listFile.filter((el: any, index: number) => index !== indexCurrent);
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

      <Box className={cx('supplementary-documents')}>
        <div className="supplementary-documents-category" >
          <Category class="title">Supplementary documents</Category>
        </div>

        <SectionWrapper cx={cx} title="Authorised signatory’s NRIC or passport">
          <MultipleUploadImages 
            name="authorisedSignatoryNRIC"
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

        <SectionWrapper cx={cx} title="Tenancy document or site visit photos">
          <MultipleUploadImages 
            name="tenacyDocumentOrSiteVisitPhotos"
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

        <SectionWrapper cx={cx} title="Licenses">
          <MultipleUploadImages 
            name="license"
            values={fileImage.license} 
            onChange={(file: any) => setFileImage({
              ...fileImage,
              license: [...fileImage.license, file]
            })} 
            onRemove={(index: number) => {
              setFileImage({
                ...fileImage,
                license: handleRemove(fileImage.license, index)
              })
            }}
          />
        </SectionWrapper>

        <SectionWrapper cx={cx} title="Copy of bank statement (if applicable for non-OCBC corporate account)">
          <MultipleUploadImages 
            name="copyOfBankStatement"
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

        <SectionWrapper cx={cx} title="Any other supporting documents (if applicable)">
          <MultipleUploadImages 
            name="anyOtherSupportingDocuments"
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