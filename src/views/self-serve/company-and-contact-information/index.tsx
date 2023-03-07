// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

// import constants
import { LIST_ROUTER, NEXT, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./CompanyAndContactInformation.scss";

// import types

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SectionWrapper from "../SectionWrapper";
import CompanyRegistration from "./CompanyRegistration";
import ContactDetails from "./ContactDetails";
import { saveDataCompanyAndContactInformationStep } from "@/store/form";
import { useSelector } from "react-redux";

// render UI
const CompanyAndContactInformation: React.FC<any> = () => {
  const {
    LIST_STEP: {
      company_and_contact_information: {
        text,
        section: { company_registration, contact_details },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const companyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    getValues,
    setError,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
    contactNumber: companyAndContactInformationStep.contactNumber || "",
    registeredEntityName: companyAndContactInformationStep.registeredEntityName || "",
    uniqueEntityNumber: companyAndContactInformationStep.uniqueEntityNumber || "",
    companyType: companyAndContactInformationStep.companyType || "",
    salutation: companyAndContactInformationStep.salutation || "",
    name: companyAndContactInformationStep.name || "",
    email: companyAndContactInformationStep.email || "",
    designation: companyAndContactInformationStep.designation || "",
    areaCode: companyAndContactInformationStep.areaCode || ""
    },
  });

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        disabled={!isValid || !isDirty}
        onClick={() => {
          history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
          dispatch(saveDataCompanyAndContactInformationStep(getValues()));
        }}
        buttonType=""
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  return (
    <Box className={cx("company-and-contact-information-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Company registration} */}
      <SectionWrapper
        cx={cx}
        title={company_registration.title}
        description={company_registration.description}
      >
        <CompanyRegistration
          cx={cx}
          errors={errors}
          register={register}
          data={company_registration}
          dataRedux={companyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Section Contact details} */}
      <SectionWrapper
        cx={cx}
        className={cx("contact-details-")}
        title={contact_details.title}
        description={contact_details.description}
      >
        <ContactDetails
          cx={cx}
          errors={errors}
          register={register}
          setValue={setValue}
          setError={setError}
          data={contact_details}
          dataRedux={companyAndContactInformationStep}
        />
      </SectionWrapper>

      {/* {Next Button}  */}
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Box>
          <Box className="ml-dt-30 d-inline">{renderButton()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CompanyAndContactInformation;
