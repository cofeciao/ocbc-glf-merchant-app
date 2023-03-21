// import modules
import { Category } from "@sectionsg/orc";
import React from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import SectionWrapper from "../SectionWrapper";
import CompanyRegistration from "./CompanyRegistration";
import ContactDetails from "./ContactDetails";
import { saveDataCompanyAndContactInformationStep } from "@/store/form";
import { useSelector } from "react-redux";

// import constants
import {
  LIST_COUNTRIES_CODE,
  LIST_ROUTER,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import style
import styles from "./CompanyAndContactInformation.scss";

// import types
// import {ICompanyAndContactInformation} from "./CompanyAndContactInformation"

//import icon
import RedirectButton from "../RedirectButton";
import _ from "lodash";

// render UI
const CompanyAndContactInformation: React.FC = () => {
  const {
    LIST_STEP: {
      companyAndContactInformation: {
        text,
        section: { companyRegistration, contactDetails },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const dataCompanyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  const {
    register,
    formState: { errors, isValid },
    setValue,
    getValues,
    setError,
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      contactNumber: dataCompanyAndContactInformationStep.contactNumber,
      registeredEntityName:
        dataCompanyAndContactInformationStep.registeredEntityName,
      uniqueEntityNumber:
        dataCompanyAndContactInformationStep.uniqueEntityNumber,
      companyType: dataCompanyAndContactInformationStep.companyType,
      salutation: dataCompanyAndContactInformationStep.salutation,
      name: dataCompanyAndContactInformationStep.name,
      email: dataCompanyAndContactInformationStep.email,
      designation: dataCompanyAndContactInformationStep.designation,
      areaCode: LIST_COUNTRIES_CODE[0].value,
    },
  });
  // Temporarily put here to debug on staging
  const watchAll = watch();
  console.log("watchAll", watchAll);
  console.log("errors", errors);

  return (
    <Box className={cx("company-and-contact-information-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Company registration} */}
      <SectionWrapper
        cx={cx}
        title={companyRegistration.title}
        description={companyRegistration.description}
      >
        <CompanyRegistration
          cx={cx}
          errors={errors}
          register={register}
          data={companyRegistration}
          dataRedux={dataCompanyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Section Contact details} */}
      <SectionWrapper
        cx={cx}
        title={contactDetails.title}
        description={contactDetails.description}
      >
        <ContactDetails
          cx={cx}
          errors={errors}
          register={register}
          setValue={setValue}
          setError={setError}
          data={contactDetails}
          dataRedux={dataCompanyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Next Button} */}
      <RedirectButton
        disabledNextButton={!isValid}
        variant="next"
        onClickNext={() => {
          history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
          dispatch(saveDataCompanyAndContactInformationStep(getValues()));
        }}
      />
    </Box>
  );
};
export default CompanyAndContactInformation;
