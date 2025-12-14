"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  locations: string;
  message: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [form, setForm] = React.useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    locations: "1",
    message: "",
  });

  const [state, setState] = React.useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !json.ok) {
        setState({
          status: "error",
          message:
            json.message ??
            "Something went wrong sending your message. Please try again.",
        });
        return;
      }

      setState({
        status: "success",
        message: json.message ?? "Thanks — we’ll get back to you shortly.",
      });
      setForm({ name: "", email: "", company: "", locations: "1", message: "" });
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-medium text-text3">Contact</p>
        <h3 className="mt-2 text-lg font-semibold text-text1">Book a demo</h3>
        <p className="mt-2 text-sm leading-7 text-text2">
          Tell us a bit about your operation and what you’re trying to improve.
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-xs font-medium text-text2" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-medium text-text2" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((v) => ({ ...v, email: e.target.value }))
                }
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-xs font-medium text-text2" htmlFor="company">
                Company / Restaurant
              </label>
              <Input
                id="company"
                required
                value={form.company}
                onChange={(e) =>
                  setForm((v) => ({ ...v, company: e.target.value }))
                }
                placeholder="Business name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-medium text-text2" htmlFor="locations">
                Number of locations
              </label>
              <Select
                id="locations"
                value={form.locations}
                onChange={(e) =>
                  setForm((v) => ({ ...v, locations: e.target.value }))
                }
              >
                <option value="1">1</option>
                <option value="2-3">2–3</option>
                <option value="4-10">4–10</option>
                <option value="10+">10+</option>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-text2" htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              required
              value={form.message}
              onChange={(e) =>
                setForm((v) => ({ ...v, message: e.target.value }))
              }
              placeholder="What are you trying to improve (tables, stations, payments, inventory, staff)?"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              size="lg"
              disabled={state.status === "submitting"}
            >
              {state.status === "submitting" ? "Sending…" : "Send"}
            </Button>

            {state.status === "success" ? (
              <p className="text-sm text-text2">{state.message}</p>
            ) : null}
            {state.status === "error" ? (
              <p className="text-sm text-accent2">{state.message}</p>
            ) : null}
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
