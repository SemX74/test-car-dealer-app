"use client";

import Button from "@/shared/ui/common/Button";
import { FC } from "react";
import { TMakeVehile } from "@/shared/types/TMakeVehile";
import { applyFilters } from "../helpers/apply-filters";
import { generateYears } from "../helpers/generate-years";
import Select from "@/shared/ui/common/Select";

interface VehicleFilterFormProps {
  makeVehicles: TMakeVehile[];
}

const years = generateYears(2015);

const VehicleFilterForm: FC<VehicleFilterFormProps> = ({
  makeVehicles = [],
}) => {
  return (
    <form
      className="flex flex-col p-5 border rounded-2xl gap-2.5 max-w-sm w-full"
      action={applyFilters}
    >
      <Select name="makeId">
        {makeVehicles.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </Select>
      <Select name="year">
        {years.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </Select>
      <Button type="submit">Filter</Button>
    </form>
  );
};

export default VehicleFilterForm;
