import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FOLLOWER_RANGES, calculateRewards } from "@/utils/rewardsCalculations";

interface RewardsResultsTableProps {
  aov: number;
  grossMargin: number;
  couponPercentage: number;
}

export const RewardsResultsTable = ({
  aov,
  grossMargin,
  couponPercentage,
}: RewardsResultsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Follower Range</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>Estimated Conversions</TableHead>
          <TableHead>Potential Profit (₹)</TableHead>
          <TableHead>Coupon Code Value (₹)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {FOLLOWER_RANGES.map((range) => {
          const results = calculateRewards({
            followers: range.max,
            aov,
            grossMargin,
            couponPercentage,
          });

          return (
            <TableRow key={range.label}>
              <TableCell>{range.label}</TableCell>
              <TableCell>{results.impressions.toLocaleString()}</TableCell>
              <TableCell>{results.estimatedConversions.toLocaleString()}</TableCell>
              <TableCell>₹{results.potentialProfit.toLocaleString()}</TableCell>
              <TableCell>₹{results.couponValue.toLocaleString()}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};