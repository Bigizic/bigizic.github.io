import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import TypingEffect from "../TypingEffect";
import './style.css';

type EmailSenderProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
  setFormData: Function;
};

const EmailSender: React.FC<EmailSenderProps> = ({
  name,
  email,
  subject,
  message,
  setFormData
}) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const sendEmail = async () => {
      setStatus('loading')
      try {
        const response = await fetch(
          "https://eo3l2zqced0ciq5.m.pipedream.net",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setStatus("success");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } catch (error) {
        setStatus("error");
      } finally {
        setTimeout(() => setStatus(''), 3000);
      }
    };

    sendEmail();
  }, [name, email, subject, message]);

  return (
    <>
      {status.length > 0 && (
        <div className="email-overlay">
          <div className="email-overlay-content text-black">
            {status === "loading" && (
              <div className="flex gap-4">
                <TypingEffect
                  texts={["Sending..."]}
                  typingSpeed={100}
                  pauseTime={500}
                />
                <FaPaperPlane size={28} className="animate-plane" />
              </div>
            )}
            {status === "success" && <>Email sent successfully!</>}
            {status === "error" && <>Failed to send email.</>}
          </div>
        </div>
      )}

      {/* Paper plane flying animation */}
      <style>
        {`
          @keyframes fly {
            0% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(6px) rotate(10deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }
          .animate-plane {
            animation: fly 0.6s infinite ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default EmailSender;
