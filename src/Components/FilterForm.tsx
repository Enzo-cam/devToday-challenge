"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type VehicleType = {
  MakeId: string;
  MakeName: string;
};

const FilterForm = ({ vehicleTypes }: { vehicleTypes: VehicleType[] }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  const handleNext = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">Vehicle Type</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
            <option value="">Select a Vehicle Type</option>
            {vehicleTypes.map((type) => (
                <option className="text-black" key={type.MakeId} value={type.MakeId}>{type.MakeName}</option>
            ))}

        </select>
      </div>

      <div className="mb-4">
            <label className="block mb-2">Model Year</label>
            <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="">Select Model Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedType || !selectedYear}
        className="bg-blue-700 text-white p-2 rounded disabled:bg-gray-400"
        >Next</button>
    </div>
  );
};

export default FilterForm;
