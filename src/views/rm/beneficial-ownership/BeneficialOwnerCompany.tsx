// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, Typography } from "@material-ui/core";
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
import GroupRadio from "@/components/GroupRadio";

// render UI
const BeneficialOwnerCompany: React.FC<any> = (props) => {
  const { 
    listRadio, 
    dataBenificialOwnerShip, 
    setDataBenificialOwnerShip, 
    errors,
    reset,
    register,
    setValue,
    setError,
    remove,
    fields,
    handleAddOutlet,
  } = props;
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
          labelUploadCertificateOfIncumbency
        }
       }
      },
    },
  } = STEP_RM;
  
  // States
  const [dataSectionOutletDetail, setDataSectionOutletDetail] = useState<any>({});
  const [listRadioPreferType, setListRadioPreferType] = useState<any>([]);

  /**
   * Handle onChange GroupRadio
   */
  const handleOnChangeGroupRadio = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDataBenificialOwnerShip({
      ...dataBenificialOwnerShip,
      valueMethodDoyouPrefer: value,
    });
    setListRadioPreferType([
      ...listRadioPreferType.map((el: any) => {
        if (el.value === value) {
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
  }

  useEffect(() => {
   if (listRadio) {
    setListRadioPreferType(listRadio);
   }
  }, [listRadio])
  
  return (
    <Box className={cx("beneficial-owner-wrapper")}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {label}
          </Typography>

          <GroupRadio
            cx={cx}
            name="storeCreditCard"
            value={dataBenificialOwnerShip.valueMethodDoyouPrefer}
            listRadio={listRadioPreferType}
            onChange={handleOnChangeGroupRadio}
          />
        </Grid>
        {dataBenificialOwnerShip.valueMethodDoyouPrefer === 'fill_in_here' && (
          <BeneficialOwnershipForm 
            cx={cx}
            errors={errors}
            labelForm={labelForm}
            register={register}
            setValue={setValue}
            setError={setError}
            remove={remove}
            fields={fields}
            handleAddOutlet={handleAddOutlet}
            dataSectionOutletDetail={dataSectionOutletDetail}
            setDataSectionOutletDetail={setDataSectionOutletDetail}
          />
        )}
        {dataBenificialOwnerShip.valueMethodDoyouPrefer === 'upload_a_list' && (
          <Grid item xs={12}>
            <UploadImage 
              name="beneficialOwnerImage"
              value={dataBenificialOwnerShip.beneficialOwnerImage} 
              defaultImage={dataBenificialOwnerShip.beneficialOwnerImage} 
              onRemove={() => {
                setDataBenificialOwnerShip({
                  ...dataBenificialOwnerShip,
                  beneficialOwnerImage: null
                })
              }}
              onChange={(file: any) => setDataBenificialOwnerShip({
                ...dataBenificialOwnerShip,
                beneficialOwnerImage: file
              })} 
            />
          </Grid>
        )}
        {dataBenificialOwnerShip.valueMethodDoyouPrefer && (
          <Grid item xs={12}>
            <Typography className={cx("title-upload")}>{labelUploadCertificateOfIncumbency}</Typography>
            <UploadImage 
              name="certificateIncumbencyImage"
              value={dataBenificialOwnerShip.certificateIncumbencyImage}
              defaultImage={dataBenificialOwnerShip.certificateIncumbencyImage}
              onChange={(file: any) => setDataBenificialOwnerShip({
                ...dataBenificialOwnerShip,
                certificateIncumbencyImage: file
              })} 
              onRemove={() => {
                setDataBenificialOwnerShip({
                  ...dataBenificialOwnerShip,
                  certificateIncumbencyImage: null
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
