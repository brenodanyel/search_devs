import { Button, Link, Stack, TextField, Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../Components/Logo';

type HeaderProps = {
  search: string;
  setSearch(value: string): void;
  onSearch(): void;
};

export function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const { search, setSearch, onSearch } = props;

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(`/${search}`);
    onSearch();
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <Stack
        sx={{
          flexDirection: {
            xs: 'column', sm: 'row'
          },
          gap: '0.5em 2.5em',
        }}
      >
        <Link href="/" underline='none'>
          <Logo variant="small" />
        </Link>
        <Grid container spacing="0.5em" sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Grid xs={12} sm>
            <TextField
              label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid xs={12} sm="auto" sx={{ justifyContent: "center", display: 'flex' }}>
            <Button type="submit">Search</Button>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
}