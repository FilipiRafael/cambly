import { Button } from './styles';

export interface FavoriteButtonProps {
  favorited: boolean;
}

export const FavoriteButton = ({ favorited }: FavoriteButtonProps) => {
 return (
  <Button favorited={favorited} />
 ) 
}