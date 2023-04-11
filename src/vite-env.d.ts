/// <reference types="vite/client" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare const __API__: string;
declare const __API_KEY__: string;
declare const __PROJECT__: "jest" | "frontend";
