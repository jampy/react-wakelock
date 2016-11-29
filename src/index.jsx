import WakeLockAndroid from './android';
import WakeLockIOS from './ios';

// http://stackoverflow.com/a/9039885
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export default (iOS ? WakeLockIOS : WakeLockAndroid);


if (console.warn) {
  console.warn("Warning: <WakeLock> will abort any HTTP requests every 15" +
    " seconds on iOS - see https://github.com/jampy/react-wakelock/issues/1");
}