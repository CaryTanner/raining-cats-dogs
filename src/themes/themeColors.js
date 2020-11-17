import { createMuiTheme } from '@material-ui/core/styles';


export const themeColors = createMuiTheme({
  palette: {
    
    primary: {
      main: '#404651',
      contrastText: '#fdf9f3'
    },
    secondary: {
        main: '#6ccdf0',
        contrastText: '#404651'
    }
  }
});