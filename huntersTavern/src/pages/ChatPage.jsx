import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../server/firebase/firebaseConfig";
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import '../styles/ChatPage.css';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      alert("You must be logged in to access the chat.");
      navigate("/login");
    }
  }, [navigate]);

  // Load chat messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const userName = localStorage.getItem('userName');

    if (newMessage.trim() !== "" && userName) {
      try {
        await addDoc(collection(db, "messages"), {
          text: newMessage,
          timestamp: serverTimestamp(),
          user: userName, // Use logged-in user's name
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="chatContainer">
      <div className="chatMessages">
        {messages.map((msg) => (
          <div key={msg.id} className="chatMessage">
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chatForm">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatPage;
