import type { FlatMenuOptions, MenuItem } from "./types";
import { isUndefined } from "../checkTypes";
const flatMenu = (options: FlatMenuOptions) => {
  const { data, lazy, needDeepClone } = options;
  const result: MenuItem[] = [];
  /**
   * 此函数用于迭代找出父菜单
   */
  const findTargetParent = (
    target: MenuItem[],
    parentId: string,
    needPushItem: MenuItem
  ) => {
    target.forEach((maybeParent) => {
      if (maybeParent.resourceId === parentId) {
        needPushItem.already = true;
        maybeParent.children.push(needPushItem);
      } else {
        findTargetParent(maybeParent.children, parentId, needPushItem);
      }
    });
  };
  const innerIterate = (needConvertArray: MenuItem[] = data) => {
    needConvertArray.forEach((menuItem) => {
      if (!menuItem.parentId) {
        menuItem.already = true;
        result.push(menuItem);
      } else {
        findTargetParent(result, menuItem.parentId, menuItem);
      }
    });
    const _needConverArray = needConvertArray.filter((needConvert) => {
      return isUndefined(needConvert.already);
    });
    if (_needConverArray.length > 0) {
      innerIterate(_needConverArray);
    }
  };
  /**
   * clear not in origin obj attr
   */
  const clear = () => {
    data.forEach((res) => {
      delete res.already;
    });
  };
  /**
   * 此函数给外部提供触发组装菜单数据
   */
  const init = (isLazy: boolean = lazy) => {
    innerIterate();
    clear();
  };
  init();
  return {
    result: needDeepClone ? structuredClone(result) : result,
    init,
  };
};

export default flatMenu;
