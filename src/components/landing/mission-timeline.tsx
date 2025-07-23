'use client'

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle, Target, TrendingUp, Globe, Trophy } from "lucide-react";

export default function MissionTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">Building the Platform</h3>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Foundation year focused on creating robust technology and validating our market approach.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">Completed core technology development</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">Validated with pilot restaurants</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">Secured initial funding rounds</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">Established team and operations</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Development</span>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Platform Beta</div>
              <div className="text-xs text-gray-400">Core features built</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Validation</span>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">5 Pilot Restaurants</div>
              <div className="text-xs text-gray-400">Successful testing</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">Market Entry</h3>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Launch phase with focused market penetration and proven ROI model validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">100</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Restaurant Partners</div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1">R7.2M</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Revenue Target</div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1">ROI</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Model Proven</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-gray-200 font-medium text-sm">Market Launch</div>
                <div className="text-gray-400 text-xs">Full platform release with core features</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-gray-200 font-medium text-sm">Customer Acquisition</div>
                <div className="text-gray-400 text-xs">Onboard 100 restaurant partners across key markets</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-gray-200 font-medium text-sm">Revenue Validation</div>
                <div className="text-gray-400 text-xs">Achieve R7.2M revenue target and prove sustainable model</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">Industry Leadership</h3>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Become Africa's #1 hospitality technology partner with expanded reach and proven impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1">2,000+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">SME Partners</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">R45M</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Revenue</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1">#1</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Platform</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">3</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Countries</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Continental Expansion</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-200 mb-2">Target Markets:</div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">🇿🇦 South Africa (Primary)</div>
                  <div className="text-xs text-gray-400">🇰🇪 Kenya (Secondary)</div>
                  <div className="text-xs text-gray-400">🇳🇬 Nigeria (Tertiary)</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-200 mb-2">Impact Goals:</div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">• 40% average profit increase</div>
                  <div className="text-xs text-gray-400">• 35% operational cost reduction</div>
                  <div className="text-xs text-gray-400">• Industry leadership recognition</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Africa's #1 Hospitality Technology Partner</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
