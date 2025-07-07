// declarations.d.ts
declare module '*.png' {
  const value: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}