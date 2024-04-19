import React from "react"
import { useRouter } from 'next/router';
import HomePage from "./homepage/HopePage";
import Basics from "./basics";

export default function Home() {
  const router = useRouter();

  const renderComponent = () => {
    switch (router.pathname) {
      case '/':
        return <HomePage />;
      case '/basics':
        return <Basics />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="py-8 text-center">
        <h1>Next.js Example</h1>
        {renderComponent()}
    </div>
  )
}
