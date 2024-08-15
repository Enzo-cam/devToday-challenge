'use client'

type Vehicle = {
    Model_ID: string;
    Make_Name: string;
    Model_Name: string;
}

// VehicleList component
// This component will display a list of vehicles passed as props
const VehicleList = ({vehicles} : {vehicles: Vehicle[]}) => {
    console.log(vehicles)
  
    if(!vehicles || vehicles.length === 0) {
        return <div className="text-center text-lg">No vehicles found with the selected criteria</div>
    }
  
    return (
    
    <ul className="space-y-4">
        { vehicles.map((vehicle) => (
            <li key={vehicle.Model_ID} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-950">{vehicle.Make_Name}</h2>
                        <p className="text-lg text-gray-700 mt-1">{vehicle.Model_Name}</p>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-md">
                        <p className=" text-gray-700">Model ID: {vehicle.Model_ID}</p>
                    </div>
                </div>
            </ li>
        ))}
    </ul>
  )
}

export default VehicleList