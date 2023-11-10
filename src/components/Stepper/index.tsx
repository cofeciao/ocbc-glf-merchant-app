// import modules
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import _ from "lodash";

// import styles
import styles from "./Stepper.scss";

// import types
import { IDataStep, IStepper } from "./Stepper";

// import components
import MuiStepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

const Stepper = (props: IStepper) => {
  const { getSteps, getStepContent, pathStep } = props;
  const mediaQuery = window.matchMedia("(max-width: 1279px)");

  // steps
  const steps = getSteps();
  const activeStep = steps.findIndex((item: IDataStep) => item.id === pathStep);

  // classnames
  const cx = classNames.bind(styles);

  // states
  const [completed, setCompleted] = useState([]);
  const [isMobile, setIsMobile] = useState<boolean>(mediaQuery.matches);

  /**
   * Detect mobile version
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Set active for steps before the current step
   */
  useEffect(() => {
    const newCompleted: any = [];
    for (let i = 0; i <= activeStep; i++) {
      newCompleted[i] = true;
    }
    setCompleted(newCompleted);
  }, [activeStep]);

  return (
    <div className={cx(`stepper-wrapper ${isMobile && "mobile-version"}`)}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <MuiStepper
            nonLinear
            orientation={isMobile ? "horizontal" : "vertical"}
            activeStep={activeStep}
          >
            {steps.map((item: IDataStep, index: number) => {
              return (
                <Step active={completed[index]} key={item.text}>
                  <StepButton disabled>{item.text}</StepButton>
                </Step>
              );
            })}
          </MuiStepper>
        </Grid>

        <Grid item xs={12} lg={9}>
          {getStepContent()}
        </Grid>
      </Grid>
    </div>
  );
};
export default Stepper;
