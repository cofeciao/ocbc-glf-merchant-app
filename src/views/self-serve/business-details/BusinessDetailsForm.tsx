// import modules
import React from "react";
import { Box, Typography } from "@material-ui/core";
import SectionWrapper from "../SectionWrapper";
import BusinessInfomation from "./BusinessInfomation";
import WebsiteInformation from "./WebsiteInformation";
import OtherInformation from "./OtherInformation";
import _ from "lodash";

// render UI
const BusinessDetailsForm: React.FC<any> = (props) => {
  const {
    cx,
    data,
    optionSelected,
    register,
    unregister,
    errors,
    setValue,
    dataRedux,
  } = props;
  const { businessInfomation, otherInfomation, websiteInfomation } = data;

  return (
    <Box className={cx("business-details-form-wrapper")}>
      {/* {Section Business Information} */}
      <SectionWrapper cx={cx} title={businessInfomation.title}>
        {/* {Sub-title} */}
        {_.has(businessInfomation, "subTitle") &&
          optionSelected === "point-of-sales-e-commerce" && (
            <Typography className={cx("sub-section-title")}>
              {businessInfomation.subTitle}
            </Typography>
          )}

        {/* {Content} */}
        <BusinessInfomation
          listField={businessInfomation.listField}
          dataRedux={dataRedux}
          optionSelected={optionSelected}
          register={register}
          unregister={unregister}
          errors={errors}
          setValue={setValue}
        />
      </SectionWrapper>

      {/* {Section Website Information} */}
      {websiteInfomation && (
        <SectionWrapper cx={cx} title={websiteInfomation.title}>
          {/* {Sub-title} */}
          {_.has(websiteInfomation, "subTitle") &&
            optionSelected === "point-of-sales-e-commerce" && (
              <Typography className={cx("sub-section-title")}>
                {websiteInfomation.subTitle}
              </Typography>
            )}

          {/* {Content} */}
          <WebsiteInformation
            listField={websiteInfomation.listField}
            optionSelected={optionSelected}
            setValue={setValue}
            register={register}
            unregister={unregister}
            dataRedux={dataRedux}
          />
        </SectionWrapper>
      )}

      {/* {Section Other information} */}
      {otherInfomation && (
        <SectionWrapper cx={cx} title={otherInfomation.title}>
          {/* {Content} */}
          <OtherInformation
            dataRedux={dataRedux}
            sections={otherInfomation.sections}
            setValue={setValue}
          />
        </SectionWrapper>
      )}
    </Box>
  );
};
export default BusinessDetailsForm;
