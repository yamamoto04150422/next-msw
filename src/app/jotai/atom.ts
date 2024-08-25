// next-basic/app/jotai/atoms.ts
import { atom } from "jotai";

// カウンターの状態を管理するatom
export const countAtom = atom(0);

// ユーザーの認証状態を管理するatom
export const userAuthenticatedAtom = atom(false);
