import styled from 'styled-components';

export const Container = styled.div`
  gap: 25px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 40;
  color: rgb(244, 245, 255);
  padding: 50px;
  border-radius: 25px;
  width: 1120px;
  margin: 35px auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(https://hilldale.com/wp-content/uploads/sites/7/2019/08/feature_crescendo.jpg),
    linear-gradient(90deg, #7c604a92, #7c604ab8);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
`;