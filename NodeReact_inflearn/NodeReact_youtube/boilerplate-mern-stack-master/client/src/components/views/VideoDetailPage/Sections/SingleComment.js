import React, { useState, useEffect } from 'react';
import { Comment, Avatar, Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import Axios from 'axios';

const { TextArea } = Input;

function SingleComment(props) {

  const user = useSelector(state => state.user)

  const [OpenReply, setOpenReply] = useState(false)
  const [CommentValue, setCommentValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      constent: CommentValue,
      writer: user.userData._id,  // 이번엔 로컬스토리지 안쓰고 리덕스 써봐씀
      postId: props.postId,
      responseTo: props.comment._id
    }

    Axios.post('/api/comment/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          // console.log(response.data.result)
          setCommentValue('')
          setOpenReply(false)
          props.refreshFunction(response.data.result)
        } else {
          alert('코멘트를 저장하지 못했습니다.')
        }
      })

  }

  const onHandleChange = (event) => {
    setCommentValue(event.currentTarget.value)
  }

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply)
  }

  const actions = [
    <span onClick={onClickReplyOpen} key="comment-basic-reply-to">Reply to</span>
  ]

  return (
    <div>
      <Comment
        actions={actions}
        author={props.comment.writer.name}
        avatar={<Avatar src={props.comment.writer.image} alt />}
        content={<p>{props.comment.content}</p>}
      />
      {OpenReply &&
        <form style={{ display: 'flex' }} onSubmit={onSubmit}>
          <textarea
            style={{ width: '100%', borderRadius: '5px' }}
            onChange={onHandleChange}
            value={CommentValue}
            placeholder="write some comments"
          />
          <br />
          <button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</button>
        </form>
      }

    </div>
  )
}

export default SingleComment
