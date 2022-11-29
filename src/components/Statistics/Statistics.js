import PropTypes from 'prop-types';
import { Section, Title } from './Statistics.styled';

export const Statistics = ({ title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};