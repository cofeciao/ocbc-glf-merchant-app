// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Radio } from "@sectionsg/orc";

import {
  Box,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import _ from "lodash";
import { STEP_RM } from "@/utils/constants-rm";

// import icons
import AddIcon from '@material-ui/icons/Add';
import GroupRadio from "../GroupRadio";

// render UI
const OutletForm: React.FC<any> = (props) => {
  const { 
    cx, 
    key, 
    data, 
    register, 
    errors, 
    setValue, 
    setError, 
    remove, 
    handleAddOutlet, 
    setDataForm,
    dataSectionOutletDetail,
    setDataSectionOutletDetail,
    handleSubmit
  } = props;


  const { LIST_STEP: {
    businessOperation: {
      section: {
        outletDetails
      }
    }
  }} = STEP_RM
  
  const renderForm = (val: any, index: number, idForm: string) => {
    const { 
      businessName, 
      blockNumber, 
      streetName, 
      unitNumber, 
      buildingName, 
      postalCode,
    } = val.inputFields;

    const {
      branchCode,
      accountNumber
    } = val.inputFieldsIndicateBank;

    const onSubmit = (values: any) => {
      console.log(values)
    }

    console.log(dataSectionOutletDetail.checkedOutlet)

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid className="container-wrapper" container spacing={4} key={index}>
          <Grid item xs={12}>
            <Typography 
              className={cx("title")}
            >
              Outlet {index + 1} {index !== 0 && <label onClick={() => remove(index)}>{outletDetails.labelRemove}</label>}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name={`businessName[${index}].businessName`}
              id={uuidv4()}
              label={businessName.label}
              variant="filled"
              {...register("businessName", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              name={`blockNumber[${index}].blockNumber`}
              label={blockNumber.label}
              variant="filled"
              {...register("blockNumber", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={streetName.label}
              name={`streetName[${index}].streetName`}
              variant="filled"
              {...register("streetName", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={unitNumber.label}
              name={`unitNumber[${index}].unitNumber`}
              variant="filled"
              {...register("unitNumber", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={buildingName.label}
              name={`buildingName[${index}].buildingName`}
              variant="filled"
              {...register("buildingName", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={postalCode.label}
              name={`postalCode[${index}].postalCode`}
              variant="filled"
              {...register("postalCode", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={cx("sub-section-description")}>
              {outletDetails.labelListOutletBeUsingTheBank}
            </Typography>
            <GroupRadio
              cx={cx}
              name="bankAcccountIndicatedAbove"
              value={dataSectionOutletDetail.checkedOutlet}
              listRadio={val.listRadioOutlet}
              onChange={(event) => {
                const { value } = event.target;
                setDataSectionOutletDetail ({
                  ...dataSectionOutletDetail,
                  checkedOutlet: value
                })  
              }}
            />
          </Grid>
          {!dataSectionOutletDetail.checkedOutlet && (
            <>
              <Grid item xs={12}>
                <Typography className={cx("sub-section-description")}>
                  {outletDetails.labelPleaseIndicateTheBankLinkedToYourBusiness}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                    variant="filled"
                    className={cx("company-type-select")}
                    fullWidth
                  >
                    <InputLabel id="bank-name-select-filled-label">
                      {outletDetails.labelBankName}
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="bank-name-select-filled-label"
                      id="bank-name-select-filled"
                      {...register("bankName", {
                        required: true,
                      })}
                    >
                      {_.map(outletDetails.listBankName, (item, index) => {
                        return (
                          <MenuItem key={index} value={item.value}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id={uuidv4()}
                  type="password"
                  label={branchCode.label}
                  variant="filled"
                  {...register("branchCode", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id={uuidv4()}
                  label={accountNumber.label}
                  variant="filled"
                  {...register("accountNumber", {
                    required: true,
                  })}
                />
              </Grid>
            </>
          )}
        </Grid>
      </form>
    )
  }

  return (
    <>
      {data.map((item: any, index: number) => {
        return renderForm(item, index, item.id)
      })}
      <Typography 
        className={cx("add-outlet")} 
        onClick={handleAddOutlet}
      >
        <AddIcon fontSize="small"/> {outletDetails.labelAddAnOutlet}
      </Typography>
    </>
  );
};

export default OutletForm;
