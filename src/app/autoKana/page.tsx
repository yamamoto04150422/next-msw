"use client";

import { useAutoKana } from "@/hooks/useAutoKana";

const PersonName = () => {
  const person1 = useAutoKana("personName1", "personNameKana1");
  const person2 = useAutoKana("personName2", "personNameKana2");

  return (
    <>
      <div>
        <input
          type="text"
          id="personName1"
          placeholder="名前1"
          onChange={person1.handleNameChange}
          ref={person1.nameRef}
        />
        <input
          type="text"
          id="personNameKana1"
          placeholder="カナ1"
          ref={person1.nameKanaRef}
        />
      </div>
      <div>
        <input
          type="text"
          id="personName2"
          placeholder="名前2"
          onChange={person2.handleNameChange}
          ref={person2.nameRef}
        />
        <input
          type="text"
          id="personNameKana2"
          placeholder="カナ2"
          ref={person2.nameKanaRef}
        />
      </div>
    </>
  );
};

export default PersonName;
