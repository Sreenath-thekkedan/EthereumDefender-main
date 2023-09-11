import { useState } from "react";
import {
  Alert,
  Button,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from "@mui/material";
import csvDownload from "json-to-csv-export";
import { useRouter } from "next/router";

const WALLET_ID = "0x00f1c77935ac482fc075b55b5990e86ea40851bb";
const BASE_URL = "https://api.blockcypher.com/v1/eth/main/";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleCollectData = () => {
    // fetch(`${BASE_URL}addrs/${WALLET_ID}`)
    //   .then((response) => response.json())
    //   .then(async (response) => {
    //     const transactionRefs = response?.txrefs
    //     const transactions = await Promise.all(transactionRefs.map((transactionRef: any)=>{
    //       return fetch(`${BASE_URL}txs/${transactionRef.tx_hash}`)
    //       .then((response) => response.json())
    //     }))
    //     console.log(transactions)
    //     // const dataToConvert = {
    //     //   data: json,
    //     //   filename: 'ip_addresses_report',
    //     //   delimiter: ',',
    //     //   // headers: ['IP', "Full Name", "IP Address"]
    //     // }
    //     // csvDownload(dataToConvert)
    //     // setShowAlert(true)
    //     // setTimeout(() => {
    //     //   setShowAlert(false)
    //     // }, 8000);
    //   });
  };

  const handleSubmitWalletId = () =>{
    router.push('/Transactions');
  }

  const handleSubmitTrxId = () => {
    router.push('/PhishingResult');
  }

  return (
    <Box margin={2}>
      <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h3" component="h3" color={"#272829"}>
          Welcome to Ethereum Defender
        </Typography>
      </Box>

      <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h5" component="h5" color={"#61677A"}>
          Find phishing in your ethereum transactions.
        </Typography>
      </Box>

      <Card sx={{ marginTop: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Fetch all wallet transactions
          </Typography>
          <TextField
            label="Enter the wallet id"
            variant="outlined"
            size="small"
          />
          <Button variant="outlined" onClick={handleSubmitWalletId} sx={{marginLeft:2}}>Submit</Button>
        </CardContent>
      </Card>

      
      <Card sx={{ marginTop: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Scan the transaction
          </Typography>
          <TextField
            label="Enter the transaction hash"
            variant="outlined"
            size="small"
          />
          <Button variant="outlined" onClick={handleSubmitTrxId} sx={{marginLeft:2}}>Submit</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
