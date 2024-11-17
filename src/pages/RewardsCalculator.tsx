import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FollowerRange {
  min: number;
  max: number;
  label: string;
}

interface CalculationResult {
  range: string;
  impressions: number;
  potentialProfit: number;
  couponValue: number;
}

const followerRanges: FollowerRange[] = [
  { min: 0, max: 1000, label: "0-1,000" },
  { min: 1000, max: 2000, label: "1,000-2,000" },
  { min: 2000, max: 3500, label: "2,000-3,500" },
  { min: 3500, max: 5000, label: "3,500-5,000" },
];

const RewardsCalculator = () => {
  const { toast } = useToast();
  const [aov, setAov] = useState<string>("");
  const [grossMargin, setGrossMargin] = useState<string>("");
  const [impressionRate, setImpressionRate] = useState<string>("60");
  const [results, setResults] = useState<CalculationResult[]>([]);

  const validateInputs = () => {
    if (!aov || isNaN(Number(aov)) || Number(aov) <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid Average Order Value",
        variant: "destructive",
      });
      return false;
    }
    if (!grossMargin || isNaN(Number(grossMargin)) || Number(grossMargin) < 0 || Number(grossMargin) > 100) {
      toast({
        title: "Invalid Input",
        description: "Gross Margin must be between 0 and 100",
        variant: "destructive",
      });
      return false;
    }
    if (!impressionRate || isNaN(Number(impressionRate)) || Number(impressionRate) < 0 || Number(impressionRate) > 100) {
      toast({
        title: "Invalid Input",
        description: "Impression Rate must be between 0 and 100",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const calculateResults = () => {
    if (!validateInputs()) return;

    const newResults = followerRanges.map((range) => {
      const midpoint = (range.min + range.max) / 2;
      const impressions = midpoint * (Number(impressionRate) / 100);
      const potentialProfit = impressions * Number(aov) * (Number(grossMargin) / 100);
      const couponValue = potentialProfit * 0.01; // 1% of potential profit

      return {
        range: range.label,
        impressions: Math.round(impressions),
        potentialProfit: Math.round(potentialProfit),
        couponValue: Math.round(couponValue),
      };
    });

    setResults(newResults);
  };

  useEffect(() => {
    calculateResults();
  }, [aov, grossMargin, impressionRate]);

  const handleReset = () => {
    setAov("");
    setGrossMargin("");
    setImpressionRate("60");
    setResults([]);
  };

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-up">
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Rewards Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="aov" className="text-sm font-medium">
                  Average Order Value (₹)
                </label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter your average order value in Rupees</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="aov"
                type="number"
                value={aov}
                onChange={(e) => setAov(e.target.value)}
                placeholder="Enter AOV"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="grossMargin" className="text-sm font-medium">
                  Gross Margin (%)
                </label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter your gross margin percentage (0-100)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="grossMargin"
                type="number"
                value={grossMargin}
                onChange={(e) => setGrossMargin(e.target.value)}
                placeholder="Enter margin %"
                min="0"
                max="100"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="impressionRate" className="text-sm font-medium">
                  Impression Rate (%)
                </label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage of followers who will see the post</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="impressionRate"
                type="number"
                value={impressionRate}
                onChange={(e) => setImpressionRate(e.target.value)}
                placeholder="Enter impression rate"
                min="0"
                max="100"
              />
            </div>
          </div>

          <Button onClick={handleReset} variant="outline" className="w-full md:w-auto">
            Reset Calculator
          </Button>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Follower Range</TableHead>
                <TableHead>Estimated Impressions</TableHead>
                <TableHead>Potential Profit (₹)</TableHead>
                <TableHead>Suggested Coupon Value (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.range}>
                  <TableCell>{result.range}</TableCell>
                  <TableCell>{result.impressions.toLocaleString()}</TableCell>
                  <TableCell>₹{result.potentialProfit.toLocaleString()}</TableCell>
                  <TableCell>₹{result.couponValue.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsCalculator;