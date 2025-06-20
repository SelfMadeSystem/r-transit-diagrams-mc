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
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/minecraft-server-hero.png)", // Provide: Epic Minecraft landscape/builds
            filter: "blur(1px)",
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaTrainSubway className="w-12 h-12 text-emerald-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              r/TransitDiagrams
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-emerald-300 mb-8">
            Minecraft Server
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Build the future of transportation in Minecraft! Join{" "}
            <a
              href="https://discord.gg/J5bhVWTEm9"
              className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
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
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Server Address Card */}
          <div
            onClick={copyServerAddress}
            className="group bg-white/10 backdrop-blur-lg cursor-pointer rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <FaServer className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Server Address</h3>
            <div className="flex items-center gap-2">
              <code className="text-emerald-300 font-mono text-sm bg-black/30 px-3 py-1 rounded">
                {copiedAddress ? "Copied to clipboard!" : MC_ADDRESS}
              </code>
              <button
                onClick={copyServerAddress}
                className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                title="Copy to clipboard"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Version Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <FaCheckCircle className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Server Version</h3>
            <code className="text-emerald-300 font-mono text-sm bg-black/30 px-3 py-1 rounded">
              Forge 1.20.1
            </code>
          </div>

          {/* Discord Card */}
          <a
            href="https://discord.gg/J5bhVWTEm9"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <FaCommentAlt className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Discord Server</h3>
            <div className="inline-flex items-center text-emerald-300 group-hover:text-emerald-200 transition-colors">
              Join Community
              <FaExternalLinkAlt className="w-4 h-4 ml-2" />
            </div>
          </a>

          {/* Mods Card */}
          <a
            href="/mods.tar.gz"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white/10 group cursor-pointer backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <FaDownload className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Mod Pack</h3>
            <div className="inline-flex items-center bg-emerald-300 group-hover:bg-emerald-200 p-2 rounded-md transition-colors">
              Download Mods
              <FaExternalLinkAlt className="w-4 h-4 ml-2" />
            </div>
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-16 mx-auto flex flex-col md:flex-row w-full justify-center gap-8">
          {/* What We Build Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              <FaBuilding className="inline-block text-emerald-400 mr-3" />
              What We Build
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div
                  className="w-full h-48 aspect-square rounded-2xl bg-cover bg-center mb-4 border-4 border-emerald-400"
                  style={{
                    backgroundImage: "url(/minecraft-train-stations.png)",
                  }}
                ></div>
                <h3 className="text-xl font-bold text-white">Train Stations</h3>
              </div>

              <div className="text-center">
                <div
                  className="w-full h-48 aspect-square rounded-2xl bg-cover bg-center mb-4 border-4 border-emerald-400"
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
            <h2 className="text-3xl font-bold text-white px-8 mb-8">
              <FaMap className="inline-block text-emerald-400 mr-3" />
              Features
            </h2>
            <div className="backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaTrainSubway className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">
                    Transit-focused building themes
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUserFriends className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">
                    Collaborative community projects
                  </span>
                </li>
                <li className="flex items-start">
                  <TbNetwork className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">
                    Realistic transportation networks
                  </span>
                </li>
                <li className="flex items-start">
                  <MdSecurity className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">
                    Grief protection and fair play
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rules and Info Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Server Rules */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="w-8 h-8 text-emerald-400 mr-3" />
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
                  <FaCheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disallowed Mods */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <FaTimesCircle className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Disallowed Mods</h3>
            </div>
            <p className="text-gray-300 mb-4">
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
                  <FaTimesCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allowed Mods */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <FaCheckCircle className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Allowed Mods</h3>
            </div>
            <p className="text-gray-300 mb-4">
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
                  <FaCheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 inline-block">
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Join Our Community
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Connect with transit enthusiasts, share your builds, and
              collaborate on amazing projects. Our community is always growing
              and welcoming new members!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://discord.gg/J5bhVWTEm9"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCommentAlt className="w-5 h-5 mr-2" />
                Join Discord
              </a>
              <a
                href="https://reddit.com/r/transitdiagrams"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                Visit Subreddit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Building the future of transportation, one block at a time.
            <br />
            © {new Date().getFullYear()} r/TransitDiagrams Minecraft Server.
            <br />
            Not affiliated with Mojang AB or Minecraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
