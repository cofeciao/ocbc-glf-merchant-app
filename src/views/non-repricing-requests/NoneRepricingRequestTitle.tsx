// import modules
import React from "react";

// import image
import IconNonRepricingRequests from "../../assets/images/icon-repricing-requests.svg";

// import constants
import { DATA_NONE_REPRICING_REQUEST } from "../../utils/constants";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";

// render UI
const NoneRepricingRequestTitle: React.FC<INoneRepricingRequest.INoneRepricingRequestTitle> = (props) => {
  const { cx, title } = props;
  return (
    <div className={"title-wrapper"}>
      <img src={IconNonRepricingRequests} alt="icon" className={cx("left-image")} />
      <div className={cx("title-text d-flex align-flex-end")}><span>{title}</span></div>
    </div>
  );
};
export default NoneRepricingRequestTitle;
