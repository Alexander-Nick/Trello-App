import styled from "styled-components";
interface TitleProps {
  controlNewCardModal: (flag: boolean) => void;
}

const NewCardTitle = ({ controlNewCardModal }: TitleProps) => {
  return (
    <Title>
      <h3>Add new card</h3>
      <button
        onClick={() => {
          controlNewCardModal(false);
        }}
      >
        X
      </button>
    </Title>
  );
};

export default NewCardTitle;

const Title = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
`;
