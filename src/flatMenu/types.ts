export interface MenuItem {
  label: string; // 菜单名称
  resourceId: string; // 菜单唯一id
  parentId?: string; // 父级id
  children?: MenuItem[]; // 子集
  already?: boolean; // 是否已经放到指定位置
}
export interface FlatMenuOptions {
  data: MenuItem[];
  lazy?: boolean; // 是否由开发人员决定什么时候触发组装
  needDeepClone?: boolean; // 最终结果是否需要深克隆之后的结果
}
