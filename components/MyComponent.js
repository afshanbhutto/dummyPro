import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const MyComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const shareFile = (file) => {
    const url = URL.createObjectURL(file);
    const shareText = "Check out this file!";
    const messageBody = `Hey, take a look at this file: ${url}%0D%0A%0D%0A${shareText}`;

    return (
      <div key={file.name} className="flex flex-col text-white">
        <WhatsappShareButton url={url} title={shareText} className="mb-2">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <FacebookShareButton
          url={window.location.href}
          quote={shareText}
          className="mb-2"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={shareText} className="mb-2">
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <a href={`sms:&body=${encodeURIComponent(messageBody)}`}>
          <IoChatbubblesOutline size={32} />
        </a>
      </div>
    );
  };

  const shareFiles = () => {
    if (uploadedFiles.length === 0) {
      return null;
    }

    return uploadedFiles.map((file) => shareFile(file));
  };

  return (
    <div className="container w-full flex gap-40 items-center mx-auto justify-center bg-white shadow-lg p-10">
      <div className="min-w-[60px] w-[30%] bg-black text-white flex flex-col container h-full py-10 px-8">
        <input type="file" onChange={handleFileUpload} multiple />
      </div>
      <div className="social-buttons flex flex-col bg-black text-white  container min-w-[60px] w-[30%] py-5">
        {shareFiles()}
      </div>
    </div>
  );
};

export default MyComponent;
