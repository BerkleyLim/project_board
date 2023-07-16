package com.example.board_back.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.board_back.entity.Board;

@Repository
@Mapper
public interface BoardMapper {
  /**
   * 각 메소드 이름은 BoardMapper.xml에서 지정한 메소드 별로 반드시 지어줘야 합니다.
   */

  // 전체 파라미터 조회 관련 게시글
  List<Board> selectList();

  // 생성 sql문
  Integer insertBoard(String title, String contents);

  // 현재 내용 수정 sql문
  Integer updateBoard(Board board);

  // 현재 내용을 삭제하는 sql문
  Integer deleteBoard(Long bno);
}
