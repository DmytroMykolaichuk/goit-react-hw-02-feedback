import styled from '@emotion/styled';

export const ListButton = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 130px;
  padding: 10px;
  border-radius: 10px;
  font-size: 26px;
  color: white;
  background-color: ${p => makeBgrBtn(p.option)};
  transition: transform 200ms linear;
  text-transform: capitalize;

  :hover {
    transform: scale(1.1);
  }
`;

function makeBgrBtn(option) {
  switch (option) {
    case 'good':
      return '#32b332';
    case 'neutral':
      return '#e5ce05';
    case 'bad':
      return '#e32626';
    default:
      return;
  }
}
