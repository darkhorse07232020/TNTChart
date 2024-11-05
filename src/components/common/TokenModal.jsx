import React from 'react';

import { removeW } from "../../utils/funcs";
import { formatNumber } from "../../utils/funcs";
import { Button, Modal, Box } from "@mui/material";

const TokenModal = ({ tokenInfo, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalContentStyle}>
        <h2>Token Information</h2>
        <div style={{ display: "flex" }}>
          <img
            src={
              tokenInfo.logo
                ? `https://assets.thetatoken.org/tokens/${tokenInfo.logo}`
                : svg2img(tokenInfo)
            }
            style={
              tokenInfo.logo
                ? { width: "20px", marginRight: "10px" }
                : { width: "20px", marginRight: "10px", borderRadius: "50%" }
            }
          />
          <div className="font-header" style={{ marginRight: "3px" }}>
            {removeW(tokenInfo.symbol)}
          </div>
          <span
            className="font-regular"
            style={{
              fontSize: "small",
              color: "#449782",
            }}
          >
            {"+" +
              (tokenInfo.tradeVolumeETH * 1
                ? (
                  ((tokenInfo.volume24HrsETH * 1) / (tokenInfo.tradeVolumeETH * 1)) *
                  100
                ).toFixed(2)
                : "0") +
              "%"}
          </span>
        </div>
        <p><strong>Price: </strong>${+tokenInfo.derivedUSD}</p>
        <p><strong>Price ETH: </strong>ETH{+tokenInfo.derivedETH}</p>
        <p><strong>Market Cap: </strong>${formatNumber(+tokenInfo.tradeVolumeUSD)}</p>
        <p><strong>Liquidity: </strong>${formatNumber(+tokenInfo.totalLiquidityUSD)}</p>
        <p><strong>Volume: </strong>{formatNumber(+tokenInfo.tradeVolume)}</p>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            textTransform: "none",
            color: "black",
            borderColor: "primary",
            padding: "0.5vw",
            display: "flex",
            textWrap: "nowrap",
            overflow: "hidden",
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '400px',
  width: '100%',
  color: 'black',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

export default TokenModal;