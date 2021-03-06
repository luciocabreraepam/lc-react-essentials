# LC React Essentials

It is a small set of reusable **components** created  to implement web UIs consistently.

Go to the Storybook and try things out https://lc-react-essentials-storybook.web.app/?path=/story/welcome-getting-started--page

<br/>


## 📦 NPM
 <br/>
 
[See on NPM](https://www.npmjs.com/package/lc-react-essentials)

<br/><br/>

## 📦 How to install


```sh
npm install lc-react-essentials
```

```sh
yarn add lc-react-essentials
```

<br/>



## 🚀 Usage

Once installed, all you have to do is import the components as needed, for example:

```js
import React from "react";
import { ContentBlock, Button } from "lc-react-essentials";

const App = () => (
  <ContentBlock
    title={`I am Brajeam George`}
    subtitle={`And I'm a Photographer`}
    fontColor='black'
    children={
      <>
        <Button label='Hire me' />
        <Button label='Galery' />
      </>
    }
  />
);

export default App;
```
<br/>


## 🔨 Troubleshooting
In case of any issue, head over to the GitHub repo and [create an issue](https://github.com/luciocabrera/lc-react-essentials/issues) if your issue does not already exist.
<br/>


