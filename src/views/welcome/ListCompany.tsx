// import modules
import React, { useEffect, useMemo, useState } from "react";
import { 
  Box,
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

// import images
import Acknowledgementfailed from "@/assets/images/acknowledgement-failed.png";
import IconCreateCaseNew from "@/assets/images/icon-create-new-case.svg";

// import style
import styles from "./Welcome.scss";

// import components
import Paginations from "./Paginations";
import LaunchModal from "./LaunchModal";
import { saveDataCompanyDetail } from "@/store/form";

// import hooks
import { useDebounce } from "@/hooks/useDebounce";
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

// data rows
const datas: any = [];
for (let i = 1; i < 51; i++) {
  datas.push({
    id: i,
    company: `AMZO Pte Ltd ${i}`,
    uen: `2016347449N${i}`,
    status: "Not started",
    action: "Launch",
  });
}

// render UI
const ListCompany: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const dispatch = useDispatch();
  const debouncedValue = useDebounce<string>('keyword', 600);

  const {
    LIST_STEP: {
      welcome: {
        labelCreateNewCase,
        labelNotResultFound
      }
    }
  } = STEP_RM
  
  // States
  const [isOpenModalLaunch, setIsOpenModalLaunch] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>({});
  const [params, setParams] = useState<IWelcome.IParams>({
    page: 1,
    pageSize: 10,
    keyword: ''
  });
  const [data, setData] = useState<any[]>(datas);

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


  // handle pagination
  const currentTableData = (item: any) => {
    const firstPageIndex = (params.page - 1) * params.pageSize;
    const lastPageIndex = firstPageIndex + params.pageSize;
    return item.slice(firstPageIndex, lastPageIndex);
  };


  // handle data search
  const arraySearch = (array: any[], keyword: string) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
      return value.company.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.uen.toLowerCase().match(new RegExp(searchTerm, 'g'))
    })
  }

  // handle onchange input search
  const handleOnChange =  (e: any) => {
    const { value } = e.target;
    setParams({...params, keyword: value});
    // if (value.length > 2) {
    //   const arrSearch = arraySearch(currentTableData, value);
    //   setData(arrSearch);
    // } else {
    //   setData(currentTableData)
    // }
  }

  // handle toggle modal confirmation company
  const onToggleModal = () => {
    setIsOpenModalLaunch(!isOpenModalLaunch);
  }

  // handle open modal confirmation
  const handleOpenModal = (values: any) => {
    setDataDetail(values);
    onToggleModal();
  }

  const dispatchDataCompanyDetails = () => {
    dispatch(saveDataCompanyDetail(dataDetail));
  }

  // handle event onclick for button submit
  const handleSubmit = () => {
    history.push(URL_MANUAL_FLOW.contactInformation);
    localStorage.setItem("firstStepPath", URL_MANUAL_FLOW.contactInformation);
    dispatchDataCompanyDetails();
  };

  /**
   * render UI not result search
   * @returns {HTML}
   */
  const renderNotResultSearch = () => {
    return (
      <Box className={cx("not-result-found-wrapper")}>
        <img src={Acknowledgementfailed} alt="icon not result search" />
        <Typography className={cx("title")}>{labelNotResultFound}</Typography>
      </Box>
    );
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
                      onClick={() => {
                        setParams({...params, keyword: ''}),
                        setData(datas);
                      }}
                    />
                  }
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={4} className={cx('section-left')}>
          <Typography 
            onClick={() => {
              history.push(URL_MANUAL_FLOW.companyContactInformation);
              localStorage.setItem('firstStepPath', URL_MANUAL_FLOW.companyContactInformation)
            }}
          >
            <img src={IconCreateCaseNew} alt="icon create case new" />{labelCreateNewCase}
          </Typography>
        </Grid>
        {currentTableData(arraySearch(data, params.keyword)).length > 0 ? (
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
                  {currentTableData(arraySearch(data, params.keyword)).map((row:  any, index: number) => (
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
        ) : (
          <Grid item xs={12}>{renderNotResultSearch()}</Grid>
        )}
      </Grid>
    </>
  );
};

export default ListCompany;
