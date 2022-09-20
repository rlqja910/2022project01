package com.toy.app.core.util.batch;

import java.util.List;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.support.ListItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.toy.app.work.dashboard.dto.Member;
import com.toy.app.work.dashboard.repository.MemberRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Configuration
public class JobConfig {
	
	@Autowired
	private MemberRepository memberRepository;
	
	//.get("myjob") : job이라는 이름의 Job을 생성하는 JobBulder 인스턴스를 반환받고자 합니다.
	//.start(myStep) : mySt`ep이라는 메서드에서 Step이라는 인스턴스를 생성하여 반환받습니다.
	//.build(); : 이 메소드를 통해 비로소 myJob이라는 Job이 빌드가 되면서 Job이 생성됩니다. 
	@Bean
	public Job myJob(JobBuilderFactory jobBuilderFactory,
			Step mystep) {
		return jobBuilderFactory.get("myJob2") //job builder 생성됨.
//				.preventRestart() //job 중복실행 방지
				.start(mystep)
				.build();
	}
	
	@Bean
	public Step mystep(StepBuilderFactory stepBuilderFactory) {
		return stepBuilderFactory.get("mystep2")
				.<Member,Member> chunk(100)
				.reader(myReader())
				.processor(this.myProcessor())
				.writer(this.myWriter())
				.build();
	}
	
	@Bean
	@StepScope
	public ListItemReader<Member> myReader(){
		System.out.println("================myReader===================");
		List<Member> oldMember = (List<Member>) memberRepository.findAll();
		System.out.println(oldMember.toString());
		return new ListItemReader<>(oldMember);
	}
	
	public ItemProcessor<Member,Member> myProcessor(){
		System.out.println("================ItemProcessor===================");
		return new ItemProcessor<Member, Member>() {
			@Override
			public Member process(Member item) throws Exception {
				// TODO Auto-generated method stub
				System.out.println("================ItemProcessor process===================");
				item.setMb_id("2");
				
				return item;
			}
		};
	}
	
	public ItemWriter<Member> myWriter(){
		System.out.println("================myWriter===================");
		
		return (
					(List<? extends Member> memberList) -> 
					memberRepository.saveAll(memberList)
				);
	}
}
