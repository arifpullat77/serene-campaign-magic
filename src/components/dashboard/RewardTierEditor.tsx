import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface RewardTier {
  id: number;
  minFollowers: number;
  maxFollowers: number;
  amount: number;
  couponCode: string;
}

export const RewardTierEditor = () => {
  const { toast } = useToast();
  const [tiers, setTiers] = React.useState<RewardTier[]>([
    { id: 1, minFollowers: 0, maxFollowers: 999, amount: 300, couponCode: "" },
    { id: 2, minFollowers: 1000, maxFollowers: 1499, amount: 500, couponCode: "" },
    { id: 3, minFollowers: 1500, maxFollowers: 1999, amount: 800, couponCode: "" },
    { id: 4, minFollowers: 2000, maxFollowers: 3000, amount: 1000, couponCode: "" },
  ]);

  const handleAmountChange = (id: number, value: string) => {
    setTiers(
      tiers.map((tier) =>
        tier.id === id ? { ...tier, amount: parseInt(value) || 0 } : tier
      )
    );
  };

  const handleCouponChange = (id: number, value: string) => {
    setTiers(
      tiers.map((tier) =>
        tier.id === id ? { ...tier, couponCode: value } : tier
      )
    );
  };

  const handleSave = () => {
    toast({
      title: "Reward Tiers Updated",
      description: "Your reward tier settings have been saved successfully.",
    });
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Follower Range</TableHead>
            <TableHead>Reward Amount (INR)</TableHead>
            <TableHead>Coupon Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tiers.map((tier) => (
            <TableRow key={tier.id}>
              <TableCell>
                {tier.minFollowers.toLocaleString()} - {tier.maxFollowers.toLocaleString()}
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={tier.amount}
                  onChange={(e) => handleAmountChange(tier.id, e.target.value)}
                  className="w-32"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  value={tier.couponCode}
                  onChange={(e) => handleCouponChange(tier.id, e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-48"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
};