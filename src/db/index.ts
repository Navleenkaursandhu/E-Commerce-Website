import Dexie, { Table } from 'dexie';

export interface BagItem {
  id?: number;
  productId: number;
  size: string;
  qty: number;
}

export class MainDatabase extends Dexie {
  bagItems!: Table<BagItem>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      bagItems: '++id',
      // user
      // review
      // bag
      // order history
    });
  }
}

export const db = new MainDatabase(); 
(window as any).db = db
