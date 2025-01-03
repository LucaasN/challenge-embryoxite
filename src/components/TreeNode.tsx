import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Collapse } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TreeNode as TreeNodeType } from "../services/treeService";
import { useTreeContext } from "../context/TreeContext";
import { useSnackbar } from "../context/SnackbarContext";
import { AddNodeForm } from "./AddNodeForm";

interface TreeNodeProps {
  node: TreeNodeType;
  path: number[];
  editable: boolean;
  collapseAll?: boolean;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  path,
  editable,
  collapseAll,
}) => {
  const { addNode, removeNode } = useTreeContext();
  const { showSnackbar } = useSnackbar();
  const [showAddForm, setShowAddForm] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(collapseAll || false);
  }, [collapseAll]);

  const handleToggleCollapse = () => setCollapsed(!collapsed);
  const handleAddClick = () => setShowAddForm(true);
  const handleAddCancel = () => setShowAddForm(false);

  const handleAddSubmit = (title: string) => {
    addNode(path, title);
    showSnackbar("Nodo agregado exitosamente", "success");
    setShowAddForm(false);
  };

  const handleRemoveClick = () => {
    removeNode(path);
    showSnackbar("Nodo eliminado exitosamente", "error");
  };

  return (
    <li>
      <Box display="flex" alignItems="center" sx={{ borderBottom: 1, p: 2  }}>
        {node.children.length > 0 && (
          <IconButton size="small" onClick={handleToggleCollapse}>
            {collapsed ? (
              <AddIcon fontSize="small" />
            ) : (
              <RemoveIcon fontSize="small" />
            )}
          </IconButton>
        )}
        <Typography>{node.title}</Typography>
        {editable && (
          <>
            <IconButton size="small" onClick={handleAddClick}>
              <AddCircleOutlineIcon fontSize="small" />
            </IconButton>
            {path.length > 0 && (
              <IconButton size="small" onClick={handleRemoveClick}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </>
        )}
      </Box>
      {showAddForm && (
        <AddNodeForm onAdd={handleAddSubmit} onCancel={handleAddCancel} />
      )}

      {node.children.length > 0 && (
        <Collapse in={!collapsed}>
          <ul>
            {node.children.map((child, index) => (
              <TreeNode
                key={`${child.title}-${index}`}
                node={child}
                path={[...path, index]}
                editable={editable}
                collapseAll={collapseAll}
              />
            ))}
          </ul>
        </Collapse>
      )}
    </li>
  );
};
