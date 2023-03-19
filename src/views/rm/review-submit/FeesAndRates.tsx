import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const FeesAndRates: React.FC<IReviewSubmit.IFeesAndRates> = (props) => {
  const { cx, data, titles } = props;
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

  const headersAcceptanceType:any [] = [
    {
      title: 'Acceptance type',
      width: 380,
    },
    {
      title: 'OCBC cards',
      width: 120,
    },
    {
      title: 'Domestic cards',
      width: 120,
    },
    {
      title: 'International cards',
      width: 120,
    }
  ];

  const headersServices:any [] = [
    {
      title: 'Services',
      width: 380,
    },
    {
      title: 'OCBC cards',
      width: 120,
    },
    {
      title: 'Domestic cards',
      width: 120,
    },
    {
      title: 'International cards',
      width: 120,
    }
  ];

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
                <TableCell className={cx("table-header")} key={index} width={item.width} align={item.align}>{item.title}</ TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length > 0 && list.map((row: any, index: number) => (
              <TableRow key={index} className={cx("table-row")}>
                <TableCell component="th" scope="row">{row.acceptanceType}</TableCell>
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
      {renderTable(data && data.merchantDiscountRate && data.merchantDiscountRate.acceptanceType, headersAcceptanceType)}
      {renderTable(data && data.merchantDiscountRate && data.merchantDiscountRate.services, headersServices)}
      
      {/* Fees Section */}
      <Typography className={cx("sub-title")}>{titleFees}</Typography>
      <Grid className={cx("group-item-fees")} container spacing={4}>
        <Grid item xs={3}>{renderContent(titleAnnual, data && data.fees && data.fees.annual)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titleOneTimeSetupFee, data && data.fees && data.fees.oneTimeSetup)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titlePerDomesticTransaction, data && data.fees && data.fees.perDomesticTransaction)}</Grid>
        <Grid item xs={3}></Grid>        
        <Grid item xs={3}>{renderContent(titlePerInternationalTransaction, data && data.fees && data.fees.perInternationalTransaction)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>{renderContent(titleTokenisation, data && data.fees && data.fees.others)}</Grid>
        <Grid item xs={3}>{renderContent(titleOtherFees, data && data.fees && data.fees.others)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent(titleDescriptionForOtherFees, data && data.fees && data.fees.descriptionForOtherFees)}</Grid>
      </Grid>

      {/* Refundable Fees Section */}
      <Typography className={cx("sub-title")}>{titleRefundableFees}</Typography>
      {renderContent(titleRefundableFees, data && data.refundableFees && data.refundableFees.securityDeposit)}
    </Box>
  )
}

export default FeesAndRates;