import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  body {
    padding: 0;
    font-family: Roboto, sans-serif;
    font-weight: 300;
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