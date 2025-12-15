// @ts-nocheck
'use server';

import { z } from 'zod';
import { reviewPortfolio } from '@/ai/flows/review-portfolio';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the form fields.',
      success: false,
    };
  }

  // Here you would typically send an email
  // For this example, we'll just log it and simulate a success response
  console.log('Contact Form Submission:');
  console.log(validatedFields.data);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


export async function getPortfolioReview(prevState: any, formData: FormData) {
  const portfolioContent = formData.get('portfolioContent') as string;

  if (!portfolioContent || portfolioContent.length < 50) {
    return {
      ...prevState,
      error: 'Please provide at least 50 characters of content for review.',
      feedback: null,
    };
  }

  try {
    const feedback = await reviewPortfolio(portfolioContent);
    return {
      feedback,
      error: null,
    };
  } catch (error) {
    console.error('AI portfolio review failed:', error);
    return {
      ...prevState,
      error: 'An unexpected error occurred while reviewing the portfolio. Please try again later.',
      feedback: null,
    };
  }
}
