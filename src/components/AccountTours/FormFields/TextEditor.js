import React, { useState, useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'


const TextEditor = ({ action, name, value, required }) => {

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])


  const [data, setData] = useState('')

  useEffect(() => {
    if(value){
      setData(value)
    }
  }, [value])

  // const handleData = e => {
  //   setData(e.target.value)
  //   action(name, e.target.value)
  // }

  return editorLoaded ? (
    <div className={'ckeditor-textarea-wrapper'} id={name}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        value={data}
        config={{
          toolbar: [
            'bold',
            'italic',
            'blockQuote',
            '|',
            // 'link',
            'numberedList',
            'bulletedList',
            '|',
            // 'imageUpload',
            // 'mediaEmbed',
            // '|',
            'undo',
            'redo',
          ],
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          action(name, data)
        }}
        onBlur={(event, editor) => {
          const data = editor.getData()
          action(name, data === '<p></p>' ? '' : data)
        }}
      />
      <textarea required={required} value={data} onChange={e => setData(e.target.value)}/>
    </div>
  ) : (
    <div><CircularProgress/></div>
  )
}

export default TextEditor
