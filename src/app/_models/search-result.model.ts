export class SearchResult {
  constructor(
    public id: number,
    public name: string,
    public instructions: string,
    public ingredients: object[]) {
    }
}
