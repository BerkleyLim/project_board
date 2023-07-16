package com.example.board_back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.board_back.entity.Board;
import com.example.board_back.service.BoardService;

// 컨트롤러 단
// 현재는 Default API는 
// "/api/board"
@RestController
@RequestMapping("/api/board")
public class BoardController {
  @Autowired
  BoardService boardService;

  // API : /api/board/select/list
  // 전체 조회를 이용한 API 기능
  @GetMapping("/select/list")
  public List<Board> selectList() {
    return boardService.selectList();
  }

  // API : /api/board/insert/board
  // 게시판 삽입을 이용한 API 기능
  @PostMapping("/insert/board")
  public Integer insertBoard(@RequestBody Board board) {
    System.out.println(board.toString());
    return boardService.insertBoard(board.getTitle(), board.getContents());
  }

  // API : /api/board/update/board
  // 게시판 수정을 이용한 API 기능
  @PostMapping("/update/board")
  public Integer updateBoard(@RequestBody Board board) {
    System.out.println("수정");
    System.out.println(board.toString());
    return boardService.updateBoard(board);
  }

  // API : /api/board/delete/board
  // 게시판 삭제를 이용한 API 기능
  @PostMapping("/delete/board")
  public Integer deleteBoard(@RequestBody Board board) {
    return boardService.deleteBoard(board.getBno());
  }
}