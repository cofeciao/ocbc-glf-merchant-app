import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// import images
import IconCheckbox from "@/assets/images/Checkbox.png";
import IconCheckboxed from "@/assets/images/Checkboxed.png";

import { SELF_SERVE_PAGE } from "@/utils/constants";
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";

// types
interface IPdf {
  cashlessPaymentsMethods: any;
  companyAndContactInformationStep: any;
  transactionAndCardAcceptanceTypeStep: any;
  businessDetailsStep: any;
  productsAndServicesStep: any;
  reviewAndSubmitStep: any;
}

// styles
Font.register({
  family: "OpenSans",
  fonts: [
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontStyle: "normal",
      fontWeight: 300,
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: 300,
      fontStyle: "italic",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: "normal",
      fontStyle: "normal",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: 600,
      fontStyle: "normal",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: "bold",
      fontStyle: "normal",
    },
    {
      src: '"../fonts/OpenSans-Light.ttf"',
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },

  titleReviewPage: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#363B40",
    textTransform: "uppercase",
  },

  dividerFirst: {
    borderColor: "#E30613",
    borderStyle: "solid",
    borderBottomWidth: 2,
    marginBottom: 10,
    width: 60,
  },

  section: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#363B40",
  },

  title1: {
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#363B40",
    marginTop: 30,
  },

  subTitle: {
    fontWeight: 400,
    fontSize: 12,
    color: "#777E87",
    marginBottom: 4,
    marginTop: 20,
  },

  content: {
    fontWeight: 600,
    fontSize: 10,
    marginBottom: 2,
  },

  groupItem: {
    display: "flex",
    flexDirection: "row",
  },

  item: {
    flex: 1,
  },

  rule: {
    marginTop: 10,
  },

  divider: {
    borderColor: "#E2E7EC",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },

  labelCheckbox: {
    flex: 3,
  },

  images: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

