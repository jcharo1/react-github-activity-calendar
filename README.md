# React Github Activity Calendar

React component for displaying a user's Github activity in a calendar format.

## Installation

To install the package, run:

```bash
npm install --save react-github-activity-calendar

```

## Usage/Examples

To use the Graph component in your React project, import it and include it in your component's render method:

```javascript
import { Graph } from "react-github-activity-calendar";

function App() {
  const githubApiKey = ""; // <your-github-api-key>
  const githubUserName = ""; // <github-username>
  const bgcolor = "";
  const textColor = "";

  return (
    <div className="App">
      <Graph
        userName={githubUserName}
        backgroundColor={bgcolor}
        githubApiKey={githubApiKey}
        color={textColor}
      />
    </div>
  );
}

export default App;
```

## Props

- `userName` (required): The Github username for which to display activity.
- `backgroundColor` (optional): The background color of the calendar (hex color code, e.g. `#ffffff`).
- `color` (optional): The color of the text and github icon(hex color code, e.g. `#000000`).
- `apiKey` (required): Your Github API key. It is requried that you generate your own API key from Github and pass it as a prop to the component If no API key is provided, the component will not be able to make requests to the Github API, to display your activity. I have provided steps to generate your api token below.

## Generating a Github API Key

In case you forget where to see your tokens: https://github.com/settings/tokens
To generate a Github API key, follow these steps:

Sign in to your Github account.
Go to your Settings page.
Click on Developer settings in the left-hand menu.
Click on Personal access tokens in the left-hand menu.
Click on Generate new token.
Give your token a name and select the scope to read:user.
Click on Generate token.
Copy the token and keep it somewhere safe.

## Authors

- [@jcharo1](https://www.github.com/jcharo1)

## Screenshots

![App Screenshot](https://github.com/jcharo1/react-github-activity-calendar/blob/main/github.png)
