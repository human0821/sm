import type { ReactQuillProps } from "react-quill";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { WysiwygStyle } from "./Wysiwyg.styles";

export function Wysiwyg(props: ReactQuillProps) {
  return (
    <WysiwygStyle>
      <ReactQuill
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
            ["link", "image"],
          ],
        }}
        {...props}
      />
    </WysiwygStyle>
  );
}
