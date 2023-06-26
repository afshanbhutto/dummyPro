import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { IoChatbubblesOutline } from "react-icons/io5";

const MyComponent = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const shareFile = () => {
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      const shareText = "Check out this file!";
      const message = `Hey, take a look at this file: ${url}`;

      return (
        <div>
          <WhatsappShareButton url={url} quote={shareText}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <FacebookShareButton url={url} quote={shareText}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={shareText}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <a href={`sms:&body=${encodeURIComponent(message)}`}>
            <IoChatbubblesOutline size={32} />
          </a>
        </div>
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={shareFile}>Share File</button>

      {shareFile()}
    </div>
  );
};

export default MyComponent;
