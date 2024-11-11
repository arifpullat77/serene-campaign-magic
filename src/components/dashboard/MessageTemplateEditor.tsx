import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MessageTemplate {
  id: number;
  type: string;
  message: string;
}

export const MessageTemplateEditor = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = React.useState<MessageTemplate[]>([
    {
      id: 1,
      type: "Welcome Message",
      message: "Hey! Thanks for mentioning us in your post. We love seeing our products being shared! 😊",
    },
    {
      id: 2,
      type: "Email Request",
      message: "Would you mind sharing your email with us? We'd love to send you something special!",
    },
    {
      id: 3,
      type: "Thank You",
      message: "Thank you for sharing your email! Here's your special discount code: {COUPON_CODE}. Enjoy!",
    },
  ]);

  const handleMessageChange = (id: number, value: string) => {
    setTemplates(
      templates.map((template) =>
        template.id === id ? { ...template, message: value } : template
      )
    );
  };

  const handleSave = () => {
    toast({
      title: "Message Templates Updated",
      description: "Your message templates have been saved successfully.",
    });
  };

  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <div key={template.id} className="space-y-2">
          <label className="text-sm font-medium">{template.type}</label>
          <Textarea
            value={template.message}
            onChange={(e) => handleMessageChange(template.id, e.target.value)}
            className="min-h-[100px]"
            placeholder={`Enter ${template.type.toLowerCase()}`}
          />
        </div>
      ))}
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
};