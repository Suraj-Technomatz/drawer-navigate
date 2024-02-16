import { godsName } from "./constant";
export * from "./constant";

export function getGodsNames() {
  const names = [];
  godsName.map((godName) => names.push(godName.name));
  return names;
}
