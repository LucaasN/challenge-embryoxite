import { useState, useEffect } from "react";
import { Box, Switch, FormControlLabel, Grid2 } from "@mui/material";
import { Tree } from "../components/Tree";
import { treeService, Tree as TreeType } from "../services/treeService";

export const HomePage: React.FC = () => {
  const [tree, setTree] = useState<TreeType | null>(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const savedTree = treeService.getTree();
    if (savedTree) {
      setTree(savedTree);
    } else {
      const initialTree: TreeType = {
        title: "Arbol",
        value: { title: "Raiz", children: [] },
      };
      setTree(initialTree);
      treeService.saveTree(initialTree);
    }
  }, []);

  const handleTreeChange = (newValue: TreeType["value"]) => {
    if (tree) {
      const updatedTree = { ...tree, value: newValue };
      setTree(updatedTree);
      treeService.saveTree(updatedTree);
    }
  };

  if (!tree) return null;

  return (
    <Box sx={{ p: 3 }}>
      <Grid2 container spacing={2} offset={{  md: 2 }}>
        <Grid2 size={8} offset={{ md: 2 }}>
        <h1 className="text-center">Desafío React - Embryoxite</h1>
          <FormControlLabel
              control={
                <Switch
                  checked={editable}
                  onChange={(e) => setEditable(e.target.checked)}
                />
              }
              label="Modo edicion"
            />
            <Tree
              title={tree.title}
              value={tree.value}
              onChange={handleTreeChange}
              editable={editable}
            />
        </Grid2>
      </Grid2>
    </Box>
  );
};
