// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";

// import icons
import IconPlus from "@/assets/images/icon-plus.svg";

// import style
import styles from "./BusinessOperation.scss";
import { useFieldArray, useForm } from "react-hook-form";
import { STEP_RM } from "@/utils/constants-rm";
import GroupRadio from "../GroupRadio";

// import types

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listRadio } = props;
  const cx = classnames.bind(styles);

  const {
    LIST_STEP: {
      businessOperation: {
        section: { websiteInfomation },
      },
    },
  } = STEP_RM;

  // States
  const [dataWebsiteInformation, setDataWebsiteInformation] = useState<any>({
    checkedYouHaveExistingWebsite: websiteInfomation.checkedYouHaveExistingWebsite,
    checkedCanCustomersPlaceOrderThroughYourWebsite: websiteInfomation.checkedCanCustomersPlaceOrderThroughYourWebsite,
    valueYouHaveExistingWebsite: "",
    valueCanCustomersPlaceOrderThroughYourWebsite: "",
  })

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
    <Box className={cx("website-information-wrapper")}>
      <Grid container>

        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {websiteInfomation.labelDoYouHaveAnExistingWebsite}
          </Typography>

          <GroupRadio
            cx={cx}
            name="youHaveExistingWebsite"
            value={dataWebsiteInformation.valueYouHaveExistingWebsite}
            listRadio={listRadio}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedYouHaveExistingWebsite: value === "yes" ? true : false,
                valueYouHaveExistingWebsite: value
              })
            }}
          />
        </Grid>

        {dataWebsiteInformation.checkedYouHaveExistingWebsite && (
          <Grid item xs={12}>
            <Grid 
              container
              direction="column"
              style={{ rowGap: "12px" }}
            >
              {fields.map((item: any, index: number) => (
                <Grid item xs={12} key={index}>
                  <div className={cx('group-fields')}>
                    <Typography className={cx("title")}>
                      {`${websiteInfomation.labelYourWebsiteURL} ${index + 1}`}
                    </Typography>
                    <Grid container>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          id={`uuidv4()`}
                          label="e.g. www.xxx.com"
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
                    </Grid>
                    {index >= 1 && (
                      <Typography
                        className={cx('label-remove')}
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Typography>
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
                  {websiteInfomation.labelAddMoreWebsite}
                </div>
              )}
            </Grid>
          </Grid>
        )}


        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {websiteInfomation.labelCanCustomersPlaceOrderThroughYourWebsite}
          </Typography>
          <GroupRadio
            cx={cx}
            name="youHaveExistingWebsite"
            value={dataWebsiteInformation.valueCanCustomersPlaceOrderThroughYourWebsite}
            listRadio={listRadio}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedCanCustomersPlaceOrderThroughYourWebsite: value === "yes" ? true : false,
                valueCanCustomersPlaceOrderThroughYourWebsite: value
              })
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
