import { Divider, Link, Stack, Typography } from '@mui/material';
import { Repository } from '../../Types/SearchResult.types';
import StarIcon from '@mui/icons-material/StarBorder';

type UserRepositoryProps = {
  repository: Repository,
};

export function UserRepository(props: UserRepositoryProps) {
  const { repository } = props;

  function getPassedDays() {
    const lastUpdate = new Date(repository.pushed_at);
    const today = new Date();

    const diffTime = today.getTime() - lastUpdate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' }).format(-diffDays, 'day');;
  }

  return (
    <Stack
      sx={{
        gap: '0.25em'
      }}
    >
      <Stack>
        <Link
          variant="h6"
          color="inherit"
          underline="hover"
          href={repository.html_url}
          target="_blank"
        >
          {repository.name}
        </Link>
        {repository.description && <Typography variant="body2">{repository.description}</Typography>}
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: 'center',
          gap: '0.5em',
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: 'center',
            gap: '0.25em',
          }}
        >
          <StarIcon fontSize='small' />
          <Typography fontSize="0.8em">{repository.stargazers_count}</Typography>
        </Stack>
        <Typography>•</Typography>
        <Typography fontSize="0.8em">última atualização: {getPassedDays()}</Typography>
      </Stack>
      <Divider />
    </Stack>
  );
}
