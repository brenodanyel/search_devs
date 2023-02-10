import { Divider, Skeleton, Stack } from '@mui/material';

export function UserRepositoriesSkeletons() {
  return (
    <Stack sx={{ gap: '0.5em' }}>
      {
        Array.from({ length: 3 }).map((_, index) => (
          <Stack key={index} sx={{ gap: '0.5em' }}>
            <Stack>
              <Skeleton height="2em" />
              <Skeleton height="4em" />
              <Skeleton height="1em" />
            </Stack>
            <Divider />
          </Stack>
        ))
      }
    </Stack>
  );
}