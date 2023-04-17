import React, {useEffect, useState} from "react";
import "./css/WithdrawalModal.css";
import WalletService from "../service/WalletService";


//TODO: Validate entries from form before making API call
//TODO: Handle successful withdrawal-- success modal
//TODO: Handle unsuccessful withdrawal-- error modal

function WithdrawModal(props) {
  const [beneficiaryBankCode, setBeneficiaryBankCode] = useState("");
  const [beneficiaryAccountNumber, setBeneficiaryAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [banks, setBanks] = useState([]);

  const handleBankChange = (event) => {
    setBeneficiaryBankCode(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setBeneficiaryAccountNumber(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // get token from local storage to use in the header callback
  const token = localStorage.getItem("token");

  // Define walletBalance as a state variable
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    // Fetch wallet balance from API and update the state
    WalletService.getWalletBalance(token)
        .then((response) => {
          setWalletBalance(response.data.result.accountBalance);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [token]);

  useEffect(() => {
    // Fetch banks from API and update the state
    WalletService.getBankList(token)
        .then((response) => {
          console.log(response.data);
          setBanks(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [token]);

  const handleWithdrawal = () => {
    // Check if amount to withdraw exceeds wallet balance
    if (parseInt(amount) > walletBalance) {
      setErrorMessage("Withdrawal amount exceeds wallet balance.");
      return;
    }
    // make the requestdata
    const requestData = {
      amount,
      beneficiaryAccountNumber,
      beneficiaryBankCode,
      "currencyCode": "NGN",
      // "reason": "Wallet withdrawal",
      "narration": "Wallet withdrawal",
    };
    // Perform axios post call with withdrawal data

    WalletService.withdrawFromWallet(requestData, token)
        .then((response) => {
          setErrorMessage(response.data.error)
          setApiResponse(response.data.message)
          console.log(response.data.result);
          // Handle successful withdrawal
        })
        .catch((error) => {
          console.log(error);
        });

  }
    return (
        <div className="modal-default-modal-default" style={props.style}>
          <div className="modal-default-rectangle-1x">
            <div className="modal-default-frame-16421x">
              <p className="modal-default-withdraw-funds">Withdraw funds</p>
              {errorMessage && <p>{errorMessage}</p>}
                {apiResponse && <p>{apiResponse}</p>}
            </div>

            <div className="modal-default-frame-16355x">
              <div className="modal-default-button-default" onClick={handleWithdrawal}>
                <p className="modal-default-text">Withdraw</p>
              </div>
            </div>
            <div className="modal-default-containing_box_2x">
              <div className="modal-default-frame-16424x">
                <div className="modal-default-frame-16353x">
                  <p className="modal-default-bank">Bank</p>
                  <select value={beneficiaryBankCode} onChange={handleBankChange}>
                    {banks.map((bank) => (
                        <option key={bank.code} value={bank.code}>
                          {bank.bankName}
                        </option>
                    ))}
                  </select>
                </div>
                <div className="modal-default-frame-16423x">
                  <div className="modal-default-frame-16350x">
                    <p className="modal-default-account-number">Account Number</p>
                    <input
                        className="modal-default-button-default-2"
                        value={beneficiaryAccountNumber}
                        onChange={handleAccountNumberChange}
                    />
                  </div>
                  <div className="modal-default-frame-16423x-1">
                    <p className="modal-default-amount">Amount</p>
                    <input
                        className="modal-default-button-default-2"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }


WithdrawModal.defaultProps = {
  className: "",
  style: {},
};

export default WithdrawModal;
