import PropTypes from 'prop-types';
import { TitleSection, SectionDiv } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionDiv>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
