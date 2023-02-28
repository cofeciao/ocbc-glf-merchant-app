export const REGION = {
  MY: "MY",
  SG: "SG",
  HK: "HK",
  CN: "CN",
};

export const LANGUAGE = {
  ZH: "zh",
  EN: "en",
};

export const LIST_ROUTER = {
  company_and_contact_information:
    "/self-serve/company-and-contact-information",
  transaction_and_card_acceptance_type:
    "/self-serve/transaction-and-card-acceptance-type",
  business_details: "/self-serve/business-details",
  products_and_services: "/self-serve/products-and-services",
};

export const HOME_PAGE = {
  title_cashless_payments_home: "Apply for OCBC Cashless Payments",
  cashless_payments_methods: {
    title: "Cashless payments methods",
    description: "Which cashless payment methods are you applying for?",
    messgase_error_list_checkbox: "Please select at least one service",
    data_list_checkbox: [
      {
        label: "Credit/Debit cards",
        description: "This Application will take about you 10 minutes",
        value: "creditcards",
        checked: false,
      },
      {
        label: "Paynow",
        value: "paynow",
        checked: false,
      },
    ],
  },
  things_to_take_note_of: {
    title: "Things to take note of",
    list_item: [
      "You will need to provide information on your business such as name, Unique Entity Number (UEN), fulfilment type, and sales forecast",
      "Your business details will be pulled from ACRA to access your application",
    ],
  },
};

