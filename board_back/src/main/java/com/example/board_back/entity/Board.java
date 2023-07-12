package com.example.board_back.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Board {
  Long bno;
  String title;
  String contents;
}
