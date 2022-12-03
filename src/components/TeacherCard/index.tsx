import { 
  Card,
  Avatar,
  AvatarWrapper,
  OnlineIcon
} from './styles';

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
      <AvatarWrapper>
        <Avatar src={photo} alt='Teacher avatar' />
        {online && <OnlineIcon />}
      </AvatarWrapper>
      <span>{name}</span>
      <span>{note}</span>
      <span>{country}</span>
      <span>{about}</span>
      <span>{favorite}</span>
      <span>{online}</span>
    </Card>
  )
}