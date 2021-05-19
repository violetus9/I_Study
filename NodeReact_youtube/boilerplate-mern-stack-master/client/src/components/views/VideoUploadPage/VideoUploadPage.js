import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';

const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {

  // state 만들거, state에 value들 저장할거임, 이걸 또 서버로 한번에 보낼거임
  const [VideoTitle, setVideoTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Private, setPrivate] = useState(0)
  const [Category, setCategory] = useState('Film & Animation')

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Video</Title>
      </div>

      <Form onSubmit>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Dropzone
            onDrop
            multiple
            maxSize
          >
            {({ getRootProps, getInputProps }) => (
              <div style={{
                width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }} {...getRootProps()}>
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: '3rem' }} />
              </div>
            )}
          </Dropzone>;

          <div>
            <img src alt />
          </div>

        </div>

        <br />
        <br />
        <label>Title</label>
        <Input
          onChange
          value={VideoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea
          onChange
          value={Description}
        />
        <br />
        <br />

        <select onChange>
          <option key value></option>
        </select>


        <select onChange>
          <option key value></option>
        </select>
        <br />
        <br />

        <Button type="primary" size="large" onClick>
          Submit
        </Button>

      </Form>


    </div>
  )
}

export default VideoUploadPage
