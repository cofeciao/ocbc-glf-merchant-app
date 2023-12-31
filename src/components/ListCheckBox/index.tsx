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
import React, { ChangeEvent } from "react";
import _ from "lodash";
import { isEmpty } from "lodash";

// import style
import styles from "./ListCheckBox.scss";

// import types
import { ICheckBox, IExpandedCheckBox, IListCheckBox } from "./ListCheckBox";

// import images
import IconCheckbox from "@/assets/images/icon-checkbox.svg";
import IconCheckboxBlack from "@/assets/images/icon-checkedbox-black.svg";
import IconCheckboxBlackTransparent from "@/assets/images/icon-checkedbox-transparent.svg";

// render UI
const ListCheckbox = (props: IListCheckBox) => {
  const { dataCardCheckbox, getValue, xs, sm, md, lg } = props;
  const cx = classnames.bind(styles);

  /**
   * Run after clicking any item checkboxes to process data stream
   * @param {ChangeEvent<HTMLInputElement>,} event
   * @param {boolean} checked
   */
  const handleCheckBox = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
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
   * @param {ChangeEvent<HTMLInputElemen>} event
   * @param {boolean} checked
   */
  const handleExpandedCheckBox = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const newData: unknown = dataCardCheckbox.reduce((acc, item) => {
      const expandedListCheckbox: IExpandedCheckBox[] = {
        ...item.expandedListCheckbox,
      };

      const newDataExpandedListCheckbox = _.map(
        expandedListCheckbox,
        (item) => {
          const newReduce = item.listCheckbox.reduce(
            (init: ICheckBox[], checkbox: ICheckBox) => {
              const newitemExpanded: any = { ...checkbox }; // Create a new object to avoid changing the original object
              if (newitemExpanded.value === event.target.value) {
                newitemExpanded.checked = checked;
              }
              init.push(newitemExpanded);
              return init;
            },
            []
          );
          return newReduce;
        }
      );

      acc.push({
        ...item,
        expandedListCheckbox: item.expandedListCheckbox.map(
          (itemExp: IExpandedCheckBox, index: number) => {
            return {
              ...itemExp,
              listCheckbox: newDataExpandedListCheckbox[index],
            };
          }
        ),
      });
      return acc;
    }, []);
    getValue(newData);
  };

  /**
   * Run to show expanded template inside checkbox item
   * @returns {HTML}
   */
  const renderExpanded = (item: IExpandedCheckBox) => {
    return (
      <Grid item xs={12}>
        <Box className={cx("expanded-wrapper")}>
          {/* {Expanded Description} */}
          {item.description && (
            <Typography className={cx("expanded-description")}>
              {item.description}
            </Typography>
          )}

          {/* {Expanded List Checkbox} */}
          {item.listCheckbox && (
            <Box className={cx("expanded-list-checkbox")}>
              {_.map(item.listCheckbox, (checkbox, index) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        disableRipple
                        disableTouchRipple
                        disableFocusRipple
                        value={_.get(checkbox, "value") || ""}
                        checked={_.get(checkbox, "checked") || false}
                        disabled={_.get(checkbox, "disabled") || false}
                        icon={<img src={IconCheckbox} alt="icon checkbox" />}
                        onChange={(event: any, checked: boolean) => {
                          handleExpandedCheckBox(event, checked);
                        }}
                        checkedIcon={
                          checkbox.disabled ? (
                            <img
                              src={IconCheckboxBlackTransparent}
                              alt="checkbox black transparent"
                            />
                          ) : (
                            <img
                              src={IconCheckboxBlack}
                              alt="icon checkedbox black"
                            />
                          )
                        }
                      />
                    }
                    disabled={checkbox.disabled}
                    key={index}
                    label={checkbox.label}
                  />
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
      {_.map(dataCardCheckbox, (item: ICheckBox, index: number) => {
        return (
          <Box key={index}>
            <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg}>
              {/* {Form Control & Checkbox inside} */}
              <Box>
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
                  control={
                    <Checkbox
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      icon={<img src={IconCheckbox} alt="icon checkbox" />}
                      checkedIcon={
                        <img
                          src={IconCheckboxBlack}
                          alt="icon checkedbox black"
                        />
                      }
                    />
                  } // Checkbox from Material
                />
              </Box>
            </Grid>

            <Grid container>
              {/* {Expanded content} */}
              {item.checked &&
                item.expandedListCheckbox &&
                item.expandedListCheckbox.map(
                  (expanded: IExpandedCheckBox, idx: number) => {
                    return (
                      <Grid key={idx} item xs={4}>
                        {
                          !isEmpty(expanded) && renderExpanded(expanded) // render expanded after checkbox item is checked
                        }
                      </Grid>
                    );
                  }
                )}
            </Grid>
          </Box>
        );
      })}
    </FormGroup>
  );
};
export default ListCheckbox;
