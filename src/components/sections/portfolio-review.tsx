'use client';

import { useActionState } from 'react';
import { getPortfolioReview } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Lightbulb, ChevronUp, ThumbsUp, AlertCircle } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const initialState = {
  feedback: null,
  error: null,
};

const PortfolioReviewSection = () => {
  const [state, formAction, isPending] = useActionState(getPortfolioReview, initialState);
  
  const renderFeedback = () => {
    if (!state?.feedback) return null;
    const { strengths, areasForImprovement, suggestions } = state.feedback;
    
    return (
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold"><ThumbsUp className="h-5 w-5 mr-2 text-green-500" /> Strengths</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {strengths.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold"><ChevronUp className="h-5 w-5 mr-2 text-amber-500" /> Areas for Improvement</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {areasForImprovement.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold"><Lightbulb className="h-5 w-5 mr-2 text-blue-500" /> Suggestions</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {suggestions.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };
  
  const renderLoadingState = () => (
    <div className="mt-6 space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-20 w-full" />
    </div>
  );

  return (
    <section id="review" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-10 w-10 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">AI-Powered Portfolio Review</h2>
            <p className="text-lg text-muted-foreground">
                Paste your portfolio content (e.g., from your LinkedIn profile or resume) to get instant, personalized feedback and suggestions for improvement from our AI assistant.
            </p>
        </div>

        <Card className="max-w-4xl mx-auto mt-12 shadow-2xl">
            <CardHeader>
                <CardTitle>Portfolio Content</CardTitle>
                <CardDescription>Enter your content below to start the review process.</CardDescription>
            </CardHeader>
            <CardContent>
                 <form action={formAction}>
                    <Textarea
                        name="portfolioContent"
                        placeholder="Paste your portfolio details here..."
                        rows={10}
                        className="mb-4"
                        required
                        minLength={50}
                    />
                    <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90">
                        {isPending ? 'Analyzing...' : 'Get Feedback'}
                        <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                </form>
                {isPending && renderLoadingState()}

                {state?.error && (
                    <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-md flex items-center gap-3">
                        <AlertCircle className="h-5 w-5" />
                        <p>{state.error}</p>
                    </div>
                )}
                
                {state?.feedback && !isPending && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold">Review Results</h3>
                    {renderFeedback()}
                  </div>
                )}
            </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default PortfolioReviewSection;
