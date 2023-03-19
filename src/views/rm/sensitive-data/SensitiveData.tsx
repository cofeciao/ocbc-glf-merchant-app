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
import { STEP_RM } from "@/utils/constants-rm";

// render UI
const SensitiveData: React.FC<any> = (props) => {
  const { listRadio, valueRadio, setValueRadio } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    LIST_STEP: {
      sensitiveData: {
        title,
        section: {
          labelDoYouStoreCreditCardDetails,
          labelIsTheDataProtected,
          labelPlaseIndicateYourEncryptionMethod,
          labelAreYouCompliantWithPaymentCard,
        }
      }
    },
  } = STEP_RM;


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
              {labelDoYouStoreCreditCardDetails}
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
                  {labelIsTheDataProtected}
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
                  <TextField
                    fullWidth
                    name="one_time_setup"
                    label={labelPlaseIndicateYourEncryptionMethod}
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
                {labelAreYouCompliantWithPaymentCard}
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
