/**
 * @property `[createTime]` 创建时间
 * @property `[dataSetFeaturesCount]` 数据集特征总数
 * @property `[dataSetId]` 数据集id
 * @property `[dataSetLabelFeaturesName]` 数据集标签类特征名称
 * @property `[dataSetLabelFeaturesNum]` 数据集标签列序号
 * @property `[dataSetName]` 数据集名称
 * @property `[dataSetSampleCount]` 数据集样本总数
 * @property `[delFlag]` 是否删除
 * @property `[id]` 主键id
 * @property `[updateTime]` 修改时间
 */
export interface SampleInterface {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 数据集特征总数
   */
  dataSetFeaturesCount?: number;
  /**
   * 数据集id
   */
  dataSetId?: number;
  /**
   * 数据集标签类特征名称
   */
  dataSetLabelFeaturesName?: string;
  /**
   * 数据集标签列序号
   */
  dataSetLabelFeaturesNum?: number;
  /**
   * 数据集名称
   */
  dataSetName?: string;
  /**
   * 数据集样本总数
   */
  dataSetSampleCount?: number;
  /**
   * 是否删除
   */
  delFlag?: number;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
}