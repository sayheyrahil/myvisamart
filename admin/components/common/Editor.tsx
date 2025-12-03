import * as React from "react"
import { Editor } from "@tinymce/tinymce-react"
import { TINY_MCE_API } from "@/lib/constants"

interface PageProps {
  value: string
  onChange: (value: string) => void
}

const Page: React.FC<PageProps> = ({ value, onChange }) => {
  // Helper to apply theme styles to the editor
 

  return (
    <div className="bg-white my-2  rounded-md transition-colors">
      <Editor
        value={value}
        apiKey={TINY_MCE_API}
        onEditorChange={onChange}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | help",
          content_style: `
            body {
              background-color: var(--editor-bg);
              color: var(--editor-color);
            }
          `,
           
        }}
      />
    </div>
  )
}

export default Page
