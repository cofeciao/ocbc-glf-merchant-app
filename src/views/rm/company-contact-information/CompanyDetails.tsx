// import modules
import React, { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import _ from "lodash";

// import icons
import AddIcon from '@material-ui/icons/Add';

// import constants
import { ERROR_ICON, STEP_RM } from "@/utils/constants-rm";

// render UI
const CompanyDetails: React.FC<any> = (props) => {
  const {
    cx,
    key,
    data,
    register,
    errors,
    setValue,
    setError,
    dataRedux,
    fields,
    remove,
    handleAddDirectors,
    handleSubmit
  } = props;

  const {
    registeredEntityName,
    entityType,
    uniqueEnityNumber,
    natureOfBusiness,
    blockNumber,
    streetName,
    unitNumber,
    buildingName,
    postalCode
  } = data.inputFields;

  const {
    LIST_STEP: {
      companyAndContactInformation: {
        section: { companyDetails }
      }
    },
  } = STEP_RM;
  console.log(errors);


  const renderForm = (item: any, index: number) => {
    return (
      <Grid className="container-wrapper" container spacing={4} key={index}>
        <Grid item xs={12}>
          <Typography
            className={cx("title")}
          >
            {companyDetails.titleDirectors} {index + 1} {index !== 0 && <label onClick={() => remove(index)}>Remove</label>}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id={uuidv4()}
            name={`directors[${index}].name`}
            label="Name"
            variant="filled"
            {...register(`directors[${index}].name`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id={uuidv4()}
            name={`director[${index}].nricNumber`}
            label="NRIC number"
            variant="filled"
            error={errors[`director[${index}].nricNumber`] && true}
            {...register(`director[${index}].nricNumber`, {
              required: true,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[S|T|F|G]\d{7}[A-Z]$/,
                message: `${ERROR_ICON} ${item.helperText}`,
              },
            })}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    );
  }

  return (
    <Box className={cx("company-details-wrapper")}>
      <Grid container direction="row" wrap={"nowrap"}>
        {/* {Column left} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {_.has(registeredEntityName, "label") && (
              <Grid item xs={12}>
                {/* {Name input field} */}
                <TextField
                  fullWidth
                  defaultValue={
                    _.has(dataRedux, "registeredEntityName") ? dataRedux.registeredEntityName : ""
                  }
                  id={uuidv4()}
                  label={registeredEntityName.label}
                  variant="filled"
                  {...register("registeredEntityName", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {_.has(uniqueEnityNumber, "label") && (
              <Grid item xs={12}>
              {/* {uniqueEnityNumber input field} */}
              <TextField
                fullWidth
                id={uuidv4()}
                defaultValue={
                  _.has(dataRedux, "uniqueEnityNumber")
                    ? dataRedux.uniqueEnityNumber
                    : ""
                }
                label={uniqueEnityNumber.label}
                variant="filled"
                {...register("uniqueEnityNumber", {
                  required: true,
                })}
              />
              </Grid>
            )}

          </Grid>
        </Grid>

        {/* {Column right} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {_.has(entityType, "label") && (
              <Grid item xs={12}>
                {/* {entityType input field} */}
                <FormControl
                  variant="filled"
                  className={cx("company-type-select")}
                  fullWidth
                >
                  <InputLabel id="entityType-select-filled-label">
                    {entityType.label}
                  </InputLabel>
                  <Select
                    fullWidth
                    labelId="entityType-select-filled-label"
                    defaultValue={
                      _.has(dataRedux, "entityType") ? dataRedux.entityType : ""
                    }
                    id="entityType-select-filled"
                    {...register("entityType", {
                      required: true,
                    })}
                  >
                    {_.map(STEP_RM.LIST_STEP.LIST_ENTITY_TYPE, (item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            )}
            {_.has(natureOfBusiness, "label") && (
              <Grid item xs={12}>
                {/* {natureOfBusiness input field} */}
                <TextField
                  fullWidth
                  id={uuidv4()}
                  defaultValue={
                    _.has(dataRedux, "natureOfBusiness")
                      ? dataRedux.natureOfBusiness
                      : ""
                  }
                  label={natureOfBusiness.label}
                  variant="filled"
                  {...register("natureOfBusiness", {
                    required: true,
                  })}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Typography className={cx("title")}>{data.titleRegisteredAddress}</Typography>

      {/* Section registered address */}
      <Grid container direction="row" wrap={"nowrap"}>
        {/* {Column left} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {_.has(blockNumber, "label") && (
              <Grid item xs={12}>
                {/* {Block / House number} */}
                <TextField
                  fullWidth
                  type="number"
                  defaultValue={
                    _.has(dataRedux, "blockNumber") ? dataRedux.blockNumber : ""
                  }
                  id={uuidv4()}
                  label={blockNumber.label}
                  variant="filled"
                  {...register("blockNumber", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {_.has(unitNumber, "label") && (
              <Grid item xs={12}>
              {/* {Unit number} */}
              <TextField
                fullWidth
                id={uuidv4()}
                defaultValue={
                  _.has(dataRedux, "unitNumber")
                    ? dataRedux.unitNumber
                    : ""
                }
                label={unitNumber.label}
                variant="filled"
                {...register("unitNumber", {
                  required: true,
                })}
              />
              </Grid>
            )}

            {_.has(postalCode, "label") && (
              <Grid item xs={12}>
              {/* {postalCode input field} */}
              <TextField
                fullWidth
                id={uuidv4()}
                type="number"
                defaultValue={
                  _.has(dataRedux, "postalCode")
                    ? dataRedux.postalCode
                    : ""
                }
                label={postalCode.label}
                variant="filled"
                {...register("postalCode", {
                  required: true,
                })}
              />
              </Grid>
            )}

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={data.mailingAndRegisteredAddressAreTheSame.name}
                    disableTouchRipple
                    disableRipple
                    disableFocusRipple
                  />
                }
                label={data.mailingAndRegisteredAddressAreTheSame.label}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* {Column right} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {_.has(streetName, "label") && (
              <Grid item xs={12}>
              {/* {streetName input field} */}
              <TextField
                fullWidth
                id={uuidv4()}
                defaultValue={
                  _.has(dataRedux, "streetName")
                    ? dataRedux.streetName
                    : ""
                }
                label={streetName.label}
                variant="filled"
                {...register("streetName", {
                  required: true,
                })}
              />
              </Grid>
            )}
            {_.has(buildingName, "label") && (
              <Grid item xs={12}>
                {/* {buildingName input field} */}
                <TextField
                  fullWidth
                  id={uuidv4()}
                  defaultValue={
                    _.has(dataRedux, "buildingName")
                      ? dataRedux.buildingName
                      : ""
                  }
                  label={buildingName.label}
                  variant="filled"
                  {...register("buildingName", {
                    required: true,
                  })}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

      </Grid>

      {/* Section directors */}
      <Typography className={cx("title")}>{data.titleDirectors}</Typography>
      {fields.map((item: any, index: number) => {
        return renderForm(item, index)
      })}
      <Typography
        className={cx("label-add-more")}
        onClick={handleAddDirectors}
      >
        <AddIcon fontSize="small"/> {data.labelAddMoreDirectors}
      </Typography>

    </Box>
  );
};
export default CompanyDetails;
