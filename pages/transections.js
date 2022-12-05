import { ethers } from "ethers";
import { useEffect, useState } from "react";
import erc20abi from "./ERC20abi.json";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

export default function App() {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [error, setError] = useState();
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    tokenName: "-",
    tokenSymbol: "-",
    totalSupply: "-"
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );

      erc20.on("Transfer", (from, to, amount, event) => {
        console.log({ from, to, amount, event });

        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount)
          }
        ]);
      });
      setContractListened(erc20);

      return () => {
        contractListened.removeAllListeners();
      };
    }
  }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

    const tokenName = await erc20.name();
    const tokenSymbol = await erc20.symbol();
    const totalSupply = await erc20.totalSupply();
    // const deptoyAddress = await erc20.deptoyAddress();

    setContractInfo({
      address: data.get("addr"),
      tokenName,
      tokenSymbol,
      totalSupply
    });
  };

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance)
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
  };

  return (
    <div className="transPage">
      <div>
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="first-section">
            <main className="">
              <h2 className="heading-1">
                check smart contract Token Information for Trnasections
              </h2>
              <div className="contractAddress">
                <h3>ERC20 contract address is - </h3> <p>0xab7546ff14aea7cc97d7207a8bf712b3ea45a1ae</p>
              </div>



              <div className="my-3 input-section">
                <input
                  type="text"
                  name="addr"
                  className=""
                  placeholder="ERC20 contract address"
                />
                <button
                  type="submit"
                  className=""
                >
                  Get token info
                </button>
              </div>

              <div className="px-4">
                <div className="table">
                  <table className="">
                    <thead>
                      <tr className="table-row">
                        <th >Name  </th>
                        <th>Symbol  </th>
                        <th>Total_supply</th>
                        <th> Contract_address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td>{contractInfo.tokenName}  </td>
                        <td>{contractInfo.tokenSymbol}  </td>
                        <td>{String(contractInfo.totalSupply)}  </td>
                        <td>{contractInfo.address}  </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </main>




            <div className="table">
              <table className="">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{balanceInfo.address}</th>
                    <td>{balanceInfo.balance}</td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="btn">
              <button
                onClick={getMyBalance}
                type="submit"
                className=""
              >
                Get your balance in DEVCoin
              </button>
            </div>

          </div>
        </form>
        <div className="section-2">
          <div className="mt-4 p-4">
            <h3 className="heading-1">
              Contribute DevCoins For all donation NFT's On 0x62B752e89811Bd4626fCa486C73Fe2320Cd9835b  Wallet Address
            </h3>

            <form onSubmit={handleTransfer} className="input-section2">
              <div className="my-3">
                <input
                  type="text"
                  name="recipient"
                  className=""
                  placeholder="Donation Wallet address"
                />
              </div>
              <div className="my-3 ">
                <input
                  type="text"
                  name="amount"
                  className=""
                  placeholder=" DEvcoin Amount to Donate"
                />
              </div>

              <button
                type="submit"
                className=""
              >
                Donate
              </button>

            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className="mt-4 p-4">
            <h2 className="heading-1">
              Recent transactions And Donations for Donation NFT's Are
            </h2>
            <p>
              <TxList txs={txs} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
