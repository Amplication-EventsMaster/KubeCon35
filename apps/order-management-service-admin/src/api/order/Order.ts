import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  orderItems?: Array<OrderItem>;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
