// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Radio, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { STEP_RM } from "@/utils/constants-rm";
import { useFieldArray, useForm } from "react-hook-form";

// import constants

// import style
import styles from "./BeneficialOwnership.scss";

// import components
import UploadImage from "../UploadImage";
import BeneficialOwnershipForm from "./BeneficialOwnershipForm";
import SectionWrapper from "../SectionWrapper";

// render UI
const BeneficialOwnerCompany: React.FC<any> = (props) => {
  const { listRadio, fileImage, setFileImage } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const {
    LIST_STEP: {
      beneficialOwner: {
       section: {
        beneficialOwnerOfTheCompany: {
          label,
          labelForm,
          inputFields,
          labelUploadCertificateOfIncumbency
        }
       }
      },
    },
  } = STEP_RM;
  
  // States
  const [dataSectionOutletDetail, setDataSectionOutletDetail] = useState<any>({});
  const [listRadioPreferType, setListRadioPreferType] = useState<any>([]);
  const [checkedRadioPreferType, setCheckedRadioPreferType] = useState<string>('');
  const [dataForm, setDataForm] = useState<any>({
    inputFields: inputFields
  });

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
  
  return (
    <Box className={cx("outlet-details-wrapper")}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {label}
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
                control={<Radio disableFocusRipple disableRipple disableTouchRipple />} 
                label={item.text} 
              />
            ))}
          </RadioGroup>
        </Grid>
        {checkedRadioPreferType === 'fill_in_here' && (
          <BeneficialOwnershipForm 
            cx={cx}
            errors={errors}
            labelForm={labelForm}
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
              name="beneficialOwnerImage"
              value={fileImage.beneficialOwnerImage} 
              onRemove={() => {
                setFileImage({
                  ...fileImage,
                  beneficialOwnerImage: {}
                })
              }}
              onChange={(file: any) => setFileImage({
                ...fileImage,
                beneficialOwnerImage: file
              })} 
            />
            <Typography className={cx("title-upload")}>{labelUploadCertificateOfIncumbency}</Typography>
            <UploadImage 
              name="certificateIncumbencyImage"
              value={fileImage.certificateIncumbencyImage} 
              onChange={(file: any) => setFileImage({
                ...fileImage,
                certificateIncumbencyImage: file
              })} 
              onRemove={() => {
                setFileImage({
                  ...fileImage,
                  certificateIncumbencyImage: {}
                })
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default BeneficialOwnerCompany;
