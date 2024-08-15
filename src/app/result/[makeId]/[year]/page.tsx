import { Suspense } from "react";
import VehicleList from "@/Components/VehicleList";
import ButtonBack from "@/Components/ButtonBack";
async function fetchVehicles(makeId: string, year: string) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }
  const data = await res.json();
  return data;
}

async function getAllVehicleTypes() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }
  const data = await res.json();
  return data.Results;
}

export async function generateStaticParams() {
  // Generate all possible combinations of makeId and year
  const vehicleTypes = await getAllVehicleTypes();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  // Limit the number of pages to 20
  let params = [];
  for (let vehicleType of vehicleTypes) {
    for (let year of years) {
      params.push({
        makeId: vehicleType.MakeId.toString(),
        year,
      });
    }
  }
  const maxPages = 20;
  // Slice the array to the max number of pages
  params = params.slice(0, maxPages);
  // Return the params
  return params;
}

export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const vehicles = await fetchVehicles(params.makeId, params.year);

  if (
    !vehicles.Results ||
    !Array.isArray(vehicles.Results) ||
    vehicles.Results.length === 0
  ) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-600">
          No vehicles found or invalid data received
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Vehicle results for {params.year}
      </h1>

      <Suspense fallback={<div>Loading the vehicle list...</div>}>
        <VehicleList vehicles={vehicles.Results} />
      </Suspense>

    <ButtonBack />      
    </div>
  );
}
