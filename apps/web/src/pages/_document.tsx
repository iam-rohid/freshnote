import { Head } from "next/document";
import { NextScript } from "next/document";
import { Html } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en" className="dark">
      <Head></Head>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
