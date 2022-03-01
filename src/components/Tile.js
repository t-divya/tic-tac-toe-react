import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../store/gameReducer.js";
import { useSelector } from "react-redux";

const TileContainer = styled.div`
  border: 2px solid #497ca9;
  width: 70px;
  height: 90px;
  color: aliceblue;
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.grid.gridFrame[row][column]);
  const gameState = useSelector((state) => state.grid.gameState);

  return (
    <>
      <TileContainer
        onClick={() =>
          value !== null || gameState === "won"
            ? ""
            : dispatch(playerMove({ row, column }))
        }
      >
        {value}
      </TileContainer>
    </>
  );
}
