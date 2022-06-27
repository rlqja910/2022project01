package com.toy.app.work.dashboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.app.work.dashboard.dto.WheatherDto;
import com.toy.app.work.dashboard.mapper.DashboardMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class DashboardServiceImpl implements DashboardService {

	@Autowired
	private DashboardMapper dashboardMapper;

	@Override
	public void insertWheatherContent(WheatherDto wheatherDto) {
		log.info("[IN]DashboardServiceImpl insertWheatherContent");
		int resultInt = dashboardMapper.insertWheatherContent(wheatherDto);
		
		if(resultInt > 0) {
			log.info("날씨정보를 적재하였습니다.");
		}
		log.info("[OUT]DashboardServiceImpl insertWheatherContent");
	}
}
