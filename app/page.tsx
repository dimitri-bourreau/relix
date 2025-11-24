"use client";

import { WordInput } from "@/components/word-input.component";
import { SearchResults } from "@/components/search-results.component";
import { Suspense, useState, useTransition } from "react";
import { Sign } from "@/features/video/types/sign.type";
import { searchSign } from "@/actions/search-sign.action";

export default function Home() {
  const [sign, setSign] = useState<Sign | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (word: string): Promise<void> => {
    startTransition(async () => {
      const signFromElix = await searchSign(word);
      setSign(signFromElix);
    });
  };

  return (
    <Suspense>
      <SearchResults sign={sign} isPending={isPending} />
      <WordInput searchForWord={handleSearch} />
    </Suspense>
  );
}
