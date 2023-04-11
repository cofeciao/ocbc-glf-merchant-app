// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { STEP_RM } from "@/utils/constants-rm";
import { useFieldArray } from "react-hook-form";

// import style
import styles from "./BusinessOperation.scss";

// import Component
import OutletForm from "./OutletForm";
import UploadImage from "../UploadImage";
import GroupRadio from "@/components/GroupRadio";
import _ from "lodash";

// render UI
const OutletDetails: React.FC<any> = (props) => {
  const {
    listRadio,
    control,
    errors,
    register,
    unregister,
    setValue,
    setError,
    handleSubmit,
    setDataForm,
    dataRedux,
  } = props;
  const cx = classnames.bind(styles);
  const {
    LIST_STEP: {
      businessOperation: {
        section: { outletDetails },
      },
    },
  } = STEP_RM;

  // states
  const [checkedRadioPreferType, setCheckedRadioPreferType] = useState<string>(
    _.get(dataRedux, "methodDoYouPrefer") || ""
  );
  const [fileImage, setFileImage] = useState<any>({});

  // react-hook-form
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "outlets", // unique name for your Field Array
  });

  /**
   * Add extra outlet
   */
  const handleAddOutlet = () => {
    append({
      businessName: "",
      blockNumber: "",
      streetName: "",
      unitNumber: "",
      buildingName: "",
      postalCode: "",
    });
  };

  return (
    <Box className={cx("outlet-details-wrapper")}>
      <Grid container>
        {/* {Which method do you prefer?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {outletDetails.labelListRadioMethodDoYouPrefer}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name="methodDoYouPrefer"
            // value={checkedRadioPreferType}
            defaultValue={_.get(dataRedux, "methodDoYouPrefer") || null}
            listRadio={listRadio}
            isRow={false}
            onChange={(event) => {
              const { value } = event.target;
              setCheckedRadioPreferType(value);
              setValue("methodDoYouPrefer", value);
            }}
          />
        </Grid>

        {/* {Fill in here} */}
        {checkedRadioPreferType === "fill_in_here" && (
          <OutletForm
            cx={cx}
            errors={errors}
            register={register}
            unregister={unregister}
            setValue={setValue}
            setError={setError}
            remove={remove}
            fields={fields}
            setDataForm={setDataForm}
            handleAddOutlet={handleAddOutlet}
            handleSubmit={handleSubmit}
            dataRedux={dataRedux}
          />
        )}

        {/* {Upload a list} */}
        {checkedRadioPreferType === "upload_a_list" && (
          <Grid item xs={12}>
            <UploadImage
              value={fileImage}
              onRemove={() => setFileImage({})}
              onChange={(file: any) => setFileImage(file)}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default OutletDetails;
