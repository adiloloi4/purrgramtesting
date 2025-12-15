import { MissionData } from "../world0";

export const world11Missions: MissionData[] = [
  {
    id: "recording-content",
    title: "How to Record Coding",
    slides: [
      {
        type: "text",
        title: "Share Your ChatGPT Wrapper Journey",
        body: "You built a real ChatGPT wrapper! Share the journey. Record yourself showing it off, explaining how it works, or fixing bugs. People love seeing real products being built.",
      },
      {
        type: "buildTask",
        title: "Record a Demo of Your ChatGPT Wrapper",
        description: "Use AI to help create content",
        task: "Record a 2-minute video showing your ChatGPT wrapper. Show: 1) The interface, 2) Sending a message, 3) Streaming response, 4) Chat history. Use Loom, OBS, or Screen Studio. Post it on X/Twitter with #buildinpublic.",
        expectedOutcome: "Video demo of your ChatGPT wrapper",
        verificationSteps: [
          "Video recorded",
          "Shows key features",
          "Under 3 minutes",
          "Posted on social media",
        ],
        tips: [
          "Keep it authentic, not perfect",
          "Show the real product",
          "Mention it's a ChatGPT wrapper you built",
        ],
      },
      {
        type: "miniChallenge",
        title: "Record Your ChatGPT Wrapper",
        task: "Record a 1-minute video showing your ChatGPT wrapper. Show the interface, send a message, show the streaming response. Don't edit it. Just speak. Save it.",
        example: "Video recorded.",
      },
      {
        type: "identify",
      prompt: "Which content builds more trust?",
      correctOptionId: "b",
      correctExplanation: "Yes! Authenticity and showing the struggle builds real connection.",
      wrongExplanation: "Perfectly polished content often feels like an ad. People want real.",
        options: [
          { id: "a", text: "Highly edited, scripted ad", icon: "🎬" },
          { id: "b", text: "Raw screen recording with mistakes", icon: "📹" },
          { id: "c", text: "AI generated voiceover", icon: "🤖" },
        ],
      },
      {
        type: "speedQuiz",
        title: "Content Creation Quiz",
        description: "Test your understanding of recording and sharing",
        questions: [
          {
            id: "q1",
            question: "What do people buy?",
            options: [
              { id: "a", text: "Code" },
              { id: "b", text: "Stories" },
              { id: "c", text: "Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What matters more in content?",
            options: [
              { id: "a", text: "Polished editing" },
              { id: "b", text: "Authentic sharing" },
              { id: "c", text: "Perfect lighting" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "build-in-public",
    title: "Build in Public Templates",
    slides: [
      {
        type: "text",
        title: "Share Your ChatGPT Wrapper on Social Media",
        body: "Post about your ChatGPT wrapper journey. Share wins (deployed it!), failures (debugging streaming), and learnings. Developers and founders love seeing real products being built.",
      },
      {
        type: "text",
        title: "Copy This Template",
        body: "Day 3 of building [App Name].\n\nJust added [Feature]. It uses [Tech Stack].\n\nHonest feedback wanted: does this UI look too crowded?\n\n#buildinpublic #vibecoding",
      },
      {
        type: "checklist",
        title: "The First Post",
        prompt: "Do it now.",
        items: [
          { id: "1", label: "Take a screenshot of your app" },
          { id: "2", label: "Write the caption" },
          { id: "3", label: "Post it" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Post it. Send the link to a friend or putting it in your notes. You are now Building in Public.",
        example: "Tweet sent.",
      },
      {
        type: "sequenceGame",
        title: "The X Post Flow",
        description: "Order the steps for a killer update",
        items: [
          { id: "build", label: "Build a feature (and struggle)", correctPosition: 0 },
          { id: "screenshot", label: "Take a screenshot/video", correctPosition: 1 },
          { id: "write", label: "Write: 'Here is how I fixed it'", correctPosition: 2 },
          { id: "post", label: "Post with #buildinpublic", correctPosition: 3 },
        ],
      },
      {
        type: "sequenceGame",
        title: "Build in Public Post Workflow",
        description: "Order the steps to create a build-in-public post",
        items: [
          { id: "screenshot", label: "Take screenshot of your app", correctPosition: 0 },
          { id: "write", label: "Write caption with template", correctPosition: 1 },
          { id: "post", label: "Post on X/Twitter", correctPosition: 2 },
        ],
        hint: "Start with screenshot, end with posting",
      },
    ],
  },
  {
    id: "distribution",
    title: "Distribution Tactics",
    slides: [
      {
        type: "text",
        title: "Launch Day is Not Enough",
        body: "Product Hunt is great, but it lasts 24 hours. You need sustainable distribution. Cold DMs, SEO (long game), and Directories.",
      },
      {
        type: "text",
        title: "The Directory Strategy",
        body: "Submit your app to: BetaList, MicroLaunch, IndieHackers, There's An AI For That. These bring steady traffic.",
      },
      {
        type: "quiz",
        question: "What is the best way to get first users?",
        options: [
          { id: "a", text: "Run expensive Facebook Ads", correct: false },
          { id: "b", text: "Direct outreach (DM) to people with the problem", correct: true },
          { id: "c", text: "Hope they find you on Google instantly", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Find one directory or community related to AI tools or ChatGPT alternatives. Submit your ChatGPT wrapper. Get one external link back to your site.",
        example: "Submitted to directory.",
      },
      {
        type: "matching",
        prompt: "Distribution Channels",
        pairs: [
          { id: "ph", left: "Product Hunt", right: "Big Spike (24h)" },
          { id: "seo", left: "SEO", right: "Long Term Compounding" },
          { id: "cold", left: "Cold DMs", right: "Direct Sales (High Effort)" },
          { id: "dir", left: "Directories", right: "Steady Drip Traffic" },
        ],
      },
      {
        type: "speedQuiz",
        title: "Distribution Quiz",
        description: "Test your understanding of getting users",
        questions: [
          {
            id: "q1",
            question: "What is the best way to get first users?",
            options: [
              { id: "a", text: "Expensive Facebook Ads" },
              { id: "b", text: "Direct DM to people with the problem" },
              { id: "c", text: "Hope they find you instantly" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What brings steady traffic?",
            options: [
              { id: "a", text: "Product Hunt (24 hours)" },
              { id: "b", text: "Directories and SEO" },
              { id: "c", text: "Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "community-flywheel",
    title: "Vibe Coder Community",
    slides: [
      {
        type: "text",
        title: "Build a Community Around Your ChatGPT Wrapper",
        body: "When users love your ChatGPT wrapper, invite them to a Discord or Slack. Build a community. Ask them what features to add next. Turn users into fans.",
      },
      {
        type: "text",
        title: "You Built a Real Product",
        body: "You have completed the Vibe Coding Course. You built a complete ChatGPT wrapper from scratch. It has authentication, database, OpenAI integration, payments, and it's deployed. You are a founder.",
      },
      {
        type: "miniChallenge",
        title: "Final Mission",
        task: "Your ChatGPT wrapper is live. Get 1 real user to sign up and use it. That's the only badge that matters. You built a real product. You are a founder.",
        example: "I am a Founder.",
      },
      {
        type: "sequenceGame",
        title: "Community Loop",
        description: "How to turn users into a tribe",
        items: [
          { id: "user", label: "User says 'I love this'", correctPosition: 0 },
          { id: "invite", label: "Invite to Discord", correctPosition: 1 },
          { id: "ask", label: "Ask 'What should I build next?'", correctPosition: 2 },
          { id: "build", label: "Build it and tag them", correctPosition: 3 },
          { id: "fan", label: "User becomes Fan for life", correctPosition: 4 },
        ],
      },
      {
        type: "speedQuiz",
        title: "Community & Growth Quiz",
        description: "Test your understanding of building a community",
        questions: [
          {
            id: "q1",
            question: "What should you do when a user says 'I love this'?",
            options: [
              { id: "a", text: "Ignore them" },
              { id: "b", text: "Invite them to Discord/Slack" },
              { id: "c", text: "Ask for money immediately" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What is the only badge that matters?",
            options: [
              { id: "a", text: "Completion certificate" },
              { id: "b", text: "Getting 1 real user to sign up" },
              { id: "c", text: "Perfect code" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
];
