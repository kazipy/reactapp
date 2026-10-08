function ReadingGoal({
  title,
  goal,
  currentPage,
  onReadPages,
  onDismiss
}) {
  const progress = (currentPage / goal) * 100;

  return (
    <div>
      <button onClick={onDismiss}>x</button>

      <h1>Reading goal</h1>

      <h2>{title}</h2>

      <p>Keep track of your reading progress.</p>

      <progress value={progress} max="100"></progress>

      <p>
        {currentPage} / {goal} pages
      </p>

      <button onClick={onReadPages}>
        Read 10 pages
      </button>
    </div>
  );
}

export default ReadingGoal;