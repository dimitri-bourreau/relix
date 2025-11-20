import { VideoData } from "@/features/video/types/video-data.type";
import { ResultsContainer } from "@/components/result-container.component";
import Link from "next/link";

interface SearchResultsProps {
  results: VideoData[];
  isPending: boolean;
  inputIsEmpty: boolean;
}

export const SearchResults = ({
  results,
  isPending,
  inputIsEmpty,
}: SearchResultsProps) => {
  return (
    <ResultsContainer inputIsEmpty={inputIsEmpty} isPending={isPending}>
      <ul className="flex flex-col gap-4 w-full h-full overflow-auto">
        {results.map((videoData, index) => (
          <li
            key={`${JSON.stringify(videoData)}-${index}`}
            className="flex gap-4"
          >
            {!videoData.videoUrl || videoData.videoUrl === "" ? (
              <div className="w-[160px] h-[120px] bg-black-500/40" />
            ) : (
              <video
                width="160"
                height="120"
                controls
                preload="auto"
                poster={videoData.videoPosterUrl || undefined}
              >
                <source src={videoData.videoUrl} type="video/mp4" />
              </video>
            )}
            <div>
              <p>Mot : {videoData.word}</p>
              {videoData.source ? (
                <Link href={videoData.source}>Source</Link>
              ) : (
                <p>Pas de source</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ResultsContainer>
  );
};
