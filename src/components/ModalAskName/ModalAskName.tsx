import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeUserName } from "../../store/boardStore/reducers";
interface userNameType {
  userName: string;
}
const ModalAskName = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<userNameType>();
  const onSubmit = (data: userNameType) => {
    dispatch(changeUserName(data.userName));
  };

  return (
    <ModalWrap>
      <ModalContent>
        <Title>Enter Your Name</Title>
        <InputWrap onSubmit={handleSubmit(onSubmit)}>
          <InputName
            {...register("userName", {
              required: true,
            })}
            autoFocus
            type="text"
            placeholder="Peter"
          />
          <Button type="submit">Enter</Button>
        </InputWrap>
      </ModalContent>
    </ModalWrap>
  );
};

export default ModalAskName;
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalWrap = styled.div`
  background-color: #c9c9c9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: block;
`;

const InputName = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 3px 0 0 3px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
`;
const Button = styled.button`
  height: 28.5px;
  border-radius: 0 3px 3px 0;
  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

const InputWrap = styled.form`
  display: flex;
  align-items: start;
`;
