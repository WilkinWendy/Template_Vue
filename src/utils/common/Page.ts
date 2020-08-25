export interface Paging {
  pageNum?: number;
  pageSize?: number;
}

/**
 * 分页条件类型
 */
export interface PageCondition<T> {
  paging: Paging;
  filter: T;
}

/**
 * 分页结果类，这里之所以使用class不用interface，是因为后期会加一些处理，逻辑需要class的加持
 */
export class PageResult<T> {
  public readonly pageNum: number = 1;
  public readonly pageSize: number = 10;
  public readonly dataCount: number = 10;
  public readonly list: T[] = [];

  /**
   * 构造函数
   * @params pageNum {number} 页码
   * @params pageSize {number} 每页大小
   * @params dataCount {number} 总计
   * @params list {T[]} 数据集
   */

  constructor(pageNum: number, pageSize: number, dataCount: number, list: T[]) {
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.dataCount = dataCount;
    this.list = list;
  }
}
