import styled from "styled-components";

const DisplayLine = styled.div`
  display: "none";
`;

const DisplayLine1 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 45px;
  margin-left: 6px;
  width: 230px;
  display: "block";
  z-index: 1;
`;

const DisplayLine2 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 138px;
  margin-left: 6px;
  width: 230px;
  display: "block";
  z-index: 1;
`;
const DisplayLine3 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 232px;
  margin-left: 14px;
  width: 218px;
  display: "block";
  z-index: 1;
`;

const DisplayLine4 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 138px;
  margin-left: -158.5px;
  width: 272px;
  z-index: 1;
  transform: rotate(90deg);
`;

const DisplayLine5 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 138px;
  width: 272px;
  display: "block";
  transform: rotate(90deg);
  z-index: 1;
`;
const DisplayLine6 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 138px;
  margin-left: 158px;
  width: 272px;
  display: "block";
  transform: rotate(90deg);
  z-index: 1;
`;

const DisplayLine7 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 138px;
  width: 362px;
  transform: rotate(50deg);
  z-index: 1;
`;

const DisplayLine8 = styled.div`
  border: 3px solid #0fa;
  position: absolute;
  margin-top: 140px;
  width: 359px;
  display: "block";
  transform: rotate(130deg);
  z-index: 1;
`;

export default function LineThrough({ strikeType }) {
  function handleOnStyledLine() {
    switch (strikeType) {
      case 1:
        return <DisplayLine1 data-testid={`strike-${strikeType}`} />;
      case 2:
        return <DisplayLine2 data-testid={`strike-${strikeType}`} />;
      case 3:
        return <DisplayLine3 data-testid={`strike-${strikeType}`} />;
      case 4:
        return <DisplayLine4 data-testid={`strike-${strikeType}`} />;
      case 5:
        return <DisplayLine5 data-testid={`strike-${strikeType}`} />;
      case 6:
        return <DisplayLine6 data-testid={`strike-${strikeType}`} />;
      case 7:
        return <DisplayLine7 data-testid={`strike-${strikeType}`} />;
      case 8:
        return <DisplayLine8 data-testid={`strike-${strikeType}`} />;

      default:
        <DisplayLine />;
    }
  }

  return <>{handleOnStyledLine(strikeType)}</>;
}
