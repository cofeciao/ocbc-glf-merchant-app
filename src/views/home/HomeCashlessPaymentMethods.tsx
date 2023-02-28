// import modules
import ListCheckBox from "@/components/ListCheckBox";
import React from "react";
import { useDispatch } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";

// import types
import { IHome } from "./Home";
import { Typography } from "@material-ui/core";

// render UI
const HomeCashlessPaymentMethods: React.FC<
  IHome.IHomeCashlessPaymentMethods
> = (props) => {
  const {
    title,
    description,
    errorMessage,
    dataCardCheckbox,
    cx,
    checkboxKey,
  } = props;
  const dispatch = useDispatch();

  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataListCheckbox(data));
  };

  return (
    <section className={cx("home-cashless-payment-methods-section")}>
      {/* {Title} */}
      <Typography component={"div"} className="section-title">
        {title}
      </Typography>

      {/* {Description} */}
      <Typography component={"div"} className="section-description">
        {description}
      </Typography>

      {/* {List Checkbox} */}
      <ListCheckBox
        label=""
        textError={errorMessage}
        dataCardCheckbox={dataCardCheckbox}
        lg={4}
        md={4}
        sm={6}
        xs={12}
        checkboxKey={checkboxKey}
        getValue={getDataFromListCheckbox}
      />
    </section>
  );
};
export default HomeCashlessPaymentMethods;