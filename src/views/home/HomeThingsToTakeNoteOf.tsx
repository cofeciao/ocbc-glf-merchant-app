// import modules
import { Category } from "@sectionsg/orc";
import IconDone from "../../assets/images/done.svg";
import React from "react";

// import constants
import {
  THINGS_TO_TAKE_NOTE_OF,
  LIST_THINGS_TO_TAKE_NOTE_OF,
} from "../../utils/constants";

// import types
import { IHome } from "./Home";

// render UI
const HomeThingsToTakeNoteOf: React.FC<IHome.IHomeThingsToTakeNoteOf> = (props) => {
  const { cx } = props;

  return (
    <section className={cx("home-things-to-take-note-wrapper")}>
      <div className={cx("col-left")}>
        <Category>{THINGS_TO_TAKE_NOTE_OF}</Category>
      </div>
      <div className={cx("col-right")}>
        {LIST_THINGS_TO_TAKE_NOTE_OF.map((item, index) => {
          return (
            <div key={index} className={cx("things-to-take-note")}>
              <img src={IconDone} alt="icon" className={cx("left-image")} />
              <p className={cx("titles")}>{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default HomeThingsToTakeNoteOf;
