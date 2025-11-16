import { VideoData } from "@/features/video/types/video-data.type";

export interface VideoPort {
  getVideosForWord(word: string): Promise<VideoData[]>;
}
