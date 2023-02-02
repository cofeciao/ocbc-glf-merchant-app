/***
 * NON-REPRICING HEADER & INTRO
 *    >> child
 *      >> header
 *      >> intro
 */

// import modules
import classnames from "classnames/bind";
import React from "react";
// import constants
import { DATA_NONE_REPRICING_REQUEST } from "../../utils/constants";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";

// import styles
import styles from "./NoneRepricingRequest.scss";

// render UI
const NoneRepricingRequestFullRedemption: React.FC<INoneRepricingRequest.INoneRepricingFormFullRedemptionIntro> = (props) => {
  const { handleDetectHeaderAndIntroText } = props;
  const cx = classnames.bind(styles);

  return (
    <>
      {/* header */}
      <h3 className="bold">
        {DATA_NONE_REPRICING_REQUEST.titleRequest}
      </h3>

      {/* intro */}
      <h3 className="reg">
        {handleDetectHeaderAndIntroText()}
      </h3>
    </>
  );
};
export default NoneRepricingRequestFullRedemption;
