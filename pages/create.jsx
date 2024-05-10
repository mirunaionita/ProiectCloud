import DestinationForm from "@/components/DestinationForm";
import { defaultRecordValues } from "@/utils/constants";
import { createDestination } from "@/utils/destinationsFunctions";
import { useRouter } from "next/router";
import React from "react";

const Create = () => {
  const router = useRouter();
  const entry = defaultRecordValues;

  const onSubmit = async (data) => {
    try {
      const response = await createDestination(data);

      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <DestinationForm entry={entry} onSubmit={onSubmit} />;
};

export default Create;
