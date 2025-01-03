import { createContext, useContext, useMemo, useCallback } from 'react';
import { TreeNode } from '../services/treeService';

interface TreeContextType {
  addNode: (parentPath: number[], title: string) => void;
  removeNode: (path: number[]) => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

interface TreeProviderProps {
  children: React.ReactNode;
  value: TreeNode;
  onChange: (newValue: TreeNode) => void;
}

export const TreeProvider: React.FC<TreeProviderProps> = ({ children, value, onChange }) => {

  const addNode = useCallback((parentPath: number[], title: string) => {
    const newValue = { ...value };
    let current = newValue;
    for (const index of parentPath) {
      current = current.children[index];
    }
    current.children.push({ title, children: [] });
    onChange(newValue);
  }, [value, onChange]);

  const removeNode = useCallback((path: number[]) => {
    const newValue = { ...value };
    let current = newValue;
    for (let i = 0; i < path.length - 1; i++) {
      current = current.children[path[i]];
    }
    current.children.splice(path[path.length - 1], 1);
    onChange(newValue);
  }, [value, onChange]);

  const contextValue = useMemo(() => ({ addNode, removeNode }), [addNode, removeNode]);

  return (<TreeContext.Provider value={contextValue}>
      {children}
    </TreeContext.Provider>);
};

export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTreeContext must be used within a TreeProvider');
  }
  return context;
};
