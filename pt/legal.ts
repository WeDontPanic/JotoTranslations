import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
  englishOnly: "Este texto só está disponível em inglês.",
  imprint: {
    title: "Informações legais",
    description: "Informações legais sobre o Jotoba.",
    contact: "Dados de contato",
    email: "E-mail: <link>{{email}}</link>",
  },
  privacy: {
    title: "Política de privacidade",
    heading: "Política de privacidade do Jotoba.de",
    description:
      "Quais dados o Jotoba armazena, por quê, e como você pode alterá-los ou apagá-los.",
    lastUpdated: "Última atualização: {{date}}",
  },
  terms: {
    title: "Termos de uso",
    heading: "Termos de uso",
    description: "Os termos de uso do dicionário Jotoba e dos seus dados.",
    lastUpdated: "Última atualização: {{date}}",
  },
} satisfies PartialDict<typeof en>;
