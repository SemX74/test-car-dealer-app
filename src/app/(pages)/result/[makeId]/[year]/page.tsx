import { vehicleService } from "@/features/api/services/vehicle-service";
import { generateYears } from "@/widgets/vehicle/helpers/generate-years";
import VehicleModelList from "@/widgets/vehicle/ui/VehicleModelList";
import { FC, Suspense } from "react";

export async function generateStaticParams() {
  const { data, ok } = await vehicleService.getMakesForVehicleType();

  if (!ok || !data?.Results) {
    return [];
  }
  const years = generateYears(2015);

  return years
    .map((y) =>
      data.Results.map((m) => ({
        params: { makeId: m.MakeId.toString(), year: y.toString() },
      }))
    )
    .flat();
}

interface ResultPageProps {
  params: Promise<{ makeId: string; year: string }>;
}

const ResultPage: FC<ResultPageProps> = async (props) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12">Models list:</h1>
      <Suspense
        fallback={
          <div>
            <span className="font-bold"> Loading list...</span>
          </div>
        }
      >
        <VehicleModelList params={props.params} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
