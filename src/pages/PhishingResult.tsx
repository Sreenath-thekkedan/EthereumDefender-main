import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export default function PhishingResult() {
  return (
    <Box margin={2}>
      <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h3" component="h3" color={"#272829"}>
          Ethereum Defender
        </Typography>
      </Box>

      <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h5" component="h5" color={"#61677A"}>
          Analysis Result
        </Typography>
      </Box>

      <Card sx={{ marginTop: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Result
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
