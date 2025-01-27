import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../server/firebase/firebaseConfig";
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import '../styles/ChatPage.css';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentRoom, setCurrentRoom] = useState(null);
  const navigate = useNavigate();

  const chatRooms = [
    { id: "announcement", name: "Announcements", icon: "/announcement.png"  },
    { id: "general", name: "General Chat", icon: "/general.png" },
    { id: "anime", name: "Anime Chat", icon: "/anime.png" },
    { id: "manga", name: "Manga Chat", icon: "/manga.png" }
  ];

  // Check if user is logged in
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      alert("You must be logged in to access the chat.");
      navigate("/login");
    }
  }, [navigate]);

  // Fetch messages when a chat room is selected
  useEffect(() => {
    if (currentRoom) {
      const q = query(collection(db, `chatRooms/${currentRoom}/messages`), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const loadedMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text || "No text",
          user: doc.data().user || "Unknown",
          timestamp: doc.data().timestamp
            ? doc.data().timestamp.toDate().toLocaleString()
            : "No timestamp",
        }));
        setMessages(loadedMessages);
      });

      return () => unsubscribe();
    }
  }, [currentRoom]);

  // Handle sending a message
  const sendMessage = async (e) => {
    e.preventDefault();
    const userName = localStorage.getItem('userName');

    if (newMessage.trim() !== "" && userName && currentRoom) {
      try {
        await addDoc(collection(db, `chatRooms/${currentRoom}/messages`), {
          text: newMessage,
          user: userName,
          timestamp: serverTimestamp(),
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error.message);
        alert(`Failed to send message: ${error.message}`);
      }
    } else {
      alert("Please enter a message before sending.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
  
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when leaving
    };
  }, []);

  return (
    <div className="chatContainer">
      {currentRoom ? (
        <>
          <div className="backButtonContainer">
  <button onClick={() => setCurrentRoom(null)} className="backButton">
    ← Back to Chat Menu
  </button>
</div>

          <h2 className="chatTitle">{chatRooms.find(room => room.id === currentRoom)?.name}</h2>

          <div className="chatMessages">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div key={msg.id} className="chatMessage">
                  <strong>{msg.user}: </strong> {msg.text}
                  <br />
                  <small className='timestamp'>{msg.timestamp}</small>
                </div>
              ))
            ) : (
              <p className="noMessages">No messages yet. Start the conversation!</p>
            )}
          </div>

          <form onSubmit={sendMessage} className="chatForm">
            <input
              type="text"
              className="chatInput"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="sendButton">Send</button>
          </form>
        </>
      ) : (
        <>
          <h1 className="chatTitle">The Hunter's Chatroom</h1>
          <div className="chatRoomList">
            {chatRooms.map((room) => (
              <div 
                key={room.id} 
                className="chatRoomItem" 
                onClick={() => setCurrentRoom(room.id)}
              >
                <img src={room.icon} alt={room.name} className="roomIcon" style={{ filter: "invert(1)"}} />
                <span className="roomName">{room.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ChatPage;
