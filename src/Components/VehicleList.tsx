'use client'

type Vehicle = {
    Model_ID: string;
    Make_Name: string;
    Model_Name: string;
}

const VehicleList = ({vehicles} : {vehicles: Vehicle[]}) => {
    console.log(vehicles)
  return (
    
    <ul className="space-y-2">
        { vehicles.map((vehicle) => (
            <li key={vehicle.Model_ID} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold">{vehicle.Make_Name}</h2>
                        <p className="text-lg">{vehicle.Model_Name}</p>
                    </div>
                </div>
            </ li>
        ))}
    </ul>
  )
}

export default VehicleList