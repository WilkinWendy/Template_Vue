import httpClient from "@/utils/httpClient";

import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { HttpResponseType, CommonResponseType } from "@/utils/common/Response";

const config = {
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

function handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  config.headers.common["Authorization"] = "";
  return config;
}

function handleResponse(
  response: AxiosResponse<HttpResponseType>
): AxiosResponse<HttpResponseType> {
  return response;
}

/**
 * 这个方法需要整理，暂先不动
 * 后注: 这里应当根据实际情况选择性resolve和reject，并非所有都应reject
 * @param error
 */
function handleException(error: AxiosError): Promise<CommonResponseType> {
  let errorMsg;
  debugger;
  const axiosError = error;
  if (axiosError) {
    if (axiosError.response) {
      switch (axiosError.response.status) {
        case 401:
          errorMsg = axiosError.message;
          break;
        default:
          errorMsg = axiosError.response.statusText || axiosError.message;
          break;
      }
    } else if (axiosError.request) {
      errorMsg = axiosError.request.statusText || axiosError.message;
    } else {
      errorMsg = axiosError.message;
    }
  }
  return Promise.reject(new CommonResponseType(false, errorMsg, error));
}

export class HttpInstance {
  public static instance: httpClient;
  static getInstance(): httpClient {
    if (typeof this.instance === "undefined") {
      this.instance = new httpClient(config, {
        handleException,
        handleRequest,
        handleResponse
      });
    }
    return this.instance;
  }
}
