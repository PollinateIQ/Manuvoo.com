"use client";

import * as React from "react";
import { Send, MessageSquarePlus, Sparkles, AlertCircle, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";

type FeedbackPayload = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const feedbackTypes = [
  { value: "feature-request", label: "Feature Request", icon: Sparkles, color: "text-indigo-500" },
  { value: "bug-report", label: "Bug Report", icon: AlertCircle, color: "text-red-500" },
  { value: "general", label: "General Feedback", icon: MessageSquare, color: "text-slate-500" },
];

export function FeedbackForm() {
  const [form, setForm] = React.useState<FeedbackPayload>({
    name: "",
    email: "",
    type: "feature-request",
    message: "",
  });

  const [state, setState] = React.useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ status: "submitting" });

    // Simulate network request since backend is not yet exposed
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real implementation, you would POST to your API here
    // const res = await fetch("/api/feedback", { ... });

    // For now, simulated success
    setState({
      status: "success",
      message: "Thanks for your suggestion! We've added it to our review queue.",
    });
    setForm({ name: "", email: "", type: "feature-request", message: "" });
  }

  const selectedType = feedbackTypes.find(t => t.value === form.type) || feedbackTypes[0];
  const TypeIcon = selectedType.icon;

  return (
    <div className="relative isolate">
      {/* Decorative gradient blur */}
      <div 
        className="absolute -inset-1 z-[-1] rounded-[24px] bg-gradient-to-r from-accent1/20 via-indigo-500/20 to-purple-500/20 opacity-50 blur-xl transition-opacity duration-500" 
        aria-hidden="true"
      />
      
      <Card className="border-borderNeutral/50 bg-surface1/80 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-accent1/30">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-white/5 to-transparent rounded-[20px]" />
        
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent1/10 to-accent1/5 shadow-inner border border-accent1/10 text-accent1 ring-1 ring-white/20">
                  <MessageSquarePlus className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text1">Have a suggestion?</h3>
                <p className="text-xs font-medium text-accent1">Help shape Manuvoo</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text2">
            We build based on what you need. Let us know if you have a feature request, a bug to report, or just some thoughts to share.
          </p>
        </CardHeader>
        
        <CardBody>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text2 ml-1" htmlFor="feedback-name">
                  Name
                </label>
                <div className="relative group">
                  <Input
                    id="feedback-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                    placeholder="Your name"
                    className="transition-all focus:ring-accent1/20 bg-surface2/50 border-transparent hover:bg-surface2 focus:bg-surface1 focus:border-accent1/30 h-11"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text2 ml-1" htmlFor="feedback-email">
                  Email
                </label>
                <Input
                  id="feedback-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  className="transition-all focus:ring-accent1/20 bg-surface2/50 border-transparent hover:bg-surface2 focus:bg-surface1 focus:border-accent1/30 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-semibold text-text2 ml-1" htmlFor="feedback-type">
                 What is this about?
               </label>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {feedbackTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setForm(v => ({ ...v, type: type.value }))}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200",
                        form.type === type.value
                          ? "bg-accent1/10 border-accent1/30 text-accent1 shadow-sm ring-1 ring-accent1/20"
                          : "bg-surface2/30 border-transparent text-text2 hover:bg-surface2 hover:text-text1"
                      )}
                    >
                      <type.icon className={cn("h-4 w-4", form.type === type.value ? "text-accent1" : type.color)} />
                      {type.label}
                    </button>
                  ))}
               </div>
               {/* Hidden select for accessibility/compatibility if needed, or just use the state directly */}
               <select 
                 className="sr-only" 
                 value={form.type} 
                 onChange={e => setForm(v => ({ ...v, type: e.target.value }))}
                 tabIndex={-1}
               >
                 {feedbackTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
               </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-text2 ml-1" htmlFor="feedback-message">
                Tell us more
              </label>
              <div className="relative">
                <Textarea
                  id="feedback-message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, message: e.target.value }))
                  }
                  placeholder={
                    form.type === "feature-request" ? "I wish I could..." :
                    form.type === "bug-report" ? "I noticed that when I..." :
                    "I really like..."
                  }
                  className="min-h-[120px] transition-all focus:ring-accent1/20 bg-surface2/50 border-transparent hover:bg-surface2 focus:bg-surface1 focus:border-accent1/30 resize-none leading-relaxed p-4"
                />
                <TypeIcon className={cn("absolute right-3 bottom-3 h-5 w-5 opacity-20 pointer-events-none transition-colors", selectedType.color)} />
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-borderNeutral/30">
              <div className="order-2 sm:order-1">
                {state.status === "success" ? (
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {state.message}
                  </div>
                ) : null}
                {state.status === "error" ? (
                  <p className="text-sm text-red-500 font-medium flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {state.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                size="lg"
                variant={form.message.length > 0 ? "primary" : "secondary"}
                disabled={state.status === "submitting" || form.message.length === 0}
                className={cn(
                  "order-1 sm:order-2 w-full sm:w-auto transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:hover:translate-y-0 disabled:shadow-none",
                  form.message.length > 0 ? "shadow-accent1/25" : ""
                )}
              >
                {state.status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Feedback <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
