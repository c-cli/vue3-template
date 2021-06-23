interface Result {
  [k: string]: any
  code: number;
  message: string;
}
export default function commonHandle<T extends Result, Y extends CallBackOptions>(promiseRes: Promise<any>, options?: Y): Promise<T> {
  return new Promise((resolve, reject) => {
    promiseRes.then((result: T) => {
      if (result.code === 0) {
        if (options && options.successCb) {
          options.successCb(result);
        }
      } else if (options && options.errorCb) {
        options.errorCb(result);
      }

      if (options && options.completeCb) {
        options.completeCb(result);
      }
      resolve(result);
    }).catch((e: any) => {
      if (options && options.failCb) {
        options.failCb(e);
      }
      reject(e);
    });
  });
}
