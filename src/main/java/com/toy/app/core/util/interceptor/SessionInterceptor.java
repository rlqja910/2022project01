package com.toy.app.core.util.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SessionInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		log.info("==================== SessionInterceptor BEGIN ====================");
		log.info("Request URI ===> " + request.getRequestURI());
		log.info("loginId ===> " + request.getSession().getAttribute("loginId"));

		if (request.getSession().getAttribute("loginId") == null) {
			log.info("로그인 안되어 있는 경우 home으로 이동한다.");
			response.sendRedirect("/app/login/home.do");
		}

		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		log.info("==================== SessionInterceptor END ======================");
		log.info("===============================================");
	}

}
