import styled from 'styled-components';

import { Avatar } from '@mui/material';

import HelpIcon from '@mui/icons-material/Help';
import TodayIcon from '@mui/icons-material/Today';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

export const Container = styled.nav`
  width: 100vw;
  height: 75px;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 6px solid ${props => props.theme.colors.borderColor};
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Brand = styled.img`
  width: 130px;
`;

export const Menu = styled.div`
  color: ${props => props.theme.colors.normalText};
  display: flex;
  gap: 1.8rem;

  span {
    color: ${props => props.theme.colors.normalText};
    text-transform: uppercase;
    font-size: 0.90rem;
    cursor: pointer;
  }
`;

export const UserAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const NavHelpIcon = styled(HelpIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;

export const NavSchedulerIcon = styled(TodayIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;

export const NavNotifyIcon = styled(NotificationsNoneIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;

export const NavMessageIcon = styled(MessageIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;

export const NavLightModeIcon = styled(LightModeIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;

export const NavDarkModeIcon = styled(NightlightIcon)`
  color: ${props => props.theme.colors.iconsColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.boldText};
  }
`;