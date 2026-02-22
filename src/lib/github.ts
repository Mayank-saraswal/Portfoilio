const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const GRAPHQL_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function getGithubContributions(username: string) {
  if (!GITHUB_TOKEN) {
    console.warn("GITHUB_TOKEN is missing");
    return null;
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: { username },
    }),
    next: { revalidate: 3600 },
  });

  const data = await response.json();
  return data?.data?.user?.contributionsCollection?.contributionCalendar;
}

export async function getLatestCommit(repo: string) {
  // If no token, return null to avoid rate limits or errors
  if (!GITHUB_TOKEN) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching latest commit:", error);
    return null;
  }
}
