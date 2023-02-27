import React from "react";
import { IMedicalRecord } from "@/entities/MedicalRecord";
import { MedicalRecordList } from "@/features/MedicalRecordList";

const medicalRecordList: IMedicalRecord[] = [
  {
    id: "1",
    title: "Hepatitis C virus antibody test (ELISA)",
    size: "3.2MB",
  },
  {
    id: "2",
    title: "Hepatitis C virus",
    size: "4.2MB",
  },
  {
    id: "3",
    title: "Hepatitis C virus antibody (Liza)",
    size: "2MB",
  },
];

const AppPage: React.FC = () => {
  return (
    <div>
      <MedicalRecordList medicalRecordList={medicalRecordList} />
    </div>
  );
};

export default AppPage;
