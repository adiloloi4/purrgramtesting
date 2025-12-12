# Interactive Game Slides Guide

## Overview
We've added 7 new highly interactive, game-like slide types to make missions more engaging and fun. These games provide immediate feedback, scoring, timers, and gamification elements.

## Available Game Slides

### 1. Memory Game (`memoryGame`)
**Purpose**: Test recall and pattern recognition

**Features**:
- Card matching game
- Score tracking (10 points per match + time bonus)
- Move counter
- Optional time limit
- Visual feedback for matches

**Example Use Cases**:
- Match concepts to definitions
- Match tools to their purposes
- Match code patterns to descriptions

**Structure**:
```typescript
{
  type: "memoryGame",
  title: "Match the Concepts",
  description: "Find all matching pairs",
  cards: [
    { id: "frontend", front: "Frontend", back: "User Interface" },
    { id: "backend", front: "Backend", back: "Server Logic" }
  ],
  timeLimit: 60, // optional, in seconds
  requiredMatches: 4 // optional
}
```

---

### 2. Code Puzzle (`codePuzzle`)
**Purpose**: Fill in missing code parts

**Features**:
- Interactive code completion
- Multiple choice for each blank
- Hints available
- Optional time limit
- Real-time validation

**Example Use Cases**:
- Complete function signatures
- Fill in API endpoints
- Complete component props

**Structure**:
```typescript
{
  type: "codePuzzle",
  title: "Complete the Code",
  description: "Fill in the blanks",
  puzzle: "function __0__(name: string) { return `Hello ${__1__}`; }",
  missingParts: [
    {
      id: "func-name",
      options: ["greet", "sayHello", "hello"],
      correct: "greet",
      hint: "Think about what this function does"
    }
  ],
  timeLimit: 120 // optional
}
```

---

### 3. Typing Challenge (`typingChallenge`)
**Purpose**: Improve typing speed and code familiarity

**Features**:
- Real-time WPM calculation
- Error tracking
- Progress indicator
- Target WPM (optional)
- Visual feedback for correct/incorrect characters

**Example Use Cases**:
- Type code snippets
- Type command sequences
- Type API endpoints

**Structure**:
```typescript
{
  type: "typingChallenge",
  title: "Type This Code",
  description: "Type as fast and accurately as possible",
  text: "const greeting = 'Hello, World!';",
  timeLimit: 30, // optional
  wpmTarget: 40 // optional
}
```

---

### 4. Sequence Game (`sequenceGame`)
**Purpose**: Order items in correct sequence

**Features**:
- Drag-and-drop ordering
- Visual sequence builder
- Hint system
- Real-time validation

**Example Use Cases**:
- Order API request flow
- Order deployment steps
- Order component lifecycle

**Structure**:
```typescript
{
  type: "sequenceGame",
  title: "Order the Steps",
  description: "Arrange in correct order",
  items: [
    { id: "step1", label: "Create database", correctPosition: 0 },
    { id: "step2", label: "Set up auth", correctPosition: 1 },
    { id: "step3", label: "Deploy", correctPosition: 2 }
  ],
  hint: "Start with infrastructure, then features, then deployment"
}
```

---

### 5. Spot the Bug (`spotTheBug`)
**Purpose**: Find and identify bugs in code

**Features**:
- Clickable code lines
- Bug detection tracking
- Bug descriptions
- Fix suggestions
- Visual feedback

**Example Use Cases**:
- Find syntax errors
- Find logic errors
- Find security issues

**Structure**:
```typescript
{
  type: "spotTheBug",
  title: "Find the Bugs",
  description: "Click on lines with bugs",
  code: "function add(a, b) {\n  return a + b\n}",
  bugs: [
    {
      id: "missing-semicolon",
      line: 2,
      description: "Missing semicolon",
      fix: "return a + b;"
    }
  ]
}
```

---

### 6. Speed Quiz (`speedQuiz`)
**Purpose**: Fast-paced quiz with time pressure

**Features**:
- Multiple questions in sequence
- Time limit per question (optional)
- Total time limit (optional)
- Score tracking
- Immediate feedback

**Example Use Cases**:
- Quick concept checks
- Rapid fire knowledge tests
- Time-pressured assessments

**Structure**:
```typescript
{
  type: "speedQuiz",
  title: "Speed Round",
  description: "Answer quickly!",
  questions: [
    {
      id: "q1",
      question: "What is React?",
      options: [
        { id: "a", text: "A library" },
        { id: "b", text: "A framework" }
      ],
      correct: "a",
      timeLimit: 10 // seconds per question
    }
  ],
  totalTimeLimit: 60 // optional, total time
}
```

---

### 7. Interactive Simulation (`interactiveSimulation`)
**Purpose**: Step-by-step interactive walkthroughs

**Features**:
- Guided step completion
- Progress tracking
- Multiple simulation types
- Custom configuration

**Example Use Cases**:
- Data flow visualization
- Component tree building
- API request simulation
- Database query walkthrough

**Structure**:
```typescript
{
  type: "interactiveSimulation",
  title: "Data Flow Simulation",
  description: "Follow the data",
  simulation: "dataFlow", // or "componentTree", "apiRequest", "databaseQuery", "custom"
  config: {
    // Custom configuration based on simulation type
  },
  goal: "Understand how data flows through the app",
  steps: [
    "User clicks button",
    "Frontend sends request",
    "Backend processes",
    "Database stores data"
  ]
}
```

---

## Game Features Across All Types

### Common Features:
- ✅ **Scoring Systems**: Points, WPM, accuracy tracking
- ✅ **Time Limits**: Optional timers for added challenge
- ✅ **Visual Feedback**: Color-coded success/error states
- ✅ **Progress Indicators**: Show completion status
- ✅ **Animations**: Smooth transitions and interactions
- ✅ **Hints**: Optional help systems
- ✅ **Completion Rewards**: Automatic advancement on success

### Gamification Elements:
- 🎯 **Score Tracking**: Real-time score updates
- ⏱️ **Time Pressure**: Optional countdown timers
- 🏆 **Achievement Feel**: Success animations and celebrations
- 📊 **Progress Bars**: Visual progress indicators
- 🎨 **Visual Polish**: Smooth animations and transitions

## Usage Tips

1. **Mix Game Types**: Alternate between different game types to keep missions fresh
2. **Progressive Difficulty**: Start with easier games, increase difficulty
3. **Time Limits**: Use sparingly - they add pressure but can frustrate
4. **Hints**: Always provide hints for complex games
5. **Feedback**: Immediate feedback is crucial for learning

## Integration

All game slides are automatically integrated into `MissionModal` and will:
- Handle their own completion state
- Trigger `onComplete` when finished
- Provide visual feedback
- Track user interactions

## Example Mission Structure

```typescript
{
  id: "interactive-mission",
  title: "Interactive Learning Mission",
  slides: [
    {
      type: "text",
      title: "Introduction",
      body: "Learn through games!"
    },
    {
      type: "memoryGame",
      // ... memory game config
    },
    {
      type: "codePuzzle",
      // ... code puzzle config
    },
    {
      type: "speedQuiz",
      // ... speed quiz config
    }
  ]
}
```

## Next Steps

1. Create example missions using these game types
2. Add more simulation types to `interactiveSimulation`
3. Create leaderboards for game scores
4. Add achievements for game completions
5. Track game performance analytics

