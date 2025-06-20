import { useState } from 'react';
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
  FaGamepad
} from 'react-icons/fa';

function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyServerAddress = async () => {
    try {
      await navigator.clipboard.writeText('mc.shoghisimon.ca');
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
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
            backgroundImage: 'url(/minecraft-server-hero.jpg)', // Provide: Epic Minecraft landscape/builds
            filter: 'blur(1px)'
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaGamepad className="w-12 h-12 text-emerald-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              r/TransitDiagrams
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-emerald-300 mb-8">
            Minecraft Server
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Welcome to the unofficial Minecraft server for the{' '}
            <a
              href="https://reddit.com/r/transitdiagrams"
              className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              r/transitdiagrams
            </a>{' '}
            community! Join us for a unique experience where we build and explore transit-themed worlds.
          </p>
        </div>
      </div>

      {/* Server Info Cards */}
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Server Address Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <FaServer className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Server Address</h3>
            <div className="flex items-center gap-2">
              <code className="text-emerald-300 font-mono text-sm bg-black/30 px-3 py-1 rounded">
                mc.shoghisimon.ca
              </code>
              <button
                onClick={copyServerAddress}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                title="Copy to clipboard"
              >
                <FaCopy className="w-4 h-4" />
              </button>
            </div>
            {copiedAddress && (
              <p className="text-emerald-400 text-sm mt-2 animate-fade-in">
                Copied to clipboard!
              </p>
            )}
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <FaCommentAlt className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Discord Server</h3>
            <a
              href="https://discord.gg/J5bhVWTEm9"
              className="inline-flex items-center text-emerald-300 hover:text-emerald-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
              <FaExternalLinkAlt className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mods Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <FaDownload className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Mod Pack</h3>
            <a
              href="/mods.tar.gz"
              className="inline-flex items-center text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              Download Mods
              <FaExternalLinkAlt className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div 
              className="w-full h-48 rounded-2xl bg-cover bg-center mb-6 border-4 border-emerald-400/30"
              style={{ backgroundImage: 'url(/minecraft-transit-builds.jpg)' }} // Provide: Transit-themed Minecraft builds
            ></div>
            <h3 className="text-2xl font-bold text-white mb-4">Transit Builds</h3>
            <p className="text-gray-300">
              Create amazing transit systems, from subway networks to bus rapid transit and everything in between.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-full h-48 rounded-2xl bg-cover bg-center mb-6 border-4 border-emerald-400/30"
              style={{ backgroundImage: 'url(/minecraft-community-builds.jpg)' }} // Provide: Community building together
            ></div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Builds</h3>
            <p className="text-gray-300">
              Collaborate with fellow transit enthusiasts to build massive, interconnected transportation networks.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-full h-48 rounded-2xl bg-cover bg-center mb-6 border-4 border-emerald-400/30"
              style={{ backgroundImage: 'url(/minecraft-creative-world.jpg)' }} // Provide: Creative mode builds
            ></div>
            <h3 className="text-2xl font-bold text-white mb-4">Creative Freedom</h3>
            <p className="text-gray-300">
              Express your creativity with unlimited resources and space to build your dream transit projects.
            </p>
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
                "Have fun and be creative!"
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
              Mods that provide unfair advantages are not allowed. We want to ensure a fair experience for all players.
            </p>
            <div className="space-y-2">
              {[
                "X-Ray/ESP mods",
                "Auto-fishing/mining",
                "Kill Aura/Aimbot",
                "Speed hacks",
                "Fly mods",
                "Auto-clickers",
                "Baritone pathfinding"
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
              All mods in our mod pack are allowed, plus these additional categories:
            </p>
            <div className="space-y-2">
              {[
                "Optimization mods (Sodium, Lithium)",
                "Zoom mods (OkZoomer)",
                "Replay mods",
                "World download mods",
                "Mini-map mods (JourneyMap)",
                "Visual enhancement mods",
                "Shader packs"
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
              <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Connect with transit enthusiasts, share your builds, and collaborate on amazing projects. 
              Our community is always growing and welcoming new members!
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
            &copy; 2024 r/TransitDiagrams Minecraft Server. Not affiliated with Mojang Studios.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;