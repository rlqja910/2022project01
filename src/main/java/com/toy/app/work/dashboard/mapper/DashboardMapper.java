package com.toy.app.work.dashboard.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.dashboard.dto.WheatherDto;

@Mapper
public interface DashboardMapper {

	public int insertWheatherContent(WheatherDto wheatherDto);

}
