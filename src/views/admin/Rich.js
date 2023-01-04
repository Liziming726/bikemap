import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

function Rich() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            // alert(editorRef.current.getContent());
        }
    };
    //上传图片，返回promise
    const upImg = (blobInfo, progress) => {
        return new Promise((resolve,reject) => {
            const formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            axios.post('http://dida100.com:8888/api/file/upload',formData)
            .then(res => {
                console.log(res);
                resolve('http://dida100.com:8888'+res.data.file.path);
            })
        })
    }
    return (
        <>
      <Editor
        apiKey='zre469nf6b7wxsvzcyoqp1doin86c5h0f43hwgr9tbjiswzc'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>The world's most good rich text editor.</p>"
        init={{
          height: 500,
          menubar: false,
          images_upload_handler: upImg,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat image code help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>输出编辑内容</button>
    </>
    );
}

export default Rich;