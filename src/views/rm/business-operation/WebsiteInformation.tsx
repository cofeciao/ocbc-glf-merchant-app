// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";

// import icons
import IconTrash from "@/assets/images/icon-trash.svg";
import IconPlus from "@/assets/images/icon-plus.svg";

// import style
import styles from "./BusinessOperation.scss";
import { useFieldArray, useForm } from "react-hook-form";

// import types

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listRadio } = props;
  const cx = classnames.bind(styles);

  // form
  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    setError,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      items: [{value: "url"}]
    },
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  console.log(fields)

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            Do you have an existing website?
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadio}
            // label="Is your business ready for operation?"
            radioKey={0}
            // value={formDataLanding.lockIn}
            // getValue={(value: any) => {
            //   setValueFormLandingPage("lockIn", value);
            // }}
          />
        </Grid>

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            Your website’s URL
          </Typography>
          <Grid 
            container
            direction="column"
            style={{ rowGap: "12px" }}
          >
            {fields.map((item: any, index: number) => (
              <Grid item xs={4} key={index}>
                <div className={cx('group-fields')}>
                  <TextField
                    fullWidth
                    id={`uuidv4()`}
                    label="Registered entity name"
                    variant="filled"
                    // onBlur={(event) => {
                    //   getPersonalInformation(
                    //     "RegisteredEntityName",
                    //     event.target.value,
                    //     ""
                    //   );
                    // }}
                  />
                  {index >= 1 && (
                    <img
                      src={IconTrash}
                      alt="icon"
                      className={cx("text-field-trash-icon")}
                      onClick={() => remove(index)}
                    />
                  )}

                </div>
              </Grid>
            ))}
            {fields.length < 3 && (
              <div 
                className={cx("add-field")}
                onClick={() => append({value: "url"})}
              >
                <img
                  src={IconPlus}
                  alt="icon"
                  className={cx("text-field-add-icon")}
                />
                Add more website
              </div>
            )}
          </Grid>
        </Grid>

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            Can customers place orders through your website?
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadio}
            radioKey={0}
            // value={formDataLanding.lockIn}
            // getValue={(value: any) => {
            //   setValueFormLandingPage("lockIn", value);
            // }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
