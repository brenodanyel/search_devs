import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const dark = createTheme({
  palette: {
    mode: 'dark',
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
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
});

const light = createTheme({
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
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
});

const themes = {
  dark,
  light,
};

type MuiProviderProps = {
  children: React.ReactNode;
};

const storedTheme = localStorage.getItem('theme') as keyof typeof themes;

export function MUIProvider(props: MuiProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>(storedTheme || 'light');

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      {props.children}

      <Button
        sx={{
          backgroundColor: 'primary.main',
          width: '5em',
          height: '5em',
          overflow: 'hidden',
          borderRadius: '50%',
          position: 'fixed',
          right: 16,
          bottom: 16,
        }}
        onClick={() => setCurrentTheme((t) => t === 'light' ? 'dark' : 'light')}
      >
        {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </ThemeProvider >
  );
}
