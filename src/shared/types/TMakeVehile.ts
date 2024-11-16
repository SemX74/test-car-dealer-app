export interface TMakeVehile {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: VehicleTypeName;
}

export enum VehicleTypeName {
  PassengerCar = "Passenger Car",
}
