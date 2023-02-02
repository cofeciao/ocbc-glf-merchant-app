import React from "react";

declare namespace IPersonalInformation {
  export interface IProps {
  }
  export interface IValueData {
    value: string;
    error: string;
  }

  export interface IInfo {
    getPersonDataRes?:IGetPersonDataRes;
  }
  export interface IGetPersonDataRes {
    RespHeader?:IRespHeader;
    UINFIN?:string;
    PersonData?:IPersonData;
  }
  export interface IRespHeader {
    RqUuid?:string;
    ClientId?:string;
    ClientCountry?:string;
    TraxDateTime?:string;
    RespStatus?:string;
  }
  export interface IPersonData {
    name?:IName;
    hanyupinyinname?:IHanyupinyinname;
    aliasname?:IAliasname;
    hanyupinyinaliasname?:IHanyupinyinaliasname;
    marriedname?:IMarriedName;
    sex?:ISex;
    race?:IRace;
    nationality?:INationality;
    dob?:IDob;
    passtype?: ICountry;
    passexpirydate?: ICountry;
    birthcountry?:IBirthCountry;
    regadd?:IRegAdd;
    mailadd?:IMailAdd;
    email?:IEmail;
    mobileno?:IMobileNo;
    employment?:IEmployment;
    uinfin?:IUinfin;
    homeno?:IHomeNo;
    residentialstatus?:IResidentialStatus;
    noa?:INOA;
    cpfcontributions?:ICPFContributions;
  }
  export interface IName {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IHanyupinyinname {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IAliasname {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IHanyupinyinaliasname {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IMarriedName {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IDob {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IEmail {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IEmployment {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IUinfin {
    value?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface ISex {
    code?:string;
    desc?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IRace {
    code?:string;
    desc?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface INationality {
    code?:string;
    desc?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IBirthCountry {
    code?:string;
    desc?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IResidentialStatus {
    code?:string;
    desc?:string;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IRegAdd {
    type?:string;
    block?:IBlock;
    building?:IBuilding;
    floor?:IFloor;
    unit?:IUnit;
    street?:IStreet;
    postal?:IPostal;
    country?:ICountry;
    classification?:string;
    source?:string;
    lastupdated?:string;
    line1?: IBlock;
    line2?: IBlock;
  }
  export interface IMailAdd {
    type?:string;
    block?:IBlock;
    building?:IBuilding;
    floor?:IFloor;
    unit?:IUnit;
    street?:IStreet;
    postal?:IPostal;
    country?:ICountry;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IMobileNo {
    prefix?:IPrefix;
    areacode?:IAreaCode;
    nbr?:Inbr;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IHomeNo {
    prefix?:IPrefix;
    areacode?:IAreaCode;
    nbr?:Inbr;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface INOA {
    amount?:IAmount;
    dob?:Idob;
    nric?:Inric;
    passstatus?:Ipassstatus;
    passtype?:Ipasstype;
    passexpire?:Ipassexpire;
    yearofassessment?:Iyearofassessment;
    employment?:Iemployment;
    trade?:Itrade;
    rent?:Irent;
    interest?:Iinterest;
    taxclearance?:Itaxclearance;
    category?:Icategory;
    classification?:string;
    source?:string;
    lastupdated?:string;
  }

  export interface IBlock {
    value?:string
  }
  export interface IBuilding {
    value?:string
  }
  export interface IFloor {
    value?:string
  }
  export interface IUnit {
    value?:string
  }
  export interface IStreet {
    value?:string
  }
  export interface IPostal {
    value?:string
  }
  export interface ICountry {
    value?:string
    desc?: string;
  }
  export interface IPrefix {
    value?:string
  }
  export interface IAreaCode {
    value?:string
  }
  export interface Inbr {
    value?:string
  }
  export interface IAmount {
    value?:string
  }
  export interface Idob {
    value?:string
  }
  export interface Inric {
    value?:string
  }
  export interface Ipassstatus {
    value?:string
  }
  export interface Ipasstype {
    value?:string
  }
  export interface Ipassexpire {
    value?:string
  }
  export interface Iyearofassessment {
    value?:string
  }
  export interface Iemployment {
    value?:string
  }
  export interface Itrade {
    value?:string
  }
  export interface Irent {
    value?:string
  }
  export interface Iinterest {
    value?:string
  }
  export interface Itaxclearance {
    value?:string
  }
  export interface Icategory {
    value?:string
  }
  export interface IDate {
    value?:string
  }
  export interface IMonth {
    value?:string
  }
  export interface ICPFContributions {
    history?:IHistory[];
    classification?:string;
    source?:string;
    lastupdated?:string;
  }
  export interface IHistory {
    date?:IDate
    amount?:IAmount
    month?:IMonth;
    employer?:Iemployment
  }
  export interface IAddressDetail {
    countryValueSelect?:string;
    postalCodeInside?:string;
    blockNumber?:string;
    streetName?:string;
    unit?:string;
    floor?:string;
    streetAddress?:string;
    ErrorCode?: string;
    ErrorDescription?: string
  }
  export interface IYourAccountOCBC {
    key?:string;
    value?:string;
  }

  export interface IItemAccount {
    key: string;
    value: string;
  }
  export interface IPayNow {
    name?:string;
    error?:string;
  }
  export interface IRef {
    current:any;
    validateForm:any;
    handleNextPage:()=>void;
  }

  export interface IMyInfoProps {
    personData?: IPersonData, 
    isFullOption: boolean, 
    formRedux: any;
  }

  export interface IPersonalInformationProps {
    handleCallAPI: () => void, 
    isFullOption: boolean,
    hasHDB: boolean,
    ref: any,
    children: any
  }
}

export { IPersonalInformation };
