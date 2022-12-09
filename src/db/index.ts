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

export interface Order {
  id?: number;
  userId: number;
  timestamp: number;
  products: {
    productId: number;
    size: string;
    qty: number;
    price: number;
  }[]
}

export class MainDatabase extends Dexie {
  bagItems!: Table<BagItem>;
  user!: Table<User>;
  loginSession!: Table<LoginSession>;
  order!: Table<Order>

  constructor() {
    super('myDatabase');
    this.version(4).stores({
      bagItems: '++id',
      user: '++id,email',
      loginSession: '++id',
      order: '++id',
      // review
    });
  }
}

export const db = new MainDatabase();
(window as any).db = db
