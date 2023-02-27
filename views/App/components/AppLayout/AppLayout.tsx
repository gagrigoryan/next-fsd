import React from "react";
import styles from "./AppLayout.module.scss";
import { ILayout } from "@/shared/types";
import { Header } from "@/widgets/Header";

const AppLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  );
};

export default AppLayout;
