// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, FormHelperText, Grid, TextField, Typography } from "@material-ui/core";
import { Select, InputNumberMobile } from "@sectionsg/orc";

// import constant
import { LIST_COUNTRIES, SELF_SERVE_PAGE } from "@/utils/constants";

// render UI
const CompanyRegistration: React.FC<any> = (props) => {
  const { cx, getPersonalInformation, personalInformation, key } = props;

  return (
    <Box className={cx("company-registration-wrapper")}>
      <Grid container direction="row" wrap={"nowrap"}>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id={uuidv4()}
                label="Registered entity name"
                variant="filled"
                onBlur={(event) => {
                  getPersonalInformation(
                    "RegisteredEntityName",
                    event.target.value,
                    ""
                  );
                }}
              />
              {personalInformation.RegisteredEntityName === "" && (
                <FormHelperText id="error-text">&#9888; Error</FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id={uuidv4()}
                label="Unique Entity Number (UEN)"
                variant="filled"
                onBlur={(event) => {
                  getPersonalInformation(
                    "UniqueEntityNumber",
                    event.target.value,
                    ""
                  );
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            listValues={LIST_COUNTRIES}
            single
            size="large"
            placeholder="Company type"
            type="country"
            selectKey={key}
            positionLine={3}
            defaultValue={""}
            getValue={(value: any) => {
              // setRenderData(false);
              getPersonalInformation("CompanyType", value.value, value.error);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyRegistration;
