import React from "react"
import { useRouter } from 'next/router';
import HomePage from "./homepage/HomePage";

export default function Home() {
  const router = useRouter();

  const renderComponent = () => {
    switch (router.pathname) {
      case '/':
        return <HomePage />;
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
