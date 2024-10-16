declare var jQuery: (selector: string) => any;

declare global {
    interface String {
        prependHello(): string;
    }
}

export const name: string;

export interface Testi {
  name: string;
}
// export {};
