import {
  ListStatistics,
  PositiveFeedback,
} from './styles/ListStatistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistics>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total()}</p>
      </li>
      <li>
        <PositiveFeedback result={positivePercentage()}>
          Positive feedback {positivePercentage()}%
        </PositiveFeedback>
      </li>
    </ListStatistics>
  );
};
