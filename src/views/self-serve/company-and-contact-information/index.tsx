// import modules
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { Box } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CompanyRegistration from "./CompanyRegistration";
import ContactDetails from "./ContactDetails";
import { saveDataCompanyAndContactInformationStep } from "@/store/form";
import { useSelector } from "react-redux";
import _ from "lodash";

// import constants
import {
  LIST_COUNTRIES_CODE,
  LIST_ROUTER,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import styles
import styles from "./CompanyAndContactInformation.scss";

// import components
import Category from "@/components/Category";
import RedirectButton from "@/components/RedirectButton";
import SectionWrapper from "../SectionWrapper";

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

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const dataCompanyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  // React-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid },
    setValue,
    getValues,
    setError,
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
      <Category>{text}</Category>

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

      {/* {Redirect Button} */}
      <RedirectButton
        disabledNextButton={!isValid}
        variant="next"
        onClickNext={() => {
          // redirect
          const edit = localStorage.getItem("edit");
          if (edit === "true") {
            localStorage.setItem("edit", "false");
            history.push(LIST_ROUTER.review_and_submit);
          } else {
            history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
          }
          // save to Redux
          dispatch(saveDataCompanyAndContactInformationStep(getValues()));
        }}
      />
    </Box>
  );
};

export default CompanyAndContactInformation;
