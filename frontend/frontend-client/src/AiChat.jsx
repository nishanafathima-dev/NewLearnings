import axios from "axios";
import { useState } from "react";

function AIChat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/gemini/chat",
      { message: msg }
    );
    setReply(res.data.reply);
  };

  return (
    <div>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={sendMessage}>Ask AI</button>
      <p>{reply}</p>
    </div>
  );
}

export default AIChat;