<template>
  <div id="top" class="pb-0">
    <NuxtRouteAnnouncer />
    <AppAnalytics />
    <NuxtPage />
    <div
      class="pointer-events-none fixed bottom-[2rem] right-[5.5rem] z-[89] hidden sm:flex"
      aria-hidden="true"
    >
      <span
        class="rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-bold text-text shadow-[4px_4px_0_0_var(--color-border)]"
      >
        Need help?
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ],
  style: [
    {
      id: 'flowise-chatbot-overrides',
      innerHTML: `
        flowise-chatbot::part(button) {
          background-color: #fecb4b !important;
          border: 2px solid #000000 !important;
          box-shadow: 6px 6px 0 0 #000000 !important;
          border-radius: 999px !important;
        }

        flowise-chatbot::part(chatwindow) {
          border: 2px solid #000000 !important;
          box-shadow: 8px 8px 0 0 #000000 !important;
          border-radius: 24px !important;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        flowise-chatbot::part(header) {
          background-color: #fecb4b !important;
          color: #000000 !important;
          border-radius: 22px 22px 0 0 !important;
          border-bottom: 2px solid #000000 !important;
          font-family: "Bricolage Grotesque", Inter, ui-sans-serif, system-ui, sans-serif !important;
          font-weight: 800 !important;
        }
      `,
    },
  ],
  script: [
    {
      id: 'flowise-chatbot',
      type: 'module',
      tagPosition: 'bodyClose',
      innerHTML: `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

        Chatbot.init({
          chatflowid: "50aa006e-bec4-46ee-a75f-f14d5f76cf7a",
          apiHost: "https://flowise-production-14f3.up.railway.app",
          theme: {
            button: {
              backgroundColor: "#fecb4b",
              right: 24,
              bottom: 24,
              size: 52,
              customIconSrc: "/frogbot-chat-icon.svg"
            },
            chatWindow: {
              title: "FrogBot",
              titleAvatarSrc: "/favicon_the_froggy_studio.svg",
              welcomeMessage: "Hey! What brings you to Froggy Studio today?",
              backgroundColor: "#ffffff",
              fontSize: 15,
              botMessage: {
                backgroundColor: "#ffffff",
                textColor: "#1a1a1a"
              },
              userMessage: {
                backgroundColor: "#0f6131",
                textColor: "#ffffff"
              },
              textInput: {
                placeholder: "Tell me what you're working on...",
                backgroundColor: "#ffffff",
                textColor: "#1a1a1a",
                sendButtonColor: "#fecb4b"
              }
            }
          }
        })
      `,
    },
  ],
})
</script>
