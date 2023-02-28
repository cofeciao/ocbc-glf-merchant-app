// import modules
import {
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  Box,
} from "@material-ui/core";
import classnames from "classnames/bind";
import React from "react";

// import style
import styles from "./ListCheckBox.scss";

// import types
import { ICheckBox, IListCheckBox } from "./ListCheckBox";
import { isEmpty } from "lodash";

// render UI
const ListCheckbox = (props: IListCheckBox) => {
  const { dataCardCheckbox, getValue, xs, sm, md, lg } = props;
  const cx = classnames.bind(styles);

  /**
   * Run after clicking any item checkboxes to process data stream
   * @param event
   * @param checked
   */
  const handleCheckBox = (event: any, checked: boolean) => {
    const newData: any = dataCardCheckbox.reduce((acc, item) => {
      const newItem: any = { ...item }; // Create a new object to avoid changing the original object

      if (newItem.value === event.target.value) {
        newItem.checked = checked;
      }

      acc.push(newItem);
      return acc;
    }, []);
    newData.name = event.target.value;
    getValue(newData);
  };

  /**
   * Run after clicking any expanded item checkboxes to process data stream
   * @param event
   * @param checked
   */
  const handleExpandedCheckBox = (event: any, checked: boolean) => {
    const newData: any = dataCardCheckbox.reduce((acc, item) => {
      // Create a new object to avoid changing the original object
      const expandedListCheckbox = {
        ...item.expandedListCheckbox,
      };

      const newDataExpandedListCheckbox =
        expandedListCheckbox.listCheckbox.reduce((init: any, checkbox: any) => {
          const newitemExpanded: any = { ...checkbox }; // Create a new object to avoid changing the original object
          if (newitemExpanded.value === event.target.value) {
            newitemExpanded.checked = checked;
          }
          init.push(newitemExpanded);
          return init;
        }, []);

      acc.push({
        ...item,
        expandedListCheckbox: {
          ...item.expandedListCheckbox,
          listCheckbox: newDataExpandedListCheckbox,
        },
      });
      return acc;
    }, []);
    newData.name = event.target.value;
    getValue(newData);
  };

  /**
   * Run to show expanded template inside checkbox item
   * @returns {HTML}
   */
  const renderExpanded = (item: ICheckBox) => {
    return (
      <Grid item xs={12}>
        <Box className={cx("expanded-wrapper")}>
          {/* {Expanded description} */}
          {item.expandedListCheckbox.description && (
            <Typography className={cx("expanded-description")}>
              {item.expandedListCheckbox.description}
            </Typography>
          )}

          {/* {Expanded list checkbox} */}
          {item.expandedListCheckbox.listCheckbox && (
            <Box className={cx("expanded-list-checkbox")}>
              {item.expandedListCheckbox.listCheckbox.map((checkbox, index) => {
                return (
                  <Box key={index}>
                    <Checkbox
                      disabled={checkbox.disabled}
                      {...checkbox}
                      onChange={(event: any, checked: boolean) =>
                        handleExpandedCheckBox(event, checked)
                      }
                    />
                    {checkbox.label}
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Grid>
    );
  };

  return (
    <FormGroup className={cx("list-checkbox-wrapper")}>
      {dataCardCheckbox &&
        dataCardCheckbox.map((item: any, index: number) => {
          return (
            <Box>
              <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg}>
                {/* {Form Control & Checkbox inside} */}
                <FormControlLabel
                  label={
                    <Box className={cx("checkbox-content")}>
                      {item.label && (
                        <Typography component={"span"} className={cx("title")}>
                          {item.label}
                        </Typography>
                      )}
                      {item.description && (
                        <Typography
                          component={"p"}
                          className={cx("description")}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  }
                  onChange={(event: any, checked: boolean) =>
                    handleCheckBox(event, checked)
                  }
                  checked={item.checked}
                  value={item.value}
                  control={<Checkbox />} // Checkbox from Material
                />
              </Grid>
              {/* {Expanded content} */}
              {
                item.checked &&
                  !isEmpty(item.expandedListCheckbox) &&
                  renderExpanded(item) // render expanded after checkbox item is checked
              }
            </Box>
          );
        })}
    </FormGroup>
  );
};
export default ListCheckbox;
