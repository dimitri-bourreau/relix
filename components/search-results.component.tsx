import { Sign } from "@/features/video/types/sign.type";
import { ResultsContainer } from "@/components/result-container.component";
import { useUrlQuery } from "@/hooks/use-url-query.hook";

interface SearchResultsProps {
  sign: Sign | undefined;
  isPending: boolean;
}

export const SearchResults = ({ sign, isPending }: SearchResultsProps) => {
  const [{ q }] = useUrlQuery();

  return (
    <ResultsContainer inputIsEmpty={!q} isPending={isPending}>
      {!sign ? (
        !q && <p>Elix n&apos;a pas trouvé de signe. 🙇</p>
      ) : (
        <video
          key={sign.videoUrl}
          width="480"
          height="360"
          preload="auto"
          poster={sign.videoPosterUrl || undefined}
          className="rounded"
          autoPlay
          controls
          loop
        >
          <source src={sign.videoUrl} type="video/mp4" />
        </video>
      )}
    </ResultsContainer>
  );
};
