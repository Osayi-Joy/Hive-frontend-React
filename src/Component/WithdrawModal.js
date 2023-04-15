import IconClear from "./IconClear";
import "./css/WithdrawalModal.css";

function WithdrawModal(props) {


  return (
    <div className="modal-default-modal-default" style={props.style}>
      <div className="modal-default-rectangle-1x">
        <div className="modal-default-frame-16421x">
          <p className="modal-default-withdraw-funds">Withdraw funds</p>
          <IconClear/>
        </div>
        <div className="modal-default-frame-16355x">
          <div className="modal-default-button-default">
            <p className="modal-default-text">Withdraw</p>
          </div>
        </div>
        <div className="modal-default-containing_box_2x">
          <div className="modal-default-frame-16424x">
            <div className="modal-default-frame-16353x">
              <p className="modal-default-bank">Bank</p>
              <select>
              <option value="option1">Zenith Bank </option>
              <option value="option2">Access Bank</option>
              <option value="option3">GT Bank</option>
            </select>
            </div>
            <div className="modal-default-frame-16423x">
              <div className="modal-default-frame-16350x">
                <p className="modal-default-account-number">
                  Account Number
                </p>
                  <input className="modal-default-button-default-2"></input>
              </div>
              <div className="modal-default-frame-16423x-1">
                <p className="modal-default-amount">Amount</p>
                <input className="modal-default-button-default-2"></input>
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
