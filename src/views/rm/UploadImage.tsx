// import modules
import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import CircularProgress from '@material-ui/core/CircularProgress';

// import icons
import IconRemove from "@/assets/images/icon-remove.svg";
import IconImage from "@/assets/images/icon-image.svg";
import IconUploadImage from "@/assets/images/icon-upload-image.svg";

// import constants

// import style
import styles from "./rm.scss";

// import types
import { IBusinessOperations } from "./business-operation/BusinessOperation";

// render UI
const UploadImage: React.FC<IBusinessOperations.IUploadImage> = (props) => {
  const { 
    onChange,
    defaultImage,
    value,
    loading = false,
    error = false,
    disabled = false,
    placeholder = "Drag and drop to upload a file, or",
    name = "image-upload",
  } = props;
  const cx = classnames.bind(styles);
  const [base64, setBase64] = useState<any>("");
  const [infoFile, setInforFile] = useState<any>({});

  useEffect(() => {
    if (defaultImage) {
      setBase64(defaultImage);
    }
  }, [defaultImage]);

  useEffect(() => {
    if (!value) {
      setBase64("");
    }
  }, [value]);

  const onFileChange = (e: any) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setInforFile({
      nameFile: file.name,
      type: file.type,
      size: `${Math.round(
        file.size / 1000,
      )} KB`

    })
    file && onChange(file);
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // result is a base64 string
        setBase64(reader.result as string);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
     <div>
        <input
          accept="image/*, .pdf"
          // accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          id={name}
          multiple
          type="file"
          name={name}
          onChange={onFileChange}
          style={{ display: "none" }}
          disabled={disabled}
        />
        {base64 ? (
          <>
            {loading && (
              <CircularProgress
                size={32}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              />
            )}
            <div className={cx("upload-result")}>
              <img src={IconImage} alt="icon image"/>
              <div>
                <label className={cx("file-name")}>{infoFile.nameFile}</label>
                <label className={cx("file-size")}>{infoFile.size}</label>
              </div>
              <img src={IconRemove} alt="icon remove" onClick={() => setBase64('')}/>
            </div>
          </>
        ) : (
          <>
            <label className={cx("upload-first")} htmlFor={'image-upload'}>
              <img src={IconUploadImage} alt="icon upload image"  />
              <span>{placeholder} <label>browse</label></span>
            </label>
            <div className={cx("sub-title")}>Acceptable file types: PNG, JPG (Max 2MB)</div>
          </>
        )}
      </div>
    </>
  );
};

export default UploadImage;
