package com.ssafy.api.service;

import com.ssafy.api.request.SimpleUserReq;
import com.ssafy.api.request.ValidateIdReq;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	UserRepository userRepository;

	UserRepositorySupport userRepositorySupport;

	
	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
		user.setUserId(userRegisterInfo.getUserId());
		user.setEmail(userRegisterInfo.getUserEmail());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
		user.setPassword(bCryptPasswordEncoder.encode(userRegisterInfo.getUserPassword()));
		user.setName(userRegisterInfo.getUserName());
		user.setRole("ROLE_USER");
		return userRepository.save(user);
	}

	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		User user = userRepository.findUserByUserId(userId);

		if(user == null) {
			return new User();
		}
		return user;
	}

	@Override
	public User getUserByEmail(String email) {
		User user = userRepository.findUserByEmail(email);
		return user;
	}

	@Override
	public User saveUser(User user) {
		User userEntity = userRepository.save(user);
		return userEntity;
	}

	@Override
	public boolean verifyId(ValidateIdReq validateIdReq) {

		if (! userRepository.existsByUserId(validateIdReq.getUserId())) {
			return true;
		}

		return false;
	}

	@Override
	public boolean verifyEmail(ValidateIdReq validateIdReq) {

		if (! userRepository.existsByEmail(validateIdReq.getEmail())) {
			return true;
		}

		return false;
	}

	@Override
	@Transactional
	public void setUserPasswordByEmail(String email, String pw) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
		userRepository.updatePassword(email,bCryptPasswordEncoder.encode(pw));


	}


}
