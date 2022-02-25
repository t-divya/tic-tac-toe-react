import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove, resetButton } from "./Slice";
import { useSelector } from "react-redux";

const TileContainer = styled.div`
  border: 2px solid pink;
  width: 70px;
  height: 90px;
  color: red;
  text-decoration: ${(props) =>
    props.textDecoration ? "line-through" : "none"};
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.grid.gridFrame[row][column]);
  const win = useSelector((state) => state.grid.winner);
  const strike = useSelector((state) => state.grid.strikeType);

  return (
    <>
      {
        <TileContainer
          onClick={() =>
            value !== null || win === true
              ? ""
              : dispatch(playerMove({ row, column }))
          }
        >
          {value}
        </TileContainer>
      }
    </>
  );
}
