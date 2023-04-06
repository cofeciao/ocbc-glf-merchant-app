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
    fields, 
    register, 
    labelForm,
    errors, 
    setValue, 
    setError, 
    remove, 
    handleAddOutlet, 
    dataSectionOutletDetail,
    setDataSectionOutletDetail
  } = props;
  
  const renderForm = (val: any, index: number, idForm: string) => {
    const {
      LIST_STEP: {
        beneficialOwner: {
         section: {
          beneficialOwnerOfTheCompany: {
            inputFields,
          }
         }
        },
      },
    } = STEP_RM;

  /**
  * Replace numeric values ​​from input
  * @param event
  */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // Change value to thousand seperator, eg: 1414 => 14-14
    const { value } = event.target;
    const sanitizedText = value.replace(/[^0-9]/g, "");
    const formattedText = sanitizedText.replace(/\B(?=(\d{2})+(?!\d))/g, "-");
    setValue(`items.[${index}].unitName`, formattedText);
  };

    return (
      <Grid className="container-wrapper" container spacing={4} key={index}>
        <Grid item xs={12}>
          <Typography 
            className={cx("title")}
          >
            {labelForm} {index + 1} {index !== 0 && 
            <label 
              onClick={() => {
                remove(index);
              }}
            >
              Remove
            </label>}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl
            variant="filled"
            className={cx("company-type-select")}
            fullWidth
          >
            <InputLabel id="salutation-select-filled-label">
              {inputFields.salutation.label}
            </InputLabel>
            <Select
              fullWidth
              defaultValue={val.salutation || ""}
              name={`items.[${index}].salutation`}
              {...register(`items.[${index}].salutation`, {
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
            name={`items.[${index}].name`}
            label={inputFields.name.label}
            variant="filled"
            {...register(`items.[${index}].name`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.designation.label}
            name={`items.[${index}].designation`}
            variant="filled"
            {...register(`items.[${index}].designation`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.nricPassport.label}
            name={`items.[${index}].nricPassport`}
            variant="filled"
            {...register(`items.[${index}].nricPassport`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={inputFields.dateOfBirth.label}
            name={`items.[${index}].dateOfBirth`}
            type="date"
            fullWidth
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            {...register(`items.[${index}].dateOfBirth`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.nationality.label}
            name={`items.[${index}].nationality`}
            variant="filled"
            {...register(`items.[${index}].nationality`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.blockHouseNumber.label}
            name={`items.[${index}].blockHouseNumber`}
            variant="filled"
            {...register(`items.[${index}].blockHouseNumber`, {
              required: true,
            })}
            type="number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.streetName.label}
            name={`items.[${index}].streetName`}
            variant="filled"
            {...register(`items.[${index}].streetName`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.unitName.label}
            name={`items.[${index}].unitName`}
            variant="filled"
            {...register(`items.[${index}].unitName`, {
              required: true,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event, index),
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.buildingName.label}
            name={`items.[${index}].buildingName`}
            variant="filled"
            {...register(`items.[${index}].buildingName`, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id={uuidv4()}
            label={inputFields.postalCode.label}
            name={`items.[${index}].postalCode`}
            variant="filled"
            {...register(`items.[${index}].postalCode`, {
              required: true,
            })}
            type="number"
          />
        </Grid>
      </Grid>
    )
  }
  
  return (
    <>
      {fields.map((item: any, index: number) => {
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
