interface CallBackOptions {
  successCb?: (T) => T;
  errorCb?: (T) => T;
  completeCb?: (T) => T;
  failCb?: (T) => T;
}
