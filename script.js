// Site da Salles Personalizados - Sua mãe
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Formulário de contato
  const form = document.querySelector(".form")
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      // Coletar dados do formulário
      const formData = new FormData(this)
      const nome = formData.get("nome")
      const email = formData.get("email")
      const servico = formData.get("servico")
      const mensagem = formData.get("mensagem")

      // Criar mensagem para WhatsApp
      const whatsappMessage = `🌸 *Salles Personalizados* 🌸

Olá! Gostaria de solicitar um orçamento:

💕 *Nome:* ${nome}
📧 *E-mail:* ${email}
🎨 *Serviço:* ${servico}
💌 *Mensagem:* ${mensagem}

Aguardo retorno! ✨`

      // Abrir WhatsApp com a mensagem
      const whatsappURL = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappURL, "_blank")

      // Mostrar mensagem de sucesso
      alert("Redirecionando para o WhatsApp! 💕📱")

      // Limpar formulário
      this.reset()
    })
  }

  // Efeito de corações e flores flutuantes
  function createFloatingElement() {
    const elements = ["💕", "💖", "💗", "💝", "🌸", "🌺", "🌷", "✨", "💫", "⭐"]
    const element = document.createElement("div")
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)]
    element.style.position = "fixed"
    element.style.left = Math.random() * 100 + "vw"
    element.style.bottom = "-50px"
    element.style.fontSize = Math.random() * 1 + 1 + "rem"
    element.style.pointerEvents = "none"
    element.style.zIndex = "999"
    element.style.animation = "floatUp 5s linear forwards"
    element.style.opacity = "0.8"

    document.body.appendChild(element)

    setTimeout(() => {
      element.remove()
    }, 5000)
  }

  // Criar elementos flutuantes ocasionalmente
  setInterval(createFloatingElement, 2500)

  // Animações nos cards
  const cards = document.querySelectorAll(".service-card, .social-link")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })

  // Efeito especial no título
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    heroTitle.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  }
})

// Adicionar estilos CSS para animações
const style = document.createElement("style")
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
