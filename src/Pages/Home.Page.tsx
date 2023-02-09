import { Button, Container, TextField, InputAdornment, Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import { Logo } from '../Components/Logo';

export function Home() {
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search');
    navigate(`/search?q=${search}`);
  }

  return (
    <Container maxWidth='xl'>
      <form onSubmit={onSubmit}>
        <Stack
          sx={{
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1em'
          }}
        >
          <Logo variant="medium" />

          <Grid container spacing="0.5em" sx={{ width: { xs: "100%", sm: '80%' } }}>
            <Grid xs={12} sm>
              <TextField
                label="Search"
                name="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} sm="auto">
              <Button type="submit">Search</Button>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </Container >
  );
};;;
