import AvatarDefault from "./AvatarDefault";
import "./CSS/Wallet.css"

function Wallet(props) {
  return (
    <div className="wallet-wallet" style={props.style}>
      <div className="wallet-frame-16452x">
        <div className="wallet-rectangle-153x">
          <div className="wallet-frame-16451x">
            <p className="wallet-hive">Hive</p>
            <div className="wallet-ellipse-1x" />
          </div>
          <div className="wallet-frame-16503x">
            <div className="wallet-frame-16502x">
              <div className="wallet-ellipse-2x" />
            </div>
            <div className="wallet-frame-16453x">
              <AvatarDefault className="wallet-avatar-default-1" />
              <p className="wallet-hi-omotayo">Hi, Omotayo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-frame-16522x">
        <p className="wallet-my-wallet">My Wallet</p>
        <div className="wallet-frame-16504x">
          <p className="wallet-all-payments-receive">
            All payments receive will appear here.
          </p>
        </div>
      </div>
      <div className="wallet-frame-16529x">
        <div className="wallet-frame-16528x">
          <div className="wallet-frame-16527x">
            <div className="wallet-frame-16526x">
              <div className="wallet-frame-16524x">
                <p className="wallet-text-5">Total amount receive</p>
                <p className="wallet-ngn-35800x">NGN 35,800</p>
              </div>
            </div>
            <div className="wallet-frame-16361x">
              <p className="wallet-text-2">Withdraw to bank</p>
            </div>
          </div>
        </div>
        <div className="wallet-frame-16457x">
          <div className="wallet-frame-16456x">
            <p className="wallet-text">Activity</p>
            <p className="wallet-text-1">Clear all</p>
          </div>
          <div className="wallet-frame-16426x">
            <div className="wallet-frame-16425x">
              <p className="wallet-text-3">No transaction</p>
              <p className="wallet-text-4">
                You have not made any transaction yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Wallet.defaultProps = {
  className: "",
  style: {},
};

export default Wallet;
