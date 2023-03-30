import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// import types
import { IRmFlow } from './rm';

const GroupRadio:React.FC<IRmFlow.IGroupRadio> = (props) => {
  // props
  const { 
    cx, 
    name, 
    label, 
    value, 
    onChange, 
    disabled,
    listRadio,
    isRow = true
  } = props;

  return (
    <FormControl component="fieldset" className={cx("group-radio")}>
      <FormLabel component="legend" className={cx("group-radio__label")}>{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} row={isRow} >
        {Array.isArray(listRadio) && listRadio.map((item: IRmFlow.IRadio, index: number) => (
          <FormControlLabel 
            key={index}
            value={item.value} 
            disabled={disabled}
            control={
              <Radio 
                disableFocusRipple
                disableRipple
                disableTouchRipple
                checkedIcon={
                  <CheckCircleIcon />
                }
              />
            } 
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default GroupRadio;
