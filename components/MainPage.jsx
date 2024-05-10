import { deleteDestination, getDestinations } from "@/utils/destinationsFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDestinations = async () => {
    try {
      const response = await getDestinations();

      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDeleteDestination = async (id) => {
    try {
      const response = await deleteDestination(id);

      if (response?.acknowledged) {
        const newData = data.filter((el) => el._id !== id);

        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDestination = () => {
    router.push("/create");
  }

  const handleCompanion = () => {
    router.push("/chat");
  }

  const handleEditDestination = (id) => {
    router.push(`/edit?id=${id}`);
  }

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <section className="bg-white dark:bg-orange-200">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-purple-600 text-6xl">VoyageVista</h1>
        <p className="w-[1000px] mx-auto text-center mt-4 text-3xl text-purple-400">Plan your travels!</p>
        <div className="p-4 flex flex-wrap gap-4">
          {data?.map((destination) => (
            <div
              key={destination._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-800 dark:border-yellow-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Location: {destination.Location}
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                City: {destination.City}
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Country: {destination.Country}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-white">
              Time Planned: {destination.TimePlanned}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-white">
                Facts: {destination.Description}
              </p>
              <button
                type="button"
                onClick={() => handleEditDestination(destination._id)}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => handleDeleteDestination(destination._id)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
          <button
            type="button"
            onClick={handleAddDestination}
            className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Destination
          </button>
          <button
            type="button"
            onClick={handleCompanion}
            className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Facts
          </button>
		</section>
    
  );
};

export default MainPage;
