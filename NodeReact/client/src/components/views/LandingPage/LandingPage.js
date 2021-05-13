import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {
  // 랜딩페이지 오자마자 이걸 실행할건데, get > req를 서버로 보낼것, /api/hello로
  useEffect(() => {
    axios.get('/api/hello')
      .then(response => console.log(response.data))
  }, [])



  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage
