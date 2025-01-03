export interface TreeNode {
    title: string;
    children: TreeNode[];
  }
  
  export interface Tree {
    title: string;
    value: TreeNode;
  }
  
  export const treeService = {
    getTree: (): Tree | null => {
      const treeData = localStorage.getItem('tree_data');
      return treeData ? JSON.parse(treeData) : null;
    },
  
    saveTree: (tree: Tree): void => {
      localStorage.setItem('tree_data', JSON.stringify(tree));
    },
  };
  
  