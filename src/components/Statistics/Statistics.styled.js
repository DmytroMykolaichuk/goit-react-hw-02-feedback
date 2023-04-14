import styled from 'styled-components';

export const ListStatistics = styled.ul`
  //   text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  font-size: 28px;
`;

export const PositiveFeedback = styled.p`
  width: 100%;
  padding: 0 30px;
  text-align: center;
  color: white;
  background-color: ${p => makeBgrPositiveFeedback(p.result)};
`;

function makeBgrPositiveFeedback(total) {
  if (total < 49) {
    return '#e32626';
  } else if (total > 79) {
    return '#32b332';
  } else {
    return '#e5ce05';
  }
}
