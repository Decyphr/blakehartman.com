export async function contentful(query: string, variables: object = {}) {
  // fetch homepage data
  const response = await fetch(import.meta.env.PUBLIC_CONTENTFUL_GRAPHQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  return json.data;
}
