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
  // props
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

  // classnames
  const cx = classnames.bind(styles);

  // states
  const [base64, setBase64] = useState<any>("");
  const [infoFile, setInforFile] = useState<any>({});
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (defaultImage) {
      setBase64(defaultImage);
      setInforFile(defaultImage);
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
      name: file.name,
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

  // handle drag events
  const handleDrag = function(e:any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (!e.dataTransfer.files) return;
      const file = e.dataTransfer.files[0];
      setInforFile({
        name: file.name,
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
    }
  };

  return (
    <>
     <form onDragEnter={handleDrag}>
        <input
          accept="image/*"
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
                <label className={cx("file-name")}>{infoFile.name}</label>
                <label className={cx("file-size")}>{infoFile.size}</label>
              </div>
              <img
                src={IconRemove}
                alt="icon remove"
                onClick={() => {
                  onRemove();
                  setBase64('')
                }}
              />
            </div>
          </>
        ) : (
          <>
            <label className={cx("upload-first")} htmlFor={name}>
              <img src={IconUploadImage} alt="icon upload image"  />
              <span>{placeholder} <label>browse</label></span>
            </label>
            <div className={cx("sub-title")}>{SUB_TITLE_UPLOAD_IMAGE}</div>
          </>
        )}
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    </>
  );
};

export default UploadImage;
