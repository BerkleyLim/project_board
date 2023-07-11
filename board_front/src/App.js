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

  const [board, setBoard] = useState();

  useEffect(() => {
    setBoard(data);
  }, []);
  console.log(board);

  return (
    <div className="container">
      <h1>게시판 프로젝트</h1>
      <br />
      <br />
      <br />
      <br />
      {board?.map((b, index) => (
        <Card key={index} className="my-2" color="primary" outline>
          {/* <CardHeader>제목</CardHeader> */}
          <CardHeader>{b?.title}</CardHeader>
          <CardBody>
            {/* <CardText>내용</CardText> */}
            <CardText>{b?.contents}</CardText>
            <br />
            <br />
            <Row>
              <Col sm={{ offset: 3, size: "auto" }}>
                <Button color="primary">수정</Button>
              </Col>
              <Col sm={{ offset: 4, size: "auto" }}>
                <Button color="danger">삭제</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default App;
