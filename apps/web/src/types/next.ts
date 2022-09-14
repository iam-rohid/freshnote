import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};

export type CustomNextPage = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
