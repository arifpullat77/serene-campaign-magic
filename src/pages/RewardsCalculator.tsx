import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RewardsInputForm } from "@/components/calculator/RewardsInputForm";
import { RewardsResultsTable } from "@/components/calculator/RewardsResultsTable";

const RewardsCalculator = () => {
  const [aov, setAov] = useState("650");
  const [grossMargin, setGrossMargin] = useState("30");
  const [couponPercentage, setCouponPercentage] = useState("1");

  const handleReset = () => {
    setAov("650");
    setGrossMargin("30");
    setCouponPercentage("1");
  };

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-up">
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">
            Rewards Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RewardsInputForm
            aov={aov}
            grossMargin={grossMargin}
            couponPercentage={couponPercentage}
            onAovChange={setAov}
            onGrossMarginChange={setGrossMargin}
            onCouponPercentageChange={setCouponPercentage}
            onReset={handleReset}
          />
          <RewardsResultsTable
            aov={Number(aov) || 0}
            grossMargin={Number(grossMargin) || 0}
            couponPercentage={Number(couponPercentage) || 0}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsCalculator;