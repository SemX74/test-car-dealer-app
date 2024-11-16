import { TResult } from "@/shared/types";
import { apiRequest } from "../requests/api-request";
import { TMakeVehile } from "@/shared/types/TMakeVehile";
import { TVehicleModel } from "@/shared/types/TVehicleModel";

export const vehicleService = {
  getMakesForVehicleType: async (type = "car") => {
    return await apiRequest().get<TResult<TMakeVehile[]>>(
      `vehicles/GetMakesForVehicleType/${type}?format=json`
    );
  },
  getModelsForMakeIdYear: async ({
    makeId,
    year,
  }: {
    makeId: number | string;
    year: number | string;
  }) => {
    return await apiRequest().get<TResult<TVehicleModel[]>>(
      `vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
  },
};
