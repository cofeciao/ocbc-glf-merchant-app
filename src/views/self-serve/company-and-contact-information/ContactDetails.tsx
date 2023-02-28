// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, InputAdornment, TextField } from "@material-ui/core";
import { Select } from "@sectionsg/orc";

// import constant
import { LIST_COUNTRIES, LIST_COUNTRIES_CODE } from "@/utils/constants";

// render UI
const ContactDetails: React.FC<any> = (props) => {
  const { cx, getPersonalInformation, personalInformation, key } = props;

  return (
    <Box className={cx("contact-details-wrapper")}>
      <Grid container>
        <Grid item xs={3}>
          <Select
            listValues={LIST_COUNTRIES}
            single
            size="large"
            placeholder="Salutation"
            type="country"
            selectKey={key}
            positionLine={3}
            defaultValue={""}
            getValue={(value: any) => {
              // setRenderData(false);
              getPersonalInformation("Salutation", value.value, value.error);
            }}
          />
        </Grid>
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
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id={uuidv4()}
                  label="Email"
                  variant="filled"
                  onBlur={(event) => {
                    getPersonalInformation("Email", event.target.value, "");
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id={uuidv4()}
                  label="Designation"
                  variant="filled"
                  onBlur={(event) => {
                    getPersonalInformation(
                      "Designation",
                      event.target.value,
                      ""
                    );
                  }}
                />
              </Grid>

              {/* {Input Phone Number} */}
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  key={key}
                  fullWidth
                  name="numberformat"
                  className={cx("formatted-numberphone-input")}
                  label="Contact number"
                  InputProps={{
                    startAdornment: (
                      <Box className={cx("formatted-numberphone-select")}>
                        <Select
                          listValues={LIST_COUNTRIES_CODE}
                          single
                          size="large"
                          placeholder="Company type"
                          type="country"
                          selectKey={key}
                          positionLine={3}
                          defaultValue={LIST_COUNTRIES_CODE[0].value}
                          getValue={(value: any) => {
                            // setRenderData(false);
                            getPersonalInformation(
                              "CompanyType",
                              value.value,
                              value.error
                            );
                          }}
                        />
                      </Box>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactDetails;
