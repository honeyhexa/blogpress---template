import { PortableText } from '@portabletext/react'
import React from 'react'

const Post: React.FC<any> = (props) => {
  return (
    <div>
        <h1>{props.data.title}</h1>
        <PortableText value={props.data.content} />
    </div>
  )
}

export default Post