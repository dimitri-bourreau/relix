"use server";

import { ElixResponse } from "@/features/video/types/elix-response.type";
import { VideoData } from "@/features/video/types/video-data.type";

export const getVideoDataForWord = async (
  inputQuery: string,
): Promise<VideoData[]> => {
  const apiKey = process.env.ELIX_API_KEY || "";
  const url = `https://elix-api-preprod.cleverapps.io/meanings/${inputQuery}?apikey=${apiKey}&size=10`;
  const elixRawResponse = await fetch(url);
  const elixJson: ElixResponse = await elixRawResponse.json();

  if (elixJson.total === 0) return [];
  return elixJson.data.map((videoData) => ({
    contributor: videoData.definition.contributor,
    id: videoData.definition.id,
    source: videoData.definition.source,
    videoUrl: videoData.definition.path,
    word: videoData.definition.word,
  }));
};
