import { useQueryStates, parseAsString } from "nuqs";

export const useUrlQuery = () => {
  return useQueryStates({
    q: parseAsString.withDefault(""),
  });
};
