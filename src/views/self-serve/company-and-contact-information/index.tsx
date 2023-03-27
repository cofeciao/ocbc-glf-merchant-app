// import modules
import { Category } from "@sectionsg/orc";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
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
import RedirectButton from "../RedirectButton";
import _ from "lodash";

// import constants
import {
  LIST_COUNTRIES_CODE,
  LIST_ROUTER,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import styles
import styles from "./CompanyAndContactInformation.scss";

// import types
// import {ICompanyAndContactInformation} from "./CompanyAndContactInformation"

// render UI
const CompanyAndContactInformation: React.FC<any> = forwardRef(({}, ref) => {
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
    unregister,
    formState: { errors, isValid },
    setValue,
    getValues,
    setError
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

   /**
   * handle back to page when click on stepper
   */
   useImperativeHandle(ref, () => ({
    validateForm() {
      if (_.isEmpty(dataCompanyAndContactInformationStep)) {
        return true;
      }
      return history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
    },
  }));

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

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
        className="company-registration-section"
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
          unregister={unregister}
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
});

export default CompanyAndContactInformation;
