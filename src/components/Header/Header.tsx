import styled from "styled-components";
import { changeUserName } from "../../store/boardStore/reducers";
import {
  selectName,
  useAppDispatch,
  useAppSelector,
} from "../../store/boardStore/selectors";

const Header = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectName);
  return (
    <HeaderWrap>
      <HeaderContent>Trello</HeaderContent>
      {!!userName ? (
        <LogOutButton
          onClick={() => {
            dispatch(changeUserName(""));
          }}
        >
          Log Out
        </LogOutButton>
      ) : (
        <></>
      )}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  padding: 15px;
  color: #fff;
  position: relative;
  z-index: 2;
  background-color: #4661d6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderContent = styled.span`
  font-size: 28px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 4px;
`;
const LogOutButton = styled.button`
  background: #fff;
  color: #4661d6;
`;
