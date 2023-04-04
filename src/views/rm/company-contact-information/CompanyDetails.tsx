// import modules
import React, { ChangeEvent } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import ExpandMore from "@material-ui/icons/ExpandMore";

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
    handleSubmit,
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
    postalCode,
    directors,
  } = data.inputFields;

  const {
    LIST_STEP: {
      companyAndContactInformation: {
        section: { companyDetails },
      },
    },
  } = STEP_RM;

  const renderForm = (item: any, index: number) => {
    return (
      <Grid className="container-wrapper" container spacing={4} key={index}>
        <Grid item xs={12}>
          {/* {Title} */}
          <Typography className={cx("title")}>
            {companyDetails.titleDirector} {index + 1}
            {index !== 0 && <label onClick={() => remove(index)}>Remove</label>}
          </Typography>
        </Grid>

        {/* {Name} */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            name={`directors[${index}].name`}
            label={directors.labelName}
            variant="filled"
            {...register(`directors[${index}].name`, {
              required: true,
            })}
          />
        </Grid>

        {/* {NRIC Number} */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            name={`directors[${index}].nricNumber`}
            label={directors.labelNRICNumber}
            variant="filled"
            error={
              _.has(errors, "directors") &&
              _.has(errors.directors[index], "nricNumber") &&
              _.has(errors.directors[index].nricNumber, "type") &&
              !_.isEqual(errors.directors[index].nricNumber.type, "required") &&
              true
            }
            helperText={
              _.has(errors, "directors") &&
              _.has(errors.directors[index], "nricNumber") &&
              _.has(errors.directors[index].nricNumber, "message") &&
              errors.directors[index].nricNumber.message
            }
            {...register(`directors[${index}].nricNumber`, {
              required: true,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[S|T|F|G]\d{7}[A-Z]$/,
                message: `${ERROR_ICON} ${directors.helperText}`,
              },
            })}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    );
  };

  return (
    <Box className={cx("company-details-wrapper")}>
      <Grid container direction="row" wrap={"nowrap"}>
        {/* {Column Left} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {/* {Name} */}
            {_.has(registeredEntityName, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  defaultValue={
                    _.has(dataRedux, "registeredEntityName")
                      ? dataRedux.registeredEntityName
                      : ""
                  }
                  label={registeredEntityName.label}
                  variant="filled"
                  {...register("registeredEntityName", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {/* {Unique Enity Number} */}
            {_.has(uniqueEnityNumber, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
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

        {/* {Column Right} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {/* {Entity Type} */}
            {_.has(entityType, "label") && (
              <Grid item xs={12}>
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
                    IconComponent={ExpandMore}
                    labelId="entityType-select-filled-label"
                    defaultValue={
                      _.has(dataRedux, "entityType") ? dataRedux.entityType : ""
                    }
                    id="entityType-select-filled"
                    {...register("entityType", {
                      required: true,
                    })}
                  >
                    {_.map(
                      STEP_RM.LIST_STEP.LIST_ENTITY_TYPE,
                      (item, index) => {
                        return (
                          <MenuItem key={index} value={item.value}>
                            {item.name}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
              </Grid>
            )}

            {/* {Nature Of Business} */}
            {_.has(natureOfBusiness, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
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

      {/* {Registered address} */}
      <Typography className={cx("title")}>
        {data.titleRegisteredAddress}
      </Typography>

      {/* Registered address Content */}
      <Grid container direction="row" wrap={"nowrap"}>
        {/* {Column Left} */}
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
                  defaultValue={
                    _.has(dataRedux, "unitNumber") ? dataRedux.unitNumber : ""
                  }
                  label={unitNumber.label}
                  variant="filled"
                  {...register("unitNumber", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {/* {Postal Code} */}
            {_.has(postalCode, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  defaultValue={
                    _.has(dataRedux, "postalCode") ? dataRedux.postalCode : ""
                  }
                  label={postalCode.label}
                  variant="filled"
                  {...register("postalCode", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {/* {Mailing and Registered address are the same} */}
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

        {/* {Column Right} */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {/* {Street Name} */}
            {_.has(streetName, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  defaultValue={
                    _.has(dataRedux, "streetName") ? dataRedux.streetName : ""
                  }
                  label={streetName.label}
                  variant="filled"
                  {...register("streetName", {
                    required: true,
                  })}
                />
              </Grid>
            )}

            {/* {Building Name} */}
            {_.has(buildingName, "label") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
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

      {/* Section Directors */}
      <Typography className={cx("title")}>{data.titleDirectors}</Typography>
      {fields.map((item: any, index: number) => {
        return renderForm(item, index);
      })}
      <Typography className={cx("label-add-more")} onClick={handleAddDirectors}>
        <AddIcon fontSize="small" /> {data.labelAddMoreDirectors}
      </Typography>
    </Box>
  );
};
export default CompanyDetails;
