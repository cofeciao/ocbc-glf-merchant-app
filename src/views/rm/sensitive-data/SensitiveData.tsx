// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import constants

// import style
import styles from "./Sensitive.scss";

// import conponents
import ConfirmModal from "./ConfirmModal";

// render UI
const SensitiveData: React.FC<any> = (props) => {
  const { listRadio, valueRadio, setValueRadio } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  //States
  const [radiosCreditCard, setRadiosCreditCard] = useState<any[]>(listRadio);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }
  useEffect(() => {
    if (valueRadio.compliantWithThePaymentCardIndustry === "Yes") {
      toggleModal();
    }
  }, [valueRadio.compliantWithThePaymentCardIndustry])
  
    
  return (
    <>
      <ConfirmModal 
        open={isOpenModal} 
        onClose={toggleModal}
      />

      <Box
        className={cx(
          "sensitive-data-wrapper"
        )}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography className={cx("sub-section-description")}>
              Do you store credit card details in your database?
            </Typography>

            <Radio
              name="storeCreditCard"
              listCheckBox={radiosCreditCard}
              radioKey={0}
              value={valueRadio.storeCreditCard}
              getValue={(value: any) => {
                setValueRadio({
                  ...valueRadio,
                  storeCreditCard: value,
                });
              }}
            />
          </Grid>

          {valueRadio.storeCreditCard === "Yes" && (
            <>
              <Grid item xs={12}>
                <Typography className={cx("sub-section-description")}>
                  Is the data protected by Hierachical Storage Management?
                </Typography>

                <Radio
                  name="dataProtectedByHierachical"
                  listCheckBox={radiosCreditCard}
                  radioKey={0}
                  value={valueRadio.dataProtectedByHierachical}
                  getValue={(value: any) => {
                    setValueRadio({
                      ...valueRadio,
                      dataProtectedByHierachical: value,
                    });
                  }}
                />
              </Grid> 
              {valueRadio.dataProtectedByHierachical === "No" && (
                <Grid item xs={6}>
                  <Typography className={cx("sub-section-description")}>
                    Please indicate your encryption method
                  </Typography>
                  <TextField
                    fullWidth
                    name="one_time_setup"
                    // defaultValue={paramsFeeRates.refundable_fees}
                    placeholder=""
                    id={uuidv4()}
                    type="password"
                    // label={name.label}
                    variant="filled"
                    // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
                    // {...register("authorised_person_details.name", {
                    //   required: true,
                    // })}
                  />
                  
                </Grid> 
              )}
            </>
          )}

          {valueRadio.storeCreditCard === "Yes" && (
            <Grid item xs={12}>
              <Typography className={cx("sub-section-description")}>
              Are you compliant with the Payment Card Industry Data Security Standard (PCI DSS)? 
              </Typography>

              <Radio
                name="compliantWithThePaymentCardIndustry"
                listCheckBox={radiosCreditCard}
                radioKey={0}
                value={valueRadio.compliantWithThePaymentCardIndustry}
                getValue={(value: any) => {
                  setValueRadio({
                    ...valueRadio,
                    compliantWithThePaymentCardIndustry: value,
                  });
                }}
              />
            </Grid>
          )}
          
        </Grid>
      </Box>
    </>
  );
};

export default SensitiveData;
