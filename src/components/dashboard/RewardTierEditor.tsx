import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrency } from "@/contexts/CurrencyContext";

interface RewardTier {
  id: number;
  minFollowers: number;
  maxFollowers: number;
  amount: number;
  couponCode: string;
}

export const RewardTierEditor = () => {
  const { toast } = useToast();
  const { currency, setCurrency, currencySymbol } = useCurrency();
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

  const handleMinFollowersChange = (id: number, value: string) => {
    setTiers(
      tiers.map((tier) =>
        tier.id === id ? { ...tier, minFollowers: parseInt(value) || 0 } : tier
      )
    );
  };

  const handleMaxFollowersChange = (id: number, value: string) => {
    setTiers(
      tiers.map((tier) =>
        tier.id === id ? { ...tier, maxFollowers: parseInt(value) || 0 } : tier
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
      <div className="flex justify-end mb-4">
        <Select value={currency} onValueChange={(value: 'INR' | 'USD' | 'EUR') => setCurrency(value)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="INR">INR (₹)</SelectItem>
            <SelectItem value="USD">USD ($)</SelectItem>
            <SelectItem value="EUR">EUR (€)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Follower Range</TableHead>
            <TableHead>Reward Amount ({currency})</TableHead>
            <TableHead>Coupon Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tiers.map((tier) => (
            <TableRow key={tier.id}>
              <TableCell className="flex items-center gap-2">
                <Input
                  type="number"
                  value={tier.minFollowers}
                  onChange={(e) => handleMinFollowersChange(tier.id, e.target.value)}
                  className="w-24"
                />
                <span>-</span>
                <Input
                  type="number"
                  value={tier.maxFollowers}
                  onChange={(e) => handleMaxFollowersChange(tier.id, e.target.value)}
                  className="w-24"
                />
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