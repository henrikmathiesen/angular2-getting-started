// Import everything and then export it
// Could choose what to import by typing { SomeThing } from './....';
// Other files, like app.routes for example, can import this file instead of the two components seperatly
// We name this file index.ts so the importing file does not have to type the file name (see app.routes.ts)

export * from './product-list.component';
export * from './product-detail.component';