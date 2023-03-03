// import modules
import { Button } from "@sectionsg/orc";
import React, { ChangeEvent, useState } from "react";
import { Box, Divider, Grid, TextField } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

// import style
import styles from "./Login.scss";

// import icons
import { ERROR_ICON } from "@/utils/constants";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useForm } from "react-hook-form";

// render UI
const LoginForm = (props: any) => {
  // Props
  const {} = props;

  const cx = classnames.bind(styles);
  const history = useHistory();

  // States
  const [key, setKey] = useState<number>(0);

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (event: any) => {
    event.preventDefault();
    let yourUserNameDefault = "user";
    let yourPasswordDefault ="user";
    const { username, password } = getValues();
    
    if (username !== yourUserNameDefault || password !== yourPasswordDefault) {
      setError("username", { type: 'custom', message: 'Incorrect username. Try again.' });
      setError("password", { type: 'custom', message: 'Incorrect password. Try again.' });
    } else {
      history.push('/rm/welcome');
    }
  };
  
  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        buttonType="button"
        disabled={!isValid || !isDirty}
      >
        <div>
          Login
          <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </div>
      </Button>
    );
  };

  return (
    <React.Fragment>
      <Box className={cx("login-form")}>
        <form onSubmit={handleLogin}>
          <Grid container spacing={6} className={cx("form-login")} direction="column">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={cx("title-login")}>Log in</div>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TextField
                fullWidth
                id={uuidv4()}
                error={errors.password && true}
                label="Your username"
                variant="filled"
                {...register("username", {
                  required: true,
                  onChange(event: ChangeEvent<HTMLInputElement>) {
                    setValue('username', event.target.value);
                    clearErrors("username");
                  },
                })}
                helperText={
                  errors.username &&
                  `${ERROR_ICON} ${errors.username.message}`
                }
              />
            </Grid>
            {/* <Grid item lg={4} md={6} sm={6} xs={12}></Grid> */}
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TextField
                fullWidth
                id={uuidv4()}
                error={errors.password && true}
                label="Your password"
                variant="filled"
                {...register("password", {
                  required: true,
                  onChange(event: ChangeEvent<HTMLInputElement>) {
                    setValue('password', event.target.value);
                    clearErrors("password");
                  },
                })}
                helperText={
                  errors.password &&
                  `${ERROR_ICON} ${errors.password.message}`
                }
              />
            </Grid>
            {/* <Grid item lg={4} md={6} sm={6} xs={12}></Grid> */}
          </Grid>
          <Divider />
          {/* Section button */}
          <section
            className={cx("button-wrapper btn-login", "d-flex justify-end")}
          >
            <div>
              <div className="ml-dt-30 d-inline">{renderButton()}</div>
            </div>
          </section>
        </form>
      </Box>

    </React.Fragment>
  );
};
export default LoginForm;
