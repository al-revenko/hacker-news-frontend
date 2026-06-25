export function isClientSide(): boolean {
  return typeof window !== "undefined";
}

export function dependOnSide<CT, ST>(client: CT, server: ST): CT | ST {
  return isClientSide() ? client : server;
}
