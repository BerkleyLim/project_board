package com.example.board_back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.board_back.entity.Board;
import com.example.board_back.service.BoardService;

@RestController
@RequestMapping("/api/board")
public class BoardController {
  @Autowired
  BoardService boardService;

  @GetMapping("/select/list")
  public List<Board> selectList() {
    return boardService.selectList();
  }

}
