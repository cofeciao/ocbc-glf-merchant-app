import React, { useRef } from "react";
import { 
  Box, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  RadioGroup, 
  Typography, 
  Radio, 
  FormGroup, 
  Checkbox 
} from "@material-ui/core";
import SignatureCanvas from 'react-signature-canvas'

//import components
import SectionWrapper from "../SectionWrapper";
import UploadImage from "../UploadImage";

// constants
import { STEP_RM } from "@/utils/constants-rm";
import { IReviewSubmit } from "./ReviewSubmit";

const Declaration: React.FC<IReviewSubmit.IDeclaration> = (props) => {
  const { cx, dataDeclaration, setDataDeclaration } = props;

  let refSignature: any = useRef({});

  // data
  const { LIST_STEP: {
    declaration: {
      section: {
        reviewTheFollowing, 
        provision,
        signature
      }
    }
  }} = STEP_RM;

  /**
   * render UI
   * @returns {HTML}
   */
  const renderListCheckbox = (title: string, listCheckbox: any[], keyObject: string) => {
    return (
      <Box className={cx("checkbox-wrapper")}>
        <FormControl margin="normal" className={cx("group-checkbox")} component="fieldset">
          <FormLabel component="legend">{title}</FormLabel>
          <FormGroup>
            {listCheckbox.length > 0 && listCheckbox.map((item: any, key: number) => {
              return (
                <FormControlLabel
                  label={item.label}
                  key={key}
                  control={
                    <Checkbox
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple 
                      color="primary"
                      name={item.value} 
                      checked={dataDeclaration[keyObject][item.value]} 
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDataDeclaration({
                          ...dataDeclaration,
                          [keyObject]: {
                            ...dataDeclaration[keyObject],
                            [event.target.name]: event.target.checked
                          }
                        })
                      }} 
                    />
                  }
                />
              )
            })}
          </FormGroup>
        </FormControl>
      </Box>
    )
  }

  /**
   * render UI
   * @returns {HTML}
   */
  const renderListRadio = (title: string, listRadio: any[]) => {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography className={cx("sub-section-description")}>{title}</Typography>
        </FormLabel>
        <RadioGroup 
          row 
          aria-label="gender" 
          name="gender1" 
          value={dataDeclaration.valueRadio} 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDataDeclaration({
              ...dataDeclaration,
              valueRadio: event.target.value
            })
          }}>
          {listRadio.length > 0 && listRadio.map((item: any, index: number) => (
            <FormControlLabel 
              key={index} 
              value={item.value} 
              control={<Radio disableFocusRipple disableRipple disableTouchRipple />} 
              label={item.label} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  const clearSignature = () => {
    refSignature.clear();
    setDataDeclaration({
      ...dataDeclaration,
      signOnDevice: ""
    })
  }

  /**
   * render UI
   * @returns {HTML}
   */
  const renderSignOnDevice = () => {
    return (
      <Box className={cx("sign-on-device")}>
        <Typography 
          className={cx("clear-signature")}
          onClick={clearSignature}
        >
          Clear signature
        </Typography>
        <SignatureCanvas 
          ref={(ref: any) => refSignature = ref}
          penColor='black'
          onEnd={() => {
            setDataDeclaration({
              ...dataDeclaration,
              signOnDevice: refSignature.getTrimmedCanvas().toDataURL('image/png')
            })
          }}
          canvasProps={{
            width: 1050, 
            height: 120, 
            className: 'sigCanvas'
          }} 
        />
      </Box>
    )
    
  }
  
  return (
    <React.Fragment>
      <Box className={cx("review-following")}>
        {renderListCheckbox(reviewTheFollowing.title, reviewTheFollowing.listCheckboxReviewTheFollowing, "reviewTheFolowing")}
      </Box>
      <Box className={cx("ensure-that-you-read")}>
        {renderListCheckbox(provision.title, provision.listCheckboxProvision, "provision")}
      </Box>
      <SectionWrapper cx={cx} title="Signature">
        {renderListRadio(signature.title, signature.listRadio)}

        {dataDeclaration.valueRadio === "sign_on_device" && (
          renderSignOnDevice()
        )}

        {dataDeclaration.valueRadio === "upload" && 
          <UploadImage 
            value={dataDeclaration.uploadFile}
            onChange={(file: any) => setDataDeclaration({
              ...dataDeclaration,
              uploadFile: file
            })} 
            onRemove={() => {
              setDataDeclaration({
                ...dataDeclaration,
                uploadFile: {}
              })
            }}
          />
        }
      </SectionWrapper>
    </React.Fragment>
  )
};

export default Declaration;