import { css } from "@emotion/core";
import React, { FC } from "react";

export const Button: FC = ({ ...props }) => (
  <button
    css={css`
      padding: 10px 20px;
      border: 1px solid #efefef;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        border-color: #3f3f3f;
      }
    `}
    {...props}
  />
);
