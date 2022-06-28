package com.toy.app.work.dashboard.service;

import java.util.List;

import com.toy.app.work.dashboard.dto.AreaCodeDto;
import com.toy.app.work.dashboard.dto.WheatherDto;

public interface DashboardService {

	public void insertWheatherContent(WheatherDto wheatherDto);

	public List<AreaCodeDto> getAreaCode();
}
