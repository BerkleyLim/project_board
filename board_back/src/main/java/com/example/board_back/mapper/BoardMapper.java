package com.example.board_back.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.board_back.entity.Board;

@Repository
@Mapper
public interface BoardMapper {
  List<Board> selectList();

}
