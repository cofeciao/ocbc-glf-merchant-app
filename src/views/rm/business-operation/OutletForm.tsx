// import modules
import React, { useEffect, useState } from "react";
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
import GroupRadio from "@/components/GroupRadio";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

// import icons
import AddIcon from "@material-ui/icons/Add";
import { ExpandMore } from "@material-ui/icons";

// render UI
const OutletForm: React.FC<any> = (props) => {
  const {
    cx,
    fields,
    register,
    unregister,
    errors,
    setValue,
    setError,
    remove,
    handleAddOutlet,
    handleSubmit,
    dataRedux,
  } = props;
  const {
    LIST_STEP: {
      LIST_RADIO_YES_NO,
      businessOperation: {
        section: { outletDetails },
      },
    },
  } = STEP_RM;

  // state
  const [dataSectionOutletDetail, _setDataSectionOutletDetail] = useState<any>(
    {}
  );

  const [checkedRadioExtendField, setCheckedRadioExtendField] =
    useState<any>({});

  // useEffect(() => {
  //   if (_.get(dataRedux, `outlets[${index}].radioTest`) === "yes") {
  //     unregister([]);
  //   }
  // }, [dataRedux]);

  const renderForm = (_val: any, index: number, _idForm: string) => {
    const {
      businessName,
      blockNumber,
      streetName,
      unitNumber,
      buildingName,
      postalCode,
    } = outletDetails.inputFields;
    const { branchCode, accountNumber } = outletDetails.inputFieldsIndicateBank;

    // const checkedR =
    //   _.get(dataRedux, `outlets[${index}].radioTest`) === "yes" ? true : false;

    return (
      <form key={index}>
        <Grid className="container-wrapper" container spacing={4} key={index}>
          <Grid item xs={12}>
            <Typography className={cx("title")}>
              Outlet {index + 1}
              {index !== 0 && (
                <label onClick={() => remove(index)}>
                  {outletDetails.labelRemove}
                </label>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={businessName.label}
              variant="filled"
              {...register(`outlets[${index}].businessName`, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={blockNumber.label}
              variant="filled"
              {...register(`outlets[${index}].blockNumber`, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={streetName.label}
              variant="filled"
              {...register(`outlets[${index}].streetName`, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={unitNumber.label}
              variant="filled"
              {...register(`outlets[${index}].unitNumber`, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={buildingName.label}
              variant="filled"
              {...register(`outlets[${index}].buildingName`, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={postalCode.label}
              variant="filled"
              {...register(`outlets[${index}].postalCode`, {
                required: true,
              })}
            />
          </Grid>

          {/* {Will this outlet be using the bank account indicated above?} */}
          <Grid item xs={12}>
            {/* {Description} */}
            <Typography className={cx("sub-section-description")}>
              {outletDetails.labelListOutletBeUsingTheBank}
            </Typography>

            {/* {GroupRadio} */}
            <GroupRadio
              cx={cx}
              name={`outlets[${index}].radioTest`}
              // value={dataSectionOutletDetail.checkedRadio}
              defaultValue={_.get(dataRedux, `outlets[${index}].radioTest`)}
              listRadio={LIST_RADIO_YES_NO}
              onChange={(event) => {
                const { value } = event.target;
                setCheckedRadioExtendField({
                  ...checkedRadioExtendField,
                  [index]: value === "yes" ? true : false,
                });
                setValue(`outlets[${index}].radioTest`, value);
              }}
            />
          </Grid>

          {/* {Please indicate the bank linked to your business} */}
          {checkedRadioExtendField[index] === false && (
            <>
              <Grid item xs={12}>
                <Typography className={cx("sub-section-description")}>
                  {outletDetails.labelPleaseIndicateTheBankLinkedToYourBusiness}
                </Typography>
              </Grid>

              {/* {Bank name} */}
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
                    IconComponent={ExpandMore}
                    defaultValue={_.get(
                      dataRedux,
                      `outlets[${index}].bankName`
                    )}
                    {...register(`outlets[${index}].bankName`, {
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

              {/* {Branch code} */}
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  label={branchCode.label}
                  variant="filled"
                  defaultValue={_.get(
                    dataRedux,
                    `outlets[${index}].branchCode`
                  )}
                  {...register(`outlets[${index}].branchCode`, {
                    required: true,
                  })}
                />
              </Grid>

              {/* {Account number} */}
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label={accountNumber.label}
                  type="number"
                  variant="filled"
                  defaultValue={_.get(
                    dataRedux,
                    `outlets[${index}].accountNumber`
                  )}
                  {...register(`outlets[${index}].accountNumber`, {
                    required: true,
                  })}
                />
              </Grid>
            </>
          )}
        </Grid>
      </form>
    );
  };

  return (
    <>
      {fields.map((item: any, index: number) => {
        return renderForm(item, index, item.id);
      })}
      <Typography className={cx("add-outlet")} onClick={handleAddOutlet}>
        <AddIcon fontSize="small" /> {outletDetails.labelAddAnOutlet}
      </Typography>
    </>
  );
};

export default OutletForm;
