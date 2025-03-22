interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

export function getLeaderboard(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const leaderboard = localStorage.getItem("leaderboard");
    return leaderboard ? JSON.parse(leaderboard) : [];
  } catch (error) {
    return [];
  }
}

export function isHighScore(score: number): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const leaderboard = getLeaderboard();
    if (score === 0) return false;
    if (leaderboard.length < 4) return true;
    return score > leaderboard[3].score;
  } catch (error) {
    console.error('Error checking high score:', error);
    return false;
  }
}

export function updateLeaderboard(score: number, name: string) {
  if (typeof window === 'undefined') return;

  try {
    const leaderboard = getLeaderboard();
    const newEntry = { name, score, date: new Date().toISOString() };
    leaderboard.push(newEntry);
    leaderboard.sort((a, b) => b.score - a.score);
    // Keep only top 4 scores
    const topScores = leaderboard.slice(0, 4);
    localStorage.setItem("leaderboard", JSON.stringify(topScores));
  } catch (error) {
    console.error('Error updating leaderboard:', error);
  }
}

export function setPlayerName(name: string) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem("playerName", name);
  } catch (error) {
    // Handle error silently
  }
} 