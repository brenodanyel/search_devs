import { Unstable_Grid2 as Grid } from '@mui/material';
import { Repository } from '../../Types/SearchResult.types';
import { UserRepository } from './UserRepository';

type UserRepositoriesProps = {
  repositories: Repository[];
};

export function UserRepositories(props: UserRepositoriesProps) {
  const { repositories } = props;

  return (
    <Grid container spacing='1em'>
      {repositories.map((repository) => (
        <Grid xs={12} sm={12} key={repository.id}>
          <UserRepository repository={repository} />
        </Grid>
      ))}
    </Grid>
  );
}
