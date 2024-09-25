'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw"

const MembersPage = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/CVs/Resume.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  return (
    <div className='mx-auto max-w-6xl px-12 md:px-24 py-24'>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className='prose prose-invert max-w-full'>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default MembersPage