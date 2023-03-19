// import modules
import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper } from "@material-ui/core";

// import icons
import IconRemove from "@/assets/images/icon-remove.svg";
import IconImage from "@/assets/images/icon-image.svg";
import IconUploadImage from "@/assets/images/icon-upload-image.svg";

// import constants

// import style
import styles from "./rm.scss";

// import types
import { IRmFlow } from "./rm";

// render UI
const MultipleUploadImages: React.FC<IRmFlow.IMultipleUploadImages> = (props) => {
  const { 
    onChange,
    onRemove,
    defaultImage,
    values,
    loading = false,
    error = false,
    disabled = false,
    placeholder = "Drag and drop to upload a file, or",
    name = "image-upload",
  } = props;

  const cx = classnames.bind(styles);

  const onFileChange = (e: any) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    file && onChange(file);
  };

  return (
    <>
     <div>
        <input
          accept="image/*, .pdf"
          id={name}
          // multiple
          type="file"
          name={name}
          onChange={onFileChange}
          style={{ display: "none" }}
          disabled={disabled}
        />
          <>
            <label className={cx("upload-first")} htmlFor={name}>
              <img src={IconUploadImage} alt="icon upload image"  />
              <span>{placeholder} <label>browse</label></span>
            </label>
            <div className={cx("sub-title")}>Acceptable file types: PNG, JPG (Max 2MB)</div>
          </>
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
            <Grid container spacing={3}>
              {values.map((item: any, index: number) => {
                return (
                  <Grid item xs={6}>
                    <div className={cx("upload-result")}>
                      <img src={IconImage} alt="icon image"/>
                      <div>
                        <label className={cx("file-name")}>{item.name}</label>
                        <label className={cx("file-size")}>{
                          `${Math.round(
                            item.size / 1000,
                          )} KB`
                        }</label>
                      </div>
                      <img 
                        src={IconRemove} 
                        alt="icon remove" 
                        onClick={() => {
                          onRemove(index);
                        }}
                      />
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </>
      </div>
    </>
  );
};

export default MultipleUploadImages;
