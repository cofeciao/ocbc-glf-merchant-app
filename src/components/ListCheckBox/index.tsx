// import modules
import {
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  // Item,
} from "@material-ui/core";
import classnames from "classnames/bind";
import React from "react";

// import style
import styles from "./ListCheckBox.scss";

// import types
import { IListCheckBox } from "./ListCheckBox";

// render UI
const ListCheckbox = (props: IListCheckBox) => {
  const {
    dataCardCheckbox,
    getValue,
    xs,
    sm,
    md,
    lg,
  } = props;
  const cx = classnames.bind(styles);

  /**
   * Run after clicking any item checkbox to process data stream
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

  return (
    <FormGroup className={cx("list-checkbox-wrapper")}>
      {dataCardCheckbox.map((item: any, index: number) => {
        return (
          <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg}>
            {/* {Form Control containing check boxes inside} */}
            <FormControlLabel
              label={
                <div className={cx("checkbox-content")}>
                  {item.label && (
                    <Typography component={"span"} className={cx("title")}>
                      {item.label}
                    </Typography>
                  )}
                  {item.description && (
                    <Typography component={"p"} className={cx("description")}>
                      {item.description}
                    </Typography>
                  )}
                </div>
              }
              onChange={(event: any, checked: boolean) =>
                handleCheckBox(event, checked)
              }
              checked={item.checked}
              value={item.value}
              control={<Checkbox />}
            />
          </Grid>
        );
      })}
    </FormGroup>
  );
};
export default ListCheckbox;
