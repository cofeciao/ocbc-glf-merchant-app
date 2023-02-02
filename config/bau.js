let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()

let branchName = require('child_process')
  .execSync('git name-rev HEAD')
  .toString()

let commitDateTime = require('child_process')
  .execSync('git show -s --format=%cI HEAD')
  .toString()

module.exports = {
  theme: {},
  activeRule: 'personal-banking/loans/mortgage-form-repricing-bau/',
  APIServer: 'https://uwosswaos0a.ocbcgroup.ocbc.com',
  env: 'bau',
  myinfo: {
    api: 'https://test.api.myinfo.gov.sg/com/v3/authorise',
    redirectUri: 'https://internet-uat.ocbc.com/personal-banking/loans/mortgage-form-repricing-bau',
    clientIdRepricing: 'STG-193200032W-OCBC-MORTGAGEREPRICE',
    secretRepricing: 'kbMksFgNFJFo7eHIVQqi4cX15wiVsjSg',
    clientIdNonRepricing: 'STG-193200032W-OCBC-MORTGAGEPREPAYMENT',
    secretNonRepricing: 'dcTplsUy3ouq8CTShv2ZuCJyv7SjBwVy',
    attributeListRepricing: 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate,regadd,ownerprivate,cpfhousingwithdrawal,hdbownership.hdbtype,hdbownership.noofowners,hdbownership.dateofpurchase,hdbownership.dateofownershiptransfer,hdbownership.leasecommencementdate,hdbownership.termoflease,hdbownership.balanceloanrepayment,hdbownership.outstandingloanbalance,hdbownership.monthlyloaninstalment,hdbownership.address,noa,cpfcontributions',
    attributeListNonRepricing: 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate'
  },
  __HASH__: JSON.stringify(commitHash),
  __BRANCH__: JSON.stringify(branchName),
  __COMMIT_DATE_TIME__: JSON.stringify(commitDateTime)
}
