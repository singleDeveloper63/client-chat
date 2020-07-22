import React,{ Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';
class App extends Component{
  render() {
    return (
       <Editor apiKey='gjzkgs1h0s7qiq5hcwi8o1refkb30ivor429dtsacrs39g8p'
        init={{
          width : 'auto',
          height : 300,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor | codesample code',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount image'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | codesample | code \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help image'
        }}
       />
    );
  }
}

export default App;