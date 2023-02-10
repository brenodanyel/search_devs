import { api } from '../../../Services/api';
import { userMock } from '../Mocks/User.mock';
import { repositoriesMock } from '../Mocks/Repositories.mock';
import { User, Repository } from '../Types/SearchResult.types';

export function useSearchResult() {
  async function fetchUser(username: string) {
    if (import.meta.env.VITE_USE_MOCKED_DATA === 'true') {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return userMock;
    }

    try {
      const { data } = await api<User>({
        url: `users/${username}`,
        method: 'GET',
      });

      return data;
    }
    catch (e) {
      return null;
    }
  }

  async function fetchRepositories(username: string) {
    if (import.meta.env.VITE_USE_MOCKED_DATA === 'true') {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return repositoriesMock;
    }

    try {
      const { data } = await api<Repository[]>({
        url: `users/${username}/repos`,
        method: 'GET',
      });

      return data;
    }
    catch (e) {
      return [];
    }
  }

  return {
    fetchUser,
    fetchRepositories
  };
}