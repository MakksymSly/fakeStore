export interface Iproducts {
  id: number;
  title: string;
  price: number;
  image?: string;
  configure: IproductConfig;
  quantity: number;
}
export interface IproductConfig {
  company: string;
  storage: string;
  year: number;
  processor: string;
  gpu: string;
  ram: string;
  wireless_communication: string;
}
