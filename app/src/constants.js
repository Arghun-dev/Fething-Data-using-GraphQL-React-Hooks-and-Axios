export const GRAPHQL_API = "http://localhost:8080/graphql";

export const GET_VIDEOS_QUERY = `
  query videos {
    videos {
      id
      title
      url
      author {
        id
        name
      }
    }
  }
`;