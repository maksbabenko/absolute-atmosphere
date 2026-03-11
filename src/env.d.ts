/// <reference path="../.astro/types.d.ts" />

declare global {
  namespace JSX {
    interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
  }
}

export {};
