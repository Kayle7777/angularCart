export class Item {
  constructor(name?: string, description?: string, price?: number, inCart?: boolean, quantity?: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inCart = inCart;
    this.quantity = quantity;
  }
  public name: string;
  public description: string;
  public price: number;
  public inCart: boolean;
  public quantity: number;
  private bought: boolean;
}
