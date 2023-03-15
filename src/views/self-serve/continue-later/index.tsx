// import modules
import { Button, Dialog } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";

// import constants
import { LIST_ROUTER, NEXT, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./TransactionAndCardAcceptanceType.scss";

// import types

//import icon
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import { Link } from "react-router-dom";

// render UI
const ContinueLater: React.FC<any> = () => {
  const {
    LIST_STEP: {
      transaction_and_card_acceptance_type: {
        text,
        section: { which_service_are_you_applying_for },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  // const dispatch = useDispatch();
  // const [key, setKey] = useState<number>(0);
  // const history = useHistory();
  // const [isOpen, ] = useState<boolean>(true);

  return (
    <Dialog isOpen={true}>
      <Box>
        <Typography>You are leaving this application</Typography>
        <Typography>Save your progress and continue later?</Typography>
      </Box>
      <Box>
        <Button variant="contained">Yes, save application</Button>
        <Button component="a">Leave anyway</Button>
      </Box>
    </Dialog>
  );
};
export default ContinueLater;
