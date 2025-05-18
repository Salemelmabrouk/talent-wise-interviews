
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/app/core/auth/state/auth.state';
import { UserRole } from '@/app/core/models/user.model';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

const demoQuestions = [
  "Tell me about yourself and your background in software development.",
  "What are your strengths and weaknesses when it comes to technical work?",
  "How do you approach problem-solving when faced with a complex technical challenge?",
  "Tell me about a project you worked on that you're particularly proud of.",
  "How do you stay updated with the latest technologies and industry trends?",
  "How do you handle disagreements with team members about technical decisions?",
];

const InterviewPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'ai' | 'user', message: string }>>([
    { sender: 'ai', message: "Hello! I'm your AI interviewer today. I'll be asking you some questions to understand your skills and experience better. Let's get started with the first question." },
    { sender: 'ai', message: demoQuestions[0] }
  ]);
  const [thinking, setThinking] = useState(false);

  const handleSubmitResponse = async () => {
    if (!userResponse.trim()) return;
    
    setChatHistory((prev) => [...prev, { sender: 'user', message: userResponse }]);
    setThinking(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get next question or feedback
    if (currentQuestion < demoQuestions.length - 1) {
      const nextQuestion = demoQuestions[currentQuestion + 1];
      const feedback = generateFeedback(userResponse);
      setChatHistory((prev) => [
        ...prev, 
        { sender: 'ai', message: feedback },
        { sender: 'ai', message: nextQuestion }
      ]);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // End of interview
      const feedback = generateFeedback(userResponse);
      const conclusion = "Thank you for completing the interview! I've analyzed your responses and generated a feedback report. You can view your detailed results on your dashboard.";
      setChatHistory((prev) => [
        ...prev, 
        { sender: 'ai', message: feedback },
        { sender: 'ai', message: conclusion }
      ]);
      toast({
        title: "Interview Completed",
        description: "Your interview has been completed and your feedback is ready.",
      });
    }
    
    setUserResponse('');
    setThinking(false);
  };

  const generateFeedback = (response: string) => {
    // Simplified feedback generator - in a real app, this would use AI to generate meaningful feedback
    const tones = ["positive", "constructive", "encouraging"];
    const randomTone = tones[Math.floor(Math.random() * tones.length)];
    
    const feedbacks = {
      positive: "Great answer! You explained your points clearly and provided relevant examples.",
      constructive: "That's a good start. Consider adding specific examples to strengthen your response.",
      encouraging: "I appreciate your thoughtfulness. Try expanding on the technical aspects in your future answers."
    };
    
    return feedbacks[randomTone as keyof typeof feedbacks];
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">AI Interview</h1>
        <p className="text-muted-foreground">
          {user?.role === UserRole.CANDIDATE 
            ? "Practice your interview skills with our AI interviewer." 
            : "Monitor the candidate's interview session."}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>Interview Session</CardTitle>
              <CardDescription>
                {user?.role === UserRole.CANDIDATE 
                  ? "Answer the questions as if you were in a real interview." 
                  : "The AI is conducting the interview with the candidate."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <div 
                    key={index}
                    className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`rounded-lg p-3 max-w-[80%] ${
                        chat.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                ))}
                {thinking && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2 bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <p className="text-sm">AI is thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex items-center w-full space-x-2">
                <Textarea 
                  placeholder="Type your response..." 
                  className="flex-1" 
                  value={userResponse}
                  onChange={(e) => setUserResponse(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmitResponse();
                    }
                  }}
                  disabled={thinking || currentQuestion >= demoQuestions.length}
                />
                <Button 
                  onClick={handleSubmitResponse} 
                  disabled={thinking || !userResponse.trim() || currentQuestion >= demoQuestions.length}
                >
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Interview Progress</CardTitle>
              <CardDescription>Question {currentQuestion + 1} of {demoQuestions.length}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${((currentQuestion + 1) / demoQuestions.length) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Interview Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Type</h3>
                <p className="text-sm text-muted-foreground">Technical Interview</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">Problem Solving, Technical Knowledge, Experience</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Duration</h3>
                <p className="text-sm text-muted-foreground">30 minutes</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Tips</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Be specific and provide examples</li>
                  <li>Take a moment to think before answering</li>
                  <li>Ask clarifying questions if needed</li>
                  <li>Explain your thought process</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InterviewPage;
