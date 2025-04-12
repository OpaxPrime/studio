
'use client';

import {useState} from 'react';
import {optimizeTitle} from '@/ai/flows/title-optimizer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useToast} from "@/hooks/use-toast"
import {Copy, Loader2} from 'lucide-react';

export default function Home() {
  const [originalTitle, setOriginalTitle] = useState('');
  const [optimizedTitle, setOptimizedTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleOptimizeTitle = async () => {
    setLoading(true);
    try {
      const result = await optimizeTitle({originalTitle});
      setOptimizedTitle(result.optimizedTitle);
    } catch (error) {
      console.error('Error optimizing title:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to optimize title. Please try again.",
      })
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (optimizedTitle) {
      navigator.clipboard.writeText(optimizedTitle);
      toast({
        title: "Copied!",
        description: "Optimized title copied to clipboard.",
      })
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">TitleForge</h1>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Optimize Your YouTube Title</CardTitle>
          <CardDescription>
            Enter your original title and let AI suggest an improved version for better SEO.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Textarea
              placeholder="Original YouTube Video Title"
              value={originalTitle}
              onChange={(e) => setOriginalTitle(e.target.value)}
            />
          </div>
          <Button disabled={loading} onClick={handleOptimizeTitle}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
            Optimize Title
          </Button>
          {optimizedTitle && (
            <div className="mt-4">
              <p className="text-sm font-medium">Optimized Title:</p>
              <div className="flex items-center">
                <Input
                  readOnly
                  className="bg-secondary"
                  value={optimizedTitle}
                />
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleCopyToClipboard}
                >
                  <Copy className="h-4 w-4"/>
                  <span className="sr-only">Copy to clipboard</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
