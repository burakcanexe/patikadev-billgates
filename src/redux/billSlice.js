import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
    name: 'bill',
    initialState: {
        billMoney: 100000000000,
        products: [
            {
                id: '1',
                name: 'Big Mac',
                price: 2,
                img: 'https://neal.fun/spend/images/big-mac.jpg',
                buyying: 0
            },
            {
                id: '2',
                name: 'Flip Flops',
                price: 3,
                img: 'https://neal.fun/spend/images/flip-flops.jpg',
                buyying: 0
            },
            {
                id: '3',
                name: 'Coca-Cola Pack',
                price: 5,
                img: 'https://neal.fun/spend/images/coca-cola-pack.jpg',
                buyying: 0
            },
            {
                id: '4',
                name: 'Movie Ticket',
                price: 12,
                img: 'https://neal.fun/spend/images/movie-ticket.jpg',
                buyying: 0
            },
            {
                id: '5',
                name: 'Book',
                img: 'https://neal.fun/spend/images/book.jpg',
                buyying: 0
            },
            {
                id: '6',
                name: 'Lobster Dinner',
                price: 45,
                img: 'https://neal.fun/spend/images/lobster-dinner.jpg',
                buyying: 0
            },
            {
                id: '7',
                name: 'Video Game',
                price: 60,
                img: 'https://neal.fun/spend/images/video-game.jpg',
                buyying: 0
            },
            {
                id: '8',
                name: 'Amazon Echo',
                price: 99,
                img: 'https://neal.fun/spend/images/amazon-echo.jpg',
                buyying: 0
            },
            {
                id: '9',
                name: 'Year of Netflix',
                price: 100,
                img: 'https://neal.fun/spend/images/year-of-netflix.jpg',
                buyying: 0
            },
            {
                id: '10',
                name: 'Air Jordans',
                price: 125,
                img: 'https://neal.fun/spend/images/air-jordans.jpg',
                buyying: 0
            },
            {
                id: '11',
                name: 'Airpods',
                price: 199,
                img: 'https://neal.fun/spend/images/airpods.jpg',
                buyying: 0
            },
            {
                id: '12',
                name: 'Gaming Console',
                price: 299,
                img: 'https://neal.fun/spend/images/gaming-console.jpg',
                buyying: 0
            },
            {
                id: '13',
                name: 'Drone',
                price: 350,
                img: 'https://neal.fun/spend/images/drone.jpg',
                buyying: 0
            },
            {
                id: '14',
                name: 'Smartphone',
                price: 699,
                img: 'https://neal.fun/spend/images/smartphone.jpg',
                buyying: 0
            },
            {
                id: '15',
                name: 'Bike',
                price: 800,
                img: 'https://neal.fun/spend/images/bike.jpg',
                buyying: 0
            },
            {
                id: '16',
                name: 'Kitten',
                price: 1500,
                img: 'https://neal.fun/spend/images/kitten.jpg',
                buyying: 0
            },
            {
                id: '17',
                name: 'Puppy',
                price: 1500,
                img: 'https://neal.fun/spend/images/puppy.jpg',
                buyying: 0
            },
            {
                id: '18',
                name: 'Auto Rickshaw',
                price: 2300,
                img: 'https://neal.fun/spend/images/auto-rickshaw.jpg',
                buyying: 0
            },
            {
                id: '19',
                name: 'Horse',
                price: 2500,
                img: 'https://neal.fun/spend/images/horse.jpg',
                buyying: 0
            },
            {
                id: '20',
                name: 'Hot Tub',
                price: 6000,
                img: 'https://neal.fun/spend/images/hot-tub.jpg',
                buyying: 0
            },
            {
                id: '21',
                name: 'Tesla',
                price: 75000,
                img: 'https://neal.fun/spend/images/tesla.jpg',
                buyying: 0
            },
            {
                id: '22',
                name: 'Single Family Home',
                price: 300000,
                img: 'https://neal.fun/spend/images/single-family-home.jpg',
                buyying: 0
            },
            {
                id: '23',
                name: 'Formula 1 Car',
                price: 15000000,
                img: 'https://neal.fun/spend/images/formula-1-car.jpg',
                buyying: 0
            },
            {
                id: '24',
                name: 'Make a Movie',
                price: 100000000,
                img: 'https://neal.fun/spend/images/make-a-movie.jpg',
                buyying: 0
            },
            {
                id: '25',
                name: 'Boeing 747',
                price: 148000000,
                img: 'https://neal.fun/spend/images/boeing-747.jpg',
                buyying: 0
            },
            {
                id: '26',
                name: 'Skyscraper',
                price: 850000000,
                img: 'https://neal.fun/spend/images/skyscraper.jpg',
                buyying: 0
            },
            {
                id: '27',
                name: 'NBA Team',
                price: 2120000000,
                img: 'https://neal.fun/spend/images/nba-team.jpg',
                buyying: 0
            }
        ]
    },
    reducers: {
        moneyHesapla: (state, action) => {
            state.billMoney=100000000000
            state.products.map(product => {
                if (product.buyying>0) {
                    state.billMoney -= product.price*product.buyying
                }
            })
            if (state.billMoney<0) {
                state.billMoney=0
            }
        },
        change: (state, action) => {
            state.products.map(product => {
                if (product.id === action.payload.id) {
                    console.log(product.name + ' ---- ' + action.payload.adet);
                    product.buyying = action.payload.adet
                }
            })
        }
    }
})

export const { change, moneyHesapla } = billSlice.actions
export default billSlice.reducer