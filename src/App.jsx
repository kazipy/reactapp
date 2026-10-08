import { useState } from "react";
import ReadingGoal from "./ReadingGoal";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showReadingGoal, setShowReadingGoal] = useState(true);

  const handleReadPages = () => {
    setCurrentPage(currentPage + 10);
  };

  const handleDismiss = () => {
    console.log("Reading goal dismissed");
    setShowReadingGoal(false);
  };

  return (
    <div>
      {showReadingGoal && (
        <ReadingGoal
          title="React basics"
          goal={50}
          currentPage={currentPage}
          onReadPages={handleReadPages}
          onDismiss={handleDismiss}
        />
      )}
    </div>
  );
}

export default App;