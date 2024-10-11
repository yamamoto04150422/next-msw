"use client";

import { useAutoKana } from "@/hooks/useAutoKana";

const PersonName = () => {
  const { nameRef, nameKanaRef, handleNameChange } = useAutoKana();

  return (
    <>
      <input
        type="text"
        id="personName"
        placeholder="名前"
        onChange={handleNameChange}
        ref={nameRef}
      />
      <input
        type="text"
        id="personNameKana"
        placeholder="カナ"
        ref={nameKanaRef}
      />
    </>
  );
};

export default PersonName;
