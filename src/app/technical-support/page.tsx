import type { Metadata } from "next";
import Link from "next/link";
import { Database, Lock, Server, Settings } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Technical Support",
  description: "Platform and API support.",
};

export default function TechnicalSupportPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Developers & IT"
          title="Technical Support"
          description="Resources for IT managers, integrators, and technical troubleshooting."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Settings className="h-5 w-5 text-accent2" />
              <h3 className="font-semibold text-text1">Integration Support</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-text2">
                Assistance with API tokens, webhooks, and connecting third-party
                hardware or software.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Lock className="h-5 w-5 text-accent2" />
              <h3 className="font-semibold text-text1">Security & Access</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-text2">
                SSO configuration, role-based access control (RBAC) issues, and
                security audit logs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Server className="h-5 w-5 text-accent2" />
              <h3 className="font-semibold text-text1">Platform Status</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-text2">
                Check current uptime, scheduled maintenance, and incident history.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Database className="h-5 w-5 text-accent2" />
              <h3 className="font-semibold text-text1">Data & Exports</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-text2">
                Help with bulk data imports, inventory exports, and reporting API
                limits.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold text-text1">
            Submit a ticket
          </h2>
          <p className="mt-2 text-text2">
            Include your tenant ID and relevant logs for faster resolution.
          </p>
          <div className="mt-6">
            <Link href="mailto:info@pollinateiq.co.za">
              <Button>Email Engineering Support</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
