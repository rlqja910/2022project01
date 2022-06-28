package com.toy.app.work.dashboard.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.dashboard.dto.AreaCodeDto;
import com.toy.app.work.dashboard.dto.WheatherDto;

@Mapper
public interface DashboardMapper {

	public int insertWheatherContent(WheatherDto wheatherDto);

	public List<AreaCodeDto> getAreaCode();

}
