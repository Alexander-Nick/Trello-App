import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addCard } from "../../../store/boardStore/reducers";
import {
  selectName,
  useAppSelector,
} from "../../../store/boardStore/selectors";
interface FormProps {
  controlNewCardModal: (flag: boolean) => void;
  chapterIndex: number;
}
interface FormInterface {
  theme: string;
  description: string;
}
const NewCardForm = ({ controlNewCardModal, chapterIndex }: FormProps) => {
  const dispatch = useDispatch();
  const userName = useAppSelector(selectName);
  const { register, handleSubmit } = useForm<FormInterface>();
  const onSubmit = (data: FormInterface) => {
    const newCard = {
      id: uuidv4(),
      author: userName,
      theme: data.theme,
      description: data.description,
      comments: [],
    };
    controlNewCardModal(false);
    dispatch(addCard({ chapterIndex, newCard }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ThemeInput
        {...register("theme", {
          required: true,
        })}
        placeholder="Theme"
      />
      <DescriptionInput
        {...register("description", {
          required: true,
        })}
        placeholder="Description"
      />
      <AddCardButton type="submit">Add</AddCardButton>
    </form>
  );
};
export default NewCardForm;

const ThemeInput = styled.input`
  padding: 3px;
  width: 90%;
  display: block;
  margin: 0 auto 7px;
  border-radius: 3px;
`;
const DescriptionInput = styled.textarea`
  padding: 3px;
  width: 90%;
  display: block;
  margin: 0 auto 7px;
  border-radius: 3px;
  height: 100px;
  overflow: auto;
`;
const AddCardButton = styled.button`
  position: relative;
  right: 0px;
  margin: 10px;
`;
