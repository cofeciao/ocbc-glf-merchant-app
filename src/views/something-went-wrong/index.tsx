import classnames from "classnames/bind";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Container } from "@material-ui/core";

// import style
import styles from "./SomethingWentWrong.scss";

// import component lib
import {
  Button,
  Link,Header,Footer
} from '@sectionsg/orc';
import { useSelector } from "react-redux";
import SomethingWentWrongDemo from "../demo/something-went-wrong";

//import contants
import {TITLE_PAGE,LINK_EXTERNAL_PAGE} from "../../utils/constants";

// define function some thing went wrong
const SomethingWentWrong: React.FC = ( { }) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  // get data from redux store
  const formReduxData = useSelector((state: any) => state.form);

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (history.action === 'POP') {
    //   window.location.href = '/';
    // }
  }, [])


  return (
    <>
      <div className={cx('something-went-wrong-page')}>
        <Header
            namePage={TITLE_PAGE}
            backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
          />
        <Container className={cx('container')}>
          <div className={cx('something-went-wrong-page', 'container', 'mt-dt-80', 'mt-mb-30')}>
            <div className={"title-wrapper"}>
              <div className={cx("title-text")}><span>Something went wrong </span></div>
            </div>
            <div className='description'>
              <p className={'mb-dt-40'}>Sorry, we are unable to process your application at the moment. Please try again later.</p>
            </div>
            
            {/* Section button  */}
            <section className={cx('button-wrapper', 'd-flex mt-dt-40')}>
              <div className="d-inline">
                <Button backgroundClass="bgGunmetalBluegrey" onClick={() => history.push('/')}>Start over</Button>
              </div>
              {
                formReduxData.mainApplicant === 'Singpass' && (
                  <p className='ml-dt-20'>
                    Still no luck? Please apply by {' '}
                    <Link 
                      href="/manual-form/information"
                      classHover="linkUnderline"
                      isOnClick
                      onClick={() => console.log('aaaa')}
                    >
                      completing this online form
                    </Link>
                    .
                  </p>
                )
              }
              </section>
              <SomethingWentWrongDemo />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default SomethingWentWrong;