import PropTypes from 'prop-types';
import { Section, Title,StatList, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      
      <StatList>
      {stats.map(({doc:id,label, percentage})=> (
        <Item key={id}>
           <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
        </Item>
      ))}
    </StatList>
      
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  
};