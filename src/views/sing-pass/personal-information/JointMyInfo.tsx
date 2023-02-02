/***
 * MYINFO
 *    >> child
 *      >> table
 *      >> section wrapper
 *      >> rowInfo
 *      >> link
 */

// import modules
import React, { useState } from 'react';
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
import { DATA_STATE_REPRICING_LENGTHENING, LIST_DATA_INFORMATION, MANUAL, REGION, URL_MANUAL_FLOW } from '@/utils/constants';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setMainApplicant, setShowDocument } from '@/store/form';
// render UI
const JointMyInfo: React.FC<IPersonalInformation.IMyInfoProps> = ({ personData, UINFIN, isFullOption, hasHDB, formRedux }) => {
  /**
   * Format data table
   * @returns 
   */

  const history = useHistory();
  const dispatch = useDispatch();
  const cpfcontributions = () => {
    if (personData && personData.ApplicantModel && personData.ApplicantModel[0].CPFContributionsList.CPFContributionModel) {
      return personData.ApplicantModel[0].CPFContributionsList.CPFContributionModel.map((item, key) => {
        const data = {
          month: '',
          date: '',
          employer: '',
          amount: '',
        };
        _.mapKeys(Object.keys(item), (valueItem) => {
          if (valueItem === 'Month') {
            return data['month'] = moment(item.Month).format('MMM YYYY');
          } if (valueItem === 'DateStr') {
            return data['date'] = moment(item.DateStr).format('DD MMM YYYY');
          } if (valueItem === 'Amount') {
            return data['amount'] = moneyDisplayFormat(Number(item.Amount), 2);
          }
          return data['employer'] = item.Employer;
        });
        return data;
      });
    }
    return [];
  };

  const formatStringToDate = (data: string) => {
    return data.substring(4, data.length) + '-' + data.substring(2,4) + '-' + data.substring(0,2)
  }

  const checkMatchOption = (data: any) => {
    return _.isEqual(_.sortBy(data), _.sortBy(formRedux.form.formLanding.listChecked))
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
                content={formRedux && formRedux.form && formRedux.form.personalInformation && `${formRedux.form.personalInformation.countryPhoneNumber} ${formRedux.form.personalInformation.phoneNumber}`}
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
              className={`pdr-20 block-half mb-dt-30`}
            >
              <RowInfo
                label="Name"
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].EmploymentDetails && personData.ApplicantModel[0].EmploymentDetails.EmploymentModel[0].EmployerName && capitalize(personData.ApplicantModel[0].EmploymentDetails.EmploymentModel[0].EmployerName)}
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
                label="Hanyu pinyin name"
                content={personData && personData.hanyupinyinname ? capitalize(personData.hanyupinyinname.value) : '-'}
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
                label="Alias"
                content={personData && personData.aliasname ? capitalize(personData.aliasname.value) : '-'}
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
                label="Hanyu pinyin alias"
                content={personData && personData.hanyupinyinaliasname ? capitalize(personData.hanyupinyinaliasname.value) : '-'}
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
                label="Married name"
                content={personData && personData.marriedname ? personData.marriedname.value : '-'}
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
                content={personData && personData.ApplicantModel && capitalize(personData.ApplicantModel[0].NationalityDesc)}
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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].ResidentStatusDesc}
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
                label={(personData && personData.ApplicantModel && personData.ApplicantModel[0].ResidentStatusDesc !== 'CZ') ? 'FIN' : 'NRIC'}
                content={(personData && personData.ApplicantModel && personData.ApplicantModel[0].ResidentStatusDesc !== 'CZ') ? '-' : personData && personData.ApplicantModel && personData.ApplicantModel[0].NRIC}
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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].ResidentStatusDes && capitalize(personData.ApplicantModel[0].GenderDesc)}
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
                content={personData && personData.ApplicantModel && moment(personData.ApplicantModel[0].DateofBirth).format('DD MMM YYYY')}
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
                content={personData && personData.ApplicantModel && capitalize(personData.ApplicantModel[0].CountryOfBirth)}
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
                content={personData && personData.ApplicantModel && capitalize(personData.ApplicantModel[0].Race)}
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
                    content={personData && personData.passtype ? capitalize(personData.passtype.desc) : '-'}
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
                label={personData.nationality && personData.nationality.code !== REGION.SG ? "Passport expiry date" : "Pass expiry date"}
                content={personData && personData.passexpirydate ? moment(personData.passexpirydate.value).format('DD MMM YYYY') : '-'}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
      </section>
      {/* {
        isFullOption && (
          <>
             <div className="line" />
          </>
        )
      } */}
      <div className="line" />
      {/* section residential address */}
      {/* personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses && isFullOption && _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION) */}
      {
          personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses && (
          <section>
            <SectionWrapper title="Residential address">
              <div className={`mb-dt-30 font-weight-600`}>
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].BlockNo}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Street}
                <br />
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].BuildingName}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Floor}
                -
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Unit}
                &nbsp;
                <br />
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Country}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].PostalCode}
              </div>
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
                    label="Ownership of Private Residential Property"
                    content={'No'}
                  />
                </Grid>
              </Grid>
            </SectionWrapper>
          </section>
        )
      }
      {checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) && <div className="line" />}
      {
        checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) && (<section>
          <SectionWrapper title="CPF housing withdrawal">
            <Grid container>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={`pdr-20 block-half mb-mb-30 mb-dt-30 `}
              >
                <RowInfo
                  label="Principal Withdrawal Amount for CPF Housing Withdrawal"
                  content={personData && personData.ApplicantModel && `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].PrincipalWithdrawalAmt), 0)}`}
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
                  label="Total Accrued Interest for CPF Housing Withdrawal"
                  content={personData && personData.ApplicantModel && `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].AccruedInterestAmt), 0)}`}

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
                  label="CPF Monthly Instalment Amount"
                  content={personData && personData.ApplicantModel && `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].TotalCPFAllowedForProperty > 0 ? personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].TotalCPFAllowedForProperty : 900), 0)}`}
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
                  label="Total Amount of CPF allowed for property"
                  content={personData && personData.ApplicantModel && `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].TotalCPFAllowedForProperty > 0 ? personData.ApplicantModel[0].CPFWithdrawDetails.CPFWithdrawModel[0].TotalCPFAllowedForProperty :  250000), 0)}`}
                />
              </Grid>
            </Grid>
          </SectionWrapper>
        </section>)
      }
      {
        isFullOption && (
          <div className="line" />
        )
      }
      <div className="line" />
      {/* section HDB ownership */}
      {/* isFullOption && _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION) */}
     {
       true && (
        <SectionWrapper title="HDB ownership">
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
                label="HDB Flat Type"
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].HdbTypeDesc : '-'}
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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails &&  personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].NoOfOwners : '-'}
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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? moment(formatStringToDate(personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].DateofPurchase)).format('DD MMM YYYY') : '-'}
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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? moment(formatStringToDate(personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].DateofPurchase)).format('DD MMM YYYY') : '-'}

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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? moment(formatStringToDate(personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].LeaseCommencementDate)).format('DD MMM YYYY') : '-'}

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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? `${personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].TermOfLease} ${personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].TermOfLease === '1' ? 'year' : 'years'}` : '-'}

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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? `${personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].BalanceLoanrepaymentinMnths} ${personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].BalanceLoanrepaymentinMnths === '1' ? 'year': 'years'}` : '-'}

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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].OutstandingLoanbalance), 2)}` : '-'}

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
                content={personData && personData.ApplicantModel && personData.ApplicantModel[0].HDBOwnershipDetails && personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].HDBOwnershipDetails.HDBOwnershipModel[0].MonthlyLoanInstalment), 2)}` : '-'}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
       )
     }
      <div className="line" />
      {/* section income information  */}
      <section>
      {/* _.isEqual(formRedux.form.formLanding.listChecked, LIST_DATA_INFORMATION) */}
      {
        true && (
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
                  content={personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel && personData.ApplicantModel[0].NoaList.NOAModel[0].Amount), 2)}` : 'Not available'}
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
                  content={personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList.NOAModel[0].YearOfAssessment : 'Not available'}
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
                className={personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList ? `mb-dt-30` : ''}
              >
                <RowInfo
                  isBlock
                  label="Breakdown of annual income"
                  content={(
                    <>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Employment</span>
                        <span>{personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].NoaList.NOAModel[0].Employment), 2)}` : 'Not available'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Trade</span>
                        <span>{personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].NoaList.NOAModel[0].Trade), 2)}` : 'Not available'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Rent</span>
                        <span>{personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].NoaList.NOAModel[0].Rent), 2)}` : 'Not available'}</span>
                      </span>
                      <span className="mb-dt-10 d-flex justify-content-space-between">
                        <span className="label-cs">Interest</span>
                        <span>{personData && personData.ApplicantModel && personData.ApplicantModel[0].NoaList && personData.ApplicantModel[0].NoaList.NOAModel[0] ? `SGD ${moneyDisplayFormat(Number(personData.ApplicantModel[0].NoaList.NOAModel[0].InterestRate), 2)}` : 'Not available'}</span>
                      </span>
                    </>
                  )}
                />
              </Grid>
            </Grid>
            {/* section contribution history */}
            {
              personData && personData.ApplicantModel && personData.ApplicantModel[0].CPFContributionsList && (
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
            dispatch(setShowDocument(true))
            dispatch(setMainApplicant(MANUAL));
          }}
        >
          {
            !formRedux.isBorrower ? (
              <>
                fill in this online application form
              </>
            ) : (
              <>
                complete this online application form 
              </>
            )
          }
          </Link>
        {' '}
        instead.
      </div>
      <div className="body-reg mb-dt-20">
        {
           !formRedux.isBorrower ? (
             <>
              By continuing with your application, you confirm that the above information retrieved from Myinfo is correct, and agree to proceed with the application for managing your home loan.
             </>
           ) : (
             <>
              By proceeding with your application, you confirm that the above information, retrieved from MyInfo, is correct.
             </>
           )
        }
      </div>
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
export default JointMyInfo;