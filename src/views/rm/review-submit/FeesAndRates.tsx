import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

// import types
import { IReviewSubmit } from "./ReviewSubmit";

const FeesAndRates: React.FC<IReviewSubmit.IFeesAndRates> = (props) => {
  const { cx, data } = props;

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
      <Typography className={cx("sub-title")}>Merchant Discount Rate (MDR)</Typography>
      {renderTable(data && data.merchantDiscountRate && data.merchantDiscountRate.acceptanceType, headersAcceptanceType)}
      {renderTable(data && data.merchantDiscountRate && data.merchantDiscountRate.services, headersServices)}
      
      {/* Fees Section */}
      <Typography className={cx("sub-title")}>Fees (GST inclusive)</Typography>
      <Grid className={cx("group-item-fees")} container spacing={4}>
        <Grid item xs={3}>{renderContent("Annual", data && data.fees && data.fees.annual)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent("One time setup (to vendor)", data && data.fees && data.fees.oneTimeSetup)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent("Per domestic transaction", data && data.fees && data.fees.perDomesticTransaction)}</Grid>
        <Grid item xs={3}></Grid>        
        <Grid item xs={3}>{renderContent("Per international transaction", data && data.fees && data.fees.perInternationalTransaction)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent("Others", data && data.fees && data.fees.others)}</Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>{renderContent("Description for other fees", data && data.fees && data.fees.descriptionForOtherFees)}</Grid>
      </Grid>

      {/* Refundable Fees Section */}
      <Typography className={cx("sub-title")}>Refundable Fees</Typography>
      {renderContent("Security deposit (one-time)", data && data.refundableFees && data.refundableFees.securityDeposit)}
    </Box>
  )
}

export default FeesAndRates;