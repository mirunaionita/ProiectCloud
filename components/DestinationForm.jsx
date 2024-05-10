import { useRouter } from "next/router";
import React, { useState } from "react";

const DestinationForm = (props) => {
  const router = useRouter();
  const { entry, onSubmit } = props;
  const [data, setData] = useState(entry);

  const handleChange = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="p-4">
      <div className="flex flex-col mx-auto max-w-80 border p-4 shadow-sm gap-4 w-full">
        <div className="text-center font-bold text-xl">{entry._id ? 'Update' : 'Add new'} Destination</div>
        <div>
          <label
            htmlFor="Location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            type="Location"
            id="Location"
            value={data.Location}
            onChange={(e) => handleChange("Location", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Location placeholder"
            required
          />
        </div>
        <div>
          <label
            htmlFor="City"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="City"
            id="City"
            value={data.City}
            onChange={(e) => handleChange("City", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City placeholder"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input
            type="Country"
            id="Country"
            value={data.Country}
            onChange={(e) => handleChange("Country", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Country placeholder"
            required
          />
        </div>
        <div>
          <label
            htmlFor="TimePlanned"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Time Planned
          </label>
          <input
            type="TimePlanned"
            id="TimePlanned"
            value={data.TimePlanned}
            onChange={(e) => handleChange("TimePlanned", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Time Planned placeholder"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="Description"
            rows="4"
            value={data.Description}
            onChange={(e) => handleChange("Description", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Facts placeholder"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(data)}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {entry?._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationForm;
