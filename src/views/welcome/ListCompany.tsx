// import modules
import React, { useMemo, useState } from "react";
import { 
    Grid, 
    InputAdornment, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TextField, 
    Typography
  } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

// import types
import { IWelcome } from "./Welcome";

// import icons
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

// import style
import styles from "./Welcome.scss";

// import components
import Paginations from "./Paginations";
import LaunchModal from "./LaunchModal";
import { saveDataCompanyDetail } from "@/store/form";

// render UI
const ListCompany: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const dispatch = useDispatch();

  // States
  const [isOpenModalLaunch, setIsOpenModalLaunch] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>({});
  const [params, setParams] = useState<IWelcome.IParams>({
    page: 1,
    pageSize: 10,
    keyword: ''
  });

  // headers table
  const headersTable: IWelcome.IHeaderTable[] = [
    {
      title: "Company",
      align: 'left',
      width: 150,
    },
    {
      title: "UEN",
      align: 'left',
      width: 100,
    },
    {
      title: "Status",
      align: 'left',
      width: 100,
    },
    {
      title: "",
      align: 'left',
      width: 100,
    }
  ];

  // data rows
  const data: any = [];
  for (let i = 1; i < 51; i++) {
    data.push({
      id: i,
      company: `AMZO Pte Ltd ${i}`,
      uen: "2016347449N",
      status: "Not started",
      action: "Launch",
    });
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (params.page - 1) * params.pageSize;
    const lastPageIndex = firstPageIndex + params.pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [params.page]);

  const handleOnChange = (e: any) => {
    const {value} = e.target;
    setParams({...params, keyword: value});
  }

  const onToggleModal = () => {
    setIsOpenModalLaunch(!isOpenModalLaunch);
  }

  const handleOpenModal = (values: any) => {
    setDataDetail(values);
    onToggleModal();
  }

  const dispatchDataCompanyDetails = () => {
    dispatch(saveDataCompanyDetail(dataDetail));
  }

  const handleSubmit = () => {
    history.push('/rm/contact-information');
    dispatchDataCompanyDetails();
  };

  return (
    <>
      <LaunchModal 
        open={isOpenModalLaunch}
        onClose={onToggleModal}
        onSubmit={handleSubmit}
        data={dataDetail}
      />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField 
            placeholder="Company or UEN" 
            variant="outlined" 
            className={cx("input-search")}
            value={params.keyword}
            onChange={(e) => handleOnChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small"/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start" className={cx("icon-close")}>
                  {params.keyword.length !== 0 &&
                    <CancelIcon 
                      fontSize="small" 
                      onClick={() => setParams({...params, keyword: ''})} 
                    />
                  }
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={4} className={cx('section-left')}>
          <Typography>
            Create new case
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Table */}
          <TableContainer component={Paper} className={cx("table-container")}>
            <Table aria-label="simple table" className={cx("table")}>
              <TableHead>
                <TableRow>
                  {headersTable.map((item: any, index: any) => (
                    <TableCell key={index} width={item.width} align={item.align} >
                      {item.title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentTableData.map((row:  any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className={"row-first"} component="th" scope="row">
                      {row.company}
                    </TableCell>
                    <TableCell align="left">{row.uen}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">
                      <div 
                        className={cx("action")} 
                        onClick={() => handleOpenModal(row)}
                      >
                        {row.action}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Paginations
            className={cx("pagination-bar")}
            currentPage={params.page}
            totalCount={data.length}
            pageSize={params.pageSize}
            onPageChange={(page: number) => 
              setParams((preState: any) => ({...preState, page: page}))
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ListCompany;
