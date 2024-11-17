interface CalculationParams {
  followers: number;
  aov: number;
  grossMargin: number;
  couponPercentage: number;
}

const IMPRESSION_RATE = 0.6; // 60%
const CONVERSION_RATE = 0.15; // 15%

export const calculateRewards = ({
  followers,
  aov,
  grossMargin,
  couponPercentage,
}: CalculationParams) => {
  const impressions = followers * IMPRESSION_RATE;
  const estimatedConversions = impressions * CONVERSION_RATE;
  const potentialProfit = estimatedConversions * aov * (grossMargin / 100);
  const couponValue = potentialProfit * (couponPercentage / 100);

  return {
    impressions: Math.round(impressions),
    estimatedConversions: Math.round(estimatedConversions),
    potentialProfit: Math.round(potentialProfit),
    couponValue: Math.round(couponValue),
  };
};

export const FOLLOWER_RANGES = [
  { min: 0, max: 1000, label: "0-1,000" },
  { min: 1000, max: 2000, label: "1,000-2,000" },
  { min: 2000, max: 3500, label: "2,000-3,500" },
  { min: 3500, max: 5000, label: "3,500-5,000" },
];