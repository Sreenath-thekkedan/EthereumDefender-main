import { APP_BASE_URL } from "@/constants";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PhishingResult() {
  const [isLoading, setIsLoading] = useState(false)
  const [phishingResult, setPhishingResult] = useState('')
  const router = useRouter();

  const transactionHash = router.query.transactionHash;

  useEffect(() => {
    setIsLoading(true)
    fetch(`${APP_BASE_URL}/verify`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hash: transactionHash
      })
    }).then((response) => response.json())
      .then(async (response) => {
        setPhishingResult(response?.is_phished ? "Found" : "Not Found");
        setIsLoading(false)
      })
      .catch(e => {
        alert('Something went wrong')
      });
  }, []);

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

      {isLoading ? (
        <Box sx={{ display: "flex", flex: 1 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ marginTop: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography color={phishingResult === "Found"? "#F00": "#0F0"} fontSize={24} fontWeight={"bold"}>
              Result: {phishingResult}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
