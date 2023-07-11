import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./App.css";
import { useEffect, useState } from "react";
import ModalComponent from "./modal/ModalComponent";
import update from "immutability-helper";

function App() {
  const data = [
    {
      bno: 1,
      title: "제목1",
      contents: "내용1",
    },
    {
      bno: 2,
      title: "제목2",
      contents: "내용2",
    },
    {
      bno: 3,
      title: "제목3",
      contents: "내용3",
    },
    {
      bno: 4,
      title: "제목4",
      contents: "내용4",
    },
  ];
  // console.log(data);

  // 게시판 데이터 담는 state 값
  const [board, setBoard] = useState();

  // 모달창띄울지 여부 확인
  const [isModal, setIsModal] = useState(false);

  // 모달에 수정모드 or 삽입모드 결정 짓는 state 값
  const [mode, setMode] = useState("create");

  // 버튼 텍스트 전달할 state값
  const [message, setMessage] = useState();

  // 수정용 state 값 : data - 해당 index의 데이터 전달, index - 해당 인덱스 전달
  const [updateData, setUpdateData] = useState();
  const [updateIndex, setUpdateIndex] = useState();

  // state 값 변화시 각 state 변화된 결과를 렌더링 하기 위해 추가
  // 특히 board state 값을 위한 메서드
  const [isStateChange, setIsStateChange] = useState(false);

  // 모달 여/닫기 이벤트용 메서드
  const modalViewToggle = () => setIsModal(!isModal);

  // html 렌더링 후 데이터 가져오기를 위한 기능
  // [] 는 첫번째만 호출
  useEffect(() => {
    setBoard(data);
  }, []);
  console.log(board);

  // 모달에 전달해주는 삽입 메서드
  const readyChange = () => {
    setMessage("추가"); // 버튼 추가 텍스트 전달
    setMode("create"); // 생성 모드로 모달 창 띄우기
    modalViewToggle(); // 모달 띄우기
  };

  // 생성 메서드
  // 이때, 불가변성으로 생성 할 수 있는 기능을 삽입한다.
  const createBoard = (data) => {
    // front 화면에서 생성하는 것처럼 행동
    setBoard(
      update(board, {
        $push: [data],
      })
    );

    modalViewToggle(); // 모달창을 닫는다.
  };

  // 모달에 전달해주는 데이터 수정 메소드 추가
  const readyUpdate = (data, index) => {
    setMessage("수정"); // 버튼에 수정 표시
    setMode("update"); // 수정 모드로 모달 열기
    modalViewToggle(); // 모달 열기
    setUpdateData(data); // 수정 모드 해당 데이터 전달
    setUpdateIndex(index); // 수정 모드 해당 인덱스 전달
  };

  // 수정 이벤트
  const updateBoard = (data, index) => {
    // 불가변성으로 이용하여 해당 데이터 수정
    setBoard(
      update(board, {
        $merge: { [index]: data },
      })
    );
    modalViewToggle(); // 모달 창 닫기
    setIsStateChange(!isStateChange); // state 값 변하면 바로 리렌더링하는 기능
  };

  // 삭제를 위한 메서드
  const deleteBoard = (index) => {
    setBoard(
      update(board, {
        $splice: [[index, 1]],
      })
    );
  };

  return (
    <div className="container">
      <h1>게시판 프로젝트</h1>
      <br />
      <br />
      <br />
      <br />
      {board?.map((b, index) => (
        <Card key={index} className="my-2" color="primary" outline>
          <CardHeader>{b?.title}</CardHeader>
          <CardBody>
            <CardText>{b?.contents}</CardText>
            <br />
            <br />
            <Row>
              <Col sm={{ offset: 3, size: "auto" }}>
                <Button
                  color="primary"
                  onClick={() => {
                    readyUpdate(b, index);
                  }}
                >
                  수정
                </Button>
              </Col>
              <Col sm={{ offset: 4, size: "auto" }}>
                <Button color="danger" onClick={() => deleteBoard(index)}>
                  삭제
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Button
          color="success"
          onClick={() => {
            readyChange();
          }}
        >
          추가
        </Button>
      </Row>
      <ModalComponent
        isModal={isModal}
        modalViewToggle={modalViewToggle}
        createBoard={createBoard}
        message={message}
        mode={mode}
        updateData={updateData}
        updateIndex={updateIndex}
        updateBoard={updateBoard}
      />
    </div>
  );
}

export default App;
