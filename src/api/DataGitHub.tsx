export type GitHubUser = {
  name: string;
  login: string;
  created_at: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: null | string;
  company: string;
};

export async function fetchGitHubUser(
  username: string
): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {      
      return null;
    }
    const data: GitHubUser = await res.json();
    return data;
  } catch (err) {  
    return null;
  }
}
