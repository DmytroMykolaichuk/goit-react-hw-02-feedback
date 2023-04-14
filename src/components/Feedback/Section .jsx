import { TitleSection, SectionDiv } from './styles/TitleSection.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionDiv>
  );
};
