import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
} from "reactstrap";
import update from "immutability-helper";

function ModalComponent({isModal, modalViewToggle, createBoard, message, mode, updateData, updateIndex, updateBoard}) {

  const [inputCreate, setInputCreate] = useState();
  const [inputUpdate, setInputUpdate] = useState({bno:updateData?.bno});


  // 삽입용
  const createOnChange = (e) => {
    const { name, value } = e.target;
    setInputCreate({
      ...inputCreate,
      [name]: value,
    });
  };
  // console.log(updateData)

  // 수정용
  const updateOnChange = (e) => {
    const { name, value } = e.target;
    setInputUpdate({
      ...inputUpdate,
      bno:updateData?.bno,
      [name]: value,
    });
    console.log(inputUpdate)
  };

  return (
    <Modal
        isOpen={isModal}
        toggle={modalViewToggle}
        centered={true}
        fullscreen={true}
      >
        <ModalHeader toggle={modalViewToggle}>
          {message + " 게시글을 입력하세요"} 
        </ModalHeader>
        <ModalBody>
          <Card className="my-2" color="primary" outline>
            <CardBody>
              <FormGroup>
                <CardText>
                제목
                {
                  mode === "create" ?
                    <Input name="title" onChange={createOnChange}/>
                  :
                    <Input name="title" defaultValue={updateData?.title} onChange={updateOnChange}/>
                }
                내용
                {
                  mode === "create"?
                  <Input type="textarea" name="contents" onChange={createOnChange} />
                  :
                  <Input type="textarea" name="contents" defaultValue={updateData?.contents} onChange={updateOnChange} />

                }
                </CardText>
              </FormGroup>
              <Row>
                <Col sm={{ offset: 3, size: "auto" }}>
                  {
                    mode === "create"?
                      <Button
                        color="success"
                        onClick={() => {
                          createBoard(inputCreate);
                        }}
                      >
                        추가
                      </Button>
                      :
                      <Button
                        color="primary"
                        onClick={() => {
                          updateBoard(inputUpdate,updateIndex);
                        }}
                      >
                        수정
                      </Button>
                  }
                </Col>
                <Col sm={{ offset: 4, size: "auto" }}>
                  <Button
                    onClick={() => {
                      modalViewToggle()
                    }}
                  >
                    닫기
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
  )
}

export default ModalComponent