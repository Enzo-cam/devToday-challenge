'use client'

type Vehicle = {
    model_id: string;
    make_name: string;
    model_name: string;
}

const VehicleList = ({vehicles} : {vehicles: Vehicle[]}) => {
  return (
    
    <ul className="space-y-2">
        { vehicles.map((vehicle) => (
            <li key={vehicle.model_id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold">{vehicle.make_name}</h2>
                        <p className="text-lg">{vehicle.model_name}</p>
                    </div>
                </div>
            </ li>
        ))}
    </ul>
  )
}

export default VehicleList