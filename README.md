# Persona-Based AI Chatbot

A modern web application where users can have real-time conversations with AI-powered versions of three Scaler/InterviewBit personalities: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**.

![Chat Interface](screenshot.png)

## Features

- **Three Authentic Personas**: Each persona is built from extensive research including interviews, podcasts, and public content
- **Real-Time Streaming**: Responses stream in real-time for a natural conversation experience
- **Modern UI**: Glassmorphism design with smooth animations and dark mode support
- **Suggestion Chips**: Quick-start questions tailored to each persona's expertise
- **Responsive Design**: Works seamlessly on mobile and desktop

## Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **LLM API**: Groq API (Llama 3.3 70B)
- **Styling**: Tailwind CSS with custom animations

## Project Structure

```
persona-chatbot/
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── components/       # Chat components
│   │   ├── data/             # Persona metadata
│   │   └── App.jsx           # Main application
├── server/                    # Express backend
│   ├── prompts/              # System prompts for each persona
│   ├── index.js              # Express server
│   └── package.json
├── prompts.md                # Detailed prompt documentation
└── REQUIREMENTS.md           # Project requirements
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd persona-chatbot-develop
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Add your Groq API key to .env
   GROQ_API_KEY=your_groq_api_key_here
   CLIENT_ORIGIN=http://localhost:5173
   PORT=3001
   ```

4. **Run the application**
   ```bash
   # Start the backend server (from server directory)
   cd server
   node index.js
   
   # Start the frontend (from client directory)
   cd ../client
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## Usage

1. Select a persona from the top tabs (Anshuman, Abhimanyu, or Kshitij)
2. Click on suggestion chips to start a conversation or type your own message
3. Each persona responds with their authentic voice and expertise
4. Switch between personas to get different perspectives on the same topic

## Persona Profiles

### Anshuman Singh
- **Role**: Co-Founder & CEO, Scaler
- **Background**: Ex-Facebook engineer, ACM ICPC World Finalist
- **Expertise**: System design, career strategy, engineering leadership
- **Style**: Systems thinking, reframing questions, data-driven advice

### Abhimanyu Saxena
- **Role**: Co-Founder, Scaler & InterviewBit
- **Background**: Ex-Amazon, scaled Fab.com to unicorn status
- **Expertise**: Entrepreneurship, career transitions, mentorship
- **Style**: Story-driven, transparent, challenges conventional wisdom

### Kshitij Mishra
- **Role**: Dean, Scaler School of Technology
- **Background**: Ex-Snapdeal, IIIT Hyderabad CS
- **Expertise**: DSA, algorithms, technical interviews
- **Style**: Socratic teaching, physical analogies, conceptual clarity

## API Key Setup

To get a Groq API key:
1. Visit https://console.groq.com/keys
2. Sign up or log in
3. Create a new API key
4. Add it to your `.env` file

## Development

### Adding New Personas
1. Create a new prompt file in `server/prompts/`
2. Add persona metadata to `client/src/data/personas.js`
3. Update the server to import the new prompt

### Modifying Prompts
- Edit the system prompts in `server/prompts/` directory
- See `prompts.md` for detailed documentation and annotations
- Restart the server after making changes

## Deployment

### Frontend (Vercel)
1. Connect the `client/` directory to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Backend (Railway/Render)
1. Connect the `server/` directory to Railway or Render
2. Add environment variables including GROQ_API_KEY
3. Deploy the Node.js application

## Documentation

- **prompts.md**: Detailed system prompts with engineering annotations
- **REQUIREMENTS.md**: Complete project requirements and specifications

## License

This project is part of Scaler Academy's Prompt Engineering Assignment.

## Acknowledgments

Built for Scaler Academy's Prompt Engineering Assignment. The personas are based on real research from interviews, podcasts, and public content of Anshuman Singh, Abhimanyu Saxena, and Kshitij Mishra.
