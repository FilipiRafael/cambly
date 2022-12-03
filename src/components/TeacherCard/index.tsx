import { 
  Card,
  Avatar,
  AvatarWrapper,
  OnlineIcon,
  FavoriteWrapper,
} from './styles';

import { FavoriteButton } from '../../components/FavoriteButton';

interface TeacherCardProps {
  name: string;
  note: number;
  country: string;
  photo: string;
  about: string;
  favorite: boolean;
  online: boolean;
}

export const TeacherCard = ({
  name,
  note,
  country,
  photo,
  about,
  favorite,
  online 
}: TeacherCardProps) => {
  return (
    <Card>
      <FavoriteWrapper>
        <FavoriteButton favorited={favorite} />
      </FavoriteWrapper>
      <AvatarWrapper>
        <Avatar src={photo} alt='Teacher avatar' />
        {online && <OnlineIcon />}
      </AvatarWrapper>
      <span>{name}</span>
      <span>{note}</span>
      <span>{country}</span>
      <span>{about}</span>
      <span>{online}</span>
    </Card>
  )
}