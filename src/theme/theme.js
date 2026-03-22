
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import MuiButton from './components/MuiButton';
import MuiCard from './components/MuiCard';
import MuiTextField from './components/MuiTextField';
import MuiOutlinedInput from './components/MuiOutlinedInput';
import MuiCssBaseline from './components/MuiCssBaseline';
import MuiRadio from './components/MuiRadio';
import MuiFormControlLabel from './components/MuiFormControlLabel';
import MuiInputLabel from './components/MuiInputLabel';
import MuiPaper from './components/MuiPaper';


const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
    MuiCard,
    MuiTextField,
    MuiOutlinedInput,
    MuiCssBaseline,
    MuiRadio,
    MuiFormControlLabel,
    MuiInputLabel,
    MuiPaper,
  },
  shape: {
    borderRadius: 12,
  },
});


export default theme;
