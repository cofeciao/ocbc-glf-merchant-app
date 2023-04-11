// import modules
import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IProductsAndServices } from "./ProductsAndServices";
import UploadImage from "@/views/rm/UploadImage";
import GroupRadio from "@/components/GroupRadio";
import _ from "lodash";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

const RefundPolicy: React.FC<IProductsAndServices.IRefundPolicySection> = (
  props
) => {
  const { cx, data, variant, setValue, dataRedux } = props;
  const {
    LIST_RADIO_UPLOAD_POLICY,
    LIST_RADIO_FULFILMENT_INFORMATION,
    LIST_STEP: { LIST_RADIO_YES_NO },
  } = STEP_RM;
  const { labelDoYouHaveRefundPolicy, labelUploadACopyYourPolicy } = data;

  // states
  const [paramsBusinessService, setParamsBusinessService] = useState<any>({
    quicklyBussiness: LIST_RADIO_FULFILMENT_INFORMATION[0].value,
    averageAmount: "",
    annualCredit: "",
    refundPolicy: _.get(dataRedux, "refundPolicy") || "",
    indicateDuration: "",
    percentage: "",
    uploadPolicy: _.get(dataRedux, "uploadPolicy") || "upload_now",
    image: "",
  });

  /**
   * Set value to react-hook-form
   */
  useEffect(() => {
    if (paramsBusinessService.refundPolicy === "no") {
      setValue(`${variant}.uploadPolicy`, "");
    }
    if (paramsBusinessService.refundPolicy === "yes") {
      setValue(`${variant}.uploadPolicy`, paramsBusinessService.uploadPolicy);
    }
  }, [paramsBusinessService]);

  return (
    <Box className={cx("refund-policy")}>
      {/* {Description} */}
      <Typography className={cx("sub-section-description")}>
        {labelDoYouHaveRefundPolicy}
      </Typography>

      {/* {GroupRadio} */}
      <GroupRadio
        cx={cx}
        name="refundPolicy"
        value={paramsBusinessService.refundPolicy}
        defaultValue={_.get(dataRedux, `${variant}.refundPolicy`)}
        onChange={(e: any) => {
          setParamsBusinessService({
            ...paramsBusinessService,
            refundPolicy: e.target.value,
          });
          setValue(`${variant}.refundPolicy`, e.target.value);
        }}
        listRadio={LIST_RADIO_YES_NO}
      />

      {/* {Upload a copy of your policy} */}
      {paramsBusinessService.refundPolicy === "yes" && (
        <Box className={cx("mt-dt-40")}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {labelUploadACopyYourPolicy}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name={"uploadPolicy"}
            isRow={false}
            value={paramsBusinessService.uploadPolicy}
            defaultValue={_.get(dataRedux, "uploadPolicy")}
            listRadio={LIST_RADIO_UPLOAD_POLICY}
            onChange={(e: any) => {
              setParamsBusinessService({
                ...paramsBusinessService,
                uploadPolicy: e.target.value,
              });
              setValue(`${variant}.uploadPolicy`, e.target.value);
            }}
          />

          {/* {UploadImage} */}
          {paramsBusinessService.uploadPolicy === "upload_now" && (
            <UploadImage
              className={cx("mt-dt-40")}
              value={paramsBusinessService.image}
              onChange={(value) =>
                setParamsBusinessService({
                  ...paramsBusinessService,
                  image: value,
                })
              }
              onRemove={() =>
                setParamsBusinessService({
                  ...paramsBusinessService,
                  image: "",
                })
              }
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default RefundPolicy;
