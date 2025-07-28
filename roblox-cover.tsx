"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Users, Star, Trophy } from "lucide-react"

export default function RobloxCover() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header com logo estilo Roblox */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded transform rotate-12"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold">ROBLOX</h1>
                <p className="text-red-100">Powering Imagination</p>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full">
              <Play className="w-5 h-5 mr-2" />
              JOGAR AGORA
            </Button>
          </div>
        </div>

        {/* Imagem principal */}
        <div className="relative h-80 bg-gradient-to-b from-sky-400 to-green-400 overflow-hidden">
          <img src="/placeholder.svg?height=320&width=800" alt="Mundo Roblox" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Elementos flutuantes estilo Roblox */}
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
            ⭐ FEATURED
          </div>
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
            🔥 TRENDING
          </div>

          {/* Título do jogo */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">MEGA OBBY ADVENTURE</h2>
            <p className="text-xl drop-shadow-md">Explore mundos incríveis e desafie seus amigos!</p>
          </div>
        </div>

        {/* Stats do jogo */}
        <div className="p-6 bg-gray-50">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">1.2M</div>
              <div className="text-sm text-gray-600">Jogadores</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">4.8</div>
              <div className="text-sm text-gray-600">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">156</div>
              <div className="text-sm text-gray-600">Conquistas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Online</div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex space-x-4">
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg">
              <Play className="w-5 h-5 mr-2" />
              JOGAR
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 rounded-lg bg-transparent"
            >
              ❤️ FAVORITAR
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-2 border-purple-500 text-purple-500 hover:bg-purple-50 font-bold py-3 rounded-lg bg-transparent"
            >
              👥 SEGUIR
            </Button>
          </div>
        </div>

        {/* Footer com info adicional */}
        <div className="bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-400">Criado por:</span>
              <span className="ml-2 font-bold">MegaStudio Games</span>
            </div>
            <div>
              <span className="text-gray-400">Última atualização:</span>
              <span className="ml-2">Hoje</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-green-500 px-2 py-1 rounded text-xs">GRÁTIS</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-xs">MULTIPLAYER</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
