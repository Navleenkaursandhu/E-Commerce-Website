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

export interface Reviews {
  id?: number;
  userId: number;
  productId: number;
  review: string;
}

export class MainDatabase extends Dexie {
  bagItems!: Table<BagItem>;
  user!: Table<User>;
  loginSession!: Table<LoginSession>;
  order!: Table<Order>
  reviews!: Table<Reviews>

  constructor() {
    super('myDatabase');
    this.version(6).stores({
      bagItems: '++id',
      user: '++id,email',
      loginSession: '++id',
      order: '++id,userId',
      review: '++id,productId'
    });
  }
}

export const db = new MainDatabase();
(window as any).db = db
