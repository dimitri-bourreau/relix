"use server";

import { VideoData } from "@/features/video/types/video-data.type";
import { VideoPort } from "@/features/video/video.port";
import { ElixResponse } from "@/features/video/types/elix-response.type";

export const getVideoDataForWord = async (
  adapter: VideoPort,
  inputQuery: string,
): Promise<VideoData[]> => {
  const elixVideoData: ElixResponse =
    await adapter.getVideosForWord(inputQuery);
  if (elixVideoData.total === 0) return [];

  return elixVideoData.data
    .map((videoData) =>
      typeof videoData?.definition.path !== "string"
        ? undefined
        : {
            contributor: videoData.definition.contributor,
            id: videoData.definition.id,
            source: videoData.definition.source,
            videoUrl: videoData.definition.path,
            videoPosterUrl: videoData.definition.image,
            word: videoData.definition.word,
          },
    )
    .filter((videoData) => !!videoData);
};
