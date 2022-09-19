package com.toy.app.work.dashboard.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="member")
public class Member {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mb_seq;
	
	private String mb_id;
	private String reg_dt;
}
