import { Container, Divider, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import { useSearchResult } from './Hooks/useSearchResult';
import { Repository, User } from './Types/SearchResult.types';
import { UserProfile } from './Components/UserProfile';
import { UserProfileSkeleton } from './Components/UserProfileSkeleton';
import toast from 'react-hot-toast';
import { UserRepositories } from './Components/UserRepositories';
import { UserRepositoriesSkeletons } from './Components/UserRepositories/UserRepositoriesSkeleton';

export function SearchResult() {
  const { username } = useParams();
  const { fetchUser, fetchRepositories } = useSearchResult();
  const [search, setSearch] = useState(username || '');

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    onSearch();
  }, []);

  async function onSearch() {
    setIsLoading(true);

    const [userResult, repositoriesResult] = await Promise.allSettled([
      fetchUser(search),
      fetchRepositories(search),
    ]);

    setIsLoading(false);

    if (userResult.status === 'fulfilled') {
      setUser(userResult.value);

      if (!userResult.value) {
        toast.error('Usuário não encontrado');
      }
    }

    if (repositoriesResult.status === 'fulfilled') {
      const repos = repositoriesResult.value.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepositories(repos);
    }
  }

  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          gap: '1.5em',
          padding: '1.5em',
          minHeight: '100vh',
        }}
      >
        <Header
          search={search}
          setSearch={setSearch}
          onSearch={onSearch}
        />
        <Divider />
        {!isLoading && !user
          ? (
            <Stack sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h1">🤔</Typography>
              <Typography variant="h4">User not found!</Typography>
            </Stack>
          )
          : (
            <Grid
              container
              spacing="0.5em"
              sx={{
                flexGrow: '1'
              }}
            >
              <Grid xs={12} md={4}>
                {
                  isLoading
                    ? <UserProfileSkeleton />
                    : user && <UserProfile user={user} />
                }
              </Grid>

              <Grid xs={12} md>
                {
                  isLoading
                    ? <UserRepositoriesSkeletons />
                    : <UserRepositories repositories={repositories} />
                }
              </Grid>
            </Grid>
          )
        }
      </Stack>
    </Container>
  );
}