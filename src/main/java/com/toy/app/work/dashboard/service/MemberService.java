package com.toy.app.work.dashboard.service;

import java.util.List;
import java.util.Map;

import org.springframework.ui.ModelMap;

import com.toy.app.work.dashboard.dto.Member;

public interface MemberService {
	
	List<Member> list();
	
	void in(Map<String, Object> param, ModelMap model);

}
