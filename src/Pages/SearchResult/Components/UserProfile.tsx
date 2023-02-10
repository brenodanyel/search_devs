import { Avatar, Stack, Typography, SvgIcon, Link, Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { User } from '../Types/SearchResult.types';

type ProfileInfoProps = {
  icon: React.ReactNode;
  label: string;
  link?: string;
};

function ProfileInfo(props: ProfileInfoProps) {
  const { icon, label, link } = props;
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: '0.5em',
        alignItems: 'center',
      }}
    >
      {icon}
      {
        link
          ? <Link variant='body2' href={link} color="inherit" target="_blank">{label}</Link>
          : <Typography variant='body2'>{label}</Typography>
      }
    </Stack>
  );
}

type UserProfileProps = {
  user: User;
};

export function UserProfile(props: UserProfileProps) {
  const { user } = props;

  return (
    <Stack sx={{ width: '100%', overflow: 'hidden', gap: '1em' }}>
      <Stack sx={{ gap: '0.5em' }}>
        <Stack sx={{ flexDirection: 'row', gap: '0.5em', alignItems: 'center' }}>
          <Avatar src={user.avatar_url} sx={{ width: '2.5em', height: '2.5em' }} />
          <Stack>
            <Typography variant='h6'>{user.name}</Typography>
            <Typography variant='caption'>@{user.login}</Typography>
          </Stack>
        </Stack>
        <Typography>{user.bio}</Typography>
      </Stack>

      <Stack
        gap="0.25em 0.5em"
        sx={{
          flexDirection: { xs: 'row', sm: 'column' },
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <ProfileInfo icon={<GroupIcon />} label={`${user.followers || 0} seguidores`} />
        <ProfileInfo icon={<FavoriteIcon />} label={`${user.following || 0} seguindo`} />
      </Stack>

      <Stack
        gap="0.25em 0.5em"
        sx={{
          flexDirection: { xs: 'row', sm: 'column' },
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {user.company && <ProfileInfo icon={<BusinessIcon />} label={user.company} />}
        {user.location && <ProfileInfo icon={<PlaceIcon />} label={user.location} />}
        {user.email && <ProfileInfo icon={<EmailIcon />} label={user.email} />}
        {user.blog && <ProfileInfo icon={<RssFeedIcon />} label={user.blog} link={user.blog} />}
        {user.twitter_username && (
          <ProfileInfo
            icon={
              <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </SvgIcon>
            }
            label={`@${user.twitter_username}`}
            link={`https://twitter.com/${user.twitter_username}`}
          />
        )}
      </Stack>
      {user.email && (
        <Button href={`mailto:${user.email}`}>Contato</Button>
      )}
    </Stack>
  );
};;