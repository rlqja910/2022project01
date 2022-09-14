package com.toy.app.core.util.batch;

import java.util.List;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.support.ListItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import com.toy.app.work.login.dto.NoticeTxtDto;
import com.toy.app.work.login.service.LoginService;

public class Job {
//	
//	@Autowired
//	private LoginService loginService;
//	
//	//.get("myjob") : job이라는 이름의 Job을 생성하는 JobBulder 인스턴스를 반환받고자 합니다.
//	//.start(myStep) : myStep이라는 메서드에서 Step이라는 인스턴스를 생성하여 반환받습니다.
//	//.build(); : 이 메소드를 통해 비로소 myJob이라는 Job이 빌드가 되면서 Job이 생성됩니다. 
//	@Bean
//	public Job myJob(JobBuilderFactory jobBuilderFactory) {
//		return jobBuilderFactory.get("myJob")
//				.start(mystep)
//				.build();
//	}
//	
//	@Bean
//	public Step mystep(StepBuilderFactory stepBuilderFactory) {
//		return stepBuilderFactory.get("mystep")
//				.<NoticeTxtDto,NoticeTxtDto> chunk(2)
//				.reader(myReader())
//				.processor(myProcessor())
//				.writer(myWriter())
//				.build();
//	}
//	
//	@Bean
//	@StepScope
//	public ListItemReader<NoticeTxtDto> myReader(){
//		System.out.println("================ListItemReader===================");
//		//공지사항 조회
//		List<NoticeTxtDto> oldNotice = loginService.getNotice();
//		System.out.println(oldNotice.toString());
//		return new ListItemReader<>(oldNotice);
//	}
//	
//	public NoticeTxtDto myProcessor(){
//		System.out.println("================ItemProcessor===================");
//		NoticeTxtDto aa = new NoticeTxtDto();
//		aa.setContent("1111");
//		aa.setRegDt("1111-11-11");
//		System.out.println(aa.toString());
//		return aa;
//	}
}
