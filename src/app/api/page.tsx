"use client";

import ApiButton from "@/fetch/ApiButton";
import { setUpMocks } from "@/mocks/browser";

export default function page() {
  setUpMocks();

  return (
    <>
      <p>test</p>
      <ApiButton></ApiButton>
    </>
  );
}
