import { Stack, Skeleton, Box } from '@mui/material';

export function UserProfileSkeleton() {
  return (
    <Stack>
      <Stack sx={{ flexDirection: 'row', gap: '0.5em' }}>
        <Box>
          <Skeleton variant='circular' width="3em" height="3em" />
        </Box>
        <Box width="100%">
          <Skeleton width="100%" height="2em" />
          <Skeleton width="100%" height="1em" />
        </Box>
      </Stack>
      <Box width="100%">
        <Skeleton width="100%" height="5em" />
      </Box>
      <Box width="100%">
        <Skeleton width="100%" height="1em" />
        <Skeleton width="100%" height="1em" />
      </Box>
    </Stack>
  );
}