import Loan from "@/ui/pages/Loan";
import MainLayout from "@/ui/templates/MainLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <Loan />
      </MainLayout>
    </div>
  );
};

export default page;
