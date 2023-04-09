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

const TableEditing: React.FC<IFeesRates.ITableEdtiting> = (props) => {
  const { dataSource, cx, headers, handleEditRow } = props;

  const renderTextField = (rowValue: any, index: number, name: string) => {
    return (
      <TextField 
        name={`calories-${index}`} 
        type='number'
        placeholder='-'
        defaultValue={rowValue} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEditRow(index, e, name)}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    )
  }

  return (
    <TableContainer component={Paper}>
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
  );
}

export default TableEditing;
