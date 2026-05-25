
  const url = new URL(window.location.href);

  const repo = url.searchParams.get("repo");
  const userId = url.searchParams.get("userId");
  const template = url.searchParams.get("template");

  loadRepoContent({
    repo,
    userId,
    template
  });
