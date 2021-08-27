export interface IObjData {
  id: string;
  title: string;
  description: string;
}

export type IStoreState = { stream: IObjData[] };
