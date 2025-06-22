import { useState } from "react";
import {
  FaServer,
  FaUsers,
  FaDownload,
  FaCommentAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaExternalLinkAlt,
  FaUserFriends,
  FaBuilding,
  FaMap,
} from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";

const MC_ADDRESS = "mc.shoghisimon.ca";

function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyServerAddress = async () => {
    try {
      await navigator.clipboard.writeText(MC_ADDRESS);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/minecraft-server-hero.png)", // Provide: Epic Minecraft landscape/builds
            filter: "blur(1px)",
          }}
        ></div>

        <div className="container relative z-20 mx-auto px-4 py-20 text-center">
          <div className="mb-6 flex items-center justify-center">
            <FaTrainSubway className="mr-4 h-12 w-12 text-emerald-400" />
            <h1 className="text-5xl font-bold text-white md:text-7xl">
              r/TransitDiagrams
            </h1>
          </div>
          <h2 className="mb-8 text-2xl text-emerald-300 md:text-3xl">
            Minecraft Server
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl">
            Build the future of transportation in Minecraft! Join{" "}
            <a
              href="https://discord.gg/J5bhVWTEm9"
              className="text-emerald-400 underline transition-colors hover:text-emerald-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              our community
            </a>{" "}
            of transit enthusiasts
          </p>
        </div>
      </div>

      {/* Server Info Cards */}
      <div className="container relative z-30 mx-auto -mt-10 px-4 py-16">
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Server Address Card */}
          <div
            onClick={copyServerAddress}
            className="group cursor-pointer rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            <FaServer className="mb-4 h-8 w-8 text-emerald-400" />
            <h3 className="mb-2 font-semibold text-white">Server Address</h3>
            <div className="flex items-center gap-2">
              <code className="rounded bg-black/30 px-3 py-1 font-mono text-sm text-emerald-300">
                {copiedAddress ? "Copied to clipboard!" : MC_ADDRESS}
              </code>
              <button
                onClick={copyServerAddress}
                className="text-gray-400 transition-colors group-hover:text-emerald-400"
                title="Copy to clipboard"
              >
                <FaCopy className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Version Card */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <FaCheckCircle className="mb-4 h-8 w-8 text-emerald-400" />
            <h3 className="mb-2 font-semibold text-white">Server Version</h3>
            <code className="rounded bg-black/30 px-3 py-1 font-mono text-sm text-emerald-300">
              Forge 1.20.1
            </code>
          </div>

          {/* Discord Card */}
          <a
            href="https://discord.gg/J5bhVWTEm9"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            <FaCommentAlt className="mb-4 h-8 w-8 text-emerald-400" />
            <h3 className="mb-2 font-semibold text-white">Discord Server</h3>
            <div className="inline-flex items-center text-emerald-300 transition-colors group-hover:text-emerald-200">
              Join Community
              <FaExternalLinkAlt className="ml-2 h-4 w-4" />
            </div>
          </a>

          {/* Mods Card */}
          <a
            href="/mods.tar.gz"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group cursor-pointer rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            <FaDownload className="mb-4 h-8 w-8 text-emerald-400" />
            <h3 className="mb-2 font-semibold text-white">Mod Pack</h3>
            <div className="inline-flex items-center rounded-md bg-emerald-300 p-2 transition-colors group-hover:bg-emerald-200">
              Download Mods
              <FaExternalLinkAlt className="ml-2 h-4 w-4" />
            </div>
          </a>
        </div>

        {/* Features Section */}
        <div className="mx-auto mb-16 flex w-full flex-col justify-center gap-8 md:flex-row">
          {/* What We Build Section */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              <FaBuilding className="mr-3 inline-block text-emerald-400" />
              What We Build
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-center">
                <div
                  className="mb-4 aspect-square h-48 w-full rounded-2xl border-4 border-emerald-400 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/minecraft-train-stations.png)",
                  }}
                ></div>
                <h3 className="text-xl font-bold text-white">Train Stations</h3>
              </div>

              <div className="text-center">
                <div
                  className="mb-4 aspect-square h-48 w-full rounded-2xl border-4 border-emerald-400 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/minecraft-subway-systems.png)",
                  }}
                ></div>
                <h3 className="text-xl font-bold text-white">Subway Systems</h3>
              </div>
            </div>
          </div>

          {/* Server Features Section */}
          <div>
            <h2 className="mb-8 px-8 text-3xl font-bold text-white">
              <FaMap className="mr-3 inline-block text-emerald-400" />
              Features
            </h2>
            <div className="mx-auto max-w-3xl rounded-2xl p-8 backdrop-blur-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaTrainSubway className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-lg text-gray-200">
                    Transit-focused building themes
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUserFriends className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  <span className="text-lg text-gray-200">
                    Collaborative community projects
                  </span>
                </li>
                <li className="flex items-start">
                  <TbNetwork className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                  <span className="text-lg text-gray-200">
                    Realistic transportation networks
                  </span>
                </li>
                <li className="flex items-start">
                  <MdSecurity className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                  <span className="text-lg text-gray-200">
                    Grief protection and fair play
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rules and Info Sections */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Server Rules */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
            <div className="mb-6 flex items-center">
              <FaShieldAlt className="mr-3 h-8 w-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Server Rules</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Be respectful to all players",
                "No griefing or stealing",
                "Keep chat family-friendly",
                "Follow moderator instructions",
                "Have fun and be creative!",
              ].map((rule, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <span className="text-gray-200">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disallowed Mods */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
            <div className="mb-6 flex items-center">
              <FaTimesCircle className="mr-3 h-8 w-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Disallowed Mods</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Hacked clients are never allowed.
            </p>
            <div className="space-y-2">
              {[
                "X-Ray/ESP mods",
                "Kill Aura/Aimbot",
                "Speed/Fly hacks",
                "Auto-clickers",
                "Automation (Baritone)",
              ].map((mod, index) => (
                <div key={index} className="flex items-center">
                  <FaTimesCircle className="mr-2 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span className="text-sm text-gray-300">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allowed Mods */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
            <div className="mb-6 flex items-center">
              <FaCheckCircle className="mr-3 h-8 w-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Allowed Mods</h3>
            </div>
            <p className="mb-4 text-gray-300">
              All mods in our mod pack are allowed.
            </p>
            <div className="space-y-2">
              {[
                "Optimization (Sodium, Lithium)",
                "Zoom (OkZoomer)",
                "Replay/World download",
                "Mini-map (JourneyMap, Xaero's)",
                "Visual enhancement (shaders)",
              ].map((mod, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm text-gray-300">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
            <div className="mb-4 flex items-center justify-center">
              <FaUsers className="mr-3 h-8 w-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                Join Our Community
              </h3>
            </div>
            <p className="mb-6 max-w-2xl text-gray-300">
              Connect with transit enthusiasts, share your builds, and
              collaborate on amazing projects. Our community is always growing
              and welcoming new members!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/J5bhVWTEm9"
                className="inline-flex items-center rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCommentAlt className="mr-2 h-5 w-5" />
                Join Discord
              </a>
              <a
                href="https://mapmc.shoghisimon.ca/"
                className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMap className="mr-2 h-5 w-5" />
                Dynmap
              </a>
              <a
                href="https://railmc.shoghisimon.ca/"
                className="inline-flex items-center rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-purple-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTrainSubway className="mr-2 h-5 w-5" />
                Track Map
              </a>
              <a
                href="https://reddit.com/r/transitdiagrams"
                className="inline-flex items-center rounded-xl bg-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="mr-2 h-5 w-5" />
                Visit Subreddit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-black/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Building the future of transportation, one block at a time.
            <br />© {new Date().getFullYear()} r/TransitDiagrams Minecraft
            Server.
            <br />
            Not affiliated with Mojang AB or Minecraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
