#🏹 Hunter's Tavern - A Hunter x Hunter Wiki 🏹
##Welcome to Hunter's Tavern, an all-encompassing Hunter x Hunter wiki website built with a fully functional forum, detailed character and location pages, and a secure login/logout system. This project leverages ##modern web technologies to provide an engaging experience for fans of the series.

#🚀 Features
##Character Pages:

###Detailed information about key characters from the series.
###Dynamic data rendering using React and Vite.
Location Pages:

Comprehensive details of important locations such as Whale Island, Yorknew City, Heavens Arena, and Greed Island.
User Authentication:

Secure login and logout functionality using MongoDB, Express.js, and Axios.
Session handling for personalized user experiences.
Forum:

Interactive discussion sections for users to share insights and theories.
Responsive Design:

Fully responsive UI built with HTML, CSS, and React, ensuring accessibility across devices.
🛠️ Tech Stack
Frontend:
⚛️ React + Vite (Fast development and build times)
🎨 HTML, CSS (Custom styling)
🌐 Axios (HTTP requests)
Backend:
🟢 Node.js (Runtime environment)
🚀 Express.js (Backend framework)
💾 MongoDB (Database for user authentication and forum data)
📁 Project Structure
php
Copy
Edit
huntersTavern
│-- node_modules/       # Project dependencies
│-- public/             # Static assets
│-- server/             # Backend server files (Express.js, MongoDB)
│   ├── app.js          # Main server setup
│   ├── mongo.js        # Database connection
│-- src/                # Frontend React components
│   ├── assets/         # Images and static assets
│   ├── pages/          # Pages such as Home, Characters, Locations
│   ├── Sections/       # Navbar, Footer, etc.
│   ├── styles/         # CSS stylesheets
│-- .gitignore          # Ignored files
│-- package.json        # Project dependencies and scripts
│-- vite.config.js      # Vite configuration
│-- README.md           # Project documentation (this file)
⚙️ Installation and Setup
Prerequisites:
Ensure you have the following installed:

Node.js (v16+ recommended)
MongoDB (Atlas or local instance)
Git
Vite (for fast frontend builds)
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/HuntersTavern.git
cd HuntersTavern
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env file in the root directory and add:

makefile
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=7000
4. Start the backend server
bash
Copy
Edit
cd server
node app.js
5. Start the frontend development server
bash
Copy
Edit
npm run dev
🌐 Deployment
The project is deployed on Vercel, and the backend is hosted on MongoDB Atlas.

To deploy manually:
Build the frontend:

bash
Copy
Edit
npm run build
Deploy to Vercel:

bash
Copy
Edit
vercel deploy --prod
📸 Screenshots
Homepage
![image](https://github.com/user-attachments/assets/0ec1d1f7-a514-47d0-a482-463560a9a793)


Character Page
![image](https://github.com/user-attachments/assets/6dcec237-ffdc-4882-a471-552ed407be9b)


Location Page
![image](https://github.com/user-attachments/assets/03fdfadd-290b-4db3-ba58-e6b50ddb6585)

Login Page
![image](https://github.com/user-attachments/assets/0191344f-fcde-473b-b412-b05ff092a3f4)

Sign-up Page
![image](https://github.com/user-attachments/assets/56ff8f41-7f99-44cc-acd5-a712f417461f)


🐞 Known Issues & Improvements
Implement user contribution to add to library of information
Add profile pictures and an account section
Improve forum moderation features.
Implement better error handling for user authentication.
Add pagination for forum threads.
🤝 Contributing
Contributions are welcome! Feel free to:

Fork the repository.
Create a new branch: git checkout -b feature-new-feature
Commit your changes: git commit -m "Added new feature"
Push to the branch: git push origin feature-new-feature
Submit a pull request.
📧 Contact
For any inquiries, suggestions, or contributions, feel free to reach out via GitHub issues or email me at your-email@example.com.

📜 License
This project is licensed under the MIT License - feel free to modify and use it.

Enjoy your adventure in the Hunter x Hunter world with Hunter's Tavern! 🏹
