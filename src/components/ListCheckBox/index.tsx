// import modules
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  // Item,
} from "@material-ui/core";
import { CardCheckbox, Category } from "@sectionsg/orc";
import classnames from "classnames/bind";
import React, { useRef, useEffect, useState } from "react";

// import style
import styles from "./ListCheckBox.scss";

// import types
import { IListCheckBox, ICheckBox } from "./ListCheckBox";

// render UI
const ListCheckbox = (props: IListCheckBox) => {
  const {
    label,
    textError,
    dataCardCheckbox,
    checkboxKey,
    getValue,
    xs,
    sm,
    md,
    lg,
  } = props;
  // const [dataCard, setDataCard] = useState<ICheckBox[]>(dataCardCheckbox);
  const cx = classnames.bind(styles);

  /**
   * Listening for changes from data to update state
   */
  // useEffect(() => {
  //   setDataCard(dataCard);
  // }, [dataCardCheckbox]);

  /**
   * Run after clicking any item checkbox to process data stream
   * @param event
   * @param checked
   */
  const handleCheckBox = (event: any, checked: boolean) => {
    const newData: any = dataCardCheckbox.reduce((acc, item) => {
      const newItem: any = { ...item };
      newItem.checked = false;
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
                <div className={cx("item-checkbox-content")}>
                  {item.label && (
                    <span className={cx("item-checkbox-content--title")}>
                      {item.label}
                    </span>
                  )}
                  {item.description && (
                    <p className={cx("item-checkbox-content--description")}>
                      {item.description}
                    </p>
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
