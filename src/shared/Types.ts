export interface IStreamData {
  id: string;
  title: string;
  description: string;
}

export type IStoreState = { stream: IStreamData[] };
