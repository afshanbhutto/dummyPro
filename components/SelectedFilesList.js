/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import QRCode from "qrcode";
import { saveAs } from "file-saver";

function SelectedFilesList({ selectedFiles }) {
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [showFacebookShare, setShowFacebookShare] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [qrCodeImageSrc, setQrCodeImageSrc] = useState("");

  useEffect(() => {
    if (showQrCode) {
      setShowFacebookShare(false);
      setShowTwitter(false);
      setShowWhatsapp(false);
    }
  }, [showQrCode]);

  const generateQRCode = async (text, size = 100) => {
    try {
      const canvas = document.createElement("canvas");
      await QRCode.toCanvas(canvas, text, { width: size, height: size });

      const qrCodeImage = canvas.toDataURL();
      setQrCodeImageSrc(qrCodeImage);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleQrCodeClick = () => {
    const qrCodeValue = "https://example.com/qr-code";
    setQrCodeValue(qrCodeValue); // Set qrCodeValue state
    generateQRCode(qrCodeValue, 100); // Adjust the size to 50x50

    setShowQrCode(true);
    setShowFacebookShare(false);
    setShowTwitter(false);
    setShowWhatsapp(false);
  };

  const handleDownloadClick = async () => {
    try {
      const canvas = document.createElement("canvas");
      await QRCode.toCanvas(canvas, qrCodeValue, { width: 50, height: 50 });

      canvas.toBlob((blob) => {
        saveAs(blob, "qr-code.png");
      });
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  const handleCopyLinkClick = () => {
    // Generate link or handle copy link logic here
    const link = "https://example.com/qr-code";
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };
  const handleFacebookClick = () => {
    setShowQrCode(false); // Hide QR code
    setShowFacebookShare(true);
    setShowTwitter(false); // Hide Twitter content
    setShowWhatsapp(false); // Hide WhatsApp content
  };

  const handleTwitterClick = () => {
    setShowQrCode(false); // Hide QR code
    setShowFacebookShare(false); // Hide Facebook content
    setShowTwitter(true);
    setShowWhatsapp(false); // Hide WhatsApp content
  };

  const handleWhatsappClick = () => {
    setShowQrCode(false); // Hide QR code
    setShowFacebookShare(false); // Hide Facebook content
    setShowTwitter(false); // Hide Twitter content
    setShowWhatsapp(true);
  };

  // Reset visibility when selected files change
  useEffect(() => {
    setShowFacebookShare(false);
    setShowTwitter(false);
    setShowWhatsapp(false);
    setShowQrCode(false);
  }, [selectedFiles]);
  return (
    <>
      <div className="container mx-auto  bg-yellow-50 grow min-w-[300px] flex p-2 ">
        <div id="link-info" className="flex-1 bg-red-400">
          <div>
            <h2 className="text-xl font-bold">Title</h2>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
          <div className="pt-20">Add more</div>
        </div>

        <div className="flex flex-col flex-1">
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400"
            onClick={handleQrCodeClick}
          >
            <div id="icon">
              <BsQrCode size={32} round />
            </div>
            <div id="platform-name" className="uppercase">
              GET a qr code
            </div>
          </button>
          <div className=" h-[2px] bg-yellow-400 "></div>
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400"
            onClick={handleWhatsappClick}
          >
            <div id="icon">
              <WhatsappIcon size={32} round />
            </div>
            <div id="platform-name" className="uppercase">
              WHastsapp
            </div>
          </button>
          <div className=" h-[2px] bg-yellow-400 "></div>
          <button className="flex gap-4 items-center px-2 py-2 bg-slate-400">
            <div id="icon">
              <IoChatbubblesOutline size={32} round />
            </div>
            <div id="platform-name" className="uppercase">
              Messages
            </div>
          </button>
          <div className=" h-[2px] bg-yellow-400 "></div>
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400"
            onClick={handleFacebookClick}
          >
            <div id="icon">
              <FacebookIcon size={32} round />
            </div>
            <div id="platform-name" className="uppercase">
              Facebook
            </div>
          </button>
          <div className=" h-[2px] bg-yellow-400 "></div>
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400"
            onClick={handleTwitterClick}
          >
            <div id="icon">
              <TwitterIcon size={32} round />
            </div>
            <div id="platform-name" className="uppercase">
              Twitter
            </div>
          </button>
          <div className=" h-[2px] bg-yellow-400 "></div>
        </div>

        <div id="customization" className="flex-1">
          <div className="flex  gap-4">
            {" "}
            <AiOutlineLink size={20} />
            <input type="text" placeholder="CUSTOMIZE LINK" />
          </div>
          <div className="flex  gap-4">
            {" "}
            <BiSolidLockAlt size={20} />
            <input type="password" placeholder="PASSWORD" />
          </div>
        </div>
      </div>

      {showQrCode && (
        <div className="bg-slate-400 flex flex-col items-center">
          <div className="qr-code-container">
            <img src={qrCodeImageSrc} alt="QR Code" width="100" height="100" />
          </div>

          <button onClick={handleDownloadClick}>Download</button>
          <button onClick={handleCopyLinkClick}>Copy Link</button>
          <div className="w-[80%] mx-4">
            <input type="password" placeholder="SET A PASSWORD" />
          </div>
        </div>
      )}

      {showWhatsapp && (
        <div className="bg-slate-400">
          <WhatsappShareButton url="https://example.com/share-url">
            Share on Whatsapp
          </WhatsappShareButton>
        </div>
      )}

      {showFacebookShare && (
        <div className="bg-slate-400">
          <FacebookShareButton url="https://example.com/">
            Share on Facebook
          </FacebookShareButton>
        </div>
      )}
      {showTwitter && (
        <div className="bg-slate-400">
          <TwitterShareButton url="https://example.com/share-url">
            Share on Twitter
          </TwitterShareButton>
        </div>
      )}
    </>
  );
}

export default SelectedFilesList;
