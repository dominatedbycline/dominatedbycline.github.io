Vou procurar informações sobre como criar um carrossel 3D interativo com o Hugo e o template Archie!Perfeito! Encontrei várias opções de carrosséis 3D com CSS e JavaScript. Vou criar um exemplo adaptado para o teu projeto Hugo/Archie, mostrando screenshots das conversas com Claude de forma interativa e elegante.Pronto! Criei um **carrossel 3D interativo** que podes adaptar para o teu site Hugo/Archie! 🎭

## **O que tem:**

✨ **Carrossel 3D completo** com 6 cards (podes adicionar quantos quiseres)  
🎨 **Design elegante** com gradientes roxos que combina com tema criativo  
📱 **Totalmente responsivo** - funciona bem em mobile  
⌨️ **Controlos múltiplos**: botões, setas do teclado, e clique direto nos cards  
🔄 **Animações suaves** com transições CSS  

## **Como integrar no Hugo/Archie:**

O tema Archie permite adicionar CSS customizado através do parâmetro `customcss` na configuração:

1. **Guarda o HTML** como partial: `layouts/partials/claude-carousel.html`
2. **Adiciona no teu post** com: `{{ partial "claude-carousel.html" . }}`
3. **Customiza os cards** com as tuas screenshots reais (substitui o texto placeholder)

## **Para as screenshots reais:**

Podes substituir o conteúdo dos cards por:
- Imagens das conversas (adiciona `<img src="/images/screenshots/conversa-1.png">`)
- Ou manter texto descritivo como está
- Ou ambos!

O carrossel calcula automaticamente os ângulos e distâncias baseado no número de cards que tiveres. Adiciona ou remove cards conforme necessário - funciona com qualquer quantidade!

