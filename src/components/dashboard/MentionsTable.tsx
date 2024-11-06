import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Mention {
  id: string;
  instagramId: string;
  profileUrl: string;
  followers: number;
  estimatedReach: number;
  uploadTime: string;
  couponEligible: string;
  status: "Coupon Sent" | "Pending";
}

export const MentionsTable = () => {
  // Mock data - would be replaced with real API data
  const [mentions] = React.useState<Mention[]>([
    {
      id: "1",
      instagramId: "@user1",
      profileUrl: "https://instagram.com/user1",
      followers: 1200,
      estimatedReach: 840, // Estimated as 70% of followers
      uploadTime: "2024-02-20T10:30:00",
      couponEligible: "500 INR",
      status: "Coupon Sent",
    },
    {
      id: "2",
      instagramId: "@user2",
      profileUrl: "https://instagram.com/user2",
      followers: 2500,
      estimatedReach: 1750, // Estimated as 70% of followers
      uploadTime: "2024-02-20T11:15:00",
      couponEligible: "1000 INR",
      status: "Pending",
    },
  ]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Instagram ID</TableHead>
          <TableHead>Followers</TableHead>
          <TableHead>Estimated Reach</TableHead>
          <TableHead>Upload Time</TableHead>
          <TableHead>Coupon Eligible</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mentions.map((mention) => (
          <TableRow key={mention.id}>
            <TableCell>
              <a
                href={mention.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {mention.instagramId}
              </a>
            </TableCell>
            <TableCell>{mention.followers.toLocaleString()}</TableCell>
            <TableCell>{mention.estimatedReach.toLocaleString()}</TableCell>
            <TableCell>
              {new Date(mention.uploadTime).toLocaleString()}
            </TableCell>
            <TableCell>{mention.couponEligible}</TableCell>
            <TableCell>
              <Badge
                variant={mention.status === "Coupon Sent" ? "success" : "secondary"}
                className={
                  mention.status === "Coupon Sent"
                    ? "bg-green-500 hover:bg-green-600"
                    : ""
                }
              >
                {mention.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};