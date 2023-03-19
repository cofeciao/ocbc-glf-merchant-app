// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import _ from "lodash";

// import icons
import AddIcon from '@material-ui/icons/Add';
import { STEP_RM } from "@/utils/constants-rm";

// render UI
const BeneficialOwnershipForm: React.FC<any> = (props) => {
  const { 
    cx, 
    key, 
    data, 
    register, 
    labelForm,
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
      salutation,
      name,
      designation,
      nricPassport,
      dateOfBirth,
      nationality,
      blockHouseNumber,
      streetName,
      unitName,
      buildingName,
      postalCode
    } = val.inputFields;

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
              {labelForm} {index + 1} {index !== 0 && <label onClick={() => remove(index)}>Remove</label>}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="filled"
              className={cx("company-type-select")}
              fullWidth
            >
              <InputLabel id="salutation-select-filled-label">
                {salutation.label}
              </InputLabel>
              <Select
                fullWidth
                labelId="salutation-select-filled-label"
                // defaultValue={
                //   _.has(dataRedux, "contact_detail.salutation") ? dataRedux.salutation : ""
                // }
                id="salutation-select-filled"
                {...register("contact_detail.salutation", {
                  required: true,
                })}
              >
                {_.map(STEP_RM.LIST_STEP.LIST_SALUTATION, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              name={`name[${index}].name`}
              label={name.label}
              variant="filled"
              {...register("name", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={designation.label}
              name={`designation[${index}].designation`}
              variant="filled"
              {...register("designation", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={nricPassport.label}
              name={`nric_passport[${index}].nric_passport`}
              variant="filled"
              {...register("nric_passport", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            {/* <TextField
              fullWidth
              id={uuidv4()}
              label={date_of_birth.label}
              name={`date_of_birth[${index}].date_of_birth`}
              variant="filled"
              {...register("date_of_birth", {
                required: true,
              })}
            /> */}
            <TextField
              label={dateOfBirth.label}
              name={`date_of_birth[${index}].date_of_birth`}
              type="date"
              fullWidth
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              // {...register("date_of_birth", {
              //   required: true,
              // })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={nationality.label}
              name={`nationality[${index}].nationality`}
              variant="filled"
              {...register("nationality", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={blockHouseNumber.label}
              name={`block_house_number[${index}].block_house_number`}
              variant="filled"
              {...register("block_house_number", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={streetName.label}
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
              label={unitName.label}
              name={`unit_name[${index}].unit_name`}
              variant="filled"
              {...register("unit_name", {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={buildingName.label}
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
              label={postalCode.label}
              name={`postal_code[${index}].postal_code`}
              variant="filled"
              {...register("postal_code", {
                required: true,
              })}
            />
          </Grid>

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
        <AddIcon fontSize="small"/> Add another beneficial owner
      </Typography>
    </>
  );
};

export default BeneficialOwnershipForm;
