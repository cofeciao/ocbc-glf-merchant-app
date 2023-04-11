// import modules
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Loading, Category } from "@sectionsg/orc";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import SectionWrapper from "../SectionWrapper";
import AuthorisedPersonDetails from "./AuthorisedPersonDetails";
import CompanyDetails from "./CompanyDetails";
import RedirectButton from "../RedirectButton";

// import store
import {
  saveDataAcraAndContactInformationStep,
  saveDataAcraDetailStep,
} from "@/store/form";

// import style
import styles from "./CompanyInformation.scss";

// import constants
import { URL_MANUAL_FLOW, STEP_RM, WELCOME_PATH } from "@/utils/constants-rm";

//import types
import { IContactInformation } from "./ContactInformation";
import _ from "lodash";

//import components

const CompanyContactInformation: React.FC<IContactInformation.IProps> = () => {
  const {
    LIST_STEP: {
      acraAndContactInformation: {
        title,
        section: { arcaDetail, contactDetail, authorisedPersonDetails },
      },
      companyAndContactInformation: {
        section: { companyDetails },
      },
    },
  } = STEP_RM;
  const cx = classNames.bind(styles);
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // states
  const [loading, setLoading] = useState(false);

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const acraAndContactInformationStep = useSelector(
    (state: any) => state.form.acraAndContactInformationStep
  );

  // react-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid, isDirty },
    setValue,
    setError,
    getValues,
    control,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      registeredEntityName:
        acraAndContactInformationStep.registeredEntityName || "",
      entityType: acraAndContactInformationStep.entityType || "",
      uniqueEnityNumber: acraAndContactInformationStep.uniqueEnityNumber || "",
      natureOfBusiness: acraAndContactInformationStep.natureOfBusiness || "",
      blockNumber: acraAndContactInformationStep.blockNumber || "",
      streetName: acraAndContactInformationStep.streetName || "",
      unitNumber: acraAndContactInformationStep.unitNumber || "",
      buildingName: acraAndContactInformationStep.buildingName || "",
      postalCode: acraAndContactInformationStep.postalCode || "",
      directors: (_.has(acraAndContactInformationStep, "directors") &&
        _.map(acraAndContactInformationStep.directors, (item, _index) => {
          return {
            name: item.name || "",
            nricNumber: item.nricNumber || "",
          };
        })) || [
        {
          name: "",
          nricNumber: "",
        },
      ],
      contactDetail: {
        contactNumber:
          acraAndContactInformationStep.contactDetail.contactNumber || "",
        contactNumberAreaCode:
          acraAndContactInformationStep.contactDetail.contactNumberAreaCode ||
          "+65",
        salutation:
          acraAndContactInformationStep.contactDetail.salutation || "",
        name: acraAndContactInformationStep.contactDetail.name || "",
        email: acraAndContactInformationStep.contactDetail.email || "",
        designation:
          acraAndContactInformationStep.contactDetail.designation || "",
      },
      authorisedPersonDetails: {
        contactNumber:
          acraAndContactInformationStep.authorisedPersonDetails.contactNumber ||
          "",
        contactNumberAreaCode:
          acraAndContactInformationStep.authorisedPersonDetails
            .contactNumberAreaCode || "+65",
        salutation:
          acraAndContactInformationStep.authorisedPersonDetails.salutation ||
          "",
        name: acraAndContactInformationStep.authorisedPersonDetails.name || "",
        email:
          acraAndContactInformationStep.authorisedPersonDetails.email || "",
        designation:
          acraAndContactInformationStep.authorisedPersonDetails.designation ||
          "",
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "directors", // unique name for your Field Array
  });

  const handleAddDirectors = () => {
    append({ name: "", nricNumber: "" });
  };


  return (
    <React.Fragment>
      {loading && (
        <div className={cx("container-loading")}>
          <div className={cx("content-loading")}>
            <Loading />
          </div>
        </div>
      )}

      <Box className={cx("company-information")}>
        <div className="company-information-category">
          <Category class="title">{title}</Category>
        </div>

        <Box className={cx("mt-dt-40")}>
          <SectionWrapper
            cx={cx}
            className={cx("company-details-container")}
            title={companyDetails.title}
            description={companyDetails.description}
          >
            <CompanyDetails
              cx={cx}
              errors={errors}
              register={register}
              unregister={unregister}
              setValue={setValue}
              setError={setError}
              data={companyDetails}
              dataRedux={acraAndContactInformationStep}
              remove={remove}
              fields={fields}
              handleAddDirectors={handleAddDirectors}
              handleSubmit={handleSubmit}
            />
          </SectionWrapper>
        </Box>

        <Box className={cx("mt-dt-40", "mb-dt-56")}>
          <SectionWrapper
            cx={cx}
            className={cx("company-details-")}
            title={contactDetail.title}
            description={contactDetail.description}
          >
            <ContactDetails
              cx={cx}
              errors={errors}
              register={register}
              unregister={unregister}
              setValue={setValue}
              setError={setError}
              data={contactDetail}
              dataRedux={acraAndContactInformationStep}
            />
          </SectionWrapper>
        </Box>

        <Box className={cx("mt-dt-56")}>
          <SectionWrapper
            cx={cx}
            className={cx("company-details-")}
            title={authorisedPersonDetails.title}
            description={authorisedPersonDetails.description}
          >
            <AuthorisedPersonDetails
              cx={cx}
              errors={errors}
              register={register}
              unregister={unregister}
              setValue={setValue}
              setError={setError}
              data={authorisedPersonDetails}
              dataRedux={acraAndContactInformationStep}
            />
          </SectionWrapper>
        </Box>

        {/* {Redirect Button}  */}
        <RedirectButton
          disabledNextButton={!isValid}
          continueLater
          backButton
          variant="next"
          onClickBack={() => {
            history.push(WELCOME_PATH);
          }}
          onClickNext={() => {
            history.push(URL_MANUAL_FLOW.servicesApplied);
            dispatch(
              saveDataAcraAndContactInformationStep({
                ...getValues(),
                contactDetail: getValues().contactDetail,
                authorisedPersonDetails: getValues().authorisedPersonDetails,
              })
            );
          }}
          onClickContinue={() => {
            history.push(WELCOME_PATH);
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default CompanyContactInformation;
