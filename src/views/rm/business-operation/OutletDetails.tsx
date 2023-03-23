// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Radio, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { STEP_RM } from "@/utils/constants-rm";
import { useFieldArray, useForm } from "react-hook-form";

// import icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// import style
import styles from "./BusinessOperation.scss";

// import Component
import OutletForm from "./OutletForm";
import UploadImage from "../UploadImage";

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
  const [listRadioPreferType, setListRadioPreferType] = useState<any>([]);
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
   if (listRadio) {
    setListRadioPreferType(listRadio);
   }
  }, [listRadio])
  
  useEffect(() => {
    if (outletDetails) {
      setDataSectionOutletDetail(outletDetails) 
    }
  }, [outletDetails])
  
  return (
    <Box className={cx("outlet-details-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {outletDetails.labelListRadioMethodDoYouPrefer}
          </Typography>

            <RadioGroup 
              aria-label="prefer_type" 
              name="prefer_type" 
              value={checkedRadioPreferType} 
              onChange={(e) => (
                setCheckedRadioPreferType(e.target.value),
                setListRadioPreferType([
                  ...listRadioPreferType.map((el: any) => {
                    if (el.value === e.target.value) {
                      return {
                        ...el,
                        checked: true
                      }
                    }
                    return {
                      ...el, 
                      checked: false
                    };
                  })
                ])
              )}
            >
            {listRadioPreferType.map((item: any, index: number) => (
              <FormControlLabel 
                key={index} 
                value={item.value} 
                control={
                  <Radio 
                    disableFocusRipple 
                    disableRipple 
                    disableTouchRipple 
                    checkedIcon={
                      <CheckCircleIcon />
                    }
                  />
                } 
                label={item.text} 
              />
            ))}
          </RadioGroup>
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
