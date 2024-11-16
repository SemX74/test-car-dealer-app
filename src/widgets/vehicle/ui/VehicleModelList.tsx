import { vehicleService } from "@/features/api/services/vehicle-service";
import VehicleModelCard from "@/features/vehicles/ui/VehicleModelCard";
import ErrorMessage from "@/shared/ui/ErrorMessage";
import { FC } from "react";

interface VehicleModelListProps {
  params: Promise<{ makeId: string; year: string }>;
}

const VehicleModelList: FC<VehicleModelListProps> = async (props) => {
  const params = await props.params;

  const { data, ok } = await vehicleService.getModelsForMakeIdYear({
    makeId: params.makeId,
    year: params.year,
  });

  if (!ok || !data?.Results) {
    return <ErrorMessage />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
      {data?.Results.map((m) => (
        <VehicleModelCard
          key={`${m.Make_ID} - ${m.Model_ID}`}
          vehicleModel={m}
        />
      ))}
    </div>
  );
};

export default VehicleModelList;
