/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
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

  const url = "https://example.com";
  const title = "Check out this awesome website!";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClickForWhatsapp = () => {
    if (isMobile) {
      const shareableUrl = `whatsapp://send?text=${encodeURIComponent(
        `${title} - ${url}`
      )}`;
      window.location.href = shareableUrl;
    } else {
      const webShareableUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
        `${title} - ${url}`
      )}`;
      window.open(webShareableUrl, "_blank");
    }
  };

  const handleClickForFacebook = () => {
    const shareableUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    if (isMobile) {
      window.location.href = shareableUrl;
    } else {
      window.open(shareableUrl, "_blank");
    }
  };

  const handleClickForTwitter = () => {
    const shareableUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    if (isMobile) {
      window.location.href = shareableUrl;
    } else {
      window.open(shareableUrl, "_blank");
    }
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
      <div className="container mx-auto  bg-yellow-500 grow min-w-[300px] flex flex-col md:flex-row  p-2 ">
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

        <div className="flex flex-col flex-1 mt-2 md:mt-0">
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

        <div id="customization" className=" flex flex-col flex-1 mt-2 md:mt-0 ">
          <div className="flex  gap-4 items-center">
            {" "}
            <AiOutlineLink size={20} className="text-white" />
            <input
              type="text"
              placeholder="CUSTOMIZE LINK"
              className="bg-transparent border-b-2 w-full mr-2 text-black focus:outline-none"
            />
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <BiSolidLockAlt size={20} className="text-white" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent border-b-2 w-full mr-2 text-black focus:outline-none"
            />
          </div>
        </div>
      </div>

      {showQrCode && (
        <div className="bg-slate-400 flex flex-col items-center w-full  md:basis-1/3 pt-2 ">
          <div className="qr-code-container">
            <img src={qrCodeImageSrc} alt="QR Code" width="100" height="100" />
          </div>

          <button onClick={handleDownloadClick}>Download</button>
          <button onClick={handleCopyLinkClick}>Copy Link</button>
          <div className="flex  gap-4 items-center">
            {" "}
            <BiSolidLockAlt size={20} className="text-white" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent border-b-2 w-full mr-2 text-black  mb-2 focus:outline-none"
            />
          </div>
        </div>
      )}

      {showWhatsapp && (
        <div className="bg-slate-400 flex flex-col items-center w-full md:basis-1/3 pt-2 md:pt-0">
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400 flex-col"
            onClick={handleClickForWhatsapp}
          >
            <div id="icon">
              <WhatsappIcon size={32} round />
            </div>
            <button onClick={handleClickForWhatsapp}>Share on WhatsApp</button>
          </button>
        </div>
      )}

      {showFacebookShare && (
        <div className="bg-slate-400 flex flex-col items-center w-full md:basis-1/3 pt-2 md:pt-0">
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400 flex-col"
            onClick={handleClickForFacebook}
          >
            <div id="icon">
              <FacebookIcon size={32} round />
            </div>
            <button onClick={handleClickForFacebook}>Share on Facebook</button>
          </button>
        </div>
      )}
      {showTwitter && (
        <div className="bg-slate-400 flex flex-col items-center w-full md:basis-1/3 pt-2 md:pt-0">
          <button
            className="flex gap-4 items-center px-2 py-2 bg-slate-400 flex-col"
            onClick={handleClickForTwitter}
          >
            <div id="icon">
              <TwitterIcon size={32} round />
            </div>
            <button onClick={handleClickForTwitter}>Share on Twitter</button>
          </button>
        </div>
      )}
    </>
  );
}

export default SelectedFilesList;
