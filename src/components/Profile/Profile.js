import PropTypes from 'prop-types';
import { IoIosPeople, IoIosEye } from 'react-icons/io';
import { AiFillLike } from 'react-icons/ai';
import { Image, Card, Stats, Name, Tag, Location } from './Profile.styled';

export const Profile = ({
  user,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <Card>
        <Image src={avatar} alt={user} />
        <Name>{user}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Card>

      <Stats>
        <li>
          <IoIosPeople size="20px" />
          <span>{followers}</span>
        </li>
        <li>
          <IoIosEye size="20px" />
          <span>{views}</span>
        </li>
        <li>
          <AiFillLike size="20px" />
          <span>{likes}</span>
        </li>
      </Stats>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};