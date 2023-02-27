import React from "react";
import styles from "./MedicalRecordList.module.scss";
import { IMedicalRecord, MedicalRecordCard } from "@/entities/MedicalRecord";

type MedicalRecordListProps = {
  medicalRecordList: IMedicalRecord[];
};

const MedicalRecordList: React.FC<MedicalRecordListProps> = ({
  medicalRecordList,
}) => {
  return (
    <div className={styles.container}>
      Filters for Medical Records
      <ul className={styles.list}>
        {medicalRecordList.map((medicalRecord) => (
          <MedicalRecordCard key={medicalRecord.id} {...medicalRecord} />
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecordList;
