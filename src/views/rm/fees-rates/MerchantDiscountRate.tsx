import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { InputAdornment, TextField } from '@material-ui/core';

// constants
import { STEP_RM } from '@/utils/constants-rm';

// types
import { IFeesRates } from './FeesRates';

const FirstTable: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  // props
  const { cx, headers, dataSource, setDataSource } = props;
  
  const headerTable:IFeesRates.IHeaderTable[] = headers

  const handleEditRow = (indexCurrent: number, event: React.ChangeEvent<HTMLInputElement>, key: any) => {
    const { value } = event.target;
    const updateDataSource = [...dataSource];
    updateDataSource[indexCurrent][key] = value;
    setDataSource((preState: any) => ({
      ...preState,
      tableAcceptanceType: updateDataSource
    }));
  }

  const handleOnBlur = (indexCurrent: number, event: React.FocusEvent<HTMLInputElement>, key: any) => {
    const { value } = event.target;
    const updateDataSource = [...dataSource];
    const isRegexNumber = /^([0-9]+.)*([0-9]+)$/.test(value);

    if (isRegexNumber) {
      updateDataSource[indexCurrent][key] = value;
      setDataSource((preState: any) => ({
        ...preState,
        tableAcceptanceType: updateDataSource
      }));
    } else {
      updateDataSource[indexCurrent][key] = ""
      setDataSource((preState: any) => ({
        ...preState,
        tableAcceptanceType: updateDataSource
      }));
    }
  }

  const renderTextField = (rowValue: any, index: number, name: string, acceptanceType: string) => {
    const isRowDisabled = (acceptanceType === "Union Pay" && name === "ocbcCards") || 
      (acceptanceType === "Union Pay" && name === "domesticCards") ||
      (acceptanceType === "JCB" && name === "ocbcCards") ||
      (acceptanceType === "JCB" && name === "domesticCards") ||
      (acceptanceType === "WeChat Pay" && name === "ocbcCards") ||
      (acceptanceType === "WeChat Pay" && name === "domesticCards") ||
      (acceptanceType === "Alipay" && name === "ocbcCards") ||
      (acceptanceType === "Alipay" && name === "domesticCards");
    
    return (
      <TextField 
        name={`${name}-${index}`} 
        placeholder='-'
        value={rowValue}
        disabled={isRowDisabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEditRow(index, e, name)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleOnBlur(index, e, name)}
        InputProps={{
          endAdornment: <InputAdornment position="end">{!isRowDisabled ? "%" : <div>&ensp;&nbsp;</div>}</InputAdornment>,
        }}
      />
    )
  }
  
  return (
    <TableContainer component={Paper} className={cx("first-table")}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerTable.length > 0 && headerTable.map((item: IFeesRates.IHeaderTable, index: number) => (
              <TableCell className={cx("table-header")} key={index} width={item.width} align={item.align}>{item.title || ""}</ TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.length > 0 && dataSource.map((row: any, index: number) => (
            <TableRow key={index} className={cx("table-row")}>
              <TableCell component="th" scope="row">
                {row.acceptanceType}
              </TableCell>
              <TableCell align="center">
                {renderTextField(row.ocbcCards, index, 'ocbcCards', row.acceptanceType)}
              </TableCell>  
              <TableCell align="center">
                {renderTextField(row.domesticCards, index, 'domesticCards', row.acceptanceType)}
              </TableCell>
              <TableCell align="center">
              {renderTextField(row.internationalCards, index, 'internationalCards', row.acceptanceType)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const SecondTable: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  // props
  const { cx, headers, dataSource, setDataSource } = props;

  const headerTable:IFeesRates.IHeaderTable[] = headers

  const handleEditRow = (indexCurrent: number, event: React.ChangeEvent<HTMLInputElement>, key: any) => {
    const { value } = event.target;
    const updateDataSource = [...dataSource];
    updateDataSource[indexCurrent][key] = value;
    setDataSource((preState: any) => ({
      ...preState,
      tableServices: updateDataSource
    }));
  }

  const handleOnBlur = (indexCurrent: number, event: React.FocusEvent<HTMLInputElement>, key: any) => {
    const { value } = event.target;
    const updateDataSource = [...dataSource];
    const isRegexNumber = /^([0-9]+.)*([0-9]+)$/.test(value);

    if (isRegexNumber) {
      updateDataSource[indexCurrent][key] = value;
      setDataSource((preState: any) => ({
        ...preState,
        tableServices: updateDataSource
      }));
    } else {
      updateDataSource[indexCurrent][key] = ""
      setDataSource((preState: any) => ({
        ...preState,
        tableServices: updateDataSource
      }));
    }
  }

  const renderTextField = (rowValue: any, index: number, name: string, services: string) => {
    const isRowDisabled = (services === "Direct Currency Conversion (DCC)" && name === "ocbcCards") ||
      (services === "Direct Currency Conversion (DCC)" && name === "domesticCards") || 
      (services === "Instalment Payment Plan (IPP) 3 months" && name === "internationalCards") ||
      (services === "Instalment Payment Plan (IPP) 3 months" && name === "domesticCards") ||
      (services === "Instalment Payment Plan (IPP) 6 months" && name === "internationalCards") ||
      (services === "Instalment Payment Plan (IPP) 6 months" && name === "domesticCards") ||
      (services === "Instalment Payment Plan (IPP) 12 months" && name === "internationalCards") ||
      (services === "Instalment Payment Plan (IPP) 12 months" && name === "domesticCards");

    return (
      <TextField 
        name={`${name}-${index}`} 
        placeholder='-'
        disabled={isRowDisabled}
        value={rowValue} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEditRow(index, e, name)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleOnBlur(index, e, name)}
        InputProps={{
          endAdornment: <InputAdornment position="end">{!isRowDisabled ? "%" : <div>&ensp;&nbsp;</div>}</InputAdornment>,
        }}
      />
    )
  }

  return (
    <TableContainer component={Paper} className={cx("second-table")}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerTable.length > 0 && headerTable.map((item: IFeesRates.IHeaderTable, index: number) => (
                <TableCell className={cx("table-header")} key={index} width={item.width} align={item.align}>{item.title || ""}</ TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.length > 0 && dataSource.map((row: any, index: number) => (
              <TableRow key={index} className={cx("table-row")}>
                <TableCell component="th" scope="row">
                  {row.services}
                </TableCell>
                <TableCell align="center">
                  {renderTextField(row.ocbcCards, index, 'ocbcCards', row.services)}
                </TableCell>  
                <TableCell align="center">
                  {renderTextField(row.domesticCards, index, 'domesticCards', row.services)}
                </TableCell>
                <TableCell align="center">
                {renderTextField(row.internationalCards, index, 'internationalCards', row.services)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

const MerchantDiscountRate: React.FC<any> = (props) => {
  // props
  const { cx, dataSource, setDataSource } = props;
  
  // constants
  const { LIST_STEP: { 
    feesAndRates: {
    section: {
      merchantDiscountRate: {
        headersTableAcceptanceType, headersTableServices
      }}}} 
  } = STEP_RM

  return (
    <>
      <FirstTable 
        cx={cx}
        headers={headersTableAcceptanceType} 
        dataSource={dataSource.tableAcceptanceType}
        setDataSource={setDataSource}
      />

      <SecondTable 
        cx={cx}
        headers={headersTableServices} 
        dataSource={dataSource.tableServices}
        setDataSource={setDataSource}
      />
    </> 
  );
}

export default MerchantDiscountRate;
