import { createMuiTheme } from '@material-ui/core/styles';

const purpleColor = "#3D1B7C"
export default createMuiTheme({
  palette:{
    common:{
      purple :`${purpleColor}`
    },
    primary:{
      main: `${purpleColor}`
    },
    typography:{
      h6:{
        fontWeight: 400
      }
    }

  }
})
