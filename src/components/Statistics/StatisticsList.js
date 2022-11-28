import PropTypes from 'prop-types';
import { StatList, Item } from './Statistics.styled';
import { StatisticsListItem } from './StatisticsListItem';

export const StatisticsList = ({ stats }) => {
  return (
    <StatList>
      {stats.map(doc => (
        <Item key={doc.id}>
          <StatisticsListItem doc={doc} />
        </Item>
      ))}
    </StatList>
  );
};
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};