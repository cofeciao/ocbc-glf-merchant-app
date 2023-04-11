// import modules
import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

// import icons
import IconRemove from "@/assets/images/icon-remove.svg";
import IconImage from "@/assets/images/icon-image.svg";
import IconUploadImage from "@/assets/images/icon-upload-image.svg";

// import style
import styles from "./rm.scss";

// import types
import { IRmFlow } from "./rm";

// import constants
import { SUB_TITLE_UPLOAD_IMAGE } from "@/utils/constants-rm";

// render UI
const UploadImage: React.FC<IRmFlow.IUploadImage> = (props) => {
  const {
    onChange,
    onRemove,
    defaultImage,
    value,
    loading = false,
    error = false,
    disabled = false,
    placeholder = "Drag and drop to upload a file, or",
    name = "image-upload",
    className,
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
      size: `${Math.round(file.size / 1000)} KB`,
    });
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
    <Box className={className}>
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
          <Box className={cx("upload-result")}>
            <img src={IconImage} alt="icon image" />
            <Box>
              <label className={cx("file-name")}>{infoFile.nameFile}</label>
              <label className={cx("file-size")}>{infoFile.size}</label>
            </Box>
            <img
              src={IconRemove}
              alt="icon remove"
              onClick={() => {
                onRemove();
                setBase64("");
              }}
            />
          </Box>
        </>
      ) : (
        <>
          <label className={cx("upload-first")} htmlFor={name}>
            <img src={IconUploadImage} alt="icon upload image" />
            <span>
              {placeholder} <label>browse</label>
            </span>
          </label>
          <Box className={cx("sub-title")}>{SUB_TITLE_UPLOAD_IMAGE}</Box>
        </>
      )}
    </Box>
  );
};

export default UploadImage;
