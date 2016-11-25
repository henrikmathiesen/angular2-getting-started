export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    readonly x: number; // testing TypeScript 2 feature readonly, with tsc compiler 2+ in package.json and VS Code instructed to intepret with that version (by setting.json in .vscode folder)
}