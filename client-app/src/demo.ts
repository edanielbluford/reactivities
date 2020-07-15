export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: "blue",
  model: "BMW"
};

const car2: ICar = {
  color: "green",
  model: "Mercedes",
  topSpeed: 90
};

export const cars = [car1, car2];
