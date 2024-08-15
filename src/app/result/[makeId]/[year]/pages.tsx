import { Suspense } from "react";
import VehicleList from "@/Components/VehicleList";

async function fetchVehicles(makeId: string, year: string) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }
  const data = await res.json();
  return data;
}

async function getAllVehicleTypes(){
    const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
    if (!res.ok) {
        throw new Error("Failed to fetch vehicles");
    }
    const data = await res.json();
    return data.Results;
}

export async function generateStaticParams(){
    const vehicleTypes = await getAllVehicleTypes();
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => (currentYear - i).toString());
    
    let params = [];
    for (let vehicleType of vehicleTypes){
        for (let year of years){
            params.push({
                params: {
                    makeId: vehicleType.MakeId,
                    year
                }
            })
        }
    }

    const maxPages =100;
    params = params.slice(0, maxPages);
    return params;
}



export default async function ResultPage ({ params } : { params: { makeId: string, year: string } }) {
    const vehicles = await fetchVehicles(params.makeId, params.year);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Vehicle results</h1>
            <Suspense fallback={<div>Loading the vehicle list...</div>}>
                <VehicleList vehicles={vehicles.Results} />
            </Suspense>
        </div>
    )
}