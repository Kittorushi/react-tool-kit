import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((r) => r.json());
const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function useUser() {
  const { data, mutate } = useSWR("/api/user", fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}
export function useCurrentUser() {
  const { data, mutate } = useSWR("/api/user", fetcher);
  const user = data?.user;
  return [user, { mutate }];
}
