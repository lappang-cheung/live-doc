# Collaborative Document Application

This is a collaborative application that allows users to collaborate on documents in real-time. The application is built using Next.js, TypeScript, TailwindCSS, LiveBlocks, Clerk, and Sentry.

## Features

- **Real-time Collaboration:** Multiple users can edit documents simultaneously.
- **User Authentication:** Secure user login and management powered by Clerk.
- **Error Tracking:** Monitored with Sentry to catch and fix issues promptly.
- **Responsive Design:** Styled with TailwindCSS for a seamless experience on any device.

## Tech Stack

- **Next.js:** React framework for server-side rendering and generating static websites.
- **TypeScript:** Typed JavaScript for better code quality and maintainability.
- **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- **LiveBlocks:** Real-time collaboration infrastructure.
- **Clerk:** Authentication and user management.
- **Sentry:** Application monitoring and error tracking.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git https://github.com/lappang-cheung/live-doc.git
   cd live-doc

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   
3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```env
    // From the https://clerk.com/ for Auth
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_KEY
    CLERK_SECRET_KEY=YOUR_KEY
    
    // Route for the Clerk
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    
    // Liveblocks for the Realtime sharing
    LIVEBLOCKS_SECRET_KEY=YOUR_KEY
    
    
    SENTRY_AUTH_TOKEN=YOUR_KEY
   ```
   
4. Run the development server:

   ```bash
    npm run dev
    # or
    yarn dev
    # or
    bun dev

### Demo
Here is the link to the [CollabDocs](https://live-doc-lime.vercel.app/)
