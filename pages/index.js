import React from "react"
import { useRouter } from 'next/router';
import HomePage from "./homepage/HomePage";
import Flashcards from "./flashcards";
import Checklist from "./checklist";

export default function Home() {
  const router = useRouter();

  const renderComponent = () => {
    switch (router.pathname) {
      case '/':
        return <HomePage />;
      case '/flashcards':
        return <Flashcards />;
      case '/flashcards':
        return <Checklist />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="py-8">
        {renderComponent()}
    </div>
  )
}
