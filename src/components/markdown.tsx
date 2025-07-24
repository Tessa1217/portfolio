import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";

const MarkdownContent = ({
  mdFilePath,
  className,
}: {
  mdFilePath: string;
  className: string;
}) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const markdownRender = async () => {
      const response = await fetch("/api/notion-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId: mdFilePath }),
      });
      const { markdown } = await response.json();
      setMarkdownContent(markdown);
    };

    markdownRender();
  }, [mdFilePath]);

  return (
    <div className="h-full text-left bg-white p-3 text-black font-display">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <>
              <p
                className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 inline-block"
                {...props}
              />
              <br />
            </>
          ),
          a: ({ node, href, ...props }) => (
            <a
              href={href}
              className="text-blue-600 hover:underline"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside ml-5 mb-4 space-y-1"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside ml-5 mb-4 space-y-1"
              {...props}
            />
          ),
          li: ({ node, ...props }) => <li className="ml-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic mb-4 text-gray-600 dark:text-gray-400"
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            return inline ? (
              <code
                className="bg-gray-100 dark:bg-gray-700 rounded px-1 text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <pre className="bg-gray-100 text-red-400 rounded-sm px-0.5 overflow-auto inline text-center">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          table: ({ node, ...props }) => (
            <table
              className="table-auto w-full text-left border-collapse mb-6"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 font-medium"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td className="border-t px-4 py-2" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr
              className="my-8 border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="rounded-lg my-4 mx-auto"
              alt={props.alt}
              {...props}
            />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
