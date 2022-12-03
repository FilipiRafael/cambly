import { Card } from './styles';

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
      <span>{name}</span>
      <span>{note}</span>
      <span>{country}</span>
      <span>{photo}</span>
      <span>{about}</span>
      <span>{favorite}</span>
      <span>{online}</span>
    </Card>
  )
}