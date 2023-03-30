import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { InputAdornment, TextField } from '@material-ui/core';
import { IFeesRates } from './FeesRates';

const FirstTable: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  const { cx } = props;

  function createData(
    acceptanceType: string, 
    ocbsCards: string, 
    domesticCards: string, 
    internationalCards: string
    ) {
    return { acceptanceType, ocbsCards, domesticCards, internationalCards};
  }

  const rows = [
    createData('Visa', '2.5', '2.5', '2.5'),
    createData('MasterCard', '2.5', '2.5', '2.5'),
    createData('Union Pay', '', '', '2.5'),
    createData('JCB', '', '', '2.5'),
    createData('WeChat Pay', '', '', '2.5'),
    createData('Alipay', '', '', '2.5'),
  ];
  
  // States
  const [dataSource, setDataSource] = useState<any[]>(rows);

  const headers:IFeesRates.IHeaderTable[] = [
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

  const handleEditRow = (indexCurrent: number, e: any, key: any) => {
    const updateDataSource = [...dataSource];
    updateDataSource[indexCurrent][key] = e.target.value;
    setDataSource(updateDataSource);
  }

  const renderTextField = (rowValue: any, index: number, name: string) => {
    return (
      <TextField 
        name={`${name}-${index}`} 
        type='text'
        placeholder='-'
        defaultValue={rowValue} 
        disabled={rowValue === ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEditRow(index, e, name)}
        InputProps={{
          endAdornment: rowValue !== '' && <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    )
  }

  return (
    <TableContainer component={Paper} className={cx("first-table")}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.length > 0 && headers.map((item: IFeesRates.IHeaderTable, index: number) => (
                <TableCell className={cx("table-header")} key={index} width={item.width} align={item.align}>{item.title || ""}</ TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.length > 0 && dataSource.map((row: any, index: number) => (
              <TableRow key={row.name} className={cx("table-row")}>
                <TableCell component="th" scope="row">
                  {row.acceptanceType}
                </TableCell>
                <TableCell align="center">
                  {renderTextField(row.ocbsCards, index, 'ocbsCards')}
                </TableCell>  
                <TableCell align="center">
                  {renderTextField(row.domesticCards, index, 'domesticCards')}
                </TableCell>
                <TableCell align="center">
                {renderTextField(row.internationalCards, index, 'internationalCards')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

const SecondTable: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  const { cx } = props;

  function createData(
    services: string, 
    ocbsCards: string, 
    domesticCards: string, 
    internationalCards: string
    ) {
    return { services, ocbsCards, domesticCards, internationalCards};
  }

  const rows = [
    createData('Direct Currency Conversion (DCC)', '2.5', '', ''),
    createData('Mail Order/Telephone Order', '2.5', '2.5', '2.5'),
    createData('Instalment Payment Plan (IPP) 3 months', '2.5', '', ''),
    createData('Instalment Payment Plan (IPP) 6 months', '2.5', '', ''),
    createData('Instalment Payment Plan (IPP) 12 months', '2.5', '', ''),
  ];

  // States
  const [dataSource, setDataSource] = useState<any[]>(rows);

  const headers:IFeesRates.IHeaderTable[] = [
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

  const handleEditRow = (indexCurrent: number, e: any, key: any) => {
    const updateDataSource = [...dataSource];
    updateDataSource[indexCurrent][key] = e.target.value;
    setDataSource(updateDataSource);
  }

  const renderTextField = (rowValue: any, index: number, name: string) => {
    return (
      <TextField 
        name={`${name}-${index}`} 
        type='text'
        placeholder='-'
        disabled={rowValue === ''}
        defaultValue={rowValue} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEditRow(index, e, name)}
        InputProps={{
          endAdornment: rowValue !== '' && <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    )
  }

  return (
    <TableContainer component={Paper} className={cx("second-table")}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.length > 0 && headers.map((item: IFeesRates.IHeaderTable, index: number) => (
                <TableCell className={cx("table-header")} key={index} width={item.width} align={item.align}>{item.title || ""}</ TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.length > 0 && dataSource.map((row: any, index: number) => (
              <TableRow key={row.name} className={cx("table-row")}>
                <TableCell component="th" scope="row">
                  {row.services}
                </TableCell>
                <TableCell align="center">
                  {renderTextField(row.ocbsCards, index, 'ocbsCards')}
                </TableCell>  
                <TableCell align="center">
                  {renderTextField(row.domesticCards, index, 'domesticCards')}
                </TableCell>
                <TableCell align="center">
                {renderTextField(row.internationalCards, index, 'internationalCards')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

const MerchantDiscountRate: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  return (
    <>
      <FirstTable {...props }/>
      <SecondTable {...props}/>
    </> 
  );
}

export default MerchantDiscountRate;
