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
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Building the Platform</h3>
            <p className="text-neutral-200 text-sm md:text-base mb-6">
              Foundation year focused on creating robust technology and validating our market approach.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-neutral-300 text-sm">Completed core technology development</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-neutral-300 text-sm">Validated with pilot restaurants</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-neutral-300 text-sm">Secured initial funding rounds</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-neutral-300 text-sm">Established team and operations</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Development</span>
              </div>
              <div className="text-lg font-bold text-white">Platform Beta</div>
              <div className="text-xs text-neutral-400">Core features built</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Validation</span>
              </div>
              <div className="text-lg font-bold text-white">5 Pilot Restaurants</div>
              <div className="text-xs text-neutral-400">Successful testing</div>
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
            <h3 className="text-xl font-bold text-blue-400 mb-2">Market Entry</h3>
            <p className="text-neutral-200 text-sm md:text-base mb-6">
              Launch phase with focused market penetration and proven ROI model validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">100</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Restaurant Partners</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">R7.2M</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Revenue Target</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">ROI</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Model Proven</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-neutral-200 font-medium text-sm">Market Launch</div>
                <div className="text-neutral-400 text-xs">Full platform release with core features</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-neutral-200 font-medium text-sm">Customer Acquisition</div>
                <div className="text-neutral-400 text-xs">Onboard 100 restaurant partners across key markets</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="text-neutral-200 font-medium text-sm">Revenue Validation</div>
                <div className="text-neutral-400 text-xs">Achieve R7.2M revenue target and prove sustainable model</div>
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
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Industry Leadership</h3>
            <p className="text-neutral-200 text-sm md:text-base mb-6">
              Become Africa's #1 hospitality technology partner with expanded reach and proven impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-emerald-400 mb-1">2,000+</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">SME Partners</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-400 mb-1">R45M</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Revenue</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-yellow-400 mb-1">#1</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Platform</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-purple-400 mb-1">3</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider">Countries</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-emerald-400" />
              <h4 className="text-lg font-bold text-white">Continental Expansion</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-neutral-200 mb-2">Target Markets:</div>
                <div className="space-y-1">
                  <div className="text-xs text-neutral-400">🇿🇦 South Africa (Primary)</div>
                  <div className="text-xs text-neutral-400">🇰🇪 Kenya (Secondary)</div>
                  <div className="text-xs text-neutral-400">🇳🇬 Nigeria (Tertiary)</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-200 mb-2">Impact Goals:</div>
                <div className="space-y-1">
                  <div className="text-xs text-neutral-400">• 40% average profit increase</div>
                  <div className="text-xs text-neutral-400">• 35% operational cost reduction</div>
                  <div className="text-xs text-neutral-400">• Industry leadership recognition</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Africa's #1 Hospitality Technology Partner</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Timeline data={data} />
    </div>
  );
}
