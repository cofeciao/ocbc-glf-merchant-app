module.exports = {
  theme: {},
  activeRule: 'personal-banking/loans/mortgage-form-repricing/',
  APIServer: 'https://www.frankbyocbc.com/soaproxy',
  env: 'prod',
  myinfo: {
    api: 'https://api.myinfo.gov.sg/com/v3/authorise',
    redirectUri: 'https://www.ocbc.com/personal-banking/loans/mortgage-form-repricing',
    clientIdRepricing: 'PROD-193200032W-OCBC-MORTGAGEREPRICE',
    secretRepricing: 'k7siyudd7Mwn19cWBwUxQRMZ97uvdt1S',
    clientIdNonRepricing: 'PROD-193200032W-OCBC-MORTGAGEPREPAYMENT',
    secretNonRepricing: 'p207G8uu5gEt0D3FJMFoiOrzl09AjH8e',
    attributeListRepricing: 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate,regadd,ownerprivate,cpfhousingwithdrawal,hdbownership.hdbtype,hdbownership.noofowners,hdbownership.dateofpurchase,hdbownership.dateofownershiptransfer,hdbownership.leasecommencementdate,hdbownership.termoflease,hdbownership.balanceloanrepayment,hdbownership.outstandingloanbalance,hdbownership.monthlyloaninstalment,hdbownership.address,noa,cpfcontributions',
    attributeListNonRepricing: 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate'
  },
}
