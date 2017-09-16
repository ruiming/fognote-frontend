
export interface NoteInterface {
  id: number;
  /** 标题 */
  title: string;
  /** 链接 */
  url: string;
  /** 网站 ID */
  siteId: number;
  /** 简介 */
  summary: string;
  /** 内容 */
  description: string;
  /** 标签 */
  tags: string[];
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
  // /** 笔记订阅者 */
  // subscribers: NoteSubscribersUser[];
  // /** 网站 */
  // site: Site;
}

/**
 * 查询笔记的筛选条件
 */
export interface NoteQueryInterface {
  limit: number;
  offset: number;
  tags: string[];
}
