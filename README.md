# React wake-lock component

[![NPM](https://nodei.co/npm/react-wakelock.png)](https://npmjs.org/package/react-wakelock)


## Introduction

This is an invisible React component that tries to keep the browser/client 
awake - especially for mobile devices.

 
## Installation

```
npm i --save react-wakelock
```

## How to use (READ THIS! IMPORTANT!) 

```javascript
import WakeLock from 'react-wakelock';


render() {
  
  return (
    <div>
      ...
      <WakeLock />
      ...
    </div>
  );

}

```

Just add the component to your application. By default it is immediately 
"enabled".

**WARNING:** Due to browser limitations the wake-lock is *not* effective 
until the user first clicks/touches somewhere in the document. So, after 
adding/enabling the component, it will *not* prevent sleep until the user 
interacts with the page in some way (scrolling *not* being an interaction).

This limitation does not apply to iOS devices.


## How this works

The component uses two methods, depending on the operating system.

On Android, a invisible dummy-video is played in the background.

On iOS, an (hopefully unnoticeable) dummy navigation is performed every 15 
seconds.


## Props

- `preventSleep` - (`true` by default). You can use this property to control the 
  component behavior. Sleep is prevented only in `preventSleep===true` state.


## Credits

The component is based on [NoSleep.js](https://github.com/richtr/NoSleep.js) 
by Rich Tibbett. However, it is implemented differently and also uses 
different dummy videos that do not unnecessarily use CPU power.


## License
This project is licensed under the terms of the [MIT license](LICENSE)
