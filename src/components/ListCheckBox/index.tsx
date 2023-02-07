// import modules
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  Item,
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
  const { label, textError, dataCardCheckbox, checkboxKey, getValue } = props;
  const [dataCard, setDataCard] = useState<ICheckBox[]>(dataCardCheckbox);
  const cx = classnames.bind(styles);
  useEffect(() => {
    setDataCard(dataCard);
    getValue(dataCard);
  }, [dataCard]);

  return (
    <FormGroup className={cx("list-checkbox-wrapper")}>
      {dataCard.map((item: any) => {
        return (
          <Grid item xs={8}>
            {/* <Item> */}
              <FormControlLabel
                key={checkboxKey}
                label={
                  <div className={cx("card-checkbox-content")}>
                    {item.label && (
                      <span className={cx("card-checkbox-content--title")}>
                        {item.label}
                      </span>
                    )}
                    {item.description && (
                      <p className={cx("card-checkbox-content--description")}>
                        {item.description}
                      </p>
                    )}
                  </div>
                }
                onChange={(event: any, checked: boolean) => {
                  const newData: any = dataCard.map((item: any) => {
                    item.checked = false;
                    if (item.value === event.target.value) {
                      item.checked = checked;
                    }
                    return item;
                  });
                  newData.name = event.target.value;
                  setDataCard(newData);
                }}
                checked={item.checked}
                value={item.value}
                control={<Checkbox />}
              />
            {/* </Item> */}
          </Grid>
        );
      })}
    </FormGroup>
  );
};
export default ListCheckbox;
