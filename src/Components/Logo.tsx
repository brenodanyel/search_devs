import { Stack, Typography } from '@mui/material';

const sizeByVariant = {
  small: '2em',
  medium: '3em',
  large: '4em',
};

type LogoProps = {
  variant: keyof typeof sizeByVariant;
};

export function Logo(props: LogoProps) {
  const {
    variant = 'medium',
  } = props;

  return (
    <Stack sx={{ flexDirection: 'row', gap: '0.5em' }}>
      <Typography variant='h2' color="secondary" fontSize={sizeByVariant[variant]}>Search</Typography>
      <Typography variant="h2" color="primary" fontSize={sizeByVariant[variant]}>d_evs</Typography>
    </Stack>
  );
}