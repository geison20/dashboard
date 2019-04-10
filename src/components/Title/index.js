import React from "react";
import { pipe, trim, toUpper } from "ramda";

import TitleStyle from "./Title.style";

const formatTitle = pipe(
  trim,
  toUpper
);

const Title = ({ children }) => (
  <TitleStyle>
    <span className="title">{formatTitle(children)}</span>
  </TitleStyle>
);

export default Title;
