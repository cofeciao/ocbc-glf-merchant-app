// import modules
import IconDone from "@/assets/images/icon-checked.svg";
import React from "react";

// import types
import { IHome } from "./Home";
import { Typography } from "@material-ui/core";

// render UI
const HomeThingsToTakeNoteOf: React.FC<IHome.IHomeThingsToTakeNoteOf> = (
  props
) => {
  const { cx, listItem, title } = props;

  return (
    <section className={cx("home-things-to-take-note-section")}>
      {/* {Title} */}
      <Typography component={"div"} className="section-title">
        {title}
      </Typography>

      {/* {List item} */}
      {listItem.map((item: string, index: number) => {
        return (
          <div key={index} className={cx("things-to-take-note-item")}>
            <img src={IconDone} alt="icon" className={cx("left-image")} />
            <p className={cx("text-content")}>{item}</p>
          </div>
        );
      })}
    </section>
  );
};
export default HomeThingsToTakeNoteOf;
