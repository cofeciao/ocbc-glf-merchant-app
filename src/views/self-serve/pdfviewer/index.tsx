import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "@/views/acknowledgement/PDF";
import { useSelector } from "react-redux";

function MyPDFViewer() {
  const styles = {
    viewer: {
      width: "100vw",
      height: "100vh",
    },
  };

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

  /**
   * Retrieves data of Products And Services step from Store
   */
  const reviewAndSubmitStep = useSelector(
    (state: any) => state.form.reviewAndSubmit.agreePolicy
  );

  return (
    <PDFViewer style={styles.viewer}>
      <PDF
        cashlessPaymentsMethods={cashlessPaymentsMethods}
        companyAndContactInformationStep={companyAndContactInformationStep}
        transactionAndCardAcceptanceTypeStep={
          transactionAndCardAcceptanceTypeStep
        }
        businessDetailsStep={businessDetailsStep}
        productsAndServicesStep={productsAndServicesStep}
        reviewAndSubmitStep={reviewAndSubmitStep}
      />
    </PDFViewer>
  );
}

export default MyPDFViewer;
