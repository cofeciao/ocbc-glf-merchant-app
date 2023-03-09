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
  
  const renderForm = (val: any, index: number, idForm: string) => {
    const { 
      business_name, 
      block_number, 
      street_name, 
      unit_number, 
      building_name, 
      postal_code,
    } = val.inputFields;

    const {
      branch_code,
      account_number
    } = val.inputFieldsIndicateBank;

    const onSubmit = (values: any) => {
      console.log(values)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid className="container-wrapper" container spacing={4} key={index}>
          <Grid item xs={12}>
            <Typography 
              className={cx("title")}
            >
              Outlet {index + 1} {index !== 0 && <label onClick={() => remove(index)}>Remove</label>}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name={`business_name[${index}].business_name`}
              id={uuidv4()}
              label={business_name.label}
              variant="filled"
              {...register("business_name", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              name={`block_number[${index}].block_number`}
              label={block_number.label}
              variant="filled"
              {...register("block_number", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={street_name.label}
              name={`street_name[${index}].street_name`}
              variant="filled"
              {...register("street_name", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={unit_number.label}
              name={`unit_number[${index}].unit_number`}
              variant="filled"
              {...register("unit_number", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={building_name.label}
              name={`building_name[${index}].building_name`}
              variant="filled"
              {...register("building_name", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={postal_code.label}
              name={`postal_code[${index}].postal_code`}
              variant="filled"
              {...register("postal_code", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={cx("sub-section-description")}>
              Will this outlet be using the bank account indicated above?
            </Typography>
            <Radio
              name={`radios[${index}].radios`}
              listCheckBox={val.listRadioOutlet}
              // label="Is your business ready for operation?"
              radioKey={0}
              value={dataSectionOutletDetail.checkedOutlet}
              getValue={(value: any) => {             
                // setDataSectionOutletDetail({
                //   ...dataSectionOutletDetail, 
                //   checkedOutlet: value === "Yes" ? true : false
                // })
              }}
            />
          </Grid>
          {!dataSectionOutletDetail.checkedOutlet && (
            <>
              <Grid item xs={12}>
                <Typography className={cx("sub-section-description")}>
                  Please indicate the bank linked to your business
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                    variant="filled"
                    className={cx("company-type-select")}
                    fullWidth
                  >
                    <InputLabel id="bank-name-select-filled-label">
                      Please select
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="bank-name-select-filled-label"
                      id="bank-name-select-filled"
                      {...register("bank_name", {
                        required: true,
                      })}
                    >
                      {_.map(STEP_RM.list_bank_name, (item, index) => {
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
                  label={branch_code.label}
                  variant="filled"
                  {...register("branch_code", {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id={uuidv4()}
                  label={account_number.label}
                  variant="filled"
                  {...register("account_number", {
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
        <AddIcon fontSize="small"/> Add an outlet
      </Typography>
    </>
  );
};

export default OutletForm;
