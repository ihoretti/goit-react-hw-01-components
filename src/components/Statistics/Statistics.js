import PropTypes from 'prop-types';
import { Section, Title } from './Statistics.styled';

export const Statistics = ({ title, children }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};