import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RewardsInputFormProps {
  aov: string;
  grossMargin: string;
  couponPercentage: string;
  onAovChange: (value: string) => void;
  onGrossMarginChange: (value: string) => void;
  onCouponPercentageChange: (value: string) => void;
  onReset: () => void;
}

export const RewardsInputForm = ({
  aov,
  grossMargin,
  couponPercentage,
  onAovChange,
  onGrossMarginChange,
  onCouponPercentageChange,
  onReset,
}: RewardsInputFormProps) => {
  return (
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
          onChange={(e) => onAovChange(e.target.value)}
          placeholder="650"
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
          onChange={(e) => onGrossMarginChange(e.target.value)}
          placeholder="30"
          min="0"
          max="100"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="couponPercentage" className="text-sm font-medium">
            Coupon Code Percentage (%)
          </label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enter the percentage for coupon code value (0-100)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Input
          id="couponPercentage"
          type="number"
          value={couponPercentage}
          onChange={(e) => onCouponPercentageChange(e.target.value)}
          placeholder="1"
          min="0"
          max="100"
        />
      </div>
      <Button onClick={onReset} variant="outline" className="mt-4">
        Reset Calculator
      </Button>
    </div>
  );
};