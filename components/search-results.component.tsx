import { VideoData } from "@/features/video/types/video-data.type";
import { ResultsContainer } from "@/components/result-container.component";

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
      {results.map((videoData, index) => (
        <p key={`${JSON.stringify(videoData)}-${index}`}>{videoData.word}</p>
      ))}
    </ResultsContainer>
  );
};
