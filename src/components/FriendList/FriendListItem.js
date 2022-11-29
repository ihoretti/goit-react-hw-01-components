import PropTypes from 'prop-types';
import { Status, FrImage } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status status={isOnline} />
      <FrImage src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  };