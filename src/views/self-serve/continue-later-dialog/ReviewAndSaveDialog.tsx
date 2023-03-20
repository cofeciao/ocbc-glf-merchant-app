// import modules
import { Button } from "@sectionsg/orc";
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory, Link } from "react-router-dom";
import _ from "lodash";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ContinueLaterDialog.scss";

// import types

// render UI
const ReviewAndSaveDialog: React.FC<any> = (props) => {
  const { dataRedux, onCloseDialog } = props;
  const { email, name, contactNumber } = dataRedux;
  const cx = classnames.bind(styles);
  const {
    LABEL_CONTACT_NUMBER,
    LABEL_NAME,
    LABEL_EMAIL,
    LABEL_CANCEL,
    LABEL_OKAY,
    CONTINUE_LATER_DIALOG: {
      REVIEW_AND_SAVE: { title, description },
    },
  } = SELF_SERVE_PAGE;
  const history = useHistory();

  return (
    <Box className={cx("form-dialog-wrapper")}>
      <Box className={cx("header-dialog-wrapper")}>
        {/* {Title} */}
        <Typography className={cx("title")}>{title}</Typography>

        {/* {Description} */}
        <Typography className={cx("description")}>{description}</Typography>

        {/* {Content} */}
        <Grid container className={cx("mt-dt-40")}>
          {!_.isEmpty(name) && (
            <Grid item xs={12}>
              <Box className={cx("d-flex-column mb-dt-40")}>
                <Box component="span" className={cx("text-item-input")}>
                  {LABEL_NAME}
                </Box>
                <Box component="span" className={cx("text-item-value")}>
                  {name}
                </Box>
              </Box>
            </Grid>
          )}

          <Grid item xs={12} className={cx("n-wrap")}>
            <Grid container className={cx("n-wrap")}>
              {!_.isEmpty(email) && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_EMAIL}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {email}
                    </Box>
                  </Box>
                </Grid>
              )}

              {!_.isEmpty(contactNumber) && (
                <Grid item xs={12} md={6}>
                  <Box className={cx("d-flex-column")}>
                    <Box component="span" className={cx("text-item-input")}>
                      {LABEL_CONTACT_NUMBER}
                    </Box>
                    <Box component="span" className={cx("text-item-value")}>
                      {contactNumber}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* {Button Group} */}
      <Box className={cx("group-button")}>
        {/* {Submit Button} */}
        <Button
          id={cx("yes-button")}
          variant="contained"
          onClick={() => {
            history.push(LIST_ROUTER.acknowledgement_saved);
          }}
        >
          {LABEL_OKAY}
        </Button>

        {/* {Cancel Button} */}
        <Box className={cx("d-inline")}>
          <Link
            to="/"
            onClick={(e: any) => {
              e.preventDefault();
              onCloseDialog(true);
            }}
          >
            {LABEL_CANCEL}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default ReviewAndSaveDialog;
