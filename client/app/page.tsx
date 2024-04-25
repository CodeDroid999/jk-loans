import AllLoans from "@/components/Dashboard/All-loans";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "JK Loan Services",
  description: "Secure your emergency & business loans at 20% interest",
  // other metadata
};

export default function Home() {
  return (
    <>
      <AllLoans />
    </>
  );
}
