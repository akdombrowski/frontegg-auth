import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function ViewDetailsBtn({ btnTxt, onClick }: { btnTxt: string; onClick: () => void }) {
  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={onClick}
        sx={{
          flexGrow: 0,
          flexShrink: 2,
          flexBasis: "100%",
          fontWeight: 600,
        }}
      >
        {btnTxt}
      </Button>
    </Box>
  );
}

export default ViewDetailsBtn;
