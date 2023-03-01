# react-github-activity-calendar

A brief description of what this project does and who it's for

## Installation

Install react-github-activity-calendar with npm

```bash
npm install --save react-github-activity-calendar

```

## Usage/Examples

```javascript
import { Graph } from "github-heatmap";

function App() {
  const githubUserName = "jcharo1";

  return (
    <div className="App">
      <Graph
        userName={githubUserName}
        backgroundColor={bgcolor}
        color={color}
        githubApiToken={githubApiToken}
      />
    </div>
  );
}

export default App;
```

## Tech Stack

**Client:** React

## Authors

- [@jcharo1](https://www.github.com/jcharo1)

## Screenshots

![App Screenshot](https://github.com/jcharo1/github-contribution-heatmap/blob/main/github-heatmap/github.png)
