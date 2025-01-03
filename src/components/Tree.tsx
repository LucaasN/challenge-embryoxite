import { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TreeNode } from "./TreeNode";
import { TreeProvider } from "../context/TreeContext";
import { Tree as TreeType } from "../services/treeService";

interface TreeProps {
  title: string;
  value: TreeType["value"];
  onChange: (newValue: TreeType["value"]) => void;
  editable: boolean;
}

export const Tree: React.FC<TreeProps> = ({
  title,
  value,
  onChange,
  editable,
}) => {
  const [collapseAll, setCollapseAll] = useState(false);

  const handleToggleCollapseAll = () => setCollapseAll(!collapseAll);

  return (
    <TreeProvider value={value} onChange={onChange}>
      <Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h3" component="h2" gutterBottom>
            {title} - 
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleToggleCollapseAll}>
              {collapseAll ? <ExpandMoreIcon fontSize="large"  /> : <ExpandLessIcon fontSize="large" />}
            </IconButton>
            <Typography variant="h3" component="h2" gutterBottom>
              {collapseAll ? "Expandir todo" : "Colapsar todo"}
            </Typography>
          </Box>
        </Box>
        <ul>
          <TreeNode
            node={value}
            path={[]}
            editable={editable}
            collapseAll={collapseAll}
          />
        </ul>
      </Box>
    </TreeProvider>
  );
};
