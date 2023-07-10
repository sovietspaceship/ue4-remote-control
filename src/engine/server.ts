import { EditorLevelLibrary } from '../classes/libraries/editor-level-library';

export async function waitServer(delay = 1000, timeout = 0) {
  const ell = new EditorLevelLibrary();

  let wait = true;

  if (timeout) {
    setTimeout(() => {
      wait = false;
    }, timeout);
  }

  while (wait) {
    try {
      await ell.SelectNothing();
      return true;
    } catch (error) {
      await delayAsync(delay);
    }
  }

  return false;
}

function delayAsync(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
