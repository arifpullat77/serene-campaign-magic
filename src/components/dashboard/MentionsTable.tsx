import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import * as XLSX from 'xlsx';

interface Mention {
  id: string;
  instagramId: string;
  profileUrl: string;
  followers: number;
  estimatedReach: number;
  uploadTime: string;
  couponEligible: string;
  status: "Coupon Sent" | "Pending" | "Not Eligible";
}

export const MentionsTable = () => {
  const [mentions] = React.useState<Mention[]>([
    {
      id: "1",
      instagramId: "@user1",
      profileUrl: "https://instagram.com/user1",
      followers: 1200,
      estimatedReach: 840,
      uploadTime: "2024-02-20T10:30:00",
      couponEligible: "500 INR",
      status: "Coupon Sent",
    },
    // ... Adding more samples
    {
      id: "2",
      instagramId: "@user2",
      profileUrl: "https://instagram.com/user2",
      followers: 2500,
      estimatedReach: 1750,
      uploadTime: "2024-02-20T11:15:00",
      couponEligible: "1000 INR",
      status: "Pending",
    },
    {
      id: "3",
      instagramId: "@user3",
      profileUrl: "https://instagram.com/user3",
      followers: 100,
      estimatedReach: 70,
      uploadTime: "2024-02-20T12:00:00",
      couponEligible: "0 INR",
      status: "Not Eligible",
    },
    // ... Adding more samples up to 10
    {
      id: "10",
      instagramId: "@user10",
      profileUrl: "https://instagram.com/user10",
      followers: 3500,
      estimatedReach: 2450,
      uploadTime: "2024-02-20T19:30:00",
      couponEligible: "1000 INR",
      status: "Pending",
    },
  ]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(mentions.map(mention => ({
      'Instagram ID': mention.instagramId,
      'Followers': mention.followers,
      'Estimated Reach': mention.estimatedReach,
      'Upload Time': new Date(mention.uploadTime).toLocaleString(),
      'Coupon Eligible': mention.couponEligible,
      'Status': mention.status
    })));
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mentions");
    XLSX.writeFile(wb, "customer-mentions.xlsx");
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={exportToExcel} variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export to Excel
        </Button>
      </div>
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
    </div>
  );
};
