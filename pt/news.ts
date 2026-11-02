import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
  title: "Novidades",
  description:
    "O que há de novo no Jotoba: novos recursos, atualizações de dados e correções.",
  intro: "Novidades sobre o Jotoba, das mais recentes para as mais antigas.",
  error: {
    title: "Não foi possível carregar as novidades agora",
    text: "Tente de novo daqui a pouco.",
    retry: "Tentar de novo",
  },
  empty: {
    title: "Ainda não há novidades",
    text: "As novidades sobre o Jotoba vão aparecer aqui.",
  },
  new: "Nova",
} satisfies PartialDict<typeof en>;
