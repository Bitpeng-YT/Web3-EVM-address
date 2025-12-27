import React, { useState } from 'react';
import { ethers } from 'ethers';

function WalletGenerator() {
  const [address, setAddress] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const generateWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setAddress(wallet.address);
    setMnemonic(wallet.mnemonic.phrase);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制');
    } catch {
      alert('复制失败');
    }
  };

  return (
    <div className="wallet-generator">
      <h1 className="title">Ethereum 钱包生成器</h1>
      <button className="generate-btn" onClick={generateWallet}>
        生成新钱包
      </button>

      {address && (
        <div className="result">
          <div className="field">
            <label>地址</label>
            <div className="value">
              <span>{address}</span>
              <button className="copy-btn" onClick={() => copyToClipboard(address)}>
                复制
              </button>
            </div>
          </div>

          <div className="field">
            <label>助记词（12词）</label>
            <div className="value">
              <span>{mnemonic}</span>
              <button className="copy-btn" onClick={() => copyToClipboard(mnemonic)}>
                复制
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="disclaimer">
        仅供学习使用，请勿用于真实资产
      </p>
    </div>
  );
}

export default WalletGenerator;
