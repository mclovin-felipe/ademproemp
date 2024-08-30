"use client";

import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  router.push("/pages/home");

  return <></>;
};
export default Page;
