import React from 'react'

const Text = (props: {content: string}) => {
    const { content } = props
    return <p className='text'>{content}</p>
}

function Message(props: {}) {

    const content1 = 'This is parent component'
    const content2 = 'Message use Text component'

  return (
    <div>
        <Text content={content1} />
        <Text content={content2} />
    </div>
  )
}

export default Message