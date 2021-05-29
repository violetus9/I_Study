import React, { useState } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'


function Comment(props) {

  const videoId = props.postId

  const user = useSelector(state => state.user);  // 리덕스의 state에서 가져오겟따~
  const [commentValue, setcommentValue] = useState("")

  const handleClick = (event) => {
    setcommentValue(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      constent: commentValue,
      writer: user.userData._id,  // 이번엔 로컬스토리지 안쓰고 리덕스 써봐씀
      postId: videoId
    }

    Axios.post('/api/comment/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          // console.log(response.data.result)
          setcommentValue('')
          // 부모컴포넌트 업데이팅해야해
          props.refreshFunction(response.data.result)
        } else {
          alert('코멘트를 저장하지 못했습니다.')
        }
      })

  }




  return (
    <div>
      <br />
      <p>Replies</p>
      <hr />
      {/* Comment Lists */}

      {props.commentLists && props.commentLists.map((comment, index) => {
        (!comment.responseTo &&
          <React.Fragment>
            <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={videoId} />
            <ReplyComment refreshFunction={props.refreshFunction} parentCommentId={comment._id} postId={videoId} commentLists={props.commentLists} />
          </React.Fragment>
        )
      })}

      {/* Root Comment Form */}
      <form style={{ display: 'flex' }} onSubmit={onSubmit}>
        <textarea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={handleClick}
          value={Comment}
          placeholder="write some comments"
        />
        <br />
        <button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Comment
