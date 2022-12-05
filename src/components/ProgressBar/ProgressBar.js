/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const wrapperStyles = {
    small: {
        height: "8px",
        borderRadius: "4px",
    },
    medium: {
        height: "12px",
        borderRadius: "4px",
    },
    large: {
        height: "24px",
        borderRadius: "8px",
    },
};

const ProgressBar = ({ value, size }) => {
    return (
        <div
            style={{
                width: "370px",
                background: COLORS.transparentGray15,
                boxShadow: "inset 0px 2px 4px rgba(128, 128, 128, 0.35)",
                overflow: "hidden",
                padding: size === "large" ? "4px" : "0",
                ...wrapperStyles[size],
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "4px",
                }}
            >
                <div
                    style={{
                        background: COLORS.primary,
                        width: `${value}%`,
                        height: "100%",
                        borderRadius: "4px 0px 0px 4px",
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
