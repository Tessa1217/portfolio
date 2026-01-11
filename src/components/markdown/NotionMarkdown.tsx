import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

export default function NotionMarkdown({ children }: { children: string }) {
  return (
    <div
      className={`h-full min-h-full text-left bg-white dark:bg-gray-700 p-4 text-black font-display rounded-2xl`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        skipHtml={false}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-3xl font-bold mt-8 mb-4 text-light-text dark:text-dark-text"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-2xl font-semibold mt-6 mb-3 text-light-text dark:text-dark-text"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-xl font-semibold mt-5 mb-2 text-light-text dark:text-dark-text"
              {...props}
            />
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
              className="list-disc list-inside ml-5 mb-4 space-y-1 text-light-text dark:text-dark-text"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal list-inside ml-5 mb-4 space-y-1 text-light-text dark:text-dark-text"
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
            <Image
              className="rounded-lg my-4 mx-auto"
              crossOrigin="anonymous"
              decoding="auto"
              fill
              src={props.src!}
              alt={props.alt || "이미지"}
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
        {children}
      </ReactMarkdown>
    </div>
  );
}
