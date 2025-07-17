import TransactionTable from "../components/TransactionsTable";

const transactionData= [
    {
        id: 1,
        product: "Mate Caseiro",
        productId: 1,
        type: "IN",
        quantity: 2,
        date: "15/07/20",
        action: "string",
    }
]

export default function TransactionsPage (){
    return(
        <TransactionTable transactions={transactionData} />
    );
}