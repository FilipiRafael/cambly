import { 
  Card,
  Avatar,
  AvatarWrapper,
  OnlineIcon,
  FlexWrapper,
  FavoriteWrapper,
  BioWrapper,
  InfoWrapper,
  TeacherName,
  TeacherCountry,
  TeacherFlag,
  TeacherAbout,
  ActionButton,
  ButtonWrapper
} from './styles';

import { FavoriteButton } from '../../components/FavoriteButton';

import { TeacherListProps } from '../../types/shared';

interface TeacherCardProps extends TeacherListProps {
  // updateList: (list: TeacherListProps[]) => void;
  // list: TeacherListProps[];
}

export const TeacherCard = ({
  name,
  country,
  flag,
  photo,
  about,
  favorite,
  online,
}: TeacherCardProps) => {
  return (
    <Card>
      <FavoriteWrapper>
        <FavoriteButton
          favorited={favorite}
        />
      </FavoriteWrapper>
      <BioWrapper>
        <AvatarWrapper>
          <Avatar src={photo} alt='Teacher avatar' />
          {online && <OnlineIcon />}
        </AvatarWrapper>
        <InfoWrapper>
          <TeacherName>{name}</TeacherName>
          <FlexWrapper>
            <TeacherFlag src={flag} alt='Country Flag' />
            <TeacherCountry>{country}</TeacherCountry>
          </FlexWrapper>
        </InfoWrapper>
      </BioWrapper>
      <TeacherAbout>{about}</TeacherAbout>
      <ButtonWrapper>
        <ActionButton primary={false}>Perfil</ActionButton>
        <ActionButton primary={true}>Ligar</ActionButton>
      </ButtonWrapper>
    </Card>
  )
}