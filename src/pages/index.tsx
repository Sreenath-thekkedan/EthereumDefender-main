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
import { LoadingButton } from '@mui/lab';
import csvDownload from "json-to-csv-export";
import { useRouter } from "next/router";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [walletId, setWalletId] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const router = useRouter();

  const handleSubmitWalletId = () =>{
    if(!walletId){
      alert("Enter a valid wallet id")
      return
    }
    router.push({
      pathname: '/Transactions',
      query: { walletId },
    })
  }

  const handleSubmitTrxId = () => {
    if(!transactionHash){
      alert("Enter a valid wallet id")
      return
    }
    router.push({
      pathname: '/PhishingResult',
      query: { transactionHash },
    })
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
     <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h5" component="h5" color={"#61377A"}>
        Phishing refers to fraudulent attempts to trick users or other participants in the blockchain ecosystem in order to steal confidential data, private keys, or cryptocurrency assets. Similar to phishing attacks in other domains, blockchain network phishing attacks are targeted at individuals who engage with blockchain technology, such as cryptocurrency owners, traders, and blockchain developers.
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
            value={walletId}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setWalletId(event.target.value);
            }}
          />
          <LoadingButton variant="outlined" onClick={handleSubmitWalletId} sx={{marginLeft:2}}>Submit</LoadingButton>
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
            value={transactionHash}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTransactionHash(event.target.value);
            }}
          />
          <LoadingButton variant="outlined" onClick={handleSubmitTrxId} sx={{marginLeft:2}}>Submit</LoadingButton>
        </CardContent>
      </Card>
    </Box>
  );
}
