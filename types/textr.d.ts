declare module "textr" {
  export = textr;

  declare function textr(options: Options): Transformer;

  type TextrPlugin = (
    value: string,
    options?: object | undefined
  ) => string | void;

  interface Transformer {
    (value: string): string;
    use(plugin: TextrPlugin): Transformer;
  }
}
