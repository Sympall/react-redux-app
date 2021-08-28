export interface IStreamData {
  id: number;
  title: string;
  description: string;
}

export type IStoreState = { stream: IStreamData[] };
