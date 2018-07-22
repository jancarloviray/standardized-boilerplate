import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    padding: 0;
    margin: 20px !important;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`

/*
import Montserrat from ‘./fonts/Montserrat-Regular.ttf’
injectGlobal`
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
`
*/