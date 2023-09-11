import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

const mockTransactions = [
  {
    tx_hash: "f38359b2eb7d091f7c858b6851b4cd4be5d31ceb12c0ceb09fdcd7e442f27af7",
    block_height: 11379478,
    tx_input_n: 0,
    tx_output_n: -1,
    value: 100380125573155555554,
    ref_balance: 0,
    confirmations: 6727072,
    confirmed: "2020-12-03T11:55:17Z",
    double_spend: false,
  },
  {
    tx_hash: "e9b4635544ec76ffb124024170977138cc4cb1b285063c01b0e8301d4dc3a201",
    block_height: 6697054,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 7980000000000000000,
    ref_balance: 100380125573155555554,
    confirmations: 11409496,
    confirmed: "2018-11-13T13:21:32Z",
    double_spend: false,
  },
  {
    tx_hash: "843cf55de70d224a0645d8b9a7aaf967be604ee32b473015f2c0f176f7b47461",
    block_height: 5732847,
    tx_input_n: 0,
    tx_output_n: -1,
    value: 838306230000000000,
    ref_balance: 92400125573155555554,
    confirmations: 12373703,
    confirmed: "2018-06-04T21:06:01Z",
    double_spend: false,
  },
  {
    tx_hash: "d58dd20995075897645e33b8a73af0c714f3a8f69fa17436d199e208ad8d57c7",
    block_height: 5448897,
    tx_input_n: 0,
    tx_output_n: -1,
    value: 1932840980000000000,
    ref_balance: 93238431803155555554,
    confirmations: 12657653,
    confirmed: "2018-04-16T04:20:02Z",
    double_spend: false,
  },
  {
    tx_hash: "0cb283bd6eb067a1654ab431de6b8b18f10f8ee59732c711f12efcf335ec9735",
    block_height: 5412493,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 7777777777,
    ref_balance: 95171272783155555554,
    confirmations: 12694057,
    confirmed: "2018-04-10T01:28:28Z",
    double_spend: false,
  },
  {
    tx_hash: "cc72911a30e3050f7d8cb08cdf402b5eb8b9e4f142bd115e48a93314ee31780e",
    block_height: 5412286,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 7777777777,
    ref_balance: 95171272775377777777,
    confirmations: 12694264,
    confirmed: "2018-04-10T00:38:44Z",
    double_spend: false,
  },
  {
    tx_hash: "cc72911a30e3050f7d8cb08cdf402b5eb8b9e4f142bd115e48a93314ee31780e",
    block_height: 5412280,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 7777777777,
    ref_balance: 95171272775377777777,
    confirmations: 12694270,
    confirmed: "2018-04-10T00:37:14Z",
    double_spend: false,
  },
  {
    tx_hash: "f8a96a7199417d28cf33d2f322027d9f6185867b3e02dccabc892c8c3bcf7582",
    block_height: 5284281,
    tx_input_n: 0,
    tx_output_n: -1,
    value: 4507374330000000000,
    ref_balance: 95171272767600000000,
    confirmations: 12822269,
    confirmed: "2018-03-19T16:40:45Z",
    double_spend: false,
  },
  {
    tx_hash: "a9b4f17328e132565025ed801be98f0a8c79be0d3d0b74d51cd8cd189816168d",
    block_height: 5283253,
    tx_input_n: 0,
    tx_output_n: -1,
    value: 20000105000000000000,
    ref_balance: 99678647097600000000,
    confirmations: 12823297,
    confirmed: "2018-03-19T12:26:06Z",
    double_spend: false,
  },
  {
    tx_hash: "f943f1fb2065e66177a43d002ea814c595b1a94bfbd83d4d4e8aaec3c532c6ce",
    block_height: 5114942,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 240778200000000000,
    ref_balance: 119678752097600000000,
    confirmations: 12991608,
    confirmed: "2018-02-18T21:48:34Z",
    double_spend: false,
  },
  {
    tx_hash: "398bde8ac88dfb1a0c05e19f718a46c3c467d4e4e7cb8a09ad40becc21a575ed",
    block_height: 5073485,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 239142910000000000,
    ref_balance: 119437973897600000000,
    confirmations: 13033065,
    confirmed: "2018-02-11T22:52:33Z",
    double_spend: false,
  },
  {
    tx_hash: "bb68ddd78da42f780382093145b674d63514a6be11f767fbbe3698b9f5b80f33",
    block_height: 5032380,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 240737500000000000,
    ref_balance: 119198830987600000000,
    confirmations: 13074170,
    confirmed: "2018-02-05T01:28:56Z",
    double_spend: false,
  },
  {
    tx_hash: "ec5ae6218cb0e369d934b78afe780fd6a0165c769be3ef50420f7571238efe94",
    block_height: 4991553,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 227323452300000000,
    ref_balance: 118958093487600000000,
    confirmations: 13114997,
    confirmed: "2018-01-29T03:06:44Z",
    double_spend: false,
  },
  {
    tx_hash: "9c543f568b179538dd3f1aab73d5bc0be962869f74d05d9bc34cdf713cf30bbb",
    block_height: 4949406,
    tx_input_n: -1,
    tx_output_n: 0,
    value: 468520000000000000,
    ref_balance: 118730770035300000000,
    confirmations: 13157144,
    confirmed: "2018-01-22T00:59:33Z",
    double_spend: false,
  },
];

export default function Transactions() {
  const router = useRouter();

  const handleTransactionClick = (trxHash: string) =>{
    router.push('/PhishingResult');

  }
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
          0x00f1c77935ac482fc075b55b5990e86ea40851bb
        </Typography>
      </Box>

      <List disablePadding>
        {mockTransactions.map((trx) => (
          <ListItem sx={{ backgroundColor: "#fff", marginBottom: 1 }} disablePadding>
            <ListItemButton onClick={()=>handleTransactionClick(trx.tx_hash)}>
              <ListItemText primary={"Transaction Hash: " + trx.tx_hash} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
