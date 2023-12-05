import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPost;
};

export const usePost = (posts, sort, query) => {
  const sortedPost = useSortedPosts(posts, sort);
  const sortedSearchedPosts = useMemo(() => {
    return sortedPost.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
    );
  }, [sortedPost, query]);
  return sortedSearchedPosts;
};
