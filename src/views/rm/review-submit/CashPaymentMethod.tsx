import React from "react";
import { Box, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const CashPaymentMethod: React.FC<IReviewSubmit.ICashPaymentMethod> = (props) => {
  const { cx, data } = props;


  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (value: string) => {
    return (
      <Typography className={cx("content")}>{value}</Typography> 
    )
  }

  return (
    <Box className={cx("cash-payment-method")}>
      <Typography className={cx("title")}>Mode</Typography>
      {data && 
        data.cashPaymentMethod && 
        data.cashPaymentMethod.typeCard && 
        renderContent(data.cashPaymentMethod.typeCard )}

      {data &&
        data.cashPaymentMethod && 
        data.cashPaymentMethod.typePayment && 
        renderContent(data.cashPaymentMethod.typePayment )}
    </Box>
  )
}

export default CashPaymentMethod;