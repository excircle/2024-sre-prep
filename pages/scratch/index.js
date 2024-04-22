import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import gfm from 'remark-gfm';

export default function Category() {

    const markdownContent = `
# GitHub-style Markdown Example!

This text includes **bold text** and *italic text*.

- [ ] task list item not done
- [x] task list item done

### Code Block

\`\`\`javascript
console.log("Hello, world!");
\`\`\`

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

This is a ~~strikethrough~~ example.
`;
    return (
        <div className="flex justify-center items-center py-8">
            <div className="border border-black border-opacity-25 w-3/4 p-6">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    );
}
