import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise,
  AxiosError
} from "axios";
import {
  responseWrapper,
  HttpResponseType,
  CommonResponseType
} from "./common/Response";

const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

function defaultHandleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  config.headers.common["Authorization"] = "";
  return config;
}

function defaultHandleResponse(
  response: AxiosResponse<HttpResponseType>
): AxiosResponse<HttpResponseType> {
  return response;
}

/**
 * 这个方法需要整理，暂先不动
 * 后注: 这里应当根据实际情况选择性resolve和reject，并非所有都应reject
 * @param error
 */
function defaultHandleException(error: Error): any {
  return Promise.reject(new CommonResponseType(false, error.message, error));
}

/**
 * 请求器
 * 说明：
 * (后续对于处理应该传入处理函数由用户定制，而非写死)
 * 原则上来说，HttpClient应该只关注请求是否正常（一般来说是status = 200），只要请求正常就应正常返回，异常走异常块。至于响应体中的用户自定义code码属于业务部分，应该在具体的service中去判断。（考虑复用性可抽离通用处理方法）
 * 原则虽然如此，但对于特定的场景，用户仍然可以通过定制处理函数，来使部分用户请求体code码被认为是响应错误，而走调用方的异常块。
 */
export default class HttpClient implements IHttpClient {
  //实例部分逻辑
  private _axios!: AxiosInstance;
  public constructor(
    config: AxiosRequestConfig = defaultAxiosConfig,
    interceptors?: {
      handleRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
      handleResponse?: (
        config: AxiosResponse<HttpResponseType>
      ) => AxiosResponse<HttpResponseType>;
      handleException?: (error: AxiosError) => Promise<CommonResponseType>;
    }
  ) {
    interceptors?.handleException;
    const instance = (this._axios = axios.create(config));

    instance.interceptors.request.use(
      interceptors?.handleRequest || defaultHandleRequest
    );
    instance.interceptors.response.use(
      interceptors?.handleResponse || defaultHandleResponse,
      interceptors?.handleException || defaultHandleException
    );
  }

  async call<T>(config: AxiosRequestConfig): Promise<HttpResponseType<T>> {
    try {
      let res = await this._axios(config);
      return responseWrapper<T>(res);
    } catch (error) {
      throw new CommonResponseType(false, error.message, error);
    }
  }

  async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<HttpResponseType<T>> {
    try {
      let res = await this._axios.get(url, config);
      return responseWrapper<T>(res);
    } catch (error) {
      throw new CommonResponseType(false, error.message, error);
    }
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpResponseType<T>> {
    try {
      let res = await this._axios.post(url, data, config);
      return responseWrapper<T>(res);
    } catch (error) {
      throw new CommonResponseType(false, error.message, error);
    }
  }
}

/**
 * 请求客户端接口
 * 目前只定义了必要的部分
 */
export interface IHttpClient {
  call<T = any>(config: AxiosRequestConfig): Promise<HttpResponseType<T>>;
  // (url: string, config?: AxiosRequestConfig): Promise<HttpResponseType>;
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<HttpResponseType<T>>;
  // delete<T = any>(
  //   url: string,
  //   config?: AxiosRequestConfig
  // ): Promise<HttpResponseType>;
  // head<T = any>(
  //   url: string,
  //   config?: AxiosRequestConfig
  // ): Promise<HttpResponseType>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpResponseType<T>>;
  // put<T = any>(
  //   url: string,
  //   data?: any,
  //   config?: AxiosRequestConfig
  // ): Promise<HttpResponseType>;
  // patch<T = any>(
  //   url: string,
  //   data?: any,
  //   config?: AxiosRequestConfig
  // ): Promise<HttpResponseType>;
}
