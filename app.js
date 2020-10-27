const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')


const dummyTransactions = [
    {
        id: 1,
        text: 'Flower',
        amount: -20
    },
    {
        id: 2,
        text: 'Xbox',
        amount: -100
    },
    {
        id: 3,
        text: 'Salary',
        amount: 500
    },
    {
        id: 4,
        text: 'Speakerss',
        amount: -200
    }
]


function AddTransaction(transaction){

const sign = transaction.amount > 0 ? '+': '-'


const listItem = document.createElement("li")

listItem.classList.add(transaction.amount > 0 ? 'plus' : 'minus')

listItem.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn"></button>`

list.appendChild(listItem)

}


function processArray(array){
    list.innerHTML = ''
    array.forEach(element => {
        AddTransaction(element)
    })

    updateValues()
}


processArray(dummyTransactions)


//update the balance, income and expense
function updateValues(){

    const amounts = dummyTransactions.map(ttransaction => transaction.amount)

    console.log(amounts)

}