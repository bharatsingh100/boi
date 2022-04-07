import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    
    const issueLable = context.issue({
      labels: ["new"],
    });

    // const newlabel = await context.octokit.issues.getLabel(issueLable);

    console.log(context);
    await context.octokit.issues.addLabels(issueLable)
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
