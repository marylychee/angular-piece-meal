export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public instructions: string,
    public ingredients: object[]) {
    }
}
