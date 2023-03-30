import classnames from "classnames/bind";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Container, Grid } from "@material-ui/core";

// import style
import styles from "./LaunchConfirmtion.scss";

// import components
import {
  Button,
  Link,
  Header
} from '@sectionsg/orc';
import Footer from "@/components/Footer";

//import contants
import {TITLE_PAGE, LINK_EXTERNAL_PAGE} from "../../utils/constants-rm";

const LaunchConfirmtionPage: React.FC = ( { }) => {
  const cx = classnames.bind(styles);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className={cx('launch-confirmtion-page')}>
        <Header
            namePage={TITLE_PAGE}
            backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
          />
        <Container className={cx('container')}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item lg={7} xs={7} md={12} sm={12}>
                <div className={cx('launch-confirmtion-content', 'container', 'mt-mb-30')}>
                  <div className={"title-wrapper"}>
                    <div className={cx("title-text")}><span>You will launch the company’s application form</span></div>
                  </div>
                  <div className='description'>
                    <p className={'mb-dt-40'}>You may use the next pages onwards to gather information from the company.</p>
                  </div>
                  
                  {/* Section button  */}
                  <section className={cx('button-wrapper', 'd-flex mt-dt-40')}>
                    <div className="d-inline group-submit">
                      <Button backgroundClass="bgGunmetalBluegrey" onClick={() => history.push('/')}>Yes, launch the form</Button>
                      <Link to='/'>Back</Link>
                    </div>
                  </section>
                </div>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default LaunchConfirmtionPage;