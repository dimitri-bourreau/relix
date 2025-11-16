"use client";

import { useDeferredValue, useEffect, useState } from "react";
import { getVideoDataForWord } from "@/features/video/services/get-video-data-for-word";
import { VideoData } from "@/features/video/types/video-data.type";
import { useDebounce } from "@/hooks/use-debounce.hook";

export default function Home() {
  const [inputQuery, setInputQuery] = useState("");
  const [results, setResults] = useState<VideoData[]>([]);
  const debouncedInputQuery = useDebounce(inputQuery);
  const deferredInputQuery = useDeferredValue(debouncedInputQuery);

  const updateResults = async (inputQuery: string): Promise<void> => {
    if (!inputQuery) return void setResults([]);
    const elixResults = await getVideoDataForWord(inputQuery);
    return void setResults(elixResults);
  };

  useEffect(() => {
    void updateResults(deferredInputQuery);
  }, [deferredInputQuery]);

  return (
    <section className="flex flex-col gap-4 items-center">
      <p>{JSON.stringify(results)}</p>
      <input
        name="word-query"
        placeholder="Ajouter un mot"
        className="bg-white/20 px-4 py-2 rounded text-center hover:bg-white/50 hover:cursor-pointer"
        onChange={({ target }) => setInputQuery(target.value)}
      />
    </section>
  );
}
