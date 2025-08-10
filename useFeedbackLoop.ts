import { useFeedbackStore } from '@/store/feedbackStore';

export function useFeedbackLoop(script: string) {
  const { metrics } = useFeedbackStore();

  const engagementScore = metrics.views + metrics.likes * 2 + metrics.shares * 3;

  const suggestRemix = () => {
    if (engagementScore < 100) {
      return 'Try a shorter hook or add trending sound effects.';
    } else if (metrics.shares > metrics.likes) {
      return 'Your message resonates — consider a cinematic remix.';
    } else {
      return 'Solid engagement! Try a meme-style version for virality.';
    }
  };

  return { engagementScore, suggestRemix };
}
