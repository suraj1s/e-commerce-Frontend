"use client";
import { ArrowLeft } from "@/assets/icons";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BackButton = (props: Props) => {
  const router
   = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-x-[5px]"
    >
      <ArrowLeft className="h-5 w-5 !text-gray-500" />
      <p className="text-sm font-semibold text-gray-500">Back</p>
    </button>
  );
};

export default BackButton;
