import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
  //Global Tokens 
    --color-white:              hsl(240, 27%, 98%);    // #F8F8FB
    --color-black:              hsl(233, 30%, 11%);    // #141625
    --color-purple-gray-200:    hsl(231, 73%, 93%);    // #DFE3FA
    --color-purple-gray-500:    hsl(231, 37%, 63%);    // #7E88C3
    --color-purple-gray-900:    hsl(231, 20%, 61%);    // #888EB0
    --color-purple-500:         hsl(252, 100%, 73%);   // #9277FF
    --color-purple-700:         hsl(252, 94%, 67%);    // #7C5DFA
    --color-purple-dark-500:    hsl(233, 30%, 21%);    // #252945
    --color-purple-dark-700:    hsl(233, 31%, 17%);    // #1E2139
    --color-purple-dark-900:    hsl(228, 29%, 7%);     // #0C0E16
    --color-red-300:            hsl(0, 100%, 80%);     // #ff9797
    --color-red-700:            hsl(0, 80%, 63%);      // #EC5757
    --color-green:              hsl(160,67%,52%);      // #33D69F
    --color-orange:             hsl(34,100%,50%);      // #FF8F00
    --font-family-heading: 'League Spartan', sans-serif;

    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --heading-font-size-largest: 2rem;
    --heading-font-size-large: 1.25rem;
    --heading-font-size-medium: 1rem;
    --heading-font-size-small: 0.75rem;

    --heading-line-height-largest: 2.25rem;
    --heading-line-height-large: 1.375rem;
    --heading-line-height-medium: 1.5rem;
    --heading-line-height-small: 0.9375rem;

    --heading-line-spacing-largest: 1;
    --heading-line-spacing-large: .63;
    --heading-line-spacing-medium: .8;
    --heading-line-spacing-small: .25;
   
    --text-font-size-medium: 0.75rem;
    --text-font-size-small: 0.6875rem;

    --text-line-height-medium:  0.9375rem;
    --text-line-height-small: 1.125rem;

    --text-line-spacing-medium: .25;
    --text-line-spacing-small: .23;

    --spacing-10: .625rem;
    --spacing-15: .9375rem;
    --spacing-20: 1.25rem;
    --spacing-30: 1.875rem;
    --spacing-40: 2.5rem;
    --spacing-80: 5rem;

    --border-radius-large: 1.25rem; // 20px
    --border-radius-medium: .625rem; // 10px
    --border-radius-small: .1875rem; // 3px

    --border-width-thick: 2px;
    --border-width-thin: 1px;

    --timing-function-default: cubic-bezier(0.4, 0, 0.2, 1); 
    --duration-medium: 300ms;

    --scale-hover: 1.03;
    
    --box-shadow-large: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    //Contextual Tokens

    --color-text-default: var(--color-black);
    --color-text-white: var(--color-white);
    
    --color-background-default: var(--color-white);
    --color-background-inverse: var(--color-purple-dark-700);
 
    --color-background-brand: var(--color-purple-700);
    --color-background-brand-light: var(--color-purple-500);

    --color-button-pending: var(--color-orange);
    --color-button-paid: var(--color-green);


    //Component Tokens
    --heading-1-font-size:    var(--heading-font-size-largest);
    --heading-1-line-height:  var(--heading-line-height-largest);
    --heading-1-line-spacing: var(--heading-line-spacing-largest);
    --heading-2-font-size:    var(--heading-font-size-large);
    --heading-2-line-height:  var(--heading-line-height-large);
    --heading-2-line-spacing: var(--heading-line-spacing-large);
    --heading-3-font-size:    var(--heading-font-size-medium);
    --heading-3-line-height:  var(--heading-line-height-medium);
    --heading-3-line-spacing: var(--heading-line-spacing-medium);
    --heading-4-font-size:    var(--heading-font-size-small);
    --heading-4-line-height:  var(--heading-line-height-small);
    --heading-4-line-spacing: var(--heading-line-spacing-small);

    --text-medium-font-size:    var(--text-font-size-medium);
    --text-medium-line-height:  var(--text-line-height-medium);
    --text-medium-line-spacing: var(--text-line-spacing-medium);
    --text-small-font-size:     var(--text-font-size-small);
    --text-small-line-height:   var(--text-line-height-small);
    --text-small-line-spacing:  var(--text-line-spacing-small);

  }

  .heading-1{
    font-size: var(--heading-1-font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--heading-1-line-height);
    word-spacing: var(--heading-1-line-spacing);
    
  }
  .heading-2{
    font-size: var(--heading-2-font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--heading-2-line-height);
    word-spacing: var(--heading-2-line-spacing);
  }
  .heading-3{
    font-size: var(--heading-3-font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--heading-3-line-height);
    word-spacing: var(--heading-3-line-spacing);
  }
  .heading-4{
    font-size: var(--heading-4-font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--heading-4-line-height);
    word-spacing: var(--heading-4-line-spacing);
  }
  .text-medium{
    font-size: var(--text-medium-font-size);
  }
  .text-small{
    font-size: var(--text-small-font-size);
  }
`;
