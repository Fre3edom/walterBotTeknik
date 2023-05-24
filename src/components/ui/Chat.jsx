import React from "react";
import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useLocation, Link } from "react-router-dom";
import { data } from "./Data";
import Custom from "./uiAssets/cogwheel.png";

export default function Chat({ customData }) {
  const location = useLocation().pathname;

  // Put you api key here
  const API_KEY = "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" ;
  
  let character = {};

  if (location == "/walter") {
    character = data.walter;
  } else if (location == "/jesse") {
    character = data.jesse;
  } else if (location == "/saul") {
    character = data.saul;
  } else if (location == "/gustavo") {
    character = data.gustavo;
  } else if (location == "/mike") {
    character = data.mike;
  } else {
    if (customData) {
      character = {
        name: customData.customBotName,
        contentPrompt: customData.customContentPrompt,
        messagePrompt: customData.customMessagePrompt,
        img: Custom,
      };
    }
  }

  const systemMessage = {
    role: "system",
    content: character.contentPrompt,
  };

  const [messages, setMessages] = useState([
    {
      message: character.messagePrompt,
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="chat">
      {character.img == Custom ? (
        <img
          src={character.img}
          alt=""
          className="chat__img--custom chat__img"
        />
      ) : (
        <img src={character.img} alt="" className="chat__img" />
      )}
      <div className="chat__wrapper">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                isTyping && (
                  <TypingIndicator content={character.name + " is typing"} />
                )
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Write a message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
