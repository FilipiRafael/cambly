import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      normalText: string;
      boldText?: string;
      backgroundColor: string;
      borderColor: string;
      iconsColor: string;
    },
  }
}