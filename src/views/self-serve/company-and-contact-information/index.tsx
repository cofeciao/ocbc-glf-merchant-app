// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { formatNameField, preventSpecialCharacters } from "@/utils/utils";

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

// render UI
const CompanyAndContactInformation: React.FC<any> = () => {
  const {
    list_step: {
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

  // init data personal information
  const [personalInformation, setPersonalInformation] = useState({
    RegisteredEntityName: "",
    UniqueEntityNumber: "",
    CompanyType: "",
    Salutation: "",
    Name: "",
    Designation: "",
    Email: "",
    ContactNumber: "",
  });

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
        }}
        buttonType=""
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  // function get personalInformation attribute
  const getPersonalInformation = (name: string, value: any, error: string) =>
    setPersonalInformation({
      ...personalInformation,
      [name]: value,
      [`error${formatNameField(name)}`]: error !== "",
    });

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
          personalInformation={personalInformation}
          getPersonalInformation={getPersonalInformation}
        />
      </SectionWrapper>

      {/* {Section Contact details} */}
      <SectionWrapper
        cx={cx}
        className={cx("contact-details-")}
        title={contact_details.title}
        description={contact_details.description}
      >
        <ContactDetails cx={cx} />
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