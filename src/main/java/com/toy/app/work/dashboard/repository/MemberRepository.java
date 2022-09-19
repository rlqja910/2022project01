package com.toy.app.work.dashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.toy.app.work.dashboard.dto.Member;

@Repository
public interface MemberRepository extends CrudRepository<Member, Long>{

}
