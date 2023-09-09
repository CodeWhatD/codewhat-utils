/**
 * Menu Info
 */
interface MenuItem {
  label: string;
  resourceId: string;
  parentId?: string;
  children?: MenuItem[];
}
interface FlatMenuOptions {}

const flatMenu = () => {};
