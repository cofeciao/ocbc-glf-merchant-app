/***
 * DOCUMENT REQUEST
 *    >> child
 *      >> list document request upload
 */

// import modules
import React from "react";
import { v4 as uuidv4 } from 'uuid';

// import component lib
import { SectionWrapper, InputFile} from '@sectionsg/orc';

//import icon
import myInfo from '../../assets/images/icon-info.svg';
import myInfoBlue from '../../assets/images/icon-info-blue.svg';

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";
import { LIST_DOCUMENT_TENURE_2, LIST_INPUT_CONVERT_NAME,LIST_DATA_LABEL_UPLOAD,LIST_DATA_UPLOAD, MAX_FILENAME, MAX_FILES, NRIC, PAYSLIPS, PLEASE_UPLOAD_A_DOCUMENT, UTILITY_BILL, YOU_CAN_UPLOAD_UP_TO_TWO_DOCUMENTS, PASSPORT, PAYSLIPS_THREE_MONTHS, CPF_PROPERTY_WITHDRAWAL, UPLOAD_FILE_NRIC, LIST_DATA_RENAMING_FILES } from "@/utils/constants";
import _ from "lodash";

// render UI
const NoneRepricingRequestDocument: React.FC<INoneRepricingRequest.IDocumentRequest> = (props) => {
  const { cx, listDocument, selectKey, formReduxData, getSignatureFiles, openDialog, listFileUpload, totalSizeUpload } = props;

  // detect show popup for document request
  const detectPopup = (value: string) => {
    if (value === LIST_DOCUMENT_TENURE_2[0].label) {
      return LIST_DOCUMENT_TENURE_2[0].popupName
    } else if (value === LIST_DOCUMENT_TENURE_2[2].label) {
      return LIST_DOCUMENT_TENURE_2[2].popupName
    } else if (value === LIST_DOCUMENT_TENURE_2[3].label) {
      return LIST_DOCUMENT_TENURE_2[3].popupName
    } else if (value === LIST_DOCUMENT_TENURE_2[4].label) {
      return LIST_DOCUMENT_TENURE_2[4].popupName
    } else if (value === LIST_DOCUMENT_TENURE_2[5].label) {
      return LIST_DOCUMENT_TENURE_2[5].popupName
    }
  }

  // detect show title of list document request
  const detectTitleInputFile = (value: string) => {
    if (value === LIST_DATA_UPLOAD[0]) {
      return LIST_DATA_LABEL_UPLOAD[0]
    } else if (value === LIST_DATA_UPLOAD[1]) {
      return LIST_DATA_LABEL_UPLOAD[1]
    } else if (value === LIST_DATA_UPLOAD[2]) {
      return LIST_DATA_LABEL_UPLOAD[2]
    } else if (value === LIST_DATA_UPLOAD[3]) {
      return LIST_DATA_LABEL_UPLOAD[3]
    } else if (value === LIST_DATA_UPLOAD[4]) {
      return LIST_DATA_LABEL_UPLOAD[4]
    } else if (value === LIST_DATA_UPLOAD[5]) {
      return LIST_DATA_LABEL_UPLOAD[5]
    }  else if (value === LIST_DATA_UPLOAD[6]) {
      return LIST_DATA_LABEL_UPLOAD[6]
    }  else if (value === LIST_DATA_UPLOAD[7]) {
      return LIST_DATA_LABEL_UPLOAD[7]
    } else if (value === LIST_DATA_UPLOAD[8]) {
      return LIST_DATA_LABEL_UPLOAD[8]
    } else if (value === LIST_DATA_UPLOAD[9]) {
      return LIST_DATA_LABEL_UPLOAD[9]
    } else if (value === LIST_DATA_UPLOAD[10]) {
      return LIST_DATA_LABEL_UPLOAD[10]
    } 
  }

  const documentName = (label: string) => {
    const indexDocs = _.findIndex(LIST_DATA_UPLOAD, item => item === label);
    return LIST_DATA_RENAMING_FILES[indexDocs]
  }

  const formatRenaming = `${formReduxData.loanCreate.SystemRefNo}_${formReduxData.form && formReduxData.form.personalInformation && formReduxData.form.personalInformation.nameNric || formReduxData.form && formReduxData.form.personalInformation && formReduxData.form.personalInformation.namePassport}`

  const acceptFile =  {
    '.jpeg': 2,
    '.jpg': 2,
    '.pdf': 5,
    '.png': 2
  }

  return (
    <section className={cx('document-request')}>
      {/* List document request upload */}
      {listDocument && listDocument.length > 0 && <div className="body-reg mb-dt-0 mt-dt-40">Acceptable file types: PDF (max 2MB), JPG, PNG</div>}
      {
        listDocument && listDocument.map((item: string, idx: number) => (
          <section className={cx('wrap-input-file')}>
            <SectionWrapper key={idx}>
              <InputFile
                id={uuidv4()}
                inputKey={selectKey === null ? undefined : selectKey}
                title={detectTitleInputFile(item)}
                messageError={selectKey !== null ? PLEASE_UPLOAD_A_DOCUMENT : ''}
                multiple={true}
                required
                hiddenInput={item !== NRIC && item !== PASSPORT}
                labelBefore={''}
                labelAfter={''}
                labelFooter={item !== NRIC && item !== PASSPORT ? '' : YOU_CAN_UPLOAD_UP_TO_TWO_DOCUMENTS}
                contentBody={''}
                maxFileName={MAX_FILENAME}
                maxFiles={item !== NRIC && item !== PASSPORT ? 10000 : MAX_FILES}
                defaultValue={listFileUpload ? listFileUpload[`${idx}`] : []}
                errorConnection={formReduxData.errorConnection}
                hasLoading
                marginErrorMessage="5px 0 0"
                acceptFile={acceptFile}
                getValue={(value: any) => {
                  getSignatureFiles(value, idx, item);
                }}
                renaming={`${formatRenaming}_${documentName(item)}`}
              >
                {
                  (item !== NRIC && item !== UTILITY_BILL && item !== PASSPORT && item !== PAYSLIPS_THREE_MONTHS && item !== CPF_PROPERTY_WITHDRAWAL) && ( // detect not show icon I
                    <span className="info-icon-wrapper" onClick={() => { openDialog(detectPopup(item)) }} aria-hidden="true">
                      <img src={myInfo} alt="myInfo-logo" className={cx('icons', 'icon-black')} />
                      <img src={myInfoBlue} alt="myInfo-logo" className={cx('icons', 'icon-blue')} />
                    </span>
                  )
                }
              </InputFile>
              {/* {
                totalSizeUpload > 5 && (
                  <div className="error-message">Acceptable file size max 5MB</div>
                )
              } */}
            </SectionWrapper>
          </section>
        ))
      }

    </section>
  );
};
export default NoneRepricingRequestDocument;
