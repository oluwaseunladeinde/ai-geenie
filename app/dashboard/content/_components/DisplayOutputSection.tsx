import React, { useRef } from 'react'
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {}

export const DisplayOutputSection = (props: Props) => {

    const editorRef: any = useRef();

    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-lg'>Your Result</h2>
                <Button className='flex gap-2'><Copy className='size-4' /> Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your result will appear here"
                height="600px"
                initailEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    )
};