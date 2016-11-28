import WakeLockAndroid from './android';
import WakeLockIOS from './ios';

// http://stackoverflow.com/a/9039885
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export default (iOS ? WakeLockIOS : WakeLockAndroid);