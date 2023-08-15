import { Button } from "@basj/components/core/button/Button";
import { FC } from "react";

export const ClientCertificate: FC = () => {
  return (
    <div className="client-certificate opacity-0 flex py-6 px-8 justify-between items-center self-stretch rounded-xl border border-shades-gray-20 bg-shades-gray-10">
      <Button icon>Bureau Certificate</Button>
      <Button icon>Sarbi Certificate</Button>
    </div>
  );
};
