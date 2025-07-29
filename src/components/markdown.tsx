import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownContentLoading = () => {
  return (
    <div className="bg-white h-dvh flex flex-col items-center justify-center gap-4">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-30 h-30 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="px-3 py-1 lg:text-xl md:text-lg sm:text-md font-medium leading-none text-center text-blue-800 animate-pulse dark:bg-blue-900 dark:text-blue-200">
        loading page...
      </div>
    </div>
  );
};

const MarkdownContent = ({
  pageId,
}: {
  pageId: string;
  className?: string;
}) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const markdownRender = async () => {
      const response = await fetch("/api/notion-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId }),
      });
      const { markdown } = await response.json();
      setMarkdownContent(markdown);
    };

    markdownRender();
  }, [pageId]);

  if (markdownContent === "") {
    return <MarkdownContentLoading />;
  }

  return (
    <div
      className={`h-full min-h-full text-left bg-white dark:bg-gray-700 p-3 text-black font-display`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        skipHtml={false}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
          ),
          p: ({ ...props }) => (
            <>
              <p
                className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 inline"
                {...props}
              />
              <br />
            </>
          ),
          a: ({ href, ...props }) => (
            <a
              href={href}
              className="text-blue-600 hover:underline"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              className="list-disc list-inside ml-5 mb-4 space-y-1"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal list-inside ml-5 mb-4 space-y-1"
              {...props}
            />
          ),
          li: ({ ...props }) => <li className="ml-1" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic mb-4 text-gray-600 dark:text-gray-400"
              {...props}
            />
          ),
          code(props) {
            const { className, children, ...restProps } = props;
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const isInline = !className || !className.includes("language-");

            if (isInline) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-700 rounded px-1 text-sm font-mono text-red-600 dark:text-red-400 text-wrap"
                  {...restProps}
                >
                  {children}
                </code>
              );
            }

            return (
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4 overflow-x-auto">
                <code className={`language-${language} text-sm`} {...restProps}>
                  {children}
                </code>
              </pre>
            );
          },
          table: ({ ...props }) => (
            <table
              className="table-auto w-full text-left border-collapse mb-6"
              {...props}
            />
          ),
          th: ({ ...props }) => (
            <th
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 font-medium"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td className="border-t px-4 py-2" {...props} />
          ),
          hr: ({ ...props }) => (
            <hr
              className="my-8 border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
          img: ({ ...props }) => (
            <img
              className="rounded-lg my-4 mx-auto"
              alt={props.alt}
              {...props}
            />
          ),
          details: ({ ...props }) => (
            <details
              className="my-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
          summary: ({ ...props }) => (
            <summary
              className="cursor-pointer font-semibold mb-2 text-gray-800 dark:text-gray-200"
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
