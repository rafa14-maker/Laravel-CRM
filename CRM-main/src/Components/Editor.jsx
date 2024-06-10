import { useState, useRef, useEffect } from 'react';
import { Editor as ReactDraftWysiwyg } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.css';

export default function Editor(props) {
  const [editorState, setEditorState] = useState(() => {
    let initialContent = '';
    if (props.data && typeof props.data === 'string') {
      initialContent = props.data.trim(); // Assuming props.data is HTML content
    }

    const blocksFromHTML = convertFromHTML(initialContent);
    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(content);
  });

  const editorRef = useRef(null);

  useEffect(() => {
    // Focus on the editor when the component mounts
    if (editorRef.current && editorRef.current.focusEditor) {
      editorRef.current.focusEditor();
    }
  }, []);

  return (
    <article className="editor">
      <ReactDraftWysiwyg
        ref={editorRef}
        editorState={editorState}
        onEditorStateChange={(s) => setEditorState(s)}
        placeholder="Write something!"
        toolbarClassName='toolbar-wrapper'
      />
    </article>
  );
}
