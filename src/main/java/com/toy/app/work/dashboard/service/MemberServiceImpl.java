package com.toy.app.work.dashboard.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.toy.app.work.dashboard.dto.Member;
import com.toy.app.work.dashboard.repository.MemberRepository;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberRepository repository;

	@Override
	public List<Member> list() {
		// TODO Auto-generated method stub
		List<Member> members = (List<Member>) repository.findAll();
		log.info("[IN]MemberServiceImpl============");
		System.out.println(members.toString());
		log.info("[OUT]MemberServiceImpl============");
		
		return members;
	}

	@Override
	public void in(Map<String, Object> param, ModelMap model) {
		// TODO Auto-generated method stub
		
		log.info("[IN]MemberServiceImpl in============");
		Member mb = new Member();
		mb.setMb_id("1");
		mb.setReg_dt(new Date().toString());
		
		log.info("[OUT]MemberServiceImpl in============");
		
		repository.save(mb);
	}

}
