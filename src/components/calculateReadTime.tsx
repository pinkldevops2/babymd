export function calculateReadTime(text: string, wordsPerMinute: number = 200): number {
  if (!text) return 1;
  const words: number = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}