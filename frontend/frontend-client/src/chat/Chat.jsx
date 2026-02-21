import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setChat((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", {
      senderId: "1",
      receiverId: "2",
      message,
    });
    setMessage("");
  };

  return (
    <div>
      {chat.map((m, i) => (
        <p key={i}>{m.message}</p>
      ))}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;