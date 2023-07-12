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

  public List<Board> selectList() {
    return boardMapper.selectList();
  }

}
