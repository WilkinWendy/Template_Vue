import { AxiosResponse } from "axios";

/**
 * 通用响应包装处理类
 * @param response
 */
export function responseWrapper<T>(
  response: AxiosResponse
): HttpResponseType<T> {
  const responseData = response.data;
  const result = new HttpResponseType<T>(
    responseData.code,
    responseData.data,
    responseData.msg
  );
  if (!result.isSuccess) {
    throw new CommonResponseType(false, result.message, result);
  }
  return result;
}

/**
 * 通用响应类，可以任何函数的处理结果
 */
export class CommonResponseType {
  public readonly message?: string;
  public readonly blob?: any;
  public readonly isSuccess: boolean;

  /**
   * 构造函数
   * @param isSuccess 是否成功
   * @param message 信息
   * @param blob 其它信息
   */
  constructor(isSuccess: boolean, message?: string, blob?: any) {
    this.message = message;
    this.isSuccess = isSuccess;
    this.blob = blob;
  }
}

/**
 * 用于包装http响应的类型
 */
export class HttpResponseType<T = any> extends CommonResponseType {
  public readonly code: string;
  public readonly data: T;

  public static getIsSuccessByCode(code: string) {
    return code === "0000" || code === "200";
  }

  /**
   * 构造函数
   * @param code 状态码
   * @param data 数据
   * @param msg 消息
   */
  constructor(code: string, data: T, message: string) {
    super(HttpResponseType.getIsSuccessByCode(code), message);
    this.code = code;
    this.data = data;
  }
}
