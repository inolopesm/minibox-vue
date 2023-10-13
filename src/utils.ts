import * as vue from "vue";

export function inject<T>(key: string): T {
  const value = vue.inject<T>(key);
  if (value === undefined) throw new Error(`${key} not provided`);
  return value;
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value);
}
