import { AxiosPromise } from 'axios';

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(date: T): AxiosPromise;
}
