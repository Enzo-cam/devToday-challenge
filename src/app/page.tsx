import { Suspense } from "react";
import FilterForm from "@/Components/FilterForm";

async function getAllVehicleTypes () {
  const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }
  const data = await res.json();
  return data.Results;
}

export default async function Home() {
  const vehicleTypes = await getAllVehicleTypes();

  return (
    <div className=" mx-auto p-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Car Dealer App - Challenge for developsToday</h1>
      <Suspense fallback={<div>Loading filter form...</div>}>
        <FilterForm vehicleTypes={vehicleTypes} />
      </Suspense>
    </div>
  );
}
