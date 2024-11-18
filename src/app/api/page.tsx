"use client";

import ApiButton from "@/fetch/ApiButton";
import { setUpMocks } from "@/mocks/browser";
import FetchDataButton from "./FetchButton";

export default function page() {
  setUpMocks();

  return (
    <>
      <p>test</p>
      <h2>msw</h2>
      <ApiButton></ApiButton>
      <h2>api fetch</h2>
      <FetchDataButton />
    </>
  );
}