**Queres que ajuste algo específico?** Cores, tamanhos, número de cards, ou formato dos conteúdos? 🚀

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Claude Conversations Carousel</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow: hidden;
        }

        .carousel-wrapper {
            max-width: 1200px;
            width: 100%;
            text-align: center;
        }

        h1 {
            color: white;
            margin-bottom: 2rem;
            font-size: 2.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .subtitle {
            color: rgba(255,255,255,0.9);
            margin-bottom: 3rem;
            font-size: 1.1rem;
        }

        .scene {
            width: 100%;
            height: 500px;
            perspective: 1200px;
            position: relative;
            margin: 0 auto;
        }

        .carousel {
            width: 100%;
            height: 100%;
            position: absolute;
            transform-style: preserve-3d;
            transition: transform 1s ease-in-out;
        }

        .carousel-card {
            position: absolute;
            width: 450px;
            height: 380px;
            left: 50%;
            top: 50%;
            margin-left: -225px;
            margin-top: -190px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .carousel-card:hover {
            box-shadow: 0 25px 80px rgba(0,0,0,0.4);
            transform: scale(1.02);
        }

        .card-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .card-content {
            padding: 25px;
            text-align: left;
            height: 300px;
            overflow-y: auto;
            background: #fafafa;
        }

        .card-content h3 {
            color: #667eea;
            margin-bottom: 10px;
            font-size: 1rem;
        }

        .card-content p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
            font-size: 0.95rem;
        }

        .card-tag {
            display: inline-block;
            background: #764ba2;
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
            margin-right: 8px;
            margin-top: 8px;
        }

        .controls {
            margin-top: 3rem;
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }

        button {
            background: white;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            font-weight: bold;
            color: #667eea;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: #f8f8f8;
        }

        button:active {
            transform: translateY(0);
        }

        .indicator {
            color: white;
            font-size: 1.1rem;
            font-weight: bold;
            min-width: 100px;
        }

        @media (max-width: 768px) {
            .scene {
                height: 450px;
            }

            .carousel-card {
                width: 350px;
                height: 320px;
                margin-left: -175px;
                margin-top: -160px;
            }

            .card-content {
                height: 240px;
                padding: 15px;
            }

            h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="carousel-wrapper">
        <h1>🎭 Character Development Journey</h1>
        <p class="subtitle">Screenshots das conversas com Claude durante a criação dos personagens</p>

        <div class="scene">
            <div class="carousel" id="carousel">
                <!-- Card 1 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 1: Conceito Inicial</div>
                    <div class="card-content">
                        <h3>Brainstorming dos Personagens</h3>
                        <p>Discussão sobre os arquétipos base e como criar personagens que se conectam de forma orgânica numa festa de Natal em 1926.</p>
                        <p><strong>Claude sugeriu:</strong> Começar com as motivações e depois construir as relações secretas.</p>
                        <div>
                            <span class="card-tag">personagens</span>
                            <span class="card-tag">conceito</span>
                            <span class="card-tag">1926</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 2: Relações & Segredos</div>
                    <div class="card-content">
                        <h3>Teia de Conexões</h3>
                        <p>Criação das relações secretas entre personagens. Cada um tinha que ter pelo menos 3 conexões com outros.</p>
                        <p><strong>Desafio:</strong> Manter coerência entre todas as backstories sem contradições.</p>
                        <div>
                            <span class="card-tag">relações</span>
                            <span class="card-tag">plot-threads</span>
                            <span class="card-tag">secrets</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 3: Revisão de Consistência</div>
                    <div class="card-content">
                        <h3>Análise Cruzada</h3>
                        <p>Claude analisou todas as 11 backstories simultaneamente para identificar inconsistências temporais e lógicas.</p>
                        <p><strong>Resultado:</strong> Encontrou 7 conflitos que foram resolvidos antes da produção final.</p>
                        <div>
                            <span class="card-tag">análise</span>
                            <span class="card-tag">debugging</span>
                            <span class="card-tag">consistência</span>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 4: Objetivos Secretos</div>
                    <div class="card-content">
                        <h3>Motivações Ocultas</h3>
                        <p>Cada personagem precisava de objetivos que criassem tensão e drama durante o jogo.</p>
                        <p><strong>Claude ajudou:</strong> Balancear objetivos competitivos e colaborativos para manter todos engajados.</p>
                        <div>
                            <span class="card-tag">objetivos</span>
                            <span class="card-tag">gameplay</span>
                            <span class="card-tag">drama</span>
                        </div>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 5: Iterações Finais</div>
                    <div class="card-content">
                        <h3>Refinamento</h3>
                        <p>Múltiplas rondas de feedback e ajustes. Algumas personagens mudaram completamente de rumo.</p>
                        <p><strong>Aprendizagem:</strong> AI como colaborador criativo funciona melhor com iterações rápidas.</p>
                        <div>
                            <span class="card-tag">iteração</span>
                            <span class="card-tag">refinamento</span>
                            <span class="card-tag">final</span>
                        </div>
                    </div>
                </div>

                <!-- Card 6 -->
                <div class="carousel-card">
                    <div class="card-header">Fase 6: Character Sheets</div>
                    <div class="card-content">
                        <h3>Documentação Final</h3>
                        <p>Transformar todas as conversas em character sheets estruturadas para cada jogador.</p>
                        <p><strong>Formato:</strong> Backstory + relações + objetivos + informações secretas.</p>
                        <div>
                            <span class="card-tag">documentação</span>
                            <span class="card-tag">estrutura</span>
                            <span class="card-tag">game-ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="controls">
            <button id="prev">← Anterior</button>
            <div class="indicator">
                <span id="current">1</span> / <span id="total">6</span>
            </div>
            <button id="next">Próximo →</button>
        </div>
    </div>

    <script>
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.carousel-card');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const currentSpan = document.getElementById('current');
        const totalSpan = document.getElementById('total');
        
        const totalCards = cards.length;
        let currentRotation = 0;
        let currentIndex = 0;
        
        // Calcular ângulo e distância
        const theta = 360 / totalCards;
        const radius = Math.round((450 / 2) / Math.tan(Math.PI / totalCards));
        
        // Posicionar os cards inicialmente
        cards.forEach((card, i) => {
            const angle = theta * i;
            card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
        
        totalSpan.textContent = totalCards;
        
        function rotateCarousel(direction) {
            if (direction === 'next') {
                currentRotation -= theta;
                currentIndex = (currentIndex + 1) % totalCards;
            } else {
                currentRotation += theta;
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            }
            
            carousel.style.transform = `rotateY(${currentRotation}deg)`;
            currentSpan.textContent = currentIndex + 1;
        }
        
        nextBtn.addEventListener('click', () => rotateCarousel('next'));
        prevBtn.addEventListener('click', () => rotateCarousel('prev'));
        
        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') rotateCarousel('prev');
            if (e.key === 'ArrowRight') rotateCarousel('next');
        });
        
        // Clique nos cards
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const diff = index - currentIndex;
                if (diff !== 0) {
                    const direction = diff > 0 ? 'next' : 'prev';
                    for (let i = 0; i < Math.abs(diff); i++) {
                        setTimeout(() => rotateCarousel(direction), i * 200);
                    }
                }
            });
        });
    </script>
</body>
</html>