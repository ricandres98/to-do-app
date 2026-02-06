import React from "react";
import styles from "./layout.module.css"

export default function AboutLayout ({ children } : { children: React.ReactNode}) {
    return <div className={styles["about-layout"]}>{children}</div>;
}