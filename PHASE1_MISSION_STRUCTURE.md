# Phase 1 Mission Structure Guide

Based on Phase 0 missions, here's how Phase 1 missions should be structured:

## File Structure

Create missions in: `data/missions/phase1/`

Each mission should be a separate file like:
- `mission01_manifesto.ts`
- `mission02_tool-stack.ts`
- `mission03_context-game.ts`
- etc.

## Mission Data Structure

```typescript
import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "manifesto",  // Must match the id in curriculum.ts
  title: "The Vibe Coder Manifesto",
  slides: [
    // Array of slides (see slide types below)
  ],
};
```

## Available Slide Types

### 1. Text Slide
```typescript
{
  type: "text",
  title: "Slide Title",
  content: "Your content here. Can be multiple paragraphs."
}
```

### 2. Quiz Slide
```typescript
{
  type: "quiz",
  question: "What is the answer?",
  options: [
    { id: "a", text: "Option A" },
    { id: "b", text: "Option B" },
    { id: "c", text: "Option C" },
  ],
  correct: "b",
  feedbackCorrect: "Great job! Here's why...",
  feedbackWrong: "Not quite. Think about..."
}
```

### 3. Toggle Cards (Interactive Cards)
```typescript
{
  type: "toggle_cards",
  title: "Explore the Concepts",
  cards: [
    { id: "card1", title: "Card Title", description: "Card description here" },
    { id: "card2", title: "Another Card", description: "More info" },
  ]
}
```

### 4. Matching Slide
```typescript
{
  type: "matching",
  title: "Match the Concepts",
  pairs: [
    { left: "Frontend", right: "Waiters" },
    { left: "Backend", right: "Kitchen" },
  ]
}
```

### 5. Identify Slide
```typescript
{
  type: "identify",
  title: "Identify the Correct Answer",
  question: "Which one is correct?",
  correctId: "c",
  feedbackCorrect: "Yes! That's correct because...",
  feedbackWrong: "Not quite. Remember that...",
  options: [
    { id: "a", text: "Option A", icon: "👤" },
    { id: "b", text: "Option B", icon: "📧" },
    { id: "c", text: "Option C", icon: "🔑" },
  ],
}
```

### 6. Checklist Slide
```typescript
{
  type: "checklist",
  title: "Tool Check",
  items: [
    { id: "item1", label: "Node.js Installed" },
    { id: "item2", label: "Cursor Installed" },
  ],
}
```

### 7. Terminal Slide
```typescript
{
  type: "terminal",
  title: "Run This Command",
  command: "npm install",
  successMessage: "Installation complete! You're ready to go."
}
```

### 8. Drag and Drop Slide
```typescript
{
  type: "drag_and_drop",
  title: "Assemble the Stack",
  categories: ["Frontend", "Backend", "Database"],
  items: [
    { id: "v0", text: "v0.dev" },
    { id: "supabase", text: "Supabase" },
  ],
  correctMapping: {
    "v0": "Frontend",
    "supabase": "Backend",
  },
}
```

## Example: Complete Mission

```typescript
import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "manifesto",
  title: "The Vibe Coder Manifesto",
  slides: [
    {
      type: "text",
      title: "Speed Over Perfection",
      content: "The old way: perfect code, shipped never. The new way: working code, shipped today. Vibe Coding is about velocity, not vanity."
    },
    {
      type: "text",
      title: "Ship to Learn",
      content: "You don't learn by reading. You learn by building. Every shipped feature teaches you more than a hundred tutorials."
    },
    {
      type: "toggle_cards",
      title: "The Vibe Principles",
      cards: [
        { 
          id: "speed", 
          title: "Speed > Perfection", 
          description: "Working code today beats perfect code tomorrow." 
        },
        { 
          id: "iterate", 
          title: "Iterate, Don't Perfect", 
          description: "Launch, learn, improve. Repeat." 
        },
        { 
          id: "product", 
          title: "Product > Code", 
          description: "Users care about features, not code quality." 
        },
      ]
    },
    {
      type: "quiz",
      question: "What matters more in Vibe Coding?",
      options: [
        { id: "a", text: "Writing perfect code" },
        { id: "b", text: "Shipping working features fast" },
        { id: "c", text: "Memorizing all syntax" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Speed and shipping are the priorities.",
      feedbackWrong: "Think about what gets products to users faster.",
    },
  ],
};
```

## Important Notes

1. **ID Matching**: The `id` in the mission file MUST match the `id` in `curriculum.ts`
2. **Slide Order**: Slides appear in the order you define them
3. **Content First**: Always explain concepts before quizzing on them
4. **Mix It Up**: Use different slide types to keep engagement high
5. **Feedback**: Always provide helpful feedback in quizzes

## Next Steps

1. Create `data/missions/phase1/` directory
2. Create an `index.ts` file to export all missions
3. Create individual mission files for each mission in "The Vibe Philosophy" world
4. Make sure mission IDs match those in `curriculum.ts`

