import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { BASE_URL } from "@/constants";
// 0x00f1c77935ac482fc075b55b5990e86ea40851bb

export default function Transactions() {
  const [walletLoading, setWalletLoading] = useState(false);
  const [transactions, setTransactions] = useState();
  const router = useRouter();

  const walletId = router.query.walletId;

  useEffect(() => {
    setWalletLoading(true)
    fetch(`${BASE_URL}addrs/${walletId}`)
      .then((response) => response.json())
      .then(async (response) => {
        const transactionRefs = response?.txrefs;
        setTransactions(transactionRefs);
        setWalletLoading(false)
      })
      .catch(e=>{
        alert('Something went wrong')
      });
  }, []);

  const handleTransactionClick = (trxHash: string) => {
    
    router.push({
      pathname: '/PhishingResult',
      query: { transactionHash: trxHash },
    })
  };
  return (
    <Box margin={2}>
      <Box paddingTop={2} display={"flex"} flex={1}>
        <Typography variant="h3" component="h3" color={"#272829"}>
          Ethereum Defender
        </Typography>
      </Box>

      <Box paddingY={2} display={"flex"} flex={1} flexDirection={"row"}>
        <Typography variant="h5" component="h5" color={"#61677A"}>
          Transactions of wallet
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          color={"#4682A9"}
          paddingLeft={1}
        >
          {walletId}
        </Typography>
      </Box>

      {walletLoading ? (
        <Box sx={{ display: "flex", flex: 1 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List disablePadding>
          {(transactions || []).map((trx: any) => (
            <ListItem
              sx={{ backgroundColor: "#fff", marginBottom: 1 }}
              disablePadding
            >
              <ListItemButton
                onClick={() => handleTransactionClick(trx.tx_hash)}
              >
                <ListItemText primary={"Transaction Hash: " + trx.tx_hash} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
