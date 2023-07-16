package com.example.board_back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board_back.entity.Board;
import com.example.board_back.mapper.BoardMapper;

@Service
public class BoardService {
  @Autowired
  BoardMapper boardMapper;

  /**
   * 각 Mapper별의 응답값을 불려오고, 앞으로의 로직을 짤 때는 Controller단이 아닌
   * Service 단에서 별도의 로직과 알고리즘을 구현 하는 형태로 진행합니다.
   */

  // 전체 조회 로직
  public List<Board> selectList() {
    return boardMapper.selectList();
  }

  // 게시물 삽입 로직
  public Integer insertBoard(String title, String contents) {
    return boardMapper.insertBoard(title, contents);
  }

  // 게시물 수정 로직
  public Integer updateBoard(Board board) {
    return boardMapper.updateBoard(board);
  }

  // 게시물 삭제 로직
  public Integer deleteBoard(Long bno) {
    return boardMapper.deleteBoard(bno);
  }
}
