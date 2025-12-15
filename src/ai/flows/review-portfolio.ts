'use server';

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const PortfolioReviewOutputSchema = z.object({
  strengths: z.array(z.string()).describe("The portfolio's key strengths."),
  areasForImprovement: z.array(z.string()).describe('Areas where the portfolio can be improved.'),
  suggestions: z.array(z.string()).describe('Specific, actionable suggestions for improvement.'),
});

export type PortfolioReviewOutput = z.infer<typeof PortfolioReviewOutputSchema>;

const portfolioReviewPrompt = ai.definePrompt({
  name: 'portfolioReviewPrompt',
  input: {
    schema: z.string(),
  },
  output: {
    schema: PortfolioReviewOutputSchema,
  },
  prompt: `You are an expert career coach and portfolio reviewer.
    Review the following portfolio content and provide feedback.
    Analyze the content and identify its strengths, areas for improvement, and provide concrete suggestions for enhancement.
    The tone should be professional, encouraging, and constructive.

    Portfolio Content:
    ---
    {{{input}}}
    ---
    `,
});

const reviewPortfolioFlow = ai.defineFlow(
  {
    name: 'reviewPortfolio',
    inputSchema: z.string(),
    outputSchema: PortfolioReviewOutputSchema,
  },
  async (portfolioContent: string) => {
    if (process.env.NODE_ENV === 'development') {
      // In dev, return mock data to avoid calling the AI API.
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        strengths: [
          'Clear and concise project descriptions.',
          'Good use of modern technologies like React and Next.js.',
          'The skills section provides a quick overview of your capabilities.',
        ],
        areasForImprovement: [
          'Consider adding more details about your specific role and contributions in team projects.',
          'The "About Me" section could be expanded to share more about your passion and career goals.',
          'Quantify achievements where possible (e.g., "improved performance by 20%").',
        ],
        suggestions: [
          'Add links to live demos for your projects.',
          'Include a downloadable PDF version of your resume.',
          'Consider adding a blog section to share your expertise and thoughts on industry trends.',
        ],
      };
    }
    
    const {output} = await portfolioReviewPrompt(portfolioContent);
    return output!;
  }
);

export async function reviewPortfolio(portfolioContent: string): Promise<PortfolioReviewOutput> {
  return reviewPortfolioFlow(portfolioContent);
}
