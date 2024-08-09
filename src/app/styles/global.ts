import { createGlobalStyle } from "styled-components";

import { Breakpoints } from "@/app/styles";

import Colors from "./colors";
import Fonts, { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  html,
  body {
    height: 100%;
    margin-right: calc(-1 * (100vw - 100%));
  }

  body {
    overflow-x: hidden !important;
    padding: 0 !important;
    &#menu-opened {
      overflow: hidden !important;
      @media (min-width: ${Breakpoints.DESKTOP}) {
        overflow: visible !important;
      }
    }
    &[style*="overflow:hidden"],
    &[style*="overflow: hidden"] {
      touch-action: none !important;
      -ms-touch-action: none !important;
    }
  }

  input, button {
    font-family: ${Fonts.GEOLOGICA_REGULAR};
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
  }
  #root {
    flex: 1 1 auto;
  }



  /* clears the ‘X’ input search */
  input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  /* end clears the ‘X’ */

hr{
  background: ${Colors.DIVIDER};
  border: none;
  height: 1px;
  width: 100%;
  margin: 0px;
}

a{
  text-decoration: none;
  color: inherit;
}

.jivo-off jdiv{
opacity: 0;
}
`;
