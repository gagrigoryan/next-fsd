import React from "react";
import styles from "./MedicalRecordCard.module.scss";
import { IMedicalRecord } from "@/entities/MedicalRecord/types";

const MedicalRecordCard: React.FC<IMedicalRecord> = ({ title, size }) => {
  return (
    <article className={styles.container}>
      <h3>{title}</h3>
      <p>{size}</p>
    </article>
  );
};

export default MedicalRecordCard;
