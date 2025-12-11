"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MissionModal } from '@/components/course/MissionModal';
import { MissionData } from '@/data/missions/world0';
import { getMissionContent } from '@/data/missions/getMission';
import { curriculum } from '@/data/curriculum';
import type { TutorialMissionContent, TextSlide, QuizSlide } from '@/data/missions/tutorial';

// Generate comprehensive blackbox mission content with detailed information
function createBlackboxMission(worldId: number, title: string, description: string, missionId: string): TutorialMissionContent {
  const slides: (TextSlide | QuizSlide)[] = [];
  
  // Topic-specific content generators
  const contentMap: Record<string, () => (TextSlide | QuizSlide)[]> = {
    'What HTML, CSS, JS actually do': () => [
      {
        id: `${missionId}-intro`,
        type: 'text',
        title: 'Welcome to Bonus Coding: HTML, CSS, and JavaScript',
        body: 'You\'ve been using HTML, CSS, and JavaScript, but do you know what they actually do under the hood? This bonus content will give you a deep understanding of how these three technologies work together to create the web experiences you see every day.'
      } as TextSlide,
      {
        id: `${missionId}-html`,
        type: 'text',
        title: 'HTML: The Structure',
        body: 'HTML (HyperText Markup Language) is the skeleton of every web page. It defines the structure and content using elements like <div>, <p>, <button>, etc. Think of HTML as the blueprint - it tells the browser "this is a heading, this is a paragraph, this is a button." HTML alone is just text with tags - it has no styling or interactivity.'
      } as TextSlide,
      {
        id: `${missionId}-css`,
        type: 'text',
        title: 'CSS: The Styling',
        body: 'CSS (Cascading Style Sheets) is what makes HTML look beautiful. It controls colors, fonts, spacing, layouts, and animations. CSS takes the plain HTML structure and transforms it into a visually appealing design. CSS works by selecting HTML elements and applying styles to them using selectors like classes, IDs, and element types.'
      } as TextSlide,
      {
        id: `${missionId}-js`,
        type: 'text',
        title: 'JavaScript: The Behavior',
        body: 'JavaScript adds interactivity and dynamic behavior to web pages. It can manipulate the HTML (DOM), respond to user events like clicks, fetch data from servers, and update the page without refreshing. JavaScript is what makes buttons clickable, forms submittable, and pages interactive.'
      } as TextSlide,
      {
        id: `${missionId}-quiz1`,
        type: 'quiz',
        question: 'What is the primary role of HTML?',
        options: [
          { id: 'a', label: 'To style the page with colors and fonts' },
          { id: 'b', label: 'To define the structure and content of the page' },
          { id: 'c', label: 'To add interactivity and behavior' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Correct! HTML defines the structure and content. CSS handles styling, and JavaScript handles behavior.',
        wrongExplanation: 'Not quite. HTML is about structure, not styling or behavior.'
      } as QuizSlide,
      {
        id: `${missionId}-dom`,
        type: 'text',
        title: 'The DOM: How They Connect',
        body: 'The DOM (Document Object Model) is the bridge between HTML, CSS, and JavaScript. When a browser loads an HTML page, it creates a DOM tree - a representation of all the HTML elements. JavaScript can access and modify this DOM tree, and CSS can style elements in it. This is how all three technologies work together seamlessly.'
      } as TextSlide,
      {
        id: `${missionId}-rendering`,
        type: 'text',
        title: 'How Browsers Render Pages',
        body: 'When you visit a website: 1) The browser downloads the HTML and parses it into the DOM, 2) It downloads and applies CSS to style the elements, 3) JavaScript executes and can modify the DOM, 4) The browser paints the final result on your screen. This process happens incredibly fast, usually in milliseconds.'
      } as TextSlide,
      {
        id: `${missionId}-quiz2`,
        type: 'quiz',
        question: 'What is the DOM?',
        options: [
          { id: 'a', label: 'A programming language' },
          { id: 'b', label: 'The browser\'s representation of HTML elements that JavaScript can interact with' },
          { id: 'c', label: 'A CSS framework' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! The DOM is the bridge that allows JavaScript to interact with HTML elements.',
        wrongExplanation: 'The DOM is not a language or framework - it\'s the browser\'s representation of the page structure.'
      } as QuizSlide,
      {
        id: `${missionId}-practical`,
        type: 'text',
        title: 'Why This Matters Practically',
        body: 'Understanding this helps you: Debug layout issues (CSS problem), fix broken interactions (JavaScript problem), optimize performance (knowing when the DOM updates), and communicate better with AI tools when asking for code changes. You\'ll know whether to ask for HTML structure changes, CSS styling, or JavaScript behavior.'
      } as TextSlide,
      {
        id: `${missionId}-quiz3`,
        type: 'quiz',
        question: 'If a button doesn\'t respond when clicked, which technology is likely the issue?',
        options: [
          { id: 'a', label: 'HTML - the button structure is wrong' },
          { id: 'b', label: 'CSS - the button isn\'t styled correctly' },
          { id: 'c', label: 'JavaScript - the click handler isn\'t working' }
        ],
        correctOptionId: 'c',
        correctExplanation: 'Correct! Click interactions are handled by JavaScript event handlers.',
        wrongExplanation: 'HTML defines the button, CSS styles it, but JavaScript handles the click behavior.'
      } as QuizSlide,
      {
        id: `${missionId}-conclusion`,
        type: 'text',
        title: 'You\'re Now Equipped',
        body: 'You now understand the fundamental roles of HTML (structure), CSS (styling), and JavaScript (behavior), and how they work together through the DOM. This knowledge will help you debug issues faster, write better prompts for AI tools, and build more efficiently. Keep building!'
      } as TextSlide
    ],
    'How the browser renders your page': () => [
      {
        id: `${missionId}-intro`,
        type: 'text',
        title: 'The Critical Rendering Path',
        body: 'Ever wonder how a browser transforms code into the beautiful page you see? The Critical Rendering Path is the process browsers use to convert HTML, CSS, and JavaScript into pixels on your screen. Understanding this helps you build faster, more efficient websites.'
      } as TextSlide,
      {
        id: `${missionId}-step1`,
        type: 'text',
        title: 'Step 1: Download and Parse HTML',
        body: 'The browser starts by downloading the HTML file. As it downloads, it begins parsing - reading the HTML tags and building the DOM (Document Object Model) tree. This is a tree structure where each HTML element becomes a node. The browser does this incrementally, not waiting for the entire file to download.'
      } as TextSlide,
      {
        id: `${missionId}-step2`,
        type: 'text',
        title: 'Step 2: Download and Parse CSS',
        body: 'While building the DOM, the browser also downloads CSS files. CSS is parsed into the CSSOM (CSS Object Model) - a tree structure similar to the DOM but for styles. The browser needs both the DOM and CSSOM before it can render anything, because it needs to know both what elements exist and how they should be styled.'
      } as TextSlide,
      {
        id: `${missionId}-quiz1`,
        type: 'quiz',
        question: 'Why does the browser need both DOM and CSSOM before rendering?',
        options: [
          { id: 'a', label: 'Because they\'re downloaded together' },
          { id: 'b', label: 'Because the browser needs to know both what elements exist and how they should be styled' },
          { id: 'c', label: 'Because JavaScript requires both' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! The browser needs the structure (DOM) and styling (CSSOM) to know what to render.',
        wrongExplanation: 'The browser needs both to determine the final visual appearance of elements.'
      } as QuizSlide,
      {
        id: `${missionId}-step3`,
        type: 'text',
        title: 'Step 3: Render Tree Construction',
        body: 'The browser combines the DOM and CSSOM into a Render Tree. This tree only includes elements that will actually be visible (hidden elements are excluded). Each node in the render tree contains both the element information and its computed styles. This is what will actually be painted on the screen.'
      } as TextSlide,
      {
        id: `${missionId}-step4`,
        type: 'text',
        title: 'Step 4: Layout (Reflow)',
        body: 'Layout is the process of calculating the exact position and size of each element. The browser walks through the render tree and calculates where each element should be placed based on CSS rules like width, height, margins, padding, and positioning. This is also called "reflow" - the browser is figuring out the geometry of the page.'
      } as TextSlide,
      {
        id: `${missionId}-step5`,
        type: 'text',
        title: 'Step 5: Paint',
        body: 'After layout, the browser paints each element - filling in colors, borders, text, images, etc. This creates the visual representation. Modern browsers can paint different parts of the page in layers, which allows for smooth animations and scrolling.'
      } as TextSlide,
      {
        id: `${missionId}-quiz2`,
        type: 'quiz',
        question: 'What happens during the Layout phase?',
        options: [
          { id: 'a', label: 'The browser downloads resources' },
          { id: 'b', label: 'The browser calculates the exact position and size of each element' },
          { id: 'c', label: 'The browser paints colors on the screen' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Correct! Layout calculates positions and sizes. Paint comes after.',
        wrongExplanation: 'Layout is about calculating geometry, not downloading or painting.'
      } as QuizSlide,
      {
        id: `${missionId}-javascript`,
        type: 'text',
        title: 'Where JavaScript Fits In',
        body: 'JavaScript can interrupt the rendering process. When JavaScript executes, it can modify the DOM or CSSOM, which forces the browser to recalculate the render tree, redo layout, and repaint. This is why blocking JavaScript can make pages feel slow - it delays the initial render.'
      } as TextSlide,
      {
        id: `${missionId}-optimization`,
        type: 'text',
        title: 'Performance Implications',
        body: 'Understanding this helps you optimize: Minimize CSS (faster CSSOM), defer non-critical JavaScript (faster initial render), reduce layout thrashing (avoid frequent DOM changes), and use CSS transforms for animations (they don\'t trigger layout). Every optimization you make speeds up this critical path.'
      } as TextSlide,
      {
        id: `${missionId}-quiz3`,
        type: 'quiz',
        question: 'Why should you defer non-critical JavaScript?',
        options: [
          { id: 'a', label: 'Because it makes code cleaner' },
          { id: 'b', label: 'Because JavaScript can block the initial render, delaying when users see content' },
          { id: 'c', label: 'Because it reduces file size' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! Blocking JavaScript delays the critical rendering path.',
        wrongExplanation: 'The main reason is performance - blocking JS delays the initial render.'
      } as QuizSlide,
      {
        id: `${missionId}-conclusion`,
        type: 'text',
        title: 'Master of the Render',
        body: 'You now understand the Critical Rendering Path: HTML/CSS parsing → DOM/CSSOM → Render Tree → Layout → Paint. This knowledge helps you build faster websites, debug performance issues, and make smarter optimization decisions. Your users will thank you!'
      } as TextSlide
    ],
    'React re-renders': () => [
      {
        id: `${missionId}-intro`,
        type: 'text',
        title: 'Understanding React Re-renders',
        body: 'React is famous for its efficient rendering, but do you know how it actually works? Understanding re-renders helps you write performant React code, debug why components update, and optimize your applications. Let\'s dive deep into React\'s rendering mechanism.'
      } as TextSlide,
      {
        id: `${missionId}-what`,
        type: 'text',
        title: 'What is a Re-render?',
        body: 'A re-render happens when React updates the DOM to reflect changes in your component\'s state or props. React doesn\'t always update the actual DOM - it first creates a virtual representation, compares it to the previous one (diffing), and only updates what changed. This is React\'s "reconciliation" process.'
      } as TextSlide,
      {
        id: `${missionId}-triggers`,
        type: 'text',
        title: 'What Triggers Re-renders?',
        body: 'Re-renders are triggered by: 1) State changes (using useState, useReducer), 2) Props changes (parent passes new props), 3) Parent re-renders (children re-render too), 4) Context value changes (if component uses that context). Understanding triggers helps you control when renders happen.'
      } as TextSlide,
      {
        id: `${missionId}-quiz1`,
        type: 'quiz',
        question: 'What triggers a React component to re-render?',
        options: [
          { id: 'a', label: 'Only state changes' },
          { id: 'b', label: 'State changes, prop changes, parent re-renders, or context changes' },
          { id: 'c', label: 'Only when you manually call render()' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Correct! Multiple things can trigger re-renders in React.',
        wrongExplanation: 'React re-renders are automatic and triggered by various changes.'
      } as QuizSlide,
      {
        id: `${missionId}-virtual`,
        type: 'text',
        title: 'The Virtual DOM',
        body: 'React uses a Virtual DOM - a JavaScript representation of the real DOM. When state changes, React creates a new virtual DOM tree, compares it to the previous one (this is "diffing"), and calculates the minimal set of changes needed. Only these changes are applied to the real DOM, which is expensive.'
      } as TextSlide,
      {
        id: `${missionId}-diffing`,
        type: 'text',
        title: 'The Diffing Algorithm',
        body: 'React\'s diffing algorithm is smart: It compares elements by type (same type = update, different type = replace), compares props to see what changed, and uses keys to track list items efficiently. This is why keys are important in lists - they help React identify which items changed, were added, or removed.'
      } as TextSlide,
      {
        id: `${missionId}-quiz2`,
        type: 'quiz',
        question: 'Why are keys important in React lists?',
        options: [
          { id: 'a', label: 'They make the code look better' },
          { id: 'b', label: 'They help React efficiently identify which items changed, were added, or removed' },
          { id: 'c', label: 'They prevent errors' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! Keys help React\'s diffing algorithm work efficiently.',
        wrongExplanation: 'Keys are primarily for performance optimization in React\'s diffing process.'
      } as QuizSlide,
      {
        id: `${missionId}-optimization`,
        type: 'text',
        title: 'Optimizing Re-renders',
        body: 'You can optimize re-renders using: React.memo() to prevent unnecessary re-renders of components, useMemo() to memoize expensive calculations, useCallback() to memoize functions passed as props, and careful state management (lifting state up or down). The goal is to re-render only when necessary.'
      } as TextSlide,
      {
        id: `${missionId}-lifecycle`,
        type: 'text',
        title: 'Component Lifecycle and Re-renders',
        body: 'During a re-render: 1) React calls your component function again, 2) Hooks run in order (useState, useEffect, etc.), 3) React creates new virtual DOM, 4) React diffs with previous virtual DOM, 5) React updates real DOM if needed. Understanding this flow helps you debug why effects run or why state behaves unexpectedly.'
      } as TextSlide,
      {
        id: `${missionId}-quiz3`,
        type: 'quiz',
        question: 'What does React.memo() do?',
        options: [
          { id: 'a', label: 'It makes components render faster' },
          { id: 'b', label: 'It prevents unnecessary re-renders by comparing props' },
          { id: 'c', label: 'It adds styling to components' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Correct! React.memo() is a performance optimization that prevents re-renders when props haven\'t changed.',
        wrongExplanation: 'React.memo() is about preventing unnecessary renders, not styling or general speed.'
      } as QuizSlide,
      {
        id: `${missionId}-conclusion`,
        type: 'text',
        title: 'Re-render Master',
        body: 'You now understand React re-renders: what triggers them, how the virtual DOM and diffing work, and how to optimize them. This knowledge helps you write more performant React code and debug rendering issues. Remember: re-renders aren\'t bad - unnecessary re-renders are!'
      } as TextSlide
    ]
  };

  // Get topic-specific content or use generic fallback
  const getContent = contentMap[title];
  if (getContent) {
    slides.push(...getContent());
  } else {
    // Generic comprehensive content for other topics
    slides.push(
      {
        id: `${missionId}-intro`,
        type: 'text',
        title: `Bonus Deep Dive: ${title}`,
        body: `Welcome to bonus coding content! ${description} This comprehensive guide will take you deep into the technical details, helping you understand not just what this is, but how it works, why it matters, and how to use it effectively.`
      } as TextSlide,
      {
        id: `${missionId}-fundamentals`,
        type: 'text',
        title: 'The Fundamentals',
        body: `Let's start with the basics. ${title} is a fundamental concept that underpins many aspects of modern web development. Understanding it deeply will help you make better decisions, debug issues more effectively, and write more efficient code.`
      } as TextSlide,
      {
        id: `${missionId}-quiz1`,
        type: 'quiz',
        question: `Why is understanding ${title} important?`,
        options: [
          { id: 'a', label: 'It helps you pass interviews' },
          { id: 'b', label: 'It helps you debug issues, make better decisions, and write efficient code' },
          { id: 'c', label: 'It makes your code look professional' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! Deep understanding helps you solve real problems and write better code.',
        wrongExplanation: 'The real value is in practical problem-solving and code quality.'
      } as QuizSlide,
      {
        id: `${missionId}-how`,
        type: 'text',
        title: 'How It Works',
        body: `The mechanics of ${title} involve several interconnected concepts. When you understand how the pieces fit together, you can predict behavior, optimize performance, and troubleshoot issues more effectively. Let's break down the key mechanisms.`
      } as TextSlide,
      {
        id: `${missionId}-details`,
        type: 'text',
        title: 'Key Details',
        body: `There are important nuances to ${title} that many developers miss. These details can be the difference between code that works and code that works well. Pay attention to edge cases, performance implications, and best practices.`
      } as TextSlide,
      {
        id: `${missionId}-quiz2`,
        type: 'quiz',
        question: `What should you pay attention to when working with ${title}?`,
        options: [
          { id: 'a', label: 'Only the basic functionality' },
          { id: 'b', label: 'Edge cases, performance implications, and best practices' },
          { id: 'c', label: 'Just making it work' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Correct! Understanding nuances makes you a better developer.',
        wrongExplanation: 'The details matter for production-quality code.'
      } as QuizSlide,
      {
        id: `${missionId}-practical`,
        type: 'text',
        title: 'Practical Applications',
        body: `In real-world development, ${title} comes up frequently. Whether you're debugging an issue, optimizing performance, or making architectural decisions, this knowledge gives you the foundation to make informed choices.`
      } as TextSlide,
      {
        id: `${missionId}-common`,
        type: 'text',
        title: 'Common Patterns and Pitfalls',
        body: `There are common patterns developers use with ${title}, and equally common mistakes to avoid. Learning from others' experiences helps you write better code from the start and avoid debugging headaches later.`
      } as TextSlide,
      {
        id: `${missionId}-quiz3`,
        type: 'quiz',
        question: `How does understanding ${title} help in real development?`,
        options: [
          { id: 'a', label: 'It only helps in interviews' },
          { id: 'b', label: 'It helps with debugging, optimization, and making architectural decisions' },
          { id: 'c', label: 'It doesn\'t help much' }
        ],
        correctOptionId: 'b',
        correctExplanation: 'Exactly! This knowledge is practical and applicable daily.',
        wrongExplanation: 'This knowledge has real-world value beyond interviews.'
      } as QuizSlide,
      {
        id: `${missionId}-conclusion`,
        type: 'text',
        title: 'Keep Learning',
        body: `You now have a solid understanding of ${title}. This bonus content gives you the depth to go beyond surface-level knowledge. Remember: you can build great products without knowing every detail, but understanding the fundamentals makes you a stronger developer. Keep building and keep learning!`
      } as TextSlide
    );
  }

  return {
    id: missionId,
    title: `Bonus: ${title}`,
    slides
  };
}

export default function MissionPage() {
  const params = useParams();
  const router = useRouter();
  const worldId = Number(params.id);
  const missionId = params.missionId as string;
  const [mission, setMission] = useState<MissionData | null>(null);

  useEffect(() => {
    // Check if it's a blackbox mission
    if (missionId.startsWith('blackbox-')) {
      const targetWorldId = Number(missionId.replace('blackbox-', ''));
      
      // Find the world data
      let worldData = null;
      for (const phase of curriculum.phases) {
        const found = phase.worlds.find(w => w.id === targetWorldId);
        if (found && found.blackBox) {
          worldData = found;
          break;
        }
      }

      if (worldData && worldData.blackBox) {
        // Create comprehensive mission from blackBox data
        const blackboxMission = createBlackboxMission(
          targetWorldId,
          worldData.blackBox.title,
          worldData.blackBox.description,
          missionId
        );
        setMission(blackboxMission);
      }
    } else {
      // Handle regular missions using the unified helper
      const foundMission = getMissionContent(worldId, missionId);
      if (foundMission) {
        setMission(foundMission);
      }
    }
  }, [worldId, missionId]);

  const handleClose = () => {
    router.push(`/dashboard/course/world/${worldId}`);
  };

  if (!mission) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading mission...
      </div>
    );
  }

  // Get XP reward from curriculum if available
  let xpReward = 10;
  if (missionId.startsWith('blackbox-')) {
    // Blackbox missions are bonus, maybe 5 XP or keep at 10
    xpReward = 5;
  } else {
    // Try to find XP reward from curriculum
    for (const phase of curriculum.phases) {
      for (const world of phase.worlds) {
        const foundMission = world.missions.find(m => m.id === missionId);
        if (foundMission && foundMission.xpReward) {
          xpReward = foundMission.xpReward;
          break;
        }
      }
    }
  }

  return (
    <MissionModal
      open={true}
      onOpenChange={(open) => !open && handleClose()}
      mission={mission}
      worldId={worldId}
      xpReward={xpReward}
    />
  );
}

