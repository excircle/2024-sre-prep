import Link from "next/link";

export default function FlashcardHome() {
  return (
      <div className="flex justify-center items-center py-8">
          <div className="border border-black border-opacity-25 w-3/4 h-96">
              <p className="text-2xl text-center py-2">This is the Flashcards Home Page!</p>

              <div className="flex justify-center items-center py-8 space-x-4">
                  {/* Clickable "Choose" box */}
                  <Link className="px-2 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/flashcards/choose">
                    <div className="border border-black border-opacity-25 w-64 h-64 flex justify-center items-center">
                      <p className="text-2xl text-center py-2">Choose Flashcards</p>
                    </div>
                  </Link>
                  {/* Clickable "Create" box */}
                  <Link className="px-2 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/flashcards/create">
                    <div className="border border-black border-opacity-25 w-64 h-64 flex justify-center items-center">
                      <p className="text-2xl text-center py-2">Create Flashcards</p>
                    </div>
                  </Link>
              </div>
              
          </div>
      </div>
  )
}