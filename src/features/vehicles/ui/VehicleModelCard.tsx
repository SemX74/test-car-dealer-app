import { TVehicleModel } from "@/shared/types/TVehicleModel";
import { FC } from "react";

interface VehicleModelCardProps {
  vehicleModel: TVehicleModel;
}

const VehicleModelCard: FC<VehicleModelCardProps> = ({ vehicleModel }) => {
  return (
    <div className="flex flex-col w-full p-5 border rounded">
      <span className="text-lg font-bold">{vehicleModel.Make_Name}</span>
      <span className="text-sm">{vehicleModel.Model_Name}</span>
    </div>
  );
};

export default VehicleModelCard;
