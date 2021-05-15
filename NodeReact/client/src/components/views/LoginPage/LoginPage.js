import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {

  // 액션 취하기 위한 dispatch
  const dispatch = useDispatch();

  // 내부 데이터 변화를 하고자 하면 state변화(그전에 state만들어줘야)
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  // 값이 들어가게 합니다
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 비동기처리 안하면 알지 f5되는거

    // state 뭐들었나 보쟈
    // console.log('Email: ', Email);
    // console.log(`Password: ${Password}`);

    // 서버에 보내려면 Axios 써서 post 메서드 이용해서 해당 값들 넣어서 보내믄댐
    let body = {
      email: Email,
      Password: Password
    }
    // 보낼때 앞에 경로는 index.js에서랑 같게해주고(보내고 받고 맞아야하니까)
    // 그렇게 딱 보내주면 index.js의 user.find에서 찾는다 해당 값을
    // 이메일 비번 맞나 보고(지금같은경우) >> 토큰을 생성해가지고(index에서 선언한 메서드들따라 가는거임)
    // 쿠키저장해서 클라에 전해주고 뭐 ~~, 전해준걸 여기서 response로 받아주고 처리할거 처리하고
    // 우린 리덕스 쓰니까 useDispatch 이용해서 액션 취하고 리듀서 가고 그런 순서로 간다

    // 여기 로그인 유저는 _actions에 지정한대 가서 봐바
    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          props.history.push('/')
        } else {
          alert('Error!')
        }
      })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>

      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />
        <br />
        <button type='submit'>
          Login
        </button>
      </form>

    </div>
  )
}

export default LoginPage
