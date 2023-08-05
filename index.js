marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

const defaultMarkdown = `
  # Heading 1
  ## Subheading 2
  [Visit OpenAI](https://www.openai.com)
  \`inline code\`
  
  \`\`\`
  // code block
  function greet() {
    console.log("Hello, world!");
  }
  \`\`\`
  
  - List Item 1
  - List Item 2
  
  > This is a blockquote.
  
  ![OpenAI Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Openai.png/300px-Openai.png)
  
  **Bold Text**
  `;

function App() {
    const [text, setText] = React.useState(defaultMarkdown);

    return ( <
        div className = "text-center px-4" >
        <
        h1 className = "p-4" > Markdown Previewer < /h1> <
        textarea name = "text"
        id = "editor"
        rows = "10"
        value = { text }
        onChange = {
            (e) => setText(e.target.value) }
        className = "textarea" >
        < /textarea> <
        h3 className = "mt-3" > Output < /h3> <
        Preview markdown = { text }
        /> <
        /div>
    );
}

function Preview({ markdown }) {
    return ( <
        div dangerouslySetInnerHTML = {
            {
                __html: marked(markdown, { renderer: renderer }),
            }
        }
        id = "preview" >
        < /div>
    );
}

ReactDOM.render( < App / > , document.getElementById("root"));