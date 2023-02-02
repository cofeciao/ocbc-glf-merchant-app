/***
 * NON-REPRICING FULL REDEMPTION FORM
 *    >> child
 *      >> select(reason for full redemption and law firm appointment)
 *      >> radio Mode of settlement
 */

// import modules
import classnames from "classnames/bind";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@material-ui/core';

// import constants
import { DATA_FULL_REDEMPTION_ON_ALL_LOAN, DATA_NONE_REPRICING_REQUEST, DAT_FULL_REDEMPTION_OF_ALL_LOANS, LIST_SELECT_LAW_FIRM_APPOINTMENT } from "../../utils/constants";
import { INoneRepricingRequest } from "./NoneRepricingRequest";

// import component lib
import {
  Checkbox, SectionWrapper, Select, RowInfo, InputAmount, Radio, InputBase
} from '@sectionsg/orc';

// import styles
import styles from "./NoneRepricingRequest.scss";
import { restrictSpecialCharacters } from "@/utils/utils";

// render UI
const NoneRepricingRequestFullRedemptionForm: React.FC<INoneRepricingRequest.INoneRepricingFormFullRedemptionSection> = (props) => {
  const { dataFormFullRedemption, selectKey, setValueFormRedemption, listReason, listLawFirmAppointment, listRadio, setValueAndResetFirLawFirm, setChange } = props;
  const cx = classnames.bind(styles);

  return (
    <div className={cx('form-redemption')}>
      <div className={cx('wrap-select-redemption')}>

        <Grid container>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
          >
            {/* Reason for full redemption */}
            <Select
              label={DATA_FULL_REDEMPTION_ON_ALL_LOAN.select.label}
              listValues={listReason}
              single
              placeholder={DATA_FULL_REDEMPTION_ON_ALL_LOAN.select.placeholder}
              selectKey={selectKey}
              defaultValue={dataFormFullRedemption.reasonForFullRedemption}
              getValue={(value: any) => {
                setChange(true);
                setValueFormRedemption(
                  'reasonForFullRedemption',
                  value.value,
                )
              }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className={cx('select')}
          >
            {/* Law firm appointment */}
            <Select
              label={DAT_FULL_REDEMPTION_OF_ALL_LOANS.labelLawFirmAppointment}
              listValues={listLawFirmAppointment}
              single
              placeholder={DATA_FULL_REDEMPTION_ON_ALL_LOAN.select.placeholder}
              selectKey={selectKey}
              defaultValue={dataFormFullRedemption.lawFirmAppointment}
              getValue={(value: any) => {
                setValueAndResetFirLawFirm(
                  'lawFirmAppointment',
                  value.value,
                )
              }}
            />
          </Grid>


          {/* selected I want to appoint a specific law firm */}
          {
            dataFormFullRedemption.lawFirmAppointment === LIST_SELECT_LAW_FIRM_APPOINTMENT[1].value && (
              <>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                />
                <Grid
                  item
                  lg={5}
                  md={5}
                  sm={12}
                  xs={12}
                  className={cx('select', 'input-provide-full-name')}
                >

                  {/* Law firm you want to appoint */}
                  <InputBase
                    label={DAT_FULL_REDEMPTION_OF_ALL_LOANS.labelInput}
                    placeholder=""
                    type="text"
                    size="large"
                    name='lawFirmName'
                    inputKey={selectKey}
                    helperText={DAT_FULL_REDEMPTION_OF_ALL_LOANS.helperTextInput}
                    id={uuidv4()}
                    kind="helper-required"
                    value={dataFormFullRedemption.businessName}
                    getValue={(value: INoneRepricingRequest.IInput) => {
                      setValueFormRedemption(
                        'businessName',
                        value.value,
                      )
                    }}
                  />
                </Grid>
              </>
            )
          }
        </Grid>
        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={cx('radio')}
          >
          <h3 className="reg mb-dt-0">If you appoint a law firm that is not on the panel, we have the right to appoint a firm on the panel to act for OCBC Bank; you will be charged legal fees by both law firms. Please also instruct your firm to write to us to facilitate your request for full redemption.</h3>
          </Grid>
        </Grid>
        {/* Radio Prepayment instructions */}
        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={cx('')}
          >
            <Radio
              name="prepaymentInstructions"
              listCheckBox={listRadio}
              label={DAT_FULL_REDEMPTION_OF_ALL_LOANS.labelRadio}
              radioKey={selectKey}
              value={dataFormFullRedemption.prepaymentInstructions}
              getValue={(value: any) => {
                setValueFormRedemption(
                  'prepaymentInstructions',
                  value,
                );
              }}
            />
          </Grid>

        </Grid>


      </div>
    </div>
  );
};
export default NoneRepricingRequestFullRedemptionForm;
