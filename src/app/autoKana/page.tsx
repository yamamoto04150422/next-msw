"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const PersonName = () => {
  const personNameRef = useRef<HTMLInputElement>(null);
  const personNameKanaRef = useRef<HTMLInputElement>(null);
  const [autokana, setAutoKana] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    if (typeof window !== "undefined") {
      // クライアントサイドでのみvanilla-autokanaをインポート
      import("vanilla-autokana").then((AutoKana) => {
        const ak = AutoKana.bind("#personName", "#personNameKana", {});
        setAutoKana(ak);
      });
    }
  }, []);

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const name = personNameRef.current;
    const kana = personNameKanaRef.current;

    if (!name) return;
    name.value = e.target.value;

    if (!kana || !autokana) return;
    kana.value = autokana.getFurigana();
  };

  return (
    <>
      <input
        type="text"
        id="personName"
        placeholder="名前"
        onChange={onChangeEvent}
        ref={personNameRef}
      />
      <input
        type="text"
        id="personNameKana"
        placeholder="カナ"
        ref={personNameKanaRef}
      />
    </>
  );
};

export default PersonName;
