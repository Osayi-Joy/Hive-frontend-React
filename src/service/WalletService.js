import axios from "axios";

const MAKE_PAYMENT_API_BASE_URL = "http://localhost:8080/transaction/payment";
const WALLET_WITHDRAWAL_API_BASE_URL = "";

class WalletService {
    initializePaymentAndGetUrl(data, token) {
        return axios.post(MAKE_PAYMENT_API_BASE_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                 "Content-Type": "application/json"
            }
        });
    }

    withdrawFromWallet(data, token) {
        return axios.post(WALLET_WITHDRAWAL_API_BASE_URL, data, {
            headers: {
                Authorization: `Bearer ${token}` // Add the Bearer token to the headers
            }
        });
    }

}

export default new WalletService();