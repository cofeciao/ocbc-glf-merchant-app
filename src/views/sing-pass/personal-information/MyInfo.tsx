/***
 * MYINFO
 *    >> child
 *      >> table
 *      >> section wrapper
 *      >> rowInfo
 *      >> link
 */

// import modules
import React from 'react';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import styles from "./PersonalInformation.scss";
import {
  Table, SectionWrapper, RowInfo, Link,
} from '@sectionsg/orc';

import moment from 'moment';

// import image
import { capitalize, moneyDisplayFormat } from '@/utils/utils';

// import type

import { IPersonalInformation } from './PersonalInformation.d';
import { LIST_DATA_INFORMATION, MANUAL, URL_MANUAL_FLOW, REGION, LIST_COUNTRIES_CODE, YES, NO } from '@/utils/constants';
import { detectUNIFINLabel } from '@/utils/utils';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setMainApplicant, setShowDocument } from '@/store/form';
// render UI
const MyInfo: React.FC<IPersonalInformation.IMyInfoProps> = ({ personData, UINFIN, isFullOption, hasHDB, formRedux }) => {
  /**
   * Format data table
   * @returns 
   */
  
  const history = useHistory();
  const dispatch = useDispatch();
  const cpfcontributions = () => {
    if (personData.cpfcontributions && personData.cpfcontributions.history) {
      return personData.cpfcontributions.history.map((item, key) => {
        const data = {
          month: '',
          date: '',
          employer: '',
          amount: '',
        };
        _.mapKeys(item, (valueItem, keyItem) => {
          if (keyItem === 'month') {
            return data[keyItem] = moment(valueItem.value).format('MMM YYYY');
          } if (keyItem === 'date') {
            return data[keyItem] = moment(valueItem.value).format('DD MMM YYYY');
          } if (keyItem === 'amount') {
            return data[keyItem] = moneyDisplayFormat(Number(valueItem.value), 2);
          }
          return data[keyItem] = valueItem.value;
        });
        return data;
      });
    }
    return [];
  };
  const FormatDataHdbownership = () => {
    let array = [];
    if (personData && personData.hdbownership && _.isArray(personData.hdbownership)) {
      array = personData.hdbownership
    } else {
      if (personData && personData.hdbownership && personData.hdbownership) {
        array.push(personData && personData.hdbownership && personData.hdbownership)
      }
    }
    return array;
  }

  return (
    <>
      <section>
        {/* section contact information */}
        <SectionWrapper title="Your contact information">
          <Grid container>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-mb-30`}
            >
              <RowInfo
                label="Email address"
                content={formRedux && formRedux.form && formRedux.form.personalInformation && formRedux.form.personalInformation.emailAddress}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half`}
            > 
              <RowInfo
                label="Mobile number"
                content={formRedux && formRedux.form && formRedux.form.personalInformation && `${LIST_COUNTRIES_CODE.find(c => c.name === formRedux.form.personalInformation.countryPhoneNumber).value} ${formRedux.form.personalInformation.phoneNumber}`}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
        <div className="line" />
        {/* section personal information */}
        <SectionWrapper title="Your personal information">
          <Grid container>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30 capitalize`}
            >
              <RowInfo
                label="Name"
                content={personData.name && personData.name.value && capitalize(personData.name.value) || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30 capitalize`}
            >
              <RowInfo
                label="Hanyu pinyin name"
                content={personData.hanyupinyinname && personData.hanyupinyinname.value && capitalize(personData.hanyupinyinname.value) || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30 capitalize`}
            >
              <RowInfo
                label="Alias"
                content={personData.aliasname && personData.aliasname.value && capitalize(personData.aliasname.value) || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30 capitalize`}
            >
              <RowInfo
                label="Hanyu pinyin alias"
                content={personData.hanyupinyinaliasname && personData.hanyupinyinaliasname.value && capitalize(personData.hanyupinyinaliasname.value) || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30 capitalize`}
            >
              <RowInfo
                label="Married name"
                content={personData.marriedname && personData.marriedname.value && personData.marriedname.value ? personData.marriedname.value : '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30`}
            >
              <RowInfo
                label="Nationality"
                content={personData.nationality && capitalize(personData.nationality.desc) || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30`}
            >
              <RowInfo
                label="Residency status"
                content={personData.residentialstatus && personData.residentialstatus.desc || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30`}
            >
              <RowInfo
                label={(personData.uinfin.value && detectUNIFINLabel(personData.uinfin.value) ? 'NRIC' : 'FIN')}
                content={personData.uinfin.value || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-dt-30`}
            >
              <RowInfo
                label="Gender"
                content={personData.sex && personData.sex.desc && capitalize(personData.sex.desc)}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-0 mb-dt-30`}
            >
              <RowInfo
                label="Date of birth"
                content={personData.dob && personData.dob.value && moment(personData.dob.value).format('DD MMM YYYY')}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-0 mb-dt-30`}
            >
              <RowInfo
                label="Country of birth"
                content={personData.birthcountry && personData.birthcountry.desc ? capitalize(personData.birthcountry.desc) : '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`mb-0 pdr-20 block-half mb-mb-0 mb-dt-30`}
            >
              <RowInfo
                label="Ethnic group"
                content={personData.race && personData.race.desc && capitalize(personData.race.desc) || '-'}
              />
            </Grid>
            <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-mb-30`}
                >
                  <RowInfo
                    label="Pass type"
                    content={personData.passtype && personData.passtype.desc ? capitalize(personData.passtype.desc) : '-'}
                  />
                </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half`}
            >
              <RowInfo
                label={"Pass expiry date"}
                content={personData.passexpirydate && personData.passexpirydate.value ? moment(personData.passexpirydate.value).format('DD MMM YYYY') : '-'}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
      </section>
      {
        isFullOption && (
          <>
             <div className="line" />
          </>
        )
      }
      <div className="line" />
      {/* section residential address */}
      {/* personData.regadd && isFullOption && _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION) */}
      {
        !_.isEmpty(personData.regadd) && (
          <section>
            <SectionWrapper title="Residential address">
              <div className={`mb-dt-0 font-weight-600`}>
                {personData.regadd.block && personData.regadd.block.value || personData.regadd.line1 && personData.regadd.line1.value || ''}
                &nbsp;
                {personData.regadd.street && personData.regadd.street.value || personData.regadd.line2 && personData.regadd.line2.value || ''}
                <br />
                {personData.regadd.floor && personData.regadd.floor.value && '#'}
                {personData.regadd.floor && personData.regadd.floor.value || ''}
                {personData.regadd.unit && personData.regadd.unit.value && '-'}
                {personData.regadd.unit && personData.regadd.unit.value}
                {personData.regadd.unit && personData.regadd.unit.value && (
                <>
                &nbsp;
                </>)}
                {personData.regadd.building && personData.regadd.building.value || ''}
                {personData.regadd.building && personData.regadd.building.value && (
                  <>
                    &nbsp;
                  </>
                )}
                <br />
                {personData.regadd.country && personData.regadd.country.desc}
                {personData.regadd.country && personData.regadd.country.desc && (
                  <>
                    &nbsp;
                  </>
                )}
                {personData.regadd.postal && personData.regadd.postal.value || ''}
              </div>
              {
                personData && personData.ownerprivate && personData.ownerprivate.value  && (
                  <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={`pdr-20 block-half mt-dt-30`}
                  >
                    <RowInfo
                      label="Ownership of Private Residential Property"
                      content={personData.ownerprivate.value === 'true' ? YES : NO}
                    />
                  </Grid>
                )
              }
            </SectionWrapper>
          </section>
        )
      }
      {
        isFullOption && (
          <div className="line" />
        )
      }
      { personData && personData.cpfhousingwithdrawal && !_.isEmpty(personData.cpfhousingwithdrawal.withdrawaldetails) && !_.isEmpty(personData.cpfhousingwithdrawal.withdrawaldetails[0])  && <div className="line" />}
      {
        personData && personData.cpfhousingwithdrawal && !_.isEmpty(personData.cpfhousingwithdrawal.withdrawaldetails) &&  !_.isEmpty(personData.cpfhousingwithdrawal.withdrawaldetails[0]) && (
          <SectionWrapper title="CPF housing withdrawal">
            {
              personData.cpfhousingwithdrawal.withdrawaldetails.map((item, index) => (
                <Grid container className={index > 0 ? 'mt-dt-30' : ''} key = {index}>
                  {
                    !_.isEmpty(item.address) && item && item.address && (
                      <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                        className={`pdr-20 block-half mb-dt-30`}
                      >
                        <div className="label-info">Address {index + 1}</div>
                        <div className={`mt-dt-5 font-weight-600`}>
                          <>
                            {item.address.block && item.address.block.value || ''}
                            {item.address.block && item.address.block.value && (
                            <>
                            &nbsp;
                            </>)}
                            {item.address.street && item.address.street.value || ''}
                            <br />
                            {item.address.floor && item.address.floor.value && '#'}
                            {item.address.floor && item.address.floor.value || ''}
                            {item.address.unit && item.address.unit.value && '-'}
                            {item.address.unit && item.address.unit.value}
                            {item.address.unit && item.address.unit.value && (
                            <>
                            &nbsp;
                            </>)}
                            {item.address.building && item.address.building.value || ''}
                            {item.address.building && item.address.building.value && (
                              <>
                                &nbsp;
                              </>
                            )}
                             <br />
                            {item.address.country && item.address.country.desc || 'Singapore '}
                            {item.address.country && item.address.country.desc && (
                              <>
                                &nbsp;
                              </>
                            )}
                            {item.address.postal && item.address.postal.value || ''}
                          </>
                        </div>
                      </Grid>
                    )
                  }
                  <Grid
                    item
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    className={`pdr-20 block-half`}
                  >
                  <Grid container>
                    {
                      item && item.principalwithdrawalamt.value && (
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className={`pdr-20 block-half mb-dt-30`}
                        >
                          <RowInfo
                            label="Principal Withdrawal Amount for CPF Housing Withdrawal"
                            content={item && item.principalwithdrawalamt.value && `SGD ${moneyDisplayFormat(Number(item && item.principalwithdrawalamt.value), 0)}` || '-'}
                          />
                        </Grid>
                      )
                    }
                    {
                      item && item.accruedinterestamt && item.accruedinterestamt.value && (
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className={`pdr-20 block-half mb-dt-30`}
                        >
                          <RowInfo
                            label="Total Accrued Interest for CPF Housing Withdrawal"
                            content={item && item.accruedinterestamt && item.accruedinterestamt.value && `SGD ${moneyDisplayFormat(Number(item && item.accruedinterestamt.value), 0)}` || '-'}
                          />
                        </Grid>
                      )
                    }
                    {
                      item && item.monthlyinstalmentamt && item.monthlyinstalmentamt.value && (
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className={`pdr-20 block-half`}
                        >
                          <RowInfo
                            label="CPF Monthly Instalment Amount"
                            content={item && item.monthlyinstalmentamt && item.monthlyinstalmentamt.value && `SGD ${moneyDisplayFormat(Number(item && item.monthlyinstalmentamt.value), 0)}` || '-'}
                          />
                        </Grid>
                      )
                    }
                    {
                      item && item.totalamountofcpfallowedforproperty && item.totalamountofcpfallowedforproperty.value && (
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className={`pdr-20 block-half`}
                        >
                          <RowInfo
                            label="Total Amount of CPF allowed for property"
                            content={item && item.totalamountofcpfallowedforproperty && item.totalamountofcpfallowedforproperty.value && `SGD ${moneyDisplayFormat(Number(item && item.totalamountofcpfallowedforproperty.value), 0)}` || '-'}
                          />
                        </Grid>
                      )
                    }
                  </Grid>
                  </Grid>
                </Grid>
              ))
            }
          </SectionWrapper>
        )
      }
      {personData && FormatDataHdbownership().length > 0 && <div className="line" />}
      {/* section HDB ownership */}
      {/* isFullOption && _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION) */}
     {
       personData && FormatDataHdbownership().length > 0 && (
        <SectionWrapper title="HDB ownership">
          {
            FormatDataHdbownership() && FormatDataHdbownership().map((item: any, index: number) => (
              <>
                <Grid container className={index > 0 ? 'mt-dt-30' : ''} key={index}>
                  {
                    !_.isEmpty(item.address) && item && item.address && (
                      <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className={`pdr-20 block-half mb-dt-30`}
                      >
                        <div className="label-info">Address of HDB owned</div>
                        <div className={`mt-dt-5 font-weight-600`}>
                          <>
                            {item.address.block && item.address.block.value || ''}
                            {item.address.block && item.address.block.value && (
                            <>
                            &nbsp;
                            </>)}
                            {item.address.street && item.address.street.value || ''}
                            <br />
                            {item.address.floor && item.address.floor.value && '#'}
                            {item.address.floor && item.address.floor.value || ''}
                            {item.address.unit && item.address.unit.value && '-'}
                            {item.address.unit && item.address.unit.value}
                            {item.address.unit && item.address.unit.value && (
                            <>
                            &nbsp;
                            </>)}
                            {item.address.building && item.address.building.value || ''}
                            {item.address.building && item.address.building.value && (
                              <>
                                &nbsp;
                              </>
                            )}
                            <br />
                            {item.address.country && item.address.country.desc}
                            {item.address.country && item.address.country.desc && (
                              <>
                                &nbsp;
                              </>
                            )}
                            {item.address.postal && item.address.postal.value || ''}
                          </>
                        </div>
                      </Grid>
                    )
                  }
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="HDB Flat Type"
                    content={item && item.hdbtype && item.hdbtype.desc || '-'}
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="Number of owners"
                    content={item && item.noofowners && item.noofowners.value || '-'}
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="Date of purchase"
                    content={item && item.dateofpurchase && item.dateofpurchase.value && moment(item && item.dateofpurchase && item.dateofpurchase.value).format('DD MMM YYYY')  || '-'}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="Transfer of ownership"
                    content={item && item.dateofownershiptransfer && item.dateofownershiptransfer.value && moment(item && item.dateofownershiptransfer && item.dateofownershiptransfer.value).format('DD MMM YYYY')  || '-'}
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="Lease commencement date"
                    content={item && item.leasecommencementdate && item.leasecommencementdate.value && moment(item && item.leasecommencementdate && item.leasecommencementdate.value).format('DD MMM YYYY')  || '-'}
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={`pdr-20 block-half mb-dt-30`}
                >
                  <RowInfo
                    label="Terms of lease"
                    content={item && item.termoflease && item.termoflease.value || '-'}
                  />
                </Grid>
              </Grid>
              <Grid container>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-mb-30`}
            >
              <RowInfo
                label="Balance loan repayment period"
                content={`${item && item.balanceloanrepayment && item.balanceloanrepayment.years && Number(item.balanceloanrepayment.years.value)> 0 ? Number(item.balanceloanrepayment.years.value) + ' years' : '- ' } ${item && item.balanceloanrepayment && item.balanceloanrepayment.months && Number(item.balanceloanrepayment.months.value) > 0 ? Number(item.balanceloanrepayment.months.value) + 'months' : ''}` || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half mb-mb-30`}
            >
              <RowInfo
                label="Outstanding HDB loan amount"
                content={item && item.outstandingloanbalance && item.outstandingloanbalance.value && `SGD ${moneyDisplayFormat(Number(item && item.outstandingloanbalance && item.outstandingloanbalance.value), 2)}` || '-'}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={`pdr-20 block-half`}
            >
              <RowInfo
                label="Monthly repayment amount"
                content={item && item.monthlyloaninstalment && item.monthlyloaninstalment.value && `SGD ${moneyDisplayFormat(Number(item && item.monthlyloaninstalment && item.monthlyloaninstalment.value), 2)}` || '-'}
              />
            </Grid>
          </Grid>
              </>
            ))
          }
        </SectionWrapper>
       )
     }
      <div className="line" />
      {/* section income information  */}
      {/* _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION)*/}
      <section>
      {
        personData.noa && (
          <SectionWrapper title="Income information">
            <Grid container>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={`pdr-20 block-half mb-dt-30`}
              >
                <RowInfo
                className={'wrapper-rowinfo'}
                  label="Assessed income"
                  content={personData.noa && personData.noa.amount ? `SGD ${moneyDisplayFormat(Number(personData.noa.amount.value), 2)}` : 'SGD 0'}
                />

              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={`pdr-20 block-half mb-dt-30`}
              >
                <RowInfo
                  label="Year assessed"
                  content={personData.noa && personData.noa.yearofassessment ? personData.noa.yearofassessment.value : '-'}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                lg={3}
                md={4}
                sm={12}
                xs={12}
                className={`mb-dt-30`}
              >
                <RowInfo
                  isBlock
                  label="Breakdown of annual income"
                  content={(
                    <>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Employment</span>
                        <span>{personData.noa && personData.noa.employment ? `SGD ${moneyDisplayFormat(Number(personData.noa.employment.value), 2)}` : 'SGD -'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Trade</span>
                        <span>{personData.noa && personData.noa.trade ? `SGD ${moneyDisplayFormat(Number(personData.noa.trade.value), 2)}` : 'SGD -'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Rent</span>
                        <span>{personData.noa && personData.noa.rent ? `SGD ${moneyDisplayFormat(Number(personData.noa.rent.value), 2)}` : 'SGD -'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Interest</span>
                        <span>{personData.noa && personData.noa.interest ? `SGD ${moneyDisplayFormat(Number(personData.noa.interest.value), 2)}` : 'SGD -'}</span>
                      </span>
                    </>
                  )}
                />
              </Grid>
            </Grid>
            {/* section contribution history */}
            {
              cpfcontributions().length > 0 && (
                <Grid container>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <>
                    <div className="mb-dt-10">CPF contribution history</div>
                    <Table
                    _useState5="See all 15 months"
                      thead={['Month', 'Paid on', 'Employer', 'Amount (SGD)']}
                      tbody={cpfcontributions()}
                      textButton={`See all ${cpfcontributions().length} months`}
                    />
                  </>
                </Grid>
              </Grid>
              )
            }
          </SectionWrapper>
        )
      }
      <div className="body-reg mb-dt-20 mt-dt-30">
        If any of the information above is inaccurate, please
        {' '}
        <Link 
          href="/" 
          classHover="linkUnderline" 
          isOnClick 
          onClick={() => {
            history.push(URL_MANUAL_FLOW.personalInformation)
            dispatch(setMainApplicant(MANUAL));
            dispatch(setShowDocument(true))
          }}>
          fill in this online application form</Link>
        {' '}
        instead.
      </div>
      <div className="body-reg mb-dt-20">By continuing with your application, you confirm that the above information retrieved from Myinfo is correct, and agree to proceed with the application for managing your home loan.</div>
      {/* <div className="body-reg">
        Your personal data will be used to assess your application, manage our relationship with you, update your records, and for applicable purposes in accordance with
        {' '}
        <Link href="https://www.ocbc.com/personal-banking/policies.page" target="_blank" classHover="linkUnderline">OCBC Data Protection Policy</Link>
        .
      </div> */}
      </section>
    </>
  );
};
export default MyInfo;
