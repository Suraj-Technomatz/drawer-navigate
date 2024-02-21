import { godsName } from "./constant";
export * from "./constant";

export function getGodsNames() {
  const names = [];
  godsName.map((godName) => names.push(godName.name));
  return names;
}

export const BASE_URL =
  "https://2e8a-2401-4900-1ca2-85bd-b500-1134-67a7-f20f.ngrok-free.app";