const PDF = ({
  cashlessPaymentsMethods,
  companyAndContactInformationStep,
  transactionAndCardAcceptanceTypeStep,
  businessDetailsStep,
  productsAndServicesStep,
  reviewAndSubmitStep,
}: IPdf) => {
  const {
    LABEL_POINT_OF_SALES_TERMINAL,
    LABEL_ECOMMERCE,
    LABEL_TYPE_OF_PRODUCT_AND_SERVICE,
    LABEL_ORDER_FULFILMENT,
    LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION,
    LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST,
    LABEL_PRODUCT_DELIVERED_FROM,
    LABEL_PRODUCT_DELIVERY,
    LABEL_SGD,
    LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY,
    LABEL_DURATION,
    LABEL_DELIVERY_TIME_TO_CUSTOMERS,

    LABEL_CASHLESS_PAYMENT_METHOD,
    LABEL_COMPANY_REGISTRATION,
    LABEL_TRANSACTION_AND_CARD_ACCEPTANCE_TYPE,
    LABEL_BUSINESS_DETAILS,
    LABEL_PRODUCTS_AND_SERVICES,
    LABEL_SERVICE,
    LABEL_MODE,
    LABEL_CONTACT_DETAILS,
    LABEL_UNIQUE_ENTITY_NUMBER,
    LABEL_REGISTERED_ENTITY_NAME,
    LABEL_COMPANY_TYPE,
    LABEL_SALUTATION,
    LABEL_NAME,
    LABEL_DESIGNATION,
    LABEL_EMAIL,
    LABEL_CONTACT_NUMBER,
    LABEL_PAYMENT_OPTIONS_INCLUDES_MASTERCARD_AND_VISA,
    LIST_CHECKBOX_AGREE_POLICY,
    LIST_STEP: {
      reviewAndSubmit: { text },
    },
  } = SELF_SERVE_PAGE;

  const renderSection = (title: string) => {
    return (
      <>
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  console.log(productsAndServicesStep);
  console.log(productsAndServicesStep&&productsAndServicesStep.optionSelected);


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.dividerFirst}></View>
          <Text style={styles.titleReviewPage}>{text}</Text>
        </View>

        {/* {Section Cashless Payment Method} */}
        <View style={styles.section}>
          {renderSection(LABEL_CASHLESS_PAYMENT_METHOD)}
          <Text style={styles.subTitle}>{LABEL_MODE}</Text>
          {cashlessPaymentsMethods &&
            cashlessPaymentsMethods.map((item: any, index: number) => (
              <Text key={index} style={styles.content}>
                {item.label ? `${item.label}` : "-"}
              </Text>
            ))}
        </View>

        {/* Section Company registration */}
        <View style={styles.section}>
          {renderSection(LABEL_COMPANY_REGISTRATION)}
          <View style={styles.groupItem}>
            <View style={styles.item}>
              <Text style={styles.subTitle}>
                {LABEL_REGISTERED_ENTITY_NAME}
              </Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.registeredEntityName}
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.subTitle}>{LABEL_COMPANY_TYPE}</Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.companyType}
              </Text>
            </View>
          </View>

          <Text style={styles.subTitle}>{LABEL_UNIQUE_ENTITY_NUMBER}</Text>
          <Text style={styles.content}>
            {companyAndContactInformationStep &&
              companyAndContactInformationStep.uniqueEntityNumber}
          </Text>

          <Text style={styles.title1}>{LABEL_CONTACT_DETAILS}</Text>

          <Text style={styles.subTitle}>{LABEL_SALUTATION}</Text>
          <Text style={styles.content}>
            {companyAndContactInformationStep &&
              companyAndContactInformationStep.salutation}
          </Text>

          <View style={styles.groupItem}>
            <View style={styles.item}>
              <Text style={styles.subTitle}>{LABEL_NAME}</Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.name}
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.subTitle}>{LABEL_DESIGNATION}</Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.designation}
              </Text>
            </View>
          </View>

          <View style={styles.groupItem}>
            <View style={styles.item}>
              <Text style={styles.subTitle}>{LABEL_EMAIL}</Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.email}
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.subTitle}>{LABEL_CONTACT_NUMBER}</Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.areaCode}
              </Text>
              <Text style={styles.content}>
                {companyAndContactInformationStep &&
                  companyAndContactInformationStep.contactNumber}
              </Text>
            </View>
          </View>
        </View>

        {/* Section Transaction and card acceptance type  */}
        <View style={styles.section}>
          {renderSection(LABEL_TRANSACTION_AND_CARD_ACCEPTANCE_TYPE)}
          {transactionAndCardAcceptanceTypeStep &&
            transactionAndCardAcceptanceTypeStep.map((item: any) => {
              return (
                <View style={styles.groupItem}>
                  <View style={styles.item}>
                    <Text style={styles.subTitle}>{LABEL_SERVICE}</Text>
                    <Text style={styles.content}>{item.label}</Text>
                  </View>
                  <View style={styles.item}>
                    <Text style={styles.subTitle}>
                      {LABEL_PAYMENT_OPTIONS_INCLUDES_MASTERCARD_AND_VISA}
                    </Text>
                    <View style={styles.groupItem}>
                      <View style={styles.item}>
                        {item.expandedListCheckbox.listCheckbox.map(
                          (item: ICheckBox) => {
                            if (item.checked) {
                              return (
                                <>
                                  <Text style={styles.content}>
                                    {item.label}
                                  </Text>
                                </>
                              );
                            }
                          }
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
        </View>

        {/* Section Business details */}
        <View style={styles.section} break>
          {renderSection(LABEL_BUSINESS_DETAILS)}

          <Text style={styles.subTitle}>
            Number of outlets with Point-of-Sales termimals
          </Text>
          <Text style={styles.content}>10</Text>

          <Text style={styles.subTitle}>Business ready to operate</Text>
          <Text style={styles.content}>Yes</Text>

          <Text style={styles.subTitle}>OCBC business account</Text>
          <Text style={styles.content}>Yes</Text>

          <View style={styles.groupItem}>
            <View style={styles.item}>
              <Text style={styles.subTitle}>Existing website</Text>
              <Text style={styles.content}>Yes</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.subTitle}>Website’s URL</Text>
              <Text style={styles.content}>www.abc.com</Text>
            </View>
          </View>

          <Text style={styles.subTitle}>Place order through website</Text>
          <Text style={styles.content}>Yes</Text>

          <Text style={styles.subTitle}>Business offerings</Text>
          <Text style={styles.content}>Products and services</Text>

          <View style={styles.groupItem}>
            <View style={styles.item}>
              <Text style={styles.subTitle}>Available spaces</Text>
              <Text style={styles.content}>Office</Text>
              <Text style={styles.content}>Retail store</Text>
              <Text style={styles.content}>Warehouse</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.subTitle}>
                Card payment available at retail store
              </Text>
              <Text style={styles.content}>Yes</Text>
            </View>
          </View>
        </View>

        {/* Section Products and services */}
        <View style={styles.section} break>
          {renderSection(LABEL_PRODUCTS_AND_SERVICES)}

          <Text style={styles.title1}>{LABEL_POINT_OF_SALES_TERMINAL}</Text>
          
          {productsAndServicesStep && 
            productsAndServicesStep.pointOfSales && 
            productsAndServicesStep.pointOfSales.typeOfProductAndService && (
            <>
              <Text style={styles.subTitle}>{LABEL_TYPE_OF_PRODUCT_AND_SERVICE}</Text>
              <Text style={styles.content}>{productsAndServicesStep && 
                productsAndServicesStep.typeOfProductAndService && 
                productsAndServicesStep.typeOfProductAndService.pointOfSales &&
                productsAndServicesStep.typeOfProductAndService.pointOfSales.typeOfProductAndService}</Text>
            </>
          )}

          {productsAndServicesStep && 
            productsAndServicesStep.pointOfSales && 
            productsAndServicesStep.pointOfSales.orderFulfilment && (
            <>
              <Text style={styles.subTitle}>{LABEL_ORDER_FULFILMENT}</Text>
              <Text style={styles.content}>{productsAndServicesStep && 
                productsAndServicesStep.typeOfProductAndService && 
                productsAndServicesStep.typeOfProductAndService.pointOfSales &&
                productsAndServicesStep.typeOfProductAndService.pointOfSales.orderFulfilment}</Text>
            </>
          )}

          <View style={styles.groupItem}>
            {productsAndServicesStep && 
              productsAndServicesStep.pointOfSales && 
              productsAndServicesStep.pointOfSales.duration && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_DURATION}</Text>
                  <Text style={styles.content}>{productsAndServicesStep && productsAndServicesStep.pointOfSales &&
                    productsAndServicesStep.pointOfSales.duration.charAt(0).toUpperCase() +
                    productsAndServicesStep.pointOfSales.duration.slice(1).replace(/-/g, " ")}
                  </Text>
                </View>
              )}
              {productsAndServicesStep && 
              productsAndServicesStep.pointOfSales && 
              productsAndServicesStep.pointOfSales.percentageOfProductsNotFulfilledImmediately && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}</Text>
                  <Text style={styles.content}>{`${productsAndServicesStep && 
                    productsAndServicesStep.pointOfSales && 
                    productsAndServicesStep.pointOfSales.percentageOfProductsNotFulfilledImmediately}%`}</Text>
                </View>
              )}
          </View>

          <View style={styles.groupItem}>
            {productsAndServicesStep && 
              productsAndServicesStep.pointOfSales && 
              productsAndServicesStep.pointOfSales.averageAmountPerCreditCardTransaction && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}</Text>
                  <Text style={styles.content}>{`${LABEL_SGD} ${productsAndServicesStep && 
                    productsAndServicesStep.pointOfSales && 
                    productsAndServicesStep.pointOfSales.averageAmountPerCreditCardTransaction}`}</Text>
                </View>
              )}
              {productsAndServicesStep && 
              productsAndServicesStep.pointOfSales && 
              productsAndServicesStep.pointOfSales.annualCreditCardSalesForecast && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}</Text>
                  <Text style={styles.content}>{`${LABEL_SGD} ${productsAndServicesStep && 
                    productsAndServicesStep.pointOfSales &&
                    productsAndServicesStep.pointOfSales.annualCreditCardSalesForecast}`}</Text>
                </View>
              )}
          </View>

          <Text style={styles.title1}>{LABEL_ECOMMERCE}</Text>

          {productsAndServicesStep && 
            productsAndServicesStep.eCommerce && 
            productsAndServicesStep.eCommerce.typeOfProductAndService && (
            <>
              <Text style={styles.subTitle}>{LABEL_TYPE_OF_PRODUCT_AND_SERVICE}</Text>
              <Text style={styles.content}>{productsAndServicesStep && productsAndServicesStep.typeOfProductAndService && 
                productsAndServicesStep.typeOfProductAndService.eCommerce &&
                productsAndServicesStep.typeOfProductAndService.eCommerce.typeOfProductAndService}</Text>
            </>
          )}

          {productsAndServicesStep && 
            productsAndServicesStep.eCommerce && 
            productsAndServicesStep.eCommerce.orderFulfilment && (
            <>
              <Text style={styles.subTitle}>{LABEL_ORDER_FULFILMENT}</Text>
              <Text style={styles.content}>{productsAndServicesStep && 
                productsAndServicesStep.typeOfProductAndService && 
                productsAndServicesStep.typeOfProductAndService.eCommerce &&
                productsAndServicesStep.typeOfProductAndService.eCommerce.orderFulfilment}</Text>
            </>
          )}

          {productsAndServicesStep && 
            productsAndServicesStep.eCommerce && 
            productsAndServicesStep.eCommerce.productDelivery && (
            <>
              <Text style={styles.subTitle}>{LABEL_PRODUCT_DELIVERY}</Text>
              <Text style={styles.content}>{productsAndServicesStep && 
                productsAndServicesStep.typeOfProductAndService && 
                productsAndServicesStep.typeOfProductAndService.eCommerce &&
                productsAndServicesStep.typeOfProductAndService.eCommerce.productDelivery}</Text>
            </>
          )}

          <View style={styles.groupItem}>
            {productsAndServicesStep && 
              productsAndServicesStep.eCommerce && 
              productsAndServicesStep.eCommerce.averageAmountPerCreditCardTransaction && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_AVERAGE_AMOUNT_PER_CREDIT_CARD_TRANSACTION}</Text>
                  <Text style={styles.content}>{`${LABEL_SGD} ${productsAndServicesStep && productsAndServicesStep.eCommerce && productsAndServicesStep.eCommerce.averageAmountPerCreditCardTransaction}`}</Text>
                </View>
              )}
              {productsAndServicesStep && 
              productsAndServicesStep.eCommerce && 
              productsAndServicesStep.eCommerce.annualCreditCardSalesForecast && (
                <View style={styles.item} fixed>
                  <Text style={styles.subTitle}>{LABEL_ANNUAL_CREDIT_CARD_SALES_FORECAST}</Text>
                  <Text style={styles.content}>{`${LABEL_SGD} ${productsAndServicesStep && productsAndServicesStep.eCommerce && productsAndServicesStep.eCommerce.annualCreditCardSalesForecast}`}</Text>
                </View>
              )}
          </View>

        </View>

        {/* Section Agree Policy */}
        <View style={[styles.section, styles.rule]}>
          <View style={styles.divider}></View>
          <Text style={styles.subTitle}>
            {LIST_CHECKBOX_AGREE_POLICY.description}
          </Text>

          {reviewAndSubmitStep &&
            reviewAndSubmitStep.map((item: any, index: number) => {
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                  key={index}
                >
                  <Image
                    style={{
                      width: "15px",
                      height: "15px",
                      textAlign: "right",
                      marginRight: 10,
                    }}
                    src={item.checked ? IconCheckboxed : IconCheckbox}
                  />
                  <Text style={[styles.labelCheckbox, styles.content]}>
                    {item.label}
                  </Text>
                </View>
              );
            })}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
