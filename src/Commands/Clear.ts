import Command from "@core/Contracts/Command"
import * as yup from "yup"

const command = Command({
  description: "Limpa o chat",
  permissions: ["MANAGE_GUILD"],
  validate: ({ arg }) =>
    yup
      .number()
      .integer()
      .min(1)
      .max(100)
      .required()
      .isValid(arg),
  help: ":x: Como usar: `!clear <quantidade_mensagens(min:1|max:100)>`",
  run: async ({ arg, deleteChannelMessages }) => {
    const userMessage = 1
    const limit = parseInt(arg, 10) + userMessage

    await deleteChannelMessages({ limit })
  },
})
export default command
