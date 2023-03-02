// import modules
import {
  InputBase,
  Button,
} from "@sectionsg/orc";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router";

// import images
import IconWelcomeLogin from "../../assets/images/icon-welcome-login.svg"

// import constants
import {
  WElCOME_LOGIN,
} from "../../utils/constants-rm";

// import style
import styles from "./Login.scss";

// import types
import { ILogin } from "./Login";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { formatNameField } from "@/utils/utils";

// render UI
const LoginForm = (props: any) => {
  // Props
  const {} = props;

  const cx = classnames.bind(styles);
  const history = useHistory();

  // States
  const [key, setKey] = useState<number>(0);
  const [loginInformation, setLoginInformation] = useState<ILogin.IInitialValues>({
    username: '',
    password: '',
  })

  /**
   * Function validate section login information
   * @returns {Boolean}
   */
  const validateLoginInformation = () => !loginInformation.username || !loginInformation.password;

    // function getLoginInformation attribute
    const getLoginInformation = (name: string, value: any, error: string) =>
      setLoginInformation({
        ...loginInformation,
        [name]: value,
        [`error${formatNameField(name)}`]: error !== "",
      });
  
  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push("/rm/welcome");
        }}
        buttonType="button"
        disabled={validateLoginInformation()}
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
      <section className={cx("title-login")}>
        <img src={IconWelcomeLogin} alt="icon" className={cx("icon-welcome-login")} />
        <div className='title'>{WElCOME_LOGIN}</div>
      </section>

      <section className={cx("login-form")}>
        <Grid container className={cx("form-submit")}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <div className={cx("title-form")}>Log in</div>
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <InputBase
              label="Your username"
              placeholder=""
              type="text"
              size="large"
              inputKey={key}
              value={loginInformation.username}
              maxLength={70}
              kind="name-nric"
              name="username"
              getValue={(value: any) => {
                getLoginInformation(
                  'username',
                  value.value,
                  value.error
                )
              }}
            />
          </Grid>
          <Grid item lg={2} md={6} sm={6} xs={12}></Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <InputBase
              label="Your password"
              placeholder=""
              type="password"
              size="large"
              inputKey={key}
              value={loginInformation.password}
              maxLength={70}
              kind="password-nric"
              name="password"
              getValue={(value: any) => {
                getLoginInformation(
                  'password',
                  value.value,
                  value.error
                )
              }}
            />
          </Grid>
          <Grid item lg={2} md={6} sm={6} xs={12}></Grid>
        </Grid>
      </section>

      {/* Section button */}
      <section
        className={cx("button-wrapper btn-login", "d-flex justify-end")}
      >
        <div>
          <div className="ml-dt-30 d-inline">{renderButton()}</div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default LoginForm;
