import { vehicleService } from "@/features/api/services/vehicle-service";
import ErrorMessage from "@/shared/ui/ErrorMessage";
import VehicleFilterForm from "@/widgets/vehicle/ui/VehicleFilterForm";

export default async function Home() {
  const { data, ok } = await vehicleService.getMakesForVehicleType();

  if (!ok || !data?.Results) {
    return <ErrorMessage />;
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-lg font-bold mb-12">Find your vehicle!</h1>
      {!ok ? (
        <div>
          <span className="font-bold">Loading...</span>
          <p>
            If the page does not load, please check your internet connection.
          </p>
        </div>
      ) : (
        <VehicleFilterForm makeVehicles={data?.Results} />
      )}
    </div>
  );
}
