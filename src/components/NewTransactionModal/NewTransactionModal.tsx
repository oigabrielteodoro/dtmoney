import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./NewTransactionModal.styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormParams = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormParams>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormParams) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            required
            placeholder="Descrição"
            {...register("description")}
          />
          <input
            required
            type="number"
            placeholder="Preço"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
          <input required placeholder="Categoria" {...register("category")} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
