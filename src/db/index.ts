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

export interface LoginSession {
  id?: number;
  userId: number;
  expiryTimestamp: number 
}

export class MainDatabase extends Dexie {
  bagItems!: Table<BagItem>;
  user!: Table<User>;
  loginSession!: Table<LoginSession>;

  constructor() {
    super('myDatabase');
    this.version(3).stores({
      bagItems: '++id',
      user: '++id,email', 
      loginSession: '++id',
      // review
      // bag
      // order history
    });
  }


}

export const db = new MainDatabase();
(window as any).db = db
