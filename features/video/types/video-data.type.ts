import { DefinitionOrSignBase } from "@/features/video/types/elix-response.type";

export interface VideoData {
  contributor: DefinitionOrSignBase["contributor"];
  id: DefinitionOrSignBase["id"];
  source: DefinitionOrSignBase["source"];
  videoUrl: string;
  videoPosterUrl: DefinitionOrSignBase["image"];
  word: DefinitionOrSignBase["word"];
}
