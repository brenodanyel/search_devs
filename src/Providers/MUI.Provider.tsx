import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8C19D2',
    },
    secondary: {
      main: '#0069CA',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        fullWidth: true,
        sx: {
          height: '100%',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
  }
});

type MuiProviderProps = {
  children: React.ReactNode;
};

export function MUIProvider(props: MuiProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
