// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import images
import IconInformation from "@/assets/images/icon-infomation.svg";

// import style
import styles from "./Sensitive.scss";

// import conponents
import ConfirmModal from "./ConfirmModal";
import { STEP_RM } from "@/utils/constants-rm";
import GroupRadio from "@/components/GroupRadio";

// render UI
const SensitiveData: React.FC<any> = (props) => {
  // props
  const { listRadio, valueRadio, setValueRadio } = props;

  // classnames
  const cx = classnames.bind(styles);

  //hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // constants
  const {
    LIST_STEP: {
      sensitiveData: {
        title,
        section: {
          labelDoYouStoreCreditCardDetails,
          labelIsTheDataProtected,
          labelPlaseIndicateYourEncryptionMethod,
          labelAreYouCompliantWithPaymentCard,
          placeholderPlaseIndicateYourEncryptionMethod
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

          {/* Do you store credit card details in your database? */}
          <Grid item xs={12}>
            <Typography className={cx("sub-section-description")}>
              {labelDoYouStoreCreditCardDetails}
            </Typography>

            <GroupRadio
              cx={cx}
              name="storeCreditCard"
              value={valueRadio.storeCreditCard}
              listRadio={radiosCreditCard}
              onChange={(event) => {
                const { value } = event.target;
                setValueRadio({
                  ...valueRadio,
                  storeCreditCard: value,
                });
              }}
            />
          </Grid>

          {/* Is the data protected by Hierachical Storage Management? */}
          {valueRadio.storeCreditCard === "yes" && (
            <>
              <Grid item xs={12}>
                <Typography className={cx("sub-section-description")}>
                  {labelIsTheDataProtected}
                </Typography>

                <GroupRadio
                  cx={cx}
                  name="dataProtectedByHierachical"
                  value={valueRadio.dataProtectedByHierachical}
                  listRadio={radiosCreditCard}
                  onChange={(event) => {
                    const { value } = event.target;
                    setValueRadio({
                      ...valueRadio,
                      dataProtectedByHierachical: value,
                    });
                  }}
                />
              </Grid> 

              {valueRadio.dataProtectedByHierachical === "no" && (
                <Grid item xs={6}>
                  <Typography className={cx("sub-section-description")}>{labelPlaseIndicateYourEncryptionMethod}</Typography>
                  <TextField
                    fullWidth
                    name="one_time_setup"
                    label={placeholderPlaseIndicateYourEncryptionMethod}
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

          {/* Are you compliant with the Payment Card Industry Data Security Standard (PCI DSS)? */}
          {valueRadio.storeCreditCard === "yes" && (
            <Grid item xs={12}>
              <Typography className={cx("sub-section-description")}>
                {labelAreYouCompliantWithPaymentCard}
                <img 
                  className={cx("ml-dt-10")} 
                  src={IconInformation} 
                  alt="icon information"
                  onClick={toggleModal}
                />
              </Typography>

              <GroupRadio
                cx={cx}
                name="compliantWithThePaymentCardIndustry"
                value={valueRadio.compliantWithThePaymentCardIndustry}
                listRadio={radiosCreditCard}
                onChange={(event) => {
                  const { value } = event.target;
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
