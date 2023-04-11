import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";
import { STEP_RM } from "@/utils/constants-rm";

const FeesAndRates: React.FC<IReviewSubmit.IFeesAndRates> = (props) => {
  // props
  const { cx, feeAndRateData, titles } = props;

  const {
    titleMerchantDiscountRate,
    fees: {
      titleFees,
      titleAnnual,
      titleOneTimeSetupFee,
      titlePerDomesticTransaction,
      titlePerInternationalTransaction,
      titleTokenisation,
      titleOtherFees,
      titleDescriptionForOtherFees,
    },
    refundableFees: {
      titleRefundableFees,
    }
  } = titles

  // constants
  const { 
    LIST_STEP: { 
      feesAndRates: { 
        section: { 
          merchantDiscountRate: {
            headersTableAcceptanceType,
            headersTableServices
          }
        } 
      } 
    } 
  } = STEP_RM;

  /**
   * render UI
   * @returns {HTML}
   */
  const renderContent = (title: string, content: string) => {
    return (
      <>
        <Typography className={cx("title")}>{title}</Typography> 
        <Typography className={cx("content")}>{content}</Typography> 
      </>
    )
  }

  const renderValueCell = (value: string) => {
    if (!value) {
      return "-"
    }
    return `${value} %`
  }

  /**
   * render UI
   * @returns {HTML}
   */
  const renderTable = (list: any[], headers: any[]) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.length > 0 && headers.map((item: any, index: number) => (
                <TableCell 
                  className={cx("table-header")} 
                  key={index} 
                  width={item.width} 
                  align={item.align}
                >
                  {item.title}
                </ TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list && list.length > 0 && list.map((row: any, index: number) => (
              <TableRow key={index} className={cx("table-row")}>
                <TableCell component="th" scope="row">{row.acceptanceType || row.services}</TableCell>
                <TableCell align="center">{renderValueCell(row.ocbcCards)}</TableCell>  
                <TableCell align="center">{renderValueCell(row.domesticCards)}</TableCell>
                <TableCell align="center">{renderValueCell(row.internationalCards)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  return (
    <Box className={cx("fees-and-rates")}>

      {/* Merchant Discount Rate (MDR) Section */}
      <Typography className={cx("sub-title")}>{titleMerchantDiscountRate}</Typography>
      {renderTable(feeAndRateData && feeAndRateData.tableAcceptanceType, headersTableAcceptanceType)}
      {renderTable(feeAndRateData && feeAndRateData.tableServices, headersTableServices)}
      
      {/* Fees Section */}
      <Typography className={cx("sub-title")}>{titleFees}</Typography>
      <Grid className={cx("group-item-fees")} container spacing={4}>
        <Grid item xs={3}>{renderContent(titleAnnual, feeAndRateData && feeAndRateData.annual)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titleOneTimeSetupFee, feeAndRateData && feeAndRateData.oneTimeSetupFee)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titlePerDomesticTransaction, feeAndRateData && feeAndRateData.perDomesticTransaction)}</Grid>
        <Grid item xs={3}></Grid>        
        <Grid item xs={3}>{renderContent(titlePerInternationalTransaction, feeAndRateData && feeAndRateData.perInternationTransaction)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>{renderContent(titleTokenisation, feeAndRateData && feeAndRateData.tokenisation)}</Grid>
        <Grid item xs={3}>{renderContent(titleOtherFees, feeAndRateData && feeAndRateData.otherFees)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titleDescriptionForOtherFees, feeAndRateData && feeAndRateData.descriptionFees)}</Grid>
      </Grid>

      {/* Refundable Fees Section */}
      <Typography className={cx("sub-title")}>{titleRefundableFees}</Typography>
      {renderContent(titleRefundableFees, feeAndRateData && feeAndRateData.securityDeposit)}
    </Box>
  )
}

export default FeesAndRates;