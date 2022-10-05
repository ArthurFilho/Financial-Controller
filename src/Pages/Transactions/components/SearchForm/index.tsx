import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContexts";

const searchFormSchema = z.object({
    query: z.string(), 
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm () {

    const { register, handleSubmit , formState: {isSubmitting}} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    const { fetchTransactions } = useContext(TransactionsContext)

  async function handleSearchTransaction(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
    <input 
    type="text" 
    placeholder="Busque por transações" 
    {...register('query')}
    />

    <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
    </button>
    </SearchFormContainer>
)
}