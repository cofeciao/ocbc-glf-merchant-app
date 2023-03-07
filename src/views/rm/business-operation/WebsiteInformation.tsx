// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";

// import constants

// import style
import styles from "./BusinessOperation.scss";
import { useFieldArray, useForm } from "react-hook-form";

// import types

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listRadio } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();

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

  return (
    <Box className={cx("website-i nformation-wrapper")}>
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

          {fields.map((item: any, index: number) => (
            <Grid item xs={4} key={index}>
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
            </Grid>
          ))}
          {/* <div onClick={() => append({value: "url"})}>Add</div> */}
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
