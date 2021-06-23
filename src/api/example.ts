import { post, get } from '@/utils/axios';
import commonHandle from '@/api/commonHandle';

/** ******************************************** getData1212 1083186 start ********************************************** */

export interface IGetData1212Result {
  code: number;
  message: string;
  data: {
    list: {
      age: number;
      name: string;
      id: string;
    }[];
  };
}

export interface IGetData1212Params {
  courseId: string;
}

export interface IGetData1212ResultCallBackOptions {
  successCb?: (res: IGetData1212Result) => void;
  errorCb?: (res: IGetData1212Result) => void;
  completeCb?: (res: IGetData1212Result) => void;
  failCb?: (res: IGetData1212Result) => void;
}

/**
* get请求获取数据
* https://yapi.baidu.com/project/71010/interface/api/1083186
* @author ujozRbkug7youVHs1BcIc9bkPKe_cEN
* @returns
*/

export function getData1212(params: IGetData1212Params, options?: IGetData1212ResultCallBackOptions): Promise<IGetData1212Result> {
  const promiseRes = get<IGetData1212Result>('/api/getData1212', {
    params,
    notifySucess: true,
    notifyError: true,
  });
  return commonHandle<IGetData1212Result, IGetData1212ResultCallBackOptions>(promiseRes, options);
}

/** ******************************************** getData1212 1083186 end ********************************************** */

/** ******************************************** getData 1075211 start ********************************************** */

export interface IGetDataResult {
  code: number;
  message: string;
  data: {
    list: {
      name: string;
      id: number;
    }[];
  };
}

export interface IGetDataData {
  name: string;
}

export interface IGetDataResultCallBackOptions {
  successCb?: (res: IGetDataResult) => void;
  errorCb?: (res: IGetDataResult) => void;
  completeCb?: (res: IGetDataResult) => void;
  failCb?: (res: IGetDataResult) => void;
}

/**
* 获取数据
* https://yapi.baidu.com/project/71010/interface/api/1075211
* @author ujozRbkug7youVHs1BcIc9bkPKe_cEN
*
* @param {IGetDataData} params
* @returns
*/

export function getData(params: IGetDataData, options?: IGetDataResultCallBackOptions): Promise<IGetDataResult> {
  const promiseRes = post<IGetDataResult>('/api/getData', params,
    {
      notifySucess: true,
      notifyError: true,
    });
  return commonHandle<IGetDataResult, IGetDataResultCallBackOptions>(promiseRes, options);
}

/** ******************************************** getData 1075211 end ********************************************** */
