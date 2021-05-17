/* eslint-disable import/no-anonymous-default-export */
// 여기서도 컴포넌트를 만들어 볼계요
import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from "../_actions/user_action";

export default function (SepcificComponent, option, adminRoute = null) {

  // option부분에
  // null > 아무나 출입이 가능한 페이지
  // true > 로그인 한 유저만 출입이 가능한 페이지
  // false > 로그인 한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {

      // 액션을 날려야죠
      dispatch(auth()).then(response => {
        // response에 무슨 정보가 들었는지
        console.log(response)

        // 분기처리좀 하자
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push('/login')
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/')
          } else {
            if (option === false) {
              props.history.push('/')
            }
          }

        }

      })

      Axios.get('/api/users/auth')

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <SepcificComponent />
    )

  }


  return AuthenticationCheck;
}