export const SELF_SERVE_PAGE = {
  list_step: {
    company_and_contact_information: {
      id: "company-and-contact-information",
      numerical: "0",
      text: "Company and contact information",
      check: false,
      status: true,
      data: {
        id: "company-and-contact-information",
        numerical: "0",
        text: "Company and contact information",
        check: false,
        status: true,
      },
      section: {
        company_registration: {
          title: "Company registration",
          description:
            "Please enter your registered entity name and Unique Entity Number (UEN).",
        },
        contact_details: {
          title: "Contact details",
          description:
            "Our Relationship Manager will reach out to you with these details.",
        },
      },
    },
    transaction_and_card_acceptance_type: {
      id: "transaction-and-card-acceptance-type",
      numerical: "1",
      text: "Transaction and card acceptance type",
      check: false,
      status: true,
      data: {
        id: "transaction-and-card-acceptance-type",
        numerical: "1",
        text: "Transaction and card acceptance type",
        check: false,
        status: true,
      },
      section: {
        which_service_are_you_applying_for: {
          title: "Which service are you applying for?",
          description:
            "Both services automatically come with Mastercard and Visa. You may choose other card acceptance options.",
          data_list_checkbox: [
            {
              label: "Point-of-Sales terminal",
              value: "point-of-sales-terminal",
              checked: false,
              expandedListCheckbox: {
                description:
                  "Please select the payment options for your Point-of-Sales terminal",
                listCheckbox: [
                  {
                    label: "Visa",
                    checked: false,
                    value: "visa",
                  },
                  {
                    label: "Mastercard",
                    checked: false,
                    value: "mastercard",
                  },
                  {
                    label: "UnionPay",
                    checked: false,
                    value: "unionPay",
                  },
                  {
                    label: "JCB",
                    checked: false,
                    value: "jcb",
                  },
                  {
                    label: "WeChat Pay",
                    checked: false,
                    value: "wechat-pay",
                  },
                  {
                    label: "AliPay",
                    checked: false,
                    value: "alipay",
                  },
                  {
                    label: "OCBC Instalment Payment Plan (IPP)",
                    checked: false,
                    value: "ocbc-ipp",
                  },
                  {
                    label: "Diners Club",
                    checked: false,
                    value: "dinners-club",
                  },
                  {
                    label: "AMEX",
                    checked: false,
                    value: "amex",
                  },
                  {
                    label: "Paynow",
                    checked: false,
                    value: "paynow",
                  },
                ],
              },
            },
            {
              label: "e-Commerce",
              value: "e-commerce",
              checked: false,
              expandedListCheckbox: {
                description:
                  "Please select the payment options for your e-Commerce platform",
                listCheckbox: [
                  {
                    label: "Visa",
                    checked: false,
                    value: "visa",
                  },
                  {
                    label: "Mastercard",
                    checked: false,
                    value: "mastercard",
                  },
                  {
                    label: "JCB",
                    checked: false,
                    value: "jcb",
                  },
                  {
                    label: "UnionPay",
                    checked: false,
                    value: "union-pay",
                  },
                  {
                    label: "OCBC Instalment Payment Plan (IPP)",
                    checked: false,
                    value: "ocbc-ipp",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    business_details: {
      id: "business-details",
      numerical: "2",
      text: "Business details",
      check: false,
      status: true,
      data: {
        id: "business-details",
        numerical: "2",
        text: "Business details",
        check: false,
        status: true,
      },
      section: {
        business_infomation: {
          listRadioDescription: "Is your business ready for operation?",
          listRadio: [
            {
              text: "Yes",
              checked: false,
            },
            {
              text: "No",
              checked: false,
            },
          ],
          textFieldDescription:
            "At how many outlets will you deploy Point-of-Sales terminals?",
          textField: "",
        },
        website_infomation: {
          listRadioDescription: "Is your business ready for operation?",
          listRadio: [
            {
              text: "Yes",
              checked: false,
            },
            {
              text: "No",
              checked: false,
            },
          ],
          textFieldDescription:
            "At how many outlets will you deploy Point-of-Sales terminals?",
          textField: "",
        },
        other_infomation: {
          sections: [
            {
              listCheckboxDescription: "Is your business ready for operation?",
              listCheckbox: [
                {
                  label: "Selling products",
                  checked: false,
                },
                {
                  label: "Providing services",
                  checked: false,
                },
              ],
            },
            {
              listCheckboxDescription:
                "Do you currently have any of the following?",
              listCheckbox: [
                {
                  label: "Office",
                  checked: false,
                },
                {
                  label: "Retail store",
                  checked: false,
                },
                {
                  label: "Warehouse",
                  checked: false,
                },
              ],
            },
          ],
        },
      },
    },
    products_and_service: {
      id: "products-and-services",
      numerical: "3",
      text: "Products and services",
      check: false,
      status: true,
      data: {
        id: "products-and-services",
        numerical: "3",
        text: "Products and services",
        check: false,
        status: true,
      },
      sections: {
        is_your_business_offering: {
          description:
            "What products and/or services is your business offering?",
          listRadioDescription:
            "How quickly does your business fulfil these products and/or services?",
          mainTextFieldLabel:
            "E.g. Bistro, café, workshops, salon, clinic, etc. (180 character limit)",
          listRadio: [
            {
              text: "Immediate fulfillment",
              checked: false,
            },
            {
              text: "Fulfillment over a period of time",
              checked: false,
            },
          ],
        },
        is_your_sales_forecast: {
          description:
            "Based on your products and/or services, what is your sales forecast?", 
        },
      },
    },
    review_and_submit: {
      id: "review-and-submit",
      numerical: "3",
      text: "Review and submit",
      check: false,
      status: true,
      data: {
        id: "review",
        numerical: "3",
        text: "Review and submit",
        check: false,
        status: true,
      },
    },
  },
};

export const ERROR = "error";
export const TITLE_PAGE = "Cashless Payment Application";
export const LINK_EXTERNAL_PAGE = "https://www.ocbc.com/group/gateway";
export const YES = "Yes";
export const NO = "No";
export const EDIT = "Edit";
export const WIDTH_DIALOG_DEFAULT = 700;
export const LIST_DATA_INFORMATION = [
  "Repricing",
  "Lengthening of loan tenure",
];
export const SINGAPORE = "Singapore";
export const NEXT = "Next";
export const REVIEW = "Review";
export const SUBMIT = "Submit";
export const START = "START";

export const LIST_COUNTRIES = [
  {
    key: "SG",
    value: "Singapore",
  },
  {
    key: "GB",
    value: "United Kingdom",
  },
  {
    key: "US",
    value: "United States",
  },
  {
    key: "AU",
    value: "Australia",
  },
  {
    key: "MY",
    value: "Malaysia",
  },
  {
    key: "JP",
    value: "Japan",
  },
  {
    key: "AF",
    value: "Afghanistan",
  },
  {
    key: "AL",
    value: "Albania",
  },
  {
    key: "DZ",
    value: "Algeria",
  },
  {
    key: "AS",
    value: "American Samoa",
  },
  {
    key: "AD",
    value: "Andorra",
  },
  {
    key: "AO",
    value: "Angola",
  },
  {
    key: "AI",
    value: "Anguilla",
  },
  {
    key: "AQ",
    value: "Antarctica",
  },
  {
    key: "AG",
    value: "Antigua and Barbuda",
  },
  {
    key: "AR",
    value: "Argentina",
  },
  {
    key: "AM",
    value: "Armenia",
  },
  {
    key: "AW",
    value: "Aruba",
  },
  {
    key: "AT",
    value: "Austria",
  },
  {
    key: "AZ",
    value: "Azerbaijan",
  },
  {
    key: "BS",
    value: "Bahamas",
  },
  {
    key: "BH",
    value: "Bahrain",
  },
  {
    key: "BD",
    value: "Bangladesh",
  },
  {
    key: "BB",
    value: "Barbados",
  },
  {
    key: "BY",
    value: "Belarus",
  },
  {
    key: "BE",
    value: "Belgium",
  },
  {
    key: "BZ",
    value: "Belize",
  },
  {
    key: "BJ",
    value: "Benin",
  },
  {
    key: "BM",
    value: "Bermuda",
  },
  {
    key: "BT",
    value: "Bhutan",
  },
  {
    key: "BO",
    value: "Bolivia",
  },
  {
    key: "BA",
    value: "Bosnia and Herzegovina",
  },
  {
    key: "BW",
    value: "Botswana",
  },
  {
    key: "BV",
    value: "Bouvet Island",
  },
  {
    key: "BR",
    value: "Brazil",
  },
  {
    key: "IO",
    value: "British Indian Ocean Territory",
  },
  {
    key: "BN",
    value: "Brunei Darussalam",
  },
  {
    key: "BG",
    value: "Bulgaria",
  },
  {
    key: "BF",
    value: "Burkina Faso",
  },
  {
    key: "BI",
    value: "Burundi",
  },
  {
    key: "KH",
    value: "Cambodia",
  },
  {
    key: "CM",
    value: "Cameroon",
  },
  {
    key: "CA",
    value: "Canada",
  },
  {
    key: "CV",
    value: "Cape Verde",
  },
  {
    key: "KY",
    value: "Cayman Islands",
  },
  {
    key: "CF",
    value: "Central African Republic",
  },
  {
    key: "TD",
    value: "Chad",
  },
  {
    key: "GG",
    value: "Channel Islands and Guernsey",
  },
  {
    key: "CL",
    value: "Chile",
  },
  {
    key: "CN",
    value: "China",
  },
  {
    key: "CX",
    value: "Christmas Island",
  },
  {
    key: "CC",
    value: "Cocos (Keeling) Islands",
  },
  {
    key: "CO",
    value: "Colombia",
  },
  {
    key: "KM",
    value: "Comoros",
  },
  {
    key: "CG",
    value: "Congo",
  },
  {
    key: "CD",
    value: "Congo, The Democratic Republic of The",
  },
  {
    key: "CK",
    value: "Cook Islands",
  },
  {
    key: "CR",
    value: "Costa Rica",
  },
  {
    key: "HR",
    value: "Croatia",
  },
  {
    key: "CU",
    value: "Cuba",
  },
  {
    key: "CY",
    value: "Cyprus",
  },
  {
    key: "CZ",
    value: "Czech Republic",
  },
  {
    key: "DK",
    value: "Denmark",
  },
  {
    key: "DJ",
    value: "Djibouti",
  },
  {
    key: "DM",
    value: "Dominica",
  },
  {
    key: "DO",
    value: "Dominican Republic",
  },
  {
    key: "",
    value: "Dronning Maud Land",
  },
  {
    key: "EC",
    value: "Ecuador",
  },
  {
    key: "EG",
    value: "Egypt",
  },
  {
    key: "SV",
    value: "El Salvador",
  },
  {
    key: "GQ",
    value: "Equatorial Guinea",
  },
  {
    key: "ER",
    value: "Eritrea",
  },
  {
    key: "EE",
    value: "Estonia",
  },
  {
    key: "ET",
    value: "Ethiopia",
  },
  {
    key: "FK",
    value: "Falkland Islands (Malvinas)",
  },
  {
    key: "FO",
    value: "Faroe Islands",
  },
  {
    key: "FJ",
    value: "Fiji",
  },
  {
    key: "FI",
    value: "Finland",
  },
  {
    key: "FR",
    value: "France",
  },
  {
    key: "FRA",
    value: "French Guyana",
  },
  {
    key: "PF",
    value: "French Polynesia",
  },
  {
    key: "TF",
    value: "French Southern Territories",
  },
  {
    key: "GA",
    value: "Gabon",
  },
  {
    key: "GM",
    value: "Gambia",
  },
  {
    key: "GE",
    value: "Georgia",
  },
  {
    key: "DE",
    value: "Germany",
  },
  {
    key: "GI",
    value: "Gibraltar",
  },
  {
    key: "GR",
    value: "Greece",
  },
  {
    key: "GL",
    value: "Greenland",
  },
  {
    key: "GD",
    value: "Grenada",
  },
  {
    key: "GP",
    value: "Guadeloupe",
  },
  {
    key: "GU",
    value: "Guam",
  },
  {
    key: "GT",
    value: "Guatemala",
  },
  {
    key: "GN",
    value: "Guinea",
  },
  {
    key: "GW",
    value: "Guinea-bissau",
  },
  {
    key: "GY",
    value: "Guyana",
  },
  {
    key: "HT",
    value: "Haiti",
  },
  {
    key: "HM",
    value: "Heard Island and Mcdonald Islands",
  },
  {
    key: "VA",
    value: "Holy See (Vatican City State)",
  },
  {
    key: "HN",
    value: "Honduras",
  },
  {
    key: "HK",
    value: "Hong Kong",
  },
  {
    key: "HU",
    value: "Hungary",
  },
  {
    key: "IS",
    value: "Iceland",
  },
  {
    key: "IN",
    value: "India",
  },
  {
    key: "ID",
    value: "Indonesia",
  },
  {
    key: "IR",
    value: "Iran, Islamic Republic of",
  },
  {
    key: "IQ",
    value: "Iraq",
  },
  {
    key: "IE",
    value: "Ireland",
  },
  {
    key: "IM",
    value: "Isle of Man",
  },
  {
    key: "IT",
    value: "Italy",
  },
  {
    key: "CI",
    value: "Ivory Coast (Cote Divoire)",
  },
  {
    key: "JM",
    value: "Jamaica",
  },
  {
    key: "JE",
    value: "Jersey",
  },
  {
    key: "JO",
    value: "Jordan",
  },
  {
    key: "KZ",
    value: "Kazakhstan",
  },
  {
    key: "KE",
    value: "Kenya",
  },
  {
    key: "KI",
    value: "Kiribati",
  },
  {
    key: "KP",
    value: "Korea, Democratic People\\'s Republic of",
  },
  {
    key: "KR",
    value: "Korea, Republic of",
  },
  {
    key: "KW",
    value: "Kuwait",
  },
  {
    key: "KG",
    value: "Kyrgyzstan",
  },
  {
    key: "LA",
    value: "Lao People\\'s Democratic Republic",
  },
  {
    key: "LV",
    value: "Latvia",
  },
  {
    key: "LB",
    value: "Lebanon",
  },
  {
    key: "LS",
    value: "Lesotho",
  },
  {
    key: "LR",
    value: "Liberia",
  },
  {
    key: "LY",
    value: "Libyan Arab Jamahiriya",
  },
  {
    key: "LI",
    value: "Liechtenstein",
  },
  {
    key: "LT",
    value: "Lithuania",
  },
  {
    key: "LU",
    value: "Luxembourg",
  },
  {
    key: "MO",
    value: "Macao",
  },
  {
    key: "MK",
    value: "Macedonia, The Former Yugoslav Republic of",
  },
  {
    key: "MG",
    value: "Madagascar",
  },
  {
    key: "MW",
    value: "Malawi",
  },
  {
    key: "MV",
    value: "Maldives",
  },
  {
    key: "ML",
    value: "Mali",
  },
  {
    key: "MT",
    value: "Malta",
  },
  {
    key: "MH",
    value: "Marshall Islands",
  },
  {
    key: "MQ",
    value: "Martinique",
  },
  {
    key: "MR",
    value: "Mauritania",
  },
  {
    key: "MU",
    value: "Mauritius",
  },
  {
    key: "YT",
    value: "Mayotte",
  },
  {
    key: "MX",
    value: "Mexico",
  },
  {
    key: "FM",
    value: "Micronesia, Federated States of",
  },
  {
    key: "MD",
    value: "Moldova, Republic of",
  },
  {
    key: "MC",
    value: "Monaco",
  },
  {
    key: "MN",
    value: "Mongolia",
  },
  {
    key: "ME",
    value: "Montenegro",
  },
  {
    key: "MS",
    value: "Montserrat",
  },
  {
    key: "MA",
    value: "Morocco",
  },
  {
    key: "MZ",
    value: "Mozambique",
  },
  {
    key: "MM",
    value: "Myanmar",
  },
  {
    key: "NA",
    value: "Namibia",
  },
  {
    key: "NR",
    value: "Nauru",
  },
  {
    key: "NP",
    value: "Nepal",
  },
  {
    key: "NL",
    value: "Netherlands",
  },
  {
    key: "AN",
    value: "Netherlands Antilles",
  },
  {
    key: "NC",
    value: "New Caledonia",
  },
  {
    key: "NZ",
    value: "New Zealand",
  },
  {
    key: "NI",
    value: "Nicaragua",
  },
  {
    key: "NE",
    value: "Niger",
  },
  {
    key: "NG",
    value: "Nigeria",
  },
  {
    key: "NU",
    value: "Niue",
  },
  {
    key: "NF",
    value: "Norfolk Island",
  },
  {
    key: "MP",
    value: "Northern Mariana Islands",
  },
  {
    key: "NO",
    value: "Norway",
  },
  {
    key: "OM",
    value: "Oman",
  },
  {
    key: "PK",
    value: "Pakistan",
  },
  {
    key: "PW",
    value: "Palau",
  },
  {
    key: "PS",
    value: "Palestinian Territory, Occupied",
  },
  {
    key: "PA",
    value: "Panama",
  },
  {
    key: "",
    value: "Panama Canal Zone",
  },
  {
    key: "PG",
    value: "Papua New Guinea",
  },
  {
    key: "PY",
    value: "Paraguay",
  },
  {
    key: "PE",
    value: "Peru",
  },
  {
    key: "PH",
    value: "Philippines",
  },
  {
    key: "PN",
    value: "Pitcairn",
  },
  {
    key: "PL",
    value: "Poland",
  },
  {
    key: "PT",
    value: "Portugal",
  },
  {
    key: "PR",
    value: "Puerto Rico",
  },
  {
    key: "QA",
    value: "Qatar",
  },
  {
    key: "RE",
    value: "Reunion",
  },
  {
    key: "RO",
    value: "Romania",
  },
  {
    key: "RU",
    value: "Russian Federation",
  },
  {
    key: "RW",
    value: "Rwanda",
  },
  {
    key: "SH",
    value: "Saint Helena",
  },
  {
    key: "KN",
    value: "Saint Kitts and Nevis",
  },
  {
    key: "LC",
    value: "Saint Lucia",
  },
  {
    key: "PM",
    value: "Saint Pierre and Miquelon",
  },
  {
    key: "VC",
    value: "Saint Vincent and The Grenadines",
  },
  {
    key: "WS",
    value: "Samoa",
  },
  {
    key: "SM",
    value: "San Marino",
  },
  {
    key: "ST",
    value: "Sao Tome and Principe",
  },
  {
    key: "SA",
    value: "Saudi Arabia",
  },
  {
    key: "SN",
    value: "Senegal",
  },
  {
    key: "RS",
    value: "Serbia",
  },
  {
    key: "SC",
    value: "Seychelles",
  },
  {
    key: "SL",
    value: "Sierra Leone",
  },
  {
    key: "SK",
    value: "Slovakia",
  },
  {
    key: "SI",
    value: "Slovenia",
  },
  {
    key: "SB",
    value: "Solomon Islands",
  },
  {
    key: "SO",
    value: "Somalia",
  },
  {
    key: "ZA",
    value: "South Africa",
  },
  {
    key: "GS",
    value: "South Georgia and The South Sandwich Islands",
  },
  {
    key: "ES",
    value: "Spain",
  },
  {
    key: "LK",
    value: "Sri Lanka",
  },
  {
    key: "",
    value: "Stateless",
  },
  {
    key: "SD",
    value: "Sudan",
  },
  {
    key: "SR",
    value: "Suriname",
  },
  {
    key: "SJ",
    value: "Svalbard and Jan Mayen",
  },
  {
    key: "SZ",
    value: "Swaziland",
  },
  {
    key: "SE",
    value: "Sweden",
  },
  {
    key: "CH",
    value: "Switzerland",
  },
  {
    key: "SY",
    value: "Syrian Arab Republic",
  },
  {
    key: "TW",
    value: "Taiwan, Province of China",
  },
  {
    key: "TJ",
    value: "Tajikistan",
  },
  {
    key: "TZ",
    value: "Tanzania, United Republic of",
  },
  {
    key: "TH",
    value: "Thailand",
  },
  {
    key: "TL",
    value: "Timor-leste",
  },
  {
    key: "TG",
    value: "Togo",
  },
  {
    key: "TK",
    value: "Tokelau",
  },
  {
    key: "TO",
    value: "Tonga",
  },
  {
    key: "TT",
    value: "Trinidad and Tobago",
  },
  {
    key: "TN",
    value: "Tunisia",
  },
  {
    key: "TR",
    value: "Turkey",
  },
  {
    key: "TM",
    value: "Turkmenistan",
  },
  {
    key: "TC",
    value: "Turks and Caicos Islands",
  },
  {
    key: "TV",
    value: "Tuvalu",
  },
  {
    key: "UG",
    value: "Uganda",
  },
  {
    key: "UA",
    value: "Ukraine",
  },
  {
    key: "AE",
    value: "United Arab Emirates",
  },
  {
    key: "UM",
    value: "United States Minor Outlying Islands",
  },
  {
    key: "UY",
    value: "Uruguay",
  },
  {
    key: "UZ",
    value: "Uzbekistan",
  },
  {
    key: "VU",
    value: "Vanuatu",
  },
  {
    key: "VE",
    value: "Venezuela",
  },
  {
    key: "VN",
    value: "Viet Nam",
  },
  {
    key: "VG",
    value: "Virgin Islands, British",
  },
  {
    key: "VI",
    value: "Virgin Islands, U.S.",
  },
  {
    key: "",
    value: "Wake Island",
  },
  {
    key: "WF",
    value: "Wallis and Futuna",
  },
  {
    key: "EH",
    value: "Western Sahara",
  },
  {
    key: "YE",
    value: "Yemen",
  },
  {
    key: "ZM",
    value: "Zambia",
  },
  {
    key: "ZW",
    value: "Zimbabwe",
  },
];

export const LIST_COUNTRIES_CODE = [
  {
    name: "Singapore",
    value: "+65",
    code: "SG",
  },
  {
    name: "Malaysia",
    value: "+60",
    code: "MY",
  },
  {
    name: "Afghanistan",
    value: "+93",
    code: "AF",
  },
  {
    name: "Albania",
    value: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    value: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    value: "+1 684",
    code: "AS",
  },
  {
    name: "Andorra",
    value: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    value: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    value: "+1 264",
    code: "AI",
  },
  {
    name: "Antigua and Barbuda",
    value: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    value: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    value: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    value: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    value: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    value: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    value: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    value: "+1 242",
    code: "BS",
  },
  {
    name: "Bahrain",
    value: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    value: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    value: "+1 246",
    code: "BB",
  },
  {
    name: "Belarus",
    value: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    value: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    value: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    value: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    value: "+1 441",
    code: "BM",
  },
  {
    name: "Bhutan",
    value: "+975",
    code: "BT",
  },
  {
    name: "Bosnia and Herzegovina",
    value: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    value: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    value: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    value: "+246",
    code: "IO",
  },
  {
    name: "Bulgaria",
    value: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    value: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    value: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    value: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    value: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    value: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    value: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    value: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    value: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    value: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    value: "+56",
    code: "CL",
  },
  {
    name: "China",
    value: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    value: "+61",
    code: "CX",
  },
  {
    name: "Colombia",
    value: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    value: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    value: "+242",
    code: "CG",
  },
  {
    name: "Cook Islands",
    value: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    value: "+506",
    code: "CR",
  },
  {
    name: "Croatia",
    value: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    value: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    value: "+537",
    code: "CY",
  },
  {
    name: "Czech Republic",
    value: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    value: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    value: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    value: "+1 767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    value: "+1 849",
    code: "DO",
  },
  {
    name: "Ecuador",
    value: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    value: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    value: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    value: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    value: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    value: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    value: "+251",
    code: "ET",
  },
  {
    name: "Faroe Islands",
    value: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    value: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    value: "+358",
    code: "FI",
  },
  {
    name: "France",
    value: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    value: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    value: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    value: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    value: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    value: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    value: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    value: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    value: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    value: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    value: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    value: "+1 473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    value: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    value: "+1 671",
    code: "GU",
  },
  {
    name: "Guatemala",
    value: "+502",
    code: "GT",
  },
  {
    name: "Guinea",
    value: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    value: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    value: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    value: "+509",
    code: "HT",
  },
  {
    name: "Honduras",
    value: "+504",
    code: "HN",
  },
  {
    name: "Hungary",
    value: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    value: "+354",
    code: "IS",
  },
  {
    name: "India",
    value: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    value: "+62",
    code: "ID",
  },
  {
    name: "Iraq",
    value: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    value: "+353",
    code: "IE",
  },
  {
    name: "Israel",
    value: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    value: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    value: "+1 876",
    code: "JM",
  },
  {
    name: "Japan",
    value: "+81",
    code: "JP",
  },
  {
    name: "Jordan",
    value: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    value: "+7 7",
    code: "KZ",
  },
  {
    name: "Kenya",
    value: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    value: "+686",
    code: "KI",
  },
  {
    name: "Kuwait",
    value: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    value: "+996",
    code: "KG",
  },
  {
    name: "Latvia",
    value: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    value: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    value: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    value: "+231",
    code: "LR",
  },
  {
    name: "Liechtenstein",
    value: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    value: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    value: "+352",
    code: "LU",
  },
  {
    name: "Madagascar",
    value: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    value: "+265",
    code: "MW",
  },
  {
    name: "Maldives",
    value: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    value: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    value: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    value: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    value: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    value: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    value: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    value: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    value: "+52",
    code: "MX",
  },
  {
    name: "Monaco",
    value: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    value: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    value: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    value: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    value: "+212",
    code: "MA",
  },
  {
    name: "Myanmar",
    value: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    value: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    value: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    value: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    value: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    value: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    value: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    value: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    value: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    value: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    value: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    value: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    value: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    value: "+1 670",
    code: "MP",
  },
  {
    name: "Norway",
    value: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    value: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    value: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    value: "+680",
    code: "PW",
  },
  {
    name: "Panama",
    value: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    value: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    value: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    value: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    value: "+63",
    code: "PH",
  },
  {
    name: "Poland",
    value: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    value: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    value: "+1 939",
    code: "PR",
  },
  {
    name: "Qatar",
    value: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    value: "+40",
    code: "RO",
  },
  {
    name: "Rwanda",
    value: "+250",
    code: "RW",
  },
  {
    name: "Samoa",
    value: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    value: "+378",
    code: "SM",
  },
  {
    name: "Saudi Arabia",
    value: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    value: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    value: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    value: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    value: "+232",
    code: "SL",
  },
  {
    name: "Slovakia",
    value: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    value: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    value: "+677",
    code: "SB",
  },
  {
    name: "South Africa",
    value: "+27",
    code: "ZA",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    value: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    value: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    value: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    value: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    value: "+597",
    code: "SR",
  },
  {
    name: "Swaziland",
    value: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    value: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    value: "+41",
    code: "CH",
  },
  {
    name: "Tajikistan",
    value: "+992",
    code: "TJ",
  },
  {
    name: "Thailand",
    value: "+66",
    code: "TH",
  },
  {
    name: "Togo",
    value: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    value: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    value: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    value: "+1 868",
    code: "TT",
  },
  {
    name: "Tunisia",
    value: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    value: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    value: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    value: "+1 649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    value: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    value: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    value: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    value: "+971",
    code: "AE",
  },
  {
    name: "United Kingdom",
    value: "+44",
    code: "GB",
  },
  {
    name: "United States",
    value: "+1",
    code: "US",
  },
  {
    name: "Uruguay",
    value: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    value: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    value: "+678",
    code: "VU",
  },
  {
    name: "Wallis and Futuna",
    value: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    value: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    value: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    value: "+263",
    code: "ZW",
  },
  {
    name: "land Islands",
    value: "",
    code: "AX",
  },
  {
    name: "Antarctica",
    value: null,
    code: "AQ",
  },
  {
    name: "Bolivia, Plurinational State of",
    value: "+591",
    code: "BO",
  },
  {
    name: "Brunei Darussalam",
    value: "+673",
    code: "BN",
  },
  {
    name: "Cocos (Keeling) Islands",
    value: "+61",
    code: "CC",
  },
  {
    name: "Congo, The Democratic Republic of the",
    value: "+243",
    code: "CD",
  },
  {
    name: "Cote d'Ivoire",
    value: "+225",
    code: "CI",
  },
  {
    name: "Falkland Islands (Malvinas)",
    value: "+500",
    code: "FK",
  },
  {
    name: "Guernsey",
    value: "+44",
    code: "GG",
  },
  {
    name: "Holy See (Vatican City State)",
    value: "+379",
    code: "VA",
  },
  {
    name: "Hong Kong",
    value: "+852",
    code: "HK",
  },
  {
    name: "Iran, Islamic Republic of",
    value: "+98",
    code: "IR",
  },
  {
    name: "Isle of Man",
    value: "+44",
    code: "IM",
  },
  {
    name: "Jersey",
    value: "+44",
    code: "JE",
  },
  {
    name: "Korea, Democratic People's Republic of",
    value: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of",
    value: "+82",
    code: "KR",
  },
  {
    name: "Lao People's Democratic Republic",
    value: "+856",
    code: "LA",
  },
  {
    name: "Libyan Arab Jamahiriya",
    value: "+218",
    code: "LY",
  },
  {
    name: "Macao",
    value: "+853",
    code: "MO",
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    value: "+389",
    code: "MK",
  },
  {
    name: "Micronesia, Federated States of",
    value: "+691",
    code: "FM",
  },
  {
    name: "Moldova, Republic of",
    value: "+373",
    code: "MD",
  },
  {
    name: "Mozambique",
    value: "+258",
    code: "MZ",
  },
  {
    name: "Palestinian Territory, Occupied",
    value: "+970",
    code: "PS",
  },
  {
    name: "Pitcairn",
    value: "+872",
    code: "PN",
  },
  {
    name: "Réunion",
    value: "+262",
    code: "RE",
  },
  {
    name: "Russia",
    value: "+7",
    code: "RU",
  },
  {
    name: "Saint Barthélemy",
    value: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    value: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    value: "+1 869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    value: "+1 758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    value: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    value: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    value: "+1 784",
    code: "VC",
  },
  {
    name: "Sao Tome and Principe",
    value: "+239",
    code: "ST",
  },
  {
    name: "Somalia",
    value: "+252",
    code: "SO",
  },
  {
    name: "Svalbard and Jan Mayen",
    value: "+47",
    code: "SJ",
  },
  {
    name: "Syrian Arab Republic",
    value: "+963",
    code: "SY",
  },
  {
    name: "Taiwan, Province of China",
    value: "+886",
    code: "TW",
  },
  {
    name: "Tanzania, United Republic of",
    value: "+255",
    code: "TZ",
  },
  {
    name: "Timor-Leste",
    value: "+670",
    code: "TL",
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    value: "+58",
    code: "VE",
  },
  {
    name: "Viet Nam",
    value: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    value: "+1 284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    value: "+1 340",
    code: "VI",
  },
];
