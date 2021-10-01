import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    gray:{
      "900":"",
      "800":"",
      "700":"",
      "600":"",
      "500":"",
      "400":"",
      "300":"",
      "200":"",
      "100":"",
      "50":"",


    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})
