import Dexie, { Table } from 'dexie';

export interface BagItem {
  id?: number;
  productId: number;
  size: string;
  qty: number;
}

export interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
}

export class MainDatabase extends Dexie {
  bagItems!: Table<BagItem>;
  user!: Table<User>;

  constructor() {
    super('myDatabase');
    this.version(2).stores({
      bagItems: '++id',
      user: '++id,email', 
      // review
      // bag
      // order history
    });
  }


}

export const db = new MainDatabase();
(window as any).db = db
