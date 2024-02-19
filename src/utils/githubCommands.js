// useful-commands.js

/**
 * Useful Git and GitHub Commands
 */

// Git Commands
const gitCommands = [
	{
		command: 'git clone repository_url',
		description: 'Clone a repository.',
	},
	{
		command: 'git init',
		description: 'Initialize a new repository.',
	},
	{
		command: 'git add file',
		description: 'Add files to the index.',
	},
	{
		command: 'git commit -m "message"',
		description: 'Create a commit with a message.',
	},
	{
		command: 'git push origin branch',
		description: 'Push changes to a remote repository.',
	},
	{
		command: 'git pull origin branch',
		description: 'Fetch changes from a remote repository.',
	},
	{
		command: 'git branch',
		description: 'List branches in the repository.',
	},
	{
		command: 'git checkout branch_name',
		description: 'Switch to the specified branch.',
	},
	{
		command: 'git merge branch_name',
		description: 'Merge the specified branch into the current one.',
	},
	{
		command: 'git status',
		description: 'Show the status of the working directory and index.',
	},
];

// GitHub Commands
const githubCommands = [
	{
		command: 'git remote add origin repository_url',
		description: 'Add a remote GitHub repository as origin.',
	},
	{
		command: 'git push -u origin master',
		description: 'Push changes to the GitHub repository and set it as upstream.',
	},
	{
		command: 'git pull origin master',
		description: 'Fetch changes from the remote GitHub repository.',
	},
	{
		command: 'git remote -v',
		description: 'List remote repositories.',
	},
	{
		command: 'git clone github_repository_url',
		description: 'Clone a GitHub repository.',
	},
	{
		command: 'git fork',
		description: 'Create a copy of the repository on your GitHub account.',
	},
	{
		command: 'git branch --set-upstream-to=origin/branch branch',
		description: 'Set upstream for a local branch.',
	},
];

/**
 * Returns a string with the formatted commands and their descriptions.
 * @param commands - Array of commands with descriptions.
 * @returns Formatted string with commands and descriptions.
 */
const formatCommands = (commands) => {
	return commands.map((command, index) => `${index + 1}. ${command.command} - ${command.description}`).join('\n');
};

// Format Git and GitHub commands
const formattedGitCommands = formatCommands(gitCommands);
const formattedGitHubCommands = formatCommands(githubCommands);

// Generate Gist content
const gistContent = `
  # Useful Git and GitHub Commands
  
  ## Git Commands
  ${formattedGitCommands}
  
  ## GitHub Commands
  ${formattedGitHubCommands}
  
  ---
  
  This is a small collection of Git and GitHub commands with explanations that can be useful when working with your repositories.
  `;

console.log(gistContent);
