// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { STEP_RM } from "@/utils/constants-rm";
import { useFieldArray, useForm } from "react-hook-form";

// import style
import styles from "./BusinessOperation.scss";

// import Component
import OutletForm from "./OutletForm";
import UploadImage from "../UploadImage";
import GroupRadio from "../GroupRadio";

// render UI
const OutletDetails: React.FC<any> = (props) => {
  const { listRadio } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const {
    LIST_STEP: {
      businessOperation: {
        section: { outletDetails },
      },
    },
  } = STEP_RM;
  
  // States
  const [dataSectionOutletDetail, setDataSectionOutletDetail] = useState<any>({});
  const [checkedRadioPreferType, setCheckedRadioPreferType] = useState<string>('')
  const [dataForm, setDataForm] = useState<any>({
    inputFields: outletDetails.inputFields,
    listRadioOutlet: outletDetails.listRadioOutlet,
    inputFieldsIndicateBank: outletDetails.inputFieldsIndicateBank
  });
   const [fileImage, setFileImage] = useState<any>({});

  // form
  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    setError,
    control,
    handleSubmit
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      items: [dataForm]
    },
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  const handleAddOutlet = () => {
    append(dataForm)
  };
  
  useEffect(() => {
    if (outletDetails) {
      setDataSectionOutletDetail(outletDetails) 
    }
  }, [outletDetails])
  
  return (
    <Box className={cx("outlet-details-wrapper")}>
      <Grid container>
        {/* {Which method do you prefer?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {outletDetails.labelListRadioMethodDoYouPrefer}
          </Typography>

          <GroupRadio
            cx={cx}
            name="methodDoYouPrefer"
            value={checkedRadioPreferType}
            listRadio={listRadio}
            isRow={false}
            onChange={(event) => {
              const { value } = event.target;
              setCheckedRadioPreferType(value)
            }}
          />
        </Grid>
        {checkedRadioPreferType === 'fill_in_here' && (
          <OutletForm 
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            remove={remove}
            data={fields}
            setDataForm={setDataForm}
            handleAddOutlet={handleAddOutlet}
            dataSectionOutletDetail={dataSectionOutletDetail}
            setDataSectionOutletDetail={setDataSectionOutletDetail}
            handleSubmit={handleSubmit}
          />
        )}
        {checkedRadioPreferType === 'upload_a_list' && (
          <Grid item xs={12}>
            <UploadImage
              value={fileImage}
              onRemove={() =>setFileImage({})}  
              onChange={(file: any) => setFileImage(file)} 
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default OutletDetails;
