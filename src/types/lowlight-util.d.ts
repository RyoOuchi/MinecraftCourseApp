declare module "lowlight/util" {
  const fromHighlight: any;
  export { fromHighlight };
}

declare module "lowlight" {
  export const lowlight: {
    highlight: any;
    highlightAuto: any;
    register: (lang: string, definition: any) => void;
  };
}
