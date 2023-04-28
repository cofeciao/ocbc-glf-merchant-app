// import modules
import React, { useEffect } from "react";
import classnames from "classnames/bind";
import _ from "lodash";
import { usePDF } from '@react-pdf/renderer';

// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { ACKNOWLEDGEMENT_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";

// import components
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import Category from "@/components/Category";
import PDF from "@/views/acknowledgement/PDF";
import { useSelector } from "react-redux";

const Successful: React.FC = () => {
  const {
    LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS,
    LABEL_GREAT_WE_HAVE_RECEIVED_YOUR_APPLICATION,
    LABEL_OUR_RELATIONSHIP_MANAGER_WILL_CONTACT_YOU_WITHIN_3_WORKING_DAYS,
    LABEL_DOWNLOAD_APPLICATION
  } = ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);

  const currentTime = new Date().toLocaleDateString('en-SG')

  /**
   * * Retrieves data of Transaction And Card Acceptance Type step from Store
   * * return "point-of-sales" || "e-commerce" || "point-of-sales-e-commerce"
   */
  const optionSelected = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep
      .map((item: any) => (item.checked === true ? item.value : ""))
      .filter((item: string) => item !== "")
      .join("-")
  );

  /**
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
    const cashlessPaymentsMethods = useSelector((state: any) =>
    state.form.cashlessPaymentMethod.filter(
      (item: any) => item.checked === true
    )
  );

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const companyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  
  /**
   * Retrieves data of Transaction And Card Acceptance Type step from Store
   */
  const transactionAndCardAcceptanceTypeStep = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep.filter(
      (item: any) => item.checked === true
    )
  );

  /**
   * Retrieves data of Business Details step from Store
   */
  const businessDetailsStep = useSelector(
    (state: any) => state.form.businessDetailsStep
  );

  /**
   * Retrieves data of Products And Services step from Store
   */
  const productsAndServicesStep = useSelector(
    (state: any) => state.form.productsAndServicesStep
  );

  const productsAndServicesData = {
    ...productsAndServicesStep, 
    ...optionSelected
  }

  /**
   * Retrieves data of Products And Services step from Store
   */
  const reviewAndSubmitStep = useSelector(
    (state: any) => state.form.reviewAndSubmit.agreePolicy
  );

  const [instance, update] = usePDF({ 
    document: <PDF 
      cashlessPaymentsMethods={cashlessPaymentsMethods} 
      companyAndContactInformationStep={companyAndContactInformationStep} 
      transactionAndCardAcceptanceTypeStep={transactionAndCardAcceptanceTypeStep}
      businessDetailsStep={businessDetailsStep}
      productsAndServicesStep={productsAndServicesData}
      reviewAndSubmitStep={reviewAndSubmitStep}
    />
  })

  if (instance.loading) return <div>Loading ...</div>;

  return (
    <>
      {/* {Content} */}
      <Container className={cx("container pb-270")}>
        <Grid container spacing={2}>
          {/* {Category} */}
          <Grid item xs={12} lg={3}>
            <Category>{LABEL_APPLY_FOR_OCBC_CASHLESS_PAYMENTS}</Category>
          </Grid>

          {/* {Acknowledgement} */}
          <Grid item xs={12} lg={4}>
            <Box className={cx("acknowledgement-wrapper")}>
              {/* {Image} */}
              <Box className={cx("image-wrapper")}>
                <img src={AcknowledgementSuccess} alt="successful-image" />
              </Box>

              {/* {Content} */}
              <Box className={cx("content-wrapper")}>
                {/* {Title} */}
                <Typography className={cx("title")}>
                  {LABEL_GREAT_WE_HAVE_RECEIVED_YOUR_APPLICATION}
                </Typography>

                {/* {Description} */}
                <Typography className={cx("description")}>
                  {
                    LABEL_OUR_RELATIONSHIP_MANAGER_WILL_CONTACT_YOU_WITHIN_3_WORKING_DAYS
                  }
                </Typography>

                <Box className={cx("btn-download")}>
                  <a href={instance.url} download={`OCBC_Cashless_Payment_Review_${currentTime}.pdf`}>
                    <Button variant="contained">
                      {LABEL_DOWNLOAD_APPLICATION}
                    </Button>
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Successful;
