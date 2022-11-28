import PropTypes from 'prop-types';
import { FrList, FrItem } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <FrList>
      {items.map(({ avatar, name, isOnline, id }) => (
        <FrItem key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FrItem>
      ))}
    </FrList>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};