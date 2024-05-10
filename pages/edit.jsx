import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultRecordValues } from "@/utils/constants";
import { getDestination as getDestination, updateDestination as updateDestination } from "@/utils/destinationsFunctions";
import Spinner from "@/components/Spinner";
import DestinationForm from "@/components/DestinationForm";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(defaultRecordValues);

  const handleGetDestination = async (id) => {
    try {
        const response = await getDestination(id);

        if (response) {
            setEntry(response);
            setIsLoading(false);
        }
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }

  const onSubmit = async (data) => {
    try {
        const response = await updateDestination(data);

        if (response) {
            router.push("/");
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
        router.push("/");
    }

    handleGetDestination(id);
  }, []);

  if (isLoading) return <Spinner />;

  return <DestinationForm entry={entry} onSubmit={onSubmit} />;
};

export default Edit;
